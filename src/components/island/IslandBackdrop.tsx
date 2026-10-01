import { Suspense, useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { SoftShadows } from "@react-three/drei";
import { EffectComposer, HueSaturation, N8AO, SMAA, TiltShift2, ToneMapping } from "@react-three/postprocessing";
import { ToneMappingMode } from "postprocessing";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import type { SpyId } from "./chapters";
import {
  BUSH,
  CLOUDS,
  COIN_RING,
  FOAM,
  ISLETS,
  MODEL_URLS,
  PALETTE,
  PITCH,
  PLACEMENTS,
  RECOLOR,
  SCATTER,
  SHOTS,
  TILES,
  WATER,
  WINDMILL_BLADES,
  hash,
  type Placement,
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

const UP = new THREE.Vector3(0, 1, 0);

// ── Models ─────────────────────────────────────────────────────────────────

const recolor = (root: THREE.Object3D) =>
  root.traverse((o) => {
    const mat = (o as THREE.Mesh).material as THREE.MeshStandardMaterial | undefined;
    if (mat && !mat.userData.recolored && RECOLOR[mat.name]) {
      mat.color.set(RECOLOR[mat.name]);
      mat.userData.recolored = true;
    }
  });

const useModel = (url: string) => {
  const gltf = useLoader(GLTFLoader, url);
  useMemo(() => recolor(gltf.scene), [gltf]);
  return gltf;
};

type Part = { geometry: THREE.BufferGeometry; material: THREE.Material; matrix: THREE.Matrix4 };

const PartInstances = ({ part, matrices }: { part: Part; matrices: THREE.Matrix4[] }) => {
  const ref = useRef<THREE.InstancedMesh>(null);
  useLayoutEffect(() => {
    const im = ref.current;
    if (!im) return;
    const m = new THREE.Matrix4();
    matrices.forEach((base, i) => im.setMatrixAt(i, m.multiplyMatrices(base, part.matrix)));
    im.instanceMatrix.needsUpdate = true;
    im.computeBoundingSphere();
  }, [matrices, part]);
  return <instancedMesh ref={ref} args={[part.geometry, part.material, matrices.length]} castShadow receiveShadow />;
};

// Every copy of a model is drawn in one instanced call per mesh, so hundreds of
// props cost a handful of draw calls.
const InstancedModel = ({ url, items }: { url: string; items: Placement[] }) => {
  const gltf = useModel(url);
  const parts = useMemo(() => {
    gltf.scene.updateMatrixWorld(true);
    const list: Part[] = [];
    gltf.scene.traverse((o) => {
      const mesh = o as THREE.Mesh;
      if (mesh.isMesh) list.push({ geometry: mesh.geometry, material: mesh.material as THREE.Material, matrix: mesh.matrixWorld.clone() });
    });
    return list;
  }, [gltf]);
  const matrices = useMemo(
    () =>
      items.map((it) =>
        new THREE.Matrix4().compose(
          new THREE.Vector3(...it.position),
          new THREE.Quaternion().setFromAxisAngle(UP, it.rotationY ?? 0),
          new THREE.Vector3().setScalar(it.scale ?? 1),
        ),
      ),
    [items],
  );
  return (
    <>
      {parts.map((p, i) => (
        <PartInstances key={i} part={p} matrices={matrices} />
      ))}
    </>
  );
};

// Soft clay bushes (a few merged spheres), tinted per instance.
const bushGeometry = mergeGeometries(
  [[0, 0.16, 0, 0.2], [0.17, 0.11, 0.06, 0.14], [-0.15, 0.1, -0.05, 0.13], [0.03, 0.12, -0.16, 0.12]].map(([x, y, z, r]) =>
    new THREE.SphereGeometry(r, 16, 12).translate(x, y, z),
  ),
);
const BUSH_COLORS = ["#6FA54A", "#7DB356", "#5E9445", "#88BD5C"];

const ClayBushes = ({ items }: { items: Placement[] }) => {
  const ref = useRef<THREE.InstancedMesh>(null);
  useLayoutEffect(() => {
    const im = ref.current;
    if (!im) return;
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const c = new THREE.Color();
    items.forEach((it, i) => {
      q.setFromAxisAngle(UP, it.rotationY ?? 0);
      im.setMatrixAt(i, m.compose(new THREE.Vector3(...it.position), q, new THREE.Vector3().setScalar(it.scale ?? 1)));
      im.setColorAt(i, c.set(BUSH_COLORS[i % BUSH_COLORS.length]));
    });
    im.instanceMatrix.needsUpdate = true;
    if (im.instanceColor) im.instanceColor.needsUpdate = true;
    im.computeBoundingSphere();
  }, [items]);
  return (
    <instancedMesh ref={ref} args={[bushGeometry, undefined, items.length]} castShadow receiveShadow>
      <meshStandardMaterial roughness={0.95} />
    </instancedMesh>
  );
};

const StaticModels = () => {
  const { groups, bushes } = useMemo(() => {
    const byUrl = new Map<string, Placement[]>();
    for (const p of [...PLACEMENTS, ...SCATTER]) {
      if (p.url !== BUSH) byUrl.set(p.url, [...(byUrl.get(p.url) ?? []), p]);
    }
    return { groups: [...byUrl.entries()], bushes: SCATTER.filter((p) => p.url === BUSH) };
  }, []);
  return (
    <>
      {groups.map(([url, items]) => (
        <InstancedModel key={url} url={url} items={items} />
      ))}
      <ClayBushes items={bushes} />
    </>
  );
};

// Single, independently animated copy (windmill blades, coins, islet trees).
const Model = ({ url, position = [0, 0, 0], scale = 1 }: { url: string; position?: Vec3; scale?: number }) => {
  const gltf = useModel(url);
  const object = useMemo(() => {
    const clone = gltf.scene.clone(true);
    clone.traverse((o) => {
      if ((o as THREE.Mesh).isMesh) o.castShadow = o.receiveShadow = true;
    });
    return clone;
  }, [gltf]);
  return <primitive object={object} position={position} scale={scale} />;
};

// ── Terrain: grooved cliff columns with a light-to-dark gradient, grass caps on top ──

const paint = (g: THREE.BufferGeometry, colorAt: (y: number, ny: number) => THREE.Color) => {
  const pos = g.attributes.position;
  const nor = g.attributes.normal;
  const colors = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    const c = colorAt(pos.getY(i), nor.getY(i));
    colors.set([c.r, c.g, c.b], i * 3);
  }
  g.setAttribute("color", new THREE.BufferAttribute(colors, 3));
};

const buildTerrain = () => {
  const dark = new THREE.Color(PALETTE.cliffDark);
  const light = new THREE.Color(PALETTE.cliffLight);
  const top = new THREE.Color(PALETTE.grassTop);
  const side = new THREE.Color(PALETTE.grassSide);
  const tmp = new THREE.Color();
  const cliffs: THREE.BufferGeometry[] = [];
  const caps: THREE.BufferGeometry[] = [];
  for (const t of TILES) {
    for (const [dx, dz] of [[-0.5, -0.5], [0.5, -0.5], [-0.5, 0.5], [0.5, 0.5]]) {
      const bottom = t.bottom - hash(t.x * 3 + dx, t.z * 3 + dz) * 1.1;
      const topY = t.top - 0.25;
      const g = new RoundedBoxGeometry(0.985, topY - bottom, 0.985, 2, 0.12);
      g.translate(t.x + dx, (topY + bottom) / 2, t.z + dz);
      paint(g, (y) => tmp.copy(dark).lerp(light, THREE.MathUtils.smoothstep(y, bottom, topY + 0.6)));
      cliffs.push(g);
    }
    const tint = 0.96 + hash(t.z, t.x) * 0.08;
    const cap = new RoundedBoxGeometry(2.04, 0.4, 2.04, 3, 0.14);
    cap.translate(t.x, t.top - 0.2, t.z);
    paint(cap, (_, ny) => tmp.copy(ny > 0.6 ? top : side).multiplyScalar(tint));
    caps.push(cap);
  }
  return { cliff: mergeGeometries(cliffs), cap: mergeGeometries(caps) };
};

const Terrain = () => {
  const { cliff, cap } = useMemo(buildTerrain, []);
  return (
    <group>
      <mesh geometry={cliff} castShadow receiveShadow>
        <meshStandardMaterial vertexColors roughness={1} />
      </mesh>
      <mesh geometry={cap} castShadow receiveShadow>
        <meshStandardMaterial vertexColors roughness={0.95} />
      </mesh>
    </group>
  );
};

// ── Animated pieces ─────────────────────────────────────────────────────────

const Windmill = ({ animate }: { animate: boolean }) => {
  const gltf = useModel("/models/town/windmill.glb");
  const blades = useMemo(() => gltf.scene.clone(true), [gltf]);
  const ref = useRef<THREE.Object3D>(null);
  useFrame((_, dt) => {
    if (animate && ref.current) ref.current.rotation.x += dt * 0.6;
  });
  return (
    <group position={WINDMILL_BLADES.position} rotation={[0, -Math.PI / 2, 0]} scale={WINDMILL_BLADES.scale}>
      <primitive ref={ref} object={blades} />
    </group>
  );
};

const Coins = ({ animate }: { animate: boolean }) => {
  const gltf = useModel("/models/platformer/coin-gold.glb");
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
        return <primitive key={i} object={coin} position={[Math.cos(a) * COIN_RING.radius, 0, Math.sin(a) * COIN_RING.radius]} />;
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
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    for (let y = 0; y < 128; y += 32) ctx.fillRect(4 + (y % 3) * 6, y, 5, 12);
    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, []);

const foamGeometry = (() => {
  const puffs = [[0, 0, 0, 0.22], [0.25, -0.02, 0.05, 0.16], [-0.25, -0.02, 0.04, 0.17], [0.05, 0.02, 0.18, 0.14]].map(([x, y, z, r]) =>
    new THREE.SphereGeometry(r, 16, 12).translate(x, y, z),
  );
  return mergeGeometries(puffs);
})();

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
          <meshStandardMaterial map={tex} transparent opacity={0.94} roughness={0.25} emissive="#9AD6EC" emissiveIntensity={0.25} />
        </mesh>
      ))}
      {FOAM.map((p, i) => (
        <mesh key={`f${i}`} geometry={foamGeometry} position={p}>
          <meshStandardMaterial color={PALETTE.foam} roughness={0.8} emissive="#ffffff" emissiveIntensity={0.15} />
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
    <mesh key={key} position={pos} receiveShadow castShadow>
      <boxGeometry args={size} />
      <meshStandardMaterial color={PALETTE.line} roughness={0.7} />
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
  const geos = useMemo(
    () =>
      ISLETS.map(({ size: s }) => ({
        body: new RoundedBoxGeometry(s * 0.96, s * 1.15, s * 0.96, 2, s * 0.12),
        cap: new RoundedBoxGeometry(s * 1.03, s * 0.24, s * 1.03, 2, s * 0.08),
      })),
    [],
  );
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
            <mesh geometry={geos[i].body} position={[0, -s * 0.62, 0]} castShadow receiveShadow>
              <meshStandardMaterial color={PALETTE.cliffLight} roughness={1} />
            </mesh>
            <mesh geometry={geos[i].cap} position={[0, -s * 0.1, 0]} castShadow receiveShadow>
              <meshStandardMaterial color={PALETTE.grassTop} roughness={0.95} />
            </mesh>
            {islet.tree && <Model url={islet.tree} scale={s * 0.75} />}
          </group>
        );
      })}
    </group>
  );
};

