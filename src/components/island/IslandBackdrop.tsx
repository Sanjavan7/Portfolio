import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import type { SpyId } from "./chapters";
import {
  CLOUDS,
  COIN_RING,
  ISLETS,
  MODEL_URLS,
  PALETTE,
  PITCH,
  PLACEMENTS,
  SHOTS,
  TILES,
  WATER,
  WINDMILL_BLADES,
  type Vec3,
} from "./layout";

type Props = { chapter: SpyId; running: boolean; reducedMotion: boolean };

MODEL_URLS.forEach((url) => useLoader.preload(GLTFLoader, url));

const hasWebGL = () => {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
};

// ── Building blocks ────────────────────────────────────────────────────────

const Model = ({ url, position, rotationY = 0, scale = 1 }: { url: string; position: Vec3; rotationY?: number; scale?: number }) => {
  const gltf = useLoader(GLTFLoader, url);
  const object = useMemo(() => {
    const clone = gltf.scene.clone(true);
    clone.traverse((o) => {
      if ((o as THREE.Mesh).isMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
      }
    });
    return clone;
  }, [gltf]);
  return <primitive object={object} position={position} rotation={[0, rotationY, 0]} scale={scale} />;
};

const capGeometry = new RoundedBoxGeometry(2.04, 0.36, 2.04, 3, 0.12);

const Terrain = () => {
  const bodies = useMemo(
    () => TILES.map((t) => new RoundedBoxGeometry(1.98, t.top - 0.2 - t.bottom, 1.98, 3, 0.16)),
    [],
  );
  return (
    <group>
      {TILES.map((t, i) => (
        <group key={`${t.x},${t.z}`} position={[t.x, 0, t.z]}>
          <mesh geometry={bodies[i]} position={[0, (t.bottom + t.top - 0.2) / 2, 0]} castShadow receiveShadow>
            <meshStandardMaterial color={PALETTE.cliff} roughness={1} />
          </mesh>
          <mesh geometry={capGeometry} position={[0, t.top - 0.18, 0]} castShadow receiveShadow>
            <meshStandardMaterial color={PALETTE.grass} roughness={0.9} />
          </mesh>
        </group>
      ))}
    </group>
  );
};

const Windmill = ({ animate }: { animate: boolean }) => {
  const gltf = useLoader(GLTFLoader, "/models/town/windmill.glb");
  const blades = useMemo(() => gltf.scene.clone(true), [gltf]);
  const ref = useRef<THREE.Object3D>(null);
  useFrame((_, dt) => {
    if (animate && ref.current) ref.current.rotation.x += dt * 0.7;
  });
  return (
    <group position={WINDMILL_BLADES} rotation={[0, -Math.PI / 2, 0]}>
      <primitive ref={ref} object={blades} />
    </group>
  );
};

const Coins = ({ animate }: { animate: boolean }) => {
  const gltf = useLoader(GLTFLoader, "/models/platformer/coin-gold.glb");
  const coins = useMemo(() => Array.from({ length: COIN_RING.count }, () => gltf.scene.clone(true)), [gltf]);
  const ring = useRef<THREE.Group>(null);
  useFrame(({ clock }, dt) => {
    if (!animate || !ring.current) return;
    ring.current.rotation.y += dt * 0.25;
    ring.current.children.forEach((c, i) => {
      c.rotation.y += dt * 2;
      c.position.y = Math.sin(clock.elapsedTime * 1.4 + i) * 0.1;
    });
  });
  return (
    <group ref={ring} position={COIN_RING.center}>
      {coins.map((coin, i) => {
        const a = (i / coins.length) * Math.PI * 2;
        return (
          <primitive key={i} object={coin} position={[Math.cos(a) * COIN_RING.radius, 0, Math.sin(a) * COIN_RING.radius]} />
        );
      })}
    </group>
  );
};