const cloudGeometry = (seed: number) => {
  const puffs = Array.from({ length: 9 }, (_, j) => {
    const r = 0.8 + hash(seed, j) * 0.9;
    return new THREE.SphereGeometry(r, 28, 20).translate(
      (hash(j, seed) - 0.5) * 4.6,
      (hash(seed + j, 3) - 0.5) * 0.9 + r * 0.25,
      (hash(7, seed - j) - 0.5) * 1.8,
    );
  });
  return mergeGeometries(puffs);
};

const Clouds = ({ animate }: { animate: boolean }) => {
  const geos = useMemo(() => CLOUDS.map((_, i) => cloudGeometry(i + 1)), []);
  const refs = useRef<(THREE.Mesh | null)[]>([]);
  useFrame(({ clock }) => {
    if (!animate) return;
    refs.current.forEach((m, i) => {
      if (m) m.position.x = CLOUDS[i].position[0] + Math.sin(clock.elapsedTime * 0.06 + i * 2.1) * 1.4;
    });
  });
  return (
    <group>
      {CLOUDS.map((cloud, i) => (
        <mesh key={i} ref={(m) => (refs.current[i] = m)} geometry={geos[i]} position={cloud.position} scale={cloud.scale}>
          <meshStandardMaterial color={PALETTE.cloud} roughness={1} emissive="#ffffff" emissiveIntensity={0.22} />
        </mesh>
      ))}
    </group>
  );
};

// ── Lighting, camera, effects ────────────────────────────────────────────────

// Soft image-based fill (a neutral studio room), like the intro's diffuse lighting.
const StudioEnvironment = () => {
  const { gl, scene } = useThree();
  useEffect(() => {
    const pmrem = new THREE.PMREMGenerator(gl);
    const env = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = env;
    scene.environmentIntensity = 0.6;
    return () => {
      scene.environment = null;
      env.dispose();
      pmrem.dispose();
    };
  }, [gl, scene]);
  return null;
};

const CameraRig = ({ chapter, reducedMotion }: { chapter: SpyId; reducedMotion: boolean }) => {
  const { camera, size } = useThree();
  const pos = useRef(new THREE.Vector3(...SHOTS.hero.target).add(new THREE.Vector3(...SHOTS.hero.offset)));
  const target = useRef(new THREE.Vector3(...SHOTS.hero.target));
  const shift = useRef({ x: 0, y: 0 });
  const desired = useMemo(() => new THREE.Vector3(), []);
  const desiredTarget = useMemo(() => new THREE.Vector3(), []);

  useFrame(({ clock }, dt) => {
    const shot = SHOTS[chapter];
    const wide = size.width >= 768 && size.width > size.height;
    desiredTarget.set(...shot.target);
    // portrait screens see less side-to-side, so back the camera off a little
    desired.set(...shot.offset).multiplyScalar(wide ? 1 : 1.3);
    if (chapter === "hero" && !reducedMotion) {
      // slow sway around the island while the hero is on screen
      desired.applyAxisAngle(UP, Math.sin(clock.elapsedTime * 0.12) * 0.12);
    }
    desired.add(desiredTarget);

    const k = reducedMotion ? 1 : 1 - Math.exp(-1.6 * Math.min(dt, 0.1));
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

// Ambient occlusion for the soft "clay diorama" contact shading, a light
// tilt-shift for the miniature feel, then filmic tone mapping.
const Effects = () => {
  const size = useThree((s) => s.size);
  const mobile = size.width < 768;
  const wide = !mobile && size.width > size.height;
  const band = wide ? 0.5 : 0.63;
  return (
    <EffectComposer multisampling={0} enableNormalPass={false}>
      <N8AO
        aoRadius={1.2}
        distanceFalloff={0.6}
        intensity={mobile ? 2.4 : 3.2}
        quality={mobile ? "performance" : "medium"}
        halfRes={mobile}
        color="#253224"
      />
      <TiltShift2 blur={mobile ? 0.08 : 0.12} taper={0.45} start={[0, band]} end={[1, band]} samples={mobile ? 8 : 14} />
      <ToneMapping mode={ToneMappingMode.NEUTRAL} />
      <HueSaturation saturation={-0.12} />
      <SMAA />
    </EffectComposer>
  );
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
      <StaticModels />
      <Windmill animate={animate} />
      <Coins animate={animate} />
      <Water animate={animate} />
      <Pitch />
    </group>
  );
};

const IslandBackdrop = ({ chapter, running, reducedMotion }: Props) => {
  const supported = useMemo(hasWebGL, []);
  // soft-shadow quality is baked into the shaders at start-up, so pick it once
  const shadowSamples = useMemo(() => (window.innerWidth < 768 ? 6 : 12), []);
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" style={{ background: PALETTE.sky }} aria-hidden="true">
      {supported ? (
        <Canvas
          shadows
          flat
          dpr={[1, 1.5]}
          camera={{ fov: 24, near: 1, far: 200 }}
          gl={{ antialias: false, powerPreference: "high-performance" }}
        >
          <SoftShadows size={22} samples={shadowSamples} focus={0.6} />
          <color attach="background" args={[PALETTE.sky]} />
          <fog attach="fog" args={[PALETTE.sky, 52, 120]} />
          <StudioEnvironment />
          <hemisphereLight args={["#EAF5FF", "#6E8A5E", 0.55]} />
          <directionalLight
            position={[14, 24, 10]}
            color="#FFF3E2"
            intensity={2.3}
            castShadow
            shadow-mapSize={[2048, 2048]}
            shadow-camera-left={-16}
            shadow-camera-right={16}
            shadow-camera-top={16}
            shadow-camera-bottom={-16}
            shadow-camera-near={1}
            shadow-camera-far={70}
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
          <Effects />
        </Canvas>
      ) : (
        <img src="/intro-poster.jpg" alt="" className="w-full h-full object-cover" />
      )}
    </div>
  );
};

export default IslandBackdrop;