const useWaterTexture = () =>
  useMemo(() => {
    const c = document.createElement("canvas");
    c.width = 32;
    c.height = 128;
    const ctx = c.getContext("2d")!;
    ctx.fillStyle = PALETTE.water;
    ctx.fillRect(0, 0, 32, 128);
    ctx.fillStyle = "rgba(255,255,255,0.55)";
    for (let y = 0; y < 128; y += 32) ctx.fillRect(4 + (y % 3) * 6, y, 6, 14);
    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, []);

const Water = ({ animate }: { animate: boolean }) => {
  const tex = useWaterTexture();
  useFrame((_, dt) => {
    if (animate) tex.offset.y += dt * 0.8;
  });
  return (
    <group>
      {WATER.map((w, i) => (
        <mesh key={i} position={w.position} receiveShadow>
          <boxGeometry args={w.size} />
          <meshStandardMaterial map={tex} transparent opacity={0.92} roughness={0.3} emissive="#7CC4E0" emissiveIntensity={0.15} />
        </mesh>
      ))}
    </group>
  );
};

const Pitch = () => {
  const [cx, cy, cz] = PITCH.center;
  const [w, d] = PITCH.size;
  const y = cy + 0.02;
  const line = (pos: Vec3, size: Vec3, key: string) => (
    <mesh key={key} position={pos} receiveShadow>
      <boxGeometry args={size} />
      <meshStandardMaterial color={PALETTE.line} roughness={0.8} />
    </mesh>
  );
  const goal = (x: number, key: string) => (
    <group key={key}>
      {line([x, y + 0.18, cz - 0.32], [0.04, 0.36, 0.04], `${key}a`)}
      {line([x, y + 0.18, cz + 0.32], [0.04, 0.36, 0.04], `${key}b`)}
      {line([x, y + 0.36, cz], [0.04, 0.04, 0.68], `${key}c`)}
    </group>
  );
  return (
    <group>
      <mesh position={[cx, y, cz]} receiveShadow>
        <boxGeometry args={[w, 0.03, d]} />
        <meshStandardMaterial color={PALETTE.pitch} roughness={0.95} />
      </mesh>
      {line([cx, y + 0.02, cz - d / 2 + 0.05], [w - 0.1, 0.01, 0.04], "top")}
      {line([cx, y + 0.02, cz + d / 2 - 0.05], [w - 0.1, 0.01, 0.04], "bottom")}
      {line([cx - w / 2 + 0.05, y + 0.02, cz], [0.04, 0.01, d - 0.1], "left")}
      {line([cx + w / 2 - 0.05, y + 0.02, cz], [0.04, 0.01, d - 0.1], "right")}
      {line([cx, y + 0.02, cz], [0.04, 0.01, d - 0.1], "half")}
      <mesh position={[cx, y + 0.025, cz]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.26, 0.3, 32]} />
        <meshStandardMaterial color={PALETTE.line} />
      </mesh>
      {goal(cx - w / 2 + 0.08, "g1")}
      {goal(cx + w / 2 - 0.08, "g2")}
      <mesh position={[cx + 0.35, y + 0.08, cz + 0.1]} castShadow>
        <sphereGeometry args={[0.07, 16, 12]} />
        <meshStandardMaterial color="#ffffff" roughness={0.5} />
      </mesh>
    </group>
  );
};

const Islets = ({ animate }: { animate: boolean }) => {
  const refs = useRef<(THREE.Group | null)[]>([]);
  useFrame(({ clock }) => {
    if (!animate) return;
    refs.current.forEach((g, i) => {
      if (g) g.position.y = ISLETS[i].position[1] + Math.sin(clock.elapsedTime * 0.5 + i * 1.7) * 0.18;
    });
  });
  return (
    <group>
      {ISLETS.map((islet, i) => {
        const s = islet.size;
        return (
          <group key={i} ref={(g) => (refs.current[i] = g)} position={islet.position}>
            <mesh position={[0, -s * 0.6, 0]} castShadow>
              <boxGeometry args={[s * 0.96, s * 1.2, s * 0.96]} />
              <meshStandardMaterial color={PALETTE.cliff} roughness={1} />
            </mesh>
            <mesh position={[0, -0.09 * s, 0]} castShadow receiveShadow>
              <boxGeometry args={[s * 1.02, s * 0.2, s * 1.02]} />
              <meshStandardMaterial color={PALETTE.grass} roughness={0.9} />
            </mesh>
            {islet.tree && <Model url={islet.tree} position={[0, 0, 0]} scale={s * 0.7} />}
          </group>
        );
      })}
    </group>
  );
};

const PUFFS: [number, number, number, number][] = [
  [0, 0, 0, 1.6],
  [1.5, -0.3, 0.3, 1.2],
  [-1.5, -0.35, -0.2, 1.15],
  [0.6, 0.55, -0.5, 1.1],
  [-0.7, 0.4, 0.6, 1.0],
];

const Clouds = ({ animate }: { animate: boolean }) => {
  const refs = useRef<(THREE.Group | null)[]>([]);
  useFrame(({ clock }) => {
    if (!animate) return;
    refs.current.forEach((g, i) => {
      if (g) g.position.x = CLOUDS[i].position[0] + Math.sin(clock.elapsedTime * 0.06 + i * 2.1) * 1.4;
    });
  });
  return (
    <group>
      {CLOUDS.map((cloud, i) => (
        <group key={i} ref={(g) => (refs.current[i] = g)} position={cloud.position} scale={cloud.scale}>
          {PUFFS.map(([x, y, z, r], j) => (
            <mesh key={j} position={[x, y, z]}>
              <sphereGeometry args={[r, 24, 16]} />
              <meshStandardMaterial color={PALETTE.cloud} roughness={1} />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
};

// ── Camera: glides to each chapter's shot and nudges the island beside the UI ──

const CameraRig = ({ chapter, reducedMotion }: { chapter: SpyId; reducedMotion: boolean }) => {
  const { camera, size } = useThree();
  const pos = useRef(new THREE.Vector3(...SHOTS.hero.position));
  const target = useRef(new THREE.Vector3(...SHOTS.hero.target));
  const shift = useRef({ x: 0, y: 0 });
  const desired = useMemo(() => new THREE.Vector3(), []);
  const desiredTarget = useMemo(() => new THREE.Vector3(), []);

  useFrame(({ clock }, dt) => {
    const shot = SHOTS[chapter];
    const wide = size.width >= 768 && size.width > size.height;
    desiredTarget.set(...shot.target);
    desired.set(...shot.position);
    // portrait screens see less side-to-side, so back the camera off a little
    if (!wide) desired.sub(desiredTarget).multiplyScalar(1.3).add(desiredTarget);
    if (chapter === "hero" && !reducedMotion) {
      // slow sway around the island while the hero is on screen
      const a = Math.sin(clock.elapsedTime * 0.12) * 0.12;
      desired.sub(desiredTarget).applyAxisAngle(THREE.Object3D.DEFAULT_UP, a).add(desiredTarget);
    }
    const k = reducedMotion ? 1 : 1 - Math.exp(-2.2 * Math.min(dt, 0.1));
    pos.current.lerp(desired, k);
    target.current.lerp(desiredTarget, k);

    shift.current.x += ((wide ? shot.shiftWide : 0) - shift.current.x) * k;
    shift.current.y += ((wide ? 0 : shot.shiftTall) - shift.current.y) * k;

    const cam = camera as THREE.PerspectiveCamera;
    cam.position.copy(pos.current);
    cam.lookAt(target.current);
    cam.setViewOffset(size.width, size.height, shift.current.x * size.width, shift.current.y * size.height, size.width, size.height);
    cam.updateProjectionMatrix();
  });
  return null;
};

const FrameloopControl = ({ running }: { running: boolean }) => {
  const setFrameloop = useThree((s) => s.setFrameloop);
  useEffect(() => setFrameloop(running ? "always" : "never"), [running, setFrameloop]);
  return null;
};

const Island = ({ reducedMotion }: { reducedMotion: boolean }) => {
  const group = useRef<THREE.Group>(null);
  const animate = !reducedMotion;
  useFrame(({ clock }) => {
    if (animate && group.current) group.current.position.y = Math.sin(clock.elapsedTime * 0.4) * 0.06;
  });
  return (
    <group ref={group}>
      <Terrain />
      {PLACEMENTS.map((p, i) => (
        <Model key={i} {...p} />
      ))}
      <Windmill animate={animate} />
      <Coins animate={animate} />
      <Water animate={animate} />
      <Pitch />
    </group>
  );
};

const IslandBackdrop = ({ chapter, running, reducedMotion }: Props) => {
  const supported = useMemo(hasWebGL, []);
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" style={{ background: PALETTE.sky }} aria-hidden="true">
      {supported ? (
        <Canvas
          shadows
          flat
          dpr={[1, 1.75]}
          camera={{ fov: 32, near: 0.5, far: 150, position: SHOTS.hero.position }}
          gl={{ antialias: true, powerPreference: "high-performance" }}
        >
          <color attach="background" args={[PALETTE.sky]} />
          <fog attach="fog" args={[PALETTE.sky, 38, 85]} />
          <ambientLight intensity={0.55} />
          <hemisphereLight args={["#EAF5FF", "#7E9A6C", 0.7]} />
          <directionalLight
            position={[10, 18, 8]}
            intensity={1.5}
            castShadow
            shadow-mapSize={[2048, 2048]}
            shadow-camera-left={-14}
            shadow-camera-right={14}
            shadow-camera-top={14}
            shadow-camera-bottom={-14}
            shadow-camera-near={1}
            shadow-camera-far={60}
            shadow-bias={-0.0004}
            shadow-normalBias={0.03}
          />
          <FrameloopControl running={running} />
          <CameraRig chapter={chapter} reducedMotion={reducedMotion} />
          <Suspense fallback={null}>
            <Island reducedMotion={reducedMotion} />
            <Islets animate={!reducedMotion} />
          </Suspense>
          <Clouds animate={!reducedMotion} />
        </Canvas>
      ) : (
        <img src="/intro-poster.jpg" alt="" className="w-full h-full object-cover" />
      )}
    </div>
  );
};

export default IslandBackdrop;
