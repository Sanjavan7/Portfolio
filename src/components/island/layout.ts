// Island layout: everything is placed on a 1-unit grid that matches the Kenney kits.
// Terrain tiles are 2x2 units; buildings, trees and props are Kenney models (CC0).
import type { SpyId } from "./chapters";

export type Vec3 = [number, number, number];

// Sampled from the intro video so the island continues the same world.
export const PALETTE = {
  sky: "#A5C3DA",
  grassTop: "#8CBF5F",
  grassSide: "#6E9F4B",
  cliffLight: "#B4C496",
  cliffDark: "#6F8361",
  cloud: "#FFFFFF",
  water: "#BFE6F2",
  foam: "#FFFFFF",
  pitch: "#A3D673",
  line: "#FFFFFF",
};

// Kenney's Nature Kit ships mint-coloured materials; recolour them to the intro palette.
export const RECOLOR: Record<string, string> = {
  grass: "#7DB356",
  leafsGreen: "#5E9E4A",
  leafsDark: "#3F7E52",
  woodBark: "#8B5E3C",
  woodBarkDark: "#6E4A33",
  woodInner: "#D9B98F",
  wood: "#A97A52",
  woodDark: "#835C3E",
  dirt: "#C8C3B6",
  colorPurple: "#9C8CE8",
  colorRed: "#F07A5A",
  colorYellow: "#FAC24F",
};

// Deterministic pseudo-random so the island is identical on every load.
export const hash = (x: number, z: number) => {
  const s = Math.sin(x * 12.9898 + z * 78.233) * 43758.5453;
  return s - Math.floor(s);
};

// ── Terrain ────────────────────────────────────────────────────────────────
// Top-surface height of each 2x2 tile. Rows run back (z = -5) to front (z = 3).
const COLS = [-5, -3, -1, 1, 3, 5];
const ROWS = [-5, -3, -1, 1, 3];
const HEIGHTS: (number | null)[][] = [
  [null, 1.5, 2.5, 2.5, 1.5, null],
  [1.5, 1.5, 2.5, 2.5, 1.5, 1.5],
  [1.5, 1.5, 2.5, 2.5, 1.5, 1.5],
  [0.5, 0.5, 1.0, 1.0, 0.5, 0.5],
  [null, 0.5, 0.5, 0.5, 0.5, 0.5],
];

export type Tile = { x: number; z: number; top: number; bottom: number };

export const TILES: Tile[] = ROWS.flatMap((z, r) =>
  COLS.flatMap((x, c) => {
    const top = HEIGHTS[r][c];
    if (top === null) return [];
    const edge = r === 0 || r === ROWS.length - 1 || c === 0 || c === COLS.length - 1;
    const bottom = -(edge ? 1.8 : 3.2) - hash(x, z) * 2.4;
    return [{ x, z, top, bottom }];
  }),
);

const heightAt = (x: number, z: number) => TILES.find((t) => Math.abs(t.x - x) <= 1 && Math.abs(t.z - z) <= 1)?.top ?? null;

// ── Models ─────────────────────────────────────────────────────────────────
export type Placement = { url: string; position: Vec3; rotationY?: number; scale?: number };

const castle = (m: string) => `/models/castle/${m}.glb`;
const town = (m: string) => `/models/town/${m}.glb`;
const plat = (m: string) => `/models/platformer/${m}.glb`;
const nature = (m: string) => `/models/nature/${m}.glb`;

const Q = Math.PI / 2;

// A Kenney town wall panel sits on the +X side of its cell; rotating by
// 0, Q, 2Q, -Q puts it on the +X, -Z, -X and +Z (front) side.
const room = (x: number, y: number, z: number, front: string, sides: string): Placement[] => [
  { url: town(sides), position: [x, y, z], rotationY: 0 },
  { url: town(sides), position: [x, y, z], rotationY: Q },
  { url: town(sides), position: [x, y, z], rotationY: 2 * Q },
  { url: town(front), position: [x, y, z], rotationY: -Q },
];

// 01 · Castle on the top plateau, centred on (0, 2.5, -2)
const CASTLE: Vec3 = [0, 2.5, -2];
const castlePieces = (): Placement[] => {
  const [cx, y, cz] = CASTLE;
  const out: Placement[] = [];
  for (const [dx, dz] of [[-1.5, -1.5], [1.5, -1.5], [-1.5, 1.5], [1.5, 1.5]]) {
    out.push({ url: castle("tower-square-base-color"), position: [cx + dx, y, cz + dz] });
    out.push({ url: castle("tower-square-top-roof-high"), position: [cx + dx, y + 1.01, cz + dz] });
  }
  for (const [dx, dz] of [[-0.5, -1.5], [0.5, -1.5], [-0.5, 1.5], [0.5, 1.5], [-1.5, -0.5], [-1.5, 0.5], [1.5, -0.5], [1.5, 0.5]]) {
    out.push({ url: castle("wall"), position: [cx + dx, y, cz + dz] });
  }
  out.push({ url: castle("tower-square-base-color"), position: [cx, y, cz] });
  out.push({ url: castle("tower-square-mid-windows"), position: [cx, y + 1.01, cz] });
  out.push({ url: castle("tower-square-mid-windows"), position: [cx, y + 2.02, cz] });
  out.push({ url: castle("tower-square-top-roof-high"), position: [cx, y + 3.03, cz] });
  out.push({ url: castle("gate"), position: [cx, y, cz + 2.02], rotationY: Q });
  out.push({ url: castle("flag"), position: [cx, y + 4.3, cz], rotationY: -Q });
  out.push({ url: castle("flag-pennant"), position: [cx - 1.5, y + 2.25, cz + 1.5], rotationY: -Q });
  out.push({ url: castle("flag-pennant"), position: [cx + 1.5, y + 2.25, cz + 1.5], rotationY: -Q });
  return out;
};

// 02 · Observatory: a stacked hexagon tower on the left plateau
const OBSERVATORY: Vec3 = [-4.3, 1.5, -2.6];
const observatoryPieces = (): Placement[] => {
  const [x, y, z] = OBSERVATORY;
  return [
    { url: castle("tower-hexagon-base"), position: [x, y, z] },
    { url: castle("tower-hexagon-mid"), position: [x, y + 1.31, z] },
    { url: castle("tower-hexagon-mid"), position: [x, y + 1.77, z] },
    { url: castle("tower-hexagon-mid"), position: [x, y + 2.23, z] },
    { url: castle("tower-hexagon-roof"), position: [x, y + 2.69, z] },
    { url: castle("flag"), position: [x, y + 3.46, z], rotationY: -Q },
  ];
};

// 03 · Windmill workshop: three-storey house on the right plateau (blades are animated separately)
const WORKSHOP: Vec3 = [4.3, 1.5, -2.4];
export const WINDMILL_BLADES = { position: [WORKSHOP[0], WORKSHOP[1] + 2.5, WORKSHOP[2] + 0.62] as Vec3, scale: 0.8 };
const workshopPieces = (): Placement[] => {
  const [x, y, z] = WORKSHOP;
  return [
    ...room(x, y, z, "wall-wood-door", "wall-wood"),
    ...room(x, y + 1, z, "wall-wood-window-shutters", "wall-wood-window-shutters"),
    ...room(x, y + 2, z, "wall-wood", "wall-wood"),
    { url: town("roof-high-point"), position: [x, y + 3, z] },
    { url: town("cart"), position: [2.9, 1.5, -1.0], rotationY: 0.5 },
  ];
};

// 04 · The pitch (custom geometry, see IslandBackdrop) on the front row, with a cabin behind it
export const PITCH: { center: Vec3; size: [number, number] } = { center: [-2.0, 0.5, 3.0], size: [3.2, 1.6] };
const cabinPieces = (): Placement[] => [
  ...room(-4.5, 0.5, 1.0, "wall-wood-door", "wall-wood"),
  { url: town("roof-point"), position: [-4.5, 1.5, 1.0] },
];

// 05 · Market square with a fountain
const MARKET: Vec3 = [4, 0.5, 1.2];
const marketPieces = (): Placement[] => [
  { url: town("fountain-round"), position: MARKET },
  { url: town("stall-red"), position: [3.0, 0.5, 3.2] },
  { url: town("stall-green"), position: [4.7, 0.5, 3.3] },
  { url: town("lantern"), position: [2.5, 0.5, 0.4] },
  { url: town("lantern"), position: [5.5, 0.5, 0.4] },
  { url: town("lantern"), position: [5.6, 0.5, 2.4] },
];

// Hand-placed trees: dense along the back and edges, clear in front of each building.
const TREE_SPOTS: [string, number, number, number?][] = [
  // back row
  [plat("tree-pine"), -3.5, -5.3],
  [plat("tree"), -2.5, -4.6],
  [nature("tree_default"), -1.5, -5.4, 1.3],
  [plat("tree-pine"), -0.6, -5.0],
  [town("tree-high-round"), 0.4, -5.4],
  [plat("tree"), 1.3, -4.9],
  [plat("tree-pine"), 2.6, -5.0],
  [plat("tree"), 3.6, -5.3],
  [nature("tree_default"), 4.6, -4.6, 1.3],
  // observatory plateau (kept clear toward the camera, front-left)
  [town("tree"), -5.4, -3.7],
  [plat("tree-pine"), -3.0, -3.9],
  [castle("tree-small"), -2.6, -2.4],
  [nature("tree_pineRoundB"), -5.6, -4.6, 1.5],
  // workshop plateau (kept clear toward the camera, front-right)
  [town("tree"), 5.5, -3.8],
  [plat("tree-pine"), 3.0, -3.6],
  [nature("tree_detailed"), 5.6, -2.9, 1.4],
  // middle tier and front
  [plat("tree"), -1.5, 1.4],
  [nature("tree_oak"), 1.8, 0.5, 1.4],
  [plat("tree-pine"), -3.2, 0.5],
  [castle("tree-large"), -5.5, 0.3],
  [nature("tree_oak"), -5.6, 1.7, 1.4],
  [plat("tree-pine"), 5.6, 3.7],
  [nature("tree_detailed"), 2.2, 1.6, 1.3],
];

const TREES: Placement[] = TREE_SPOTS.map(([url, x, z, scale]) => ({
  url,
  position: [x, heightAt(x, z) ?? 0, z],
  rotationY: hash(x, z) * Math.PI * 2,
  scale: scale ?? 1,
}));

export const PLACEMENTS: Placement[] = [
  ...castlePieces(),
  ...observatoryPieces(),
  ...workshopPieces(),
  ...cabinPieces(),
  ...marketPieces(),
  ...TREES,
];

// ── Scatter: bushes, grass, flowers and rocks on every free patch of grass ──
type Rect = [number, number, number, number]; // x0, x1, z0, z1
const BLOCKED_RECTS: Rect[] = [
  [-2.1, 2.1, -4.1, 0.45], // castle
  [-3.8, -0.2, 2.0, 4.0], // pitch
  [0.45, 1.55, -0.6, 4.2], // stream
  [2.9, 5.1, 0.1, 2.3], // fountain
  [2.4, 5.3, 2.6, 3.9], // stalls
];
const BLOCKED_CIRCLES: [number, number, number][] = [
  [-4.3, -2.6, 0.75], // observatory
  [4.3, -2.4, 0.9], // workshop
  [2.9, -1.0, 0.7], // cart
  [-4.5, 1.0, 0.75], // cabin
  [2.5, 0.4, 0.3],
  [5.5, 0.4, 0.3],
  [5.6, 2.4, 0.3],
  ...TREE_SPOTS.map(([, x, z]) => [x, z, 0.45] as [number, number, number]),
];
const isFree = (x: number, z: number) =>
  !BLOCKED_RECTS.some(([x0, x1, z0, z1]) => x > x0 && x < x1 && z > z0 && z < z1) &&
  !BLOCKED_CIRCLES.some(([cx, cz, r]) => (x - cx) ** 2 + (z - cz) ** 2 < r * r);

// BUSH is a soft clay blob drawn in IslandBackdrop (closer to the intro than Kenney's leafy bushes).
export const BUSH = "blob:bush";
const PROPS: [string, number, number][] = [
  // url, weight, scale
  [BUSH, 9, 1],
  [nature("flower_yellowA"), 2, 2.0],
  [nature("flower_redA"), 2, 2.0],
  [nature("flower_purpleA"), 2, 2.0],
  [nature("rock_smallA"), 2, 1.6],
  [nature("rock_smallC"), 1, 1.8],
  [nature("mushroom_red"), 1, 1.9],
  [nature("stump_round"), 1, 1.6],
];
const totalWeight = PROPS.reduce((s, [, w]) => s + w, 0);
const pickProp = (r: number) => {
  let acc = 0;
  for (const p of PROPS) {
    acc += p[1] / totalWeight;
    if (r <= acc) return p;
  }
  return PROPS[0];
};

export const SCATTER: Placement[] = TILES.flatMap((t) =>
  Array.from({ length: 7 }, (_, i) => {
    const x = t.x + (hash(t.x + i * 1.31, t.z - i * 0.77) - 0.5) * 1.6;
    const z = t.z + (hash(t.z + i * 2.17, t.x + i * 0.53) - 0.5) * 1.6;
    if (!isFree(x, z)) return [];
    const [url, , scale] = pickProp(hash(x * 3.1, z * 1.7));
    const size = url === BUSH ? 0.8 + hash(z * 2.3, x) * 0.6 : scale;
    return [{ url, position: [x, t.top, z] as Vec3, rotationY: hash(z, x) * Math.PI * 2, scale: size }];
  }).flat(),
);

export const MODEL_URLS = [
  ...new Set([...PLACEMENTS.map((p) => p.url), ...SCATTER.map((p) => p.url).filter((u) => u !== BUSH), town("windmill"), plat("coin-gold"), plat("tree-pine"), plat("tree")]),
];

// Gold coins circling above the castle keep
export const COIN_RING = { center: [CASTLE[0], CASTLE[1] + 5.2, CASTLE[2]] as Vec3, radius: 0.9, count: 6 };

// ── Water: a stream from the castle gate that steps down and falls off the front edge ──
export type WaterPiece = { position: Vec3; size: Vec3 };
export const WATER: WaterPiece[] = [
  { position: [1, 2.53, -0.2], size: [0.8, 0.06, 0.4] },
  { position: [1, 1.75, 0.04], size: [0.8, 1.5, 0.08] },
  { position: [1, 1.03, 1.0], size: [0.8, 0.06, 2.0] },
  { position: [1, 0.75, 2.04], size: [0.8, 0.5, 0.08] },
  { position: [1, 0.53, 3.0], size: [0.8, 0.06, 2.0] },
  { position: [1, -2.4, 4.04], size: [0.8, 5.8, 0.08] },
];
// White foam where each fall lands
export const FOAM: Vec3[] = [
  [1, 1.05, 0.25],
  [1, 0.55, 2.25],
];

// ── Floating islets and clouds around the main island ──
export const ISLETS: { position: Vec3; size: number; tree?: string }[] = [
  { position: [-9.5, 3, -6], size: 1.1, tree: plat("tree-pine") },
  { position: [10, 4.5, -7], size: 0.8 },
  { position: [-10.5, -0.5, 2.5], size: 0.9, tree: plat("tree") },
  { position: [11, 0.5, 4], size: 1.2, tree: plat("tree-pine") },
  { position: [-6.5, 7, -9.5], size: 0.6 },
  { position: [6.5, 7.5, -10.5], size: 0.75, tree: plat("tree") },
  { position: [-2, -3.8, 8.5], size: 0.7 },
  { position: [13, 3.5, -2], size: 0.6 },
  { position: [-13, 5, -1.5], size: 0.75, tree: plat("tree-pine") },
  { position: [3.5, 9, -9], size: 0.5 },
  { position: [-7.5, -3, -6], size: 0.65 },
  { position: [8, -2.5, 9], size: 0.55 },
];

export const CLOUDS: { position: Vec3; scale: number }[] = [
  { position: [-16, 0, -8], scale: 1.6 },
  { position: [16, 2, -6], scale: 1.4 },
  { position: [-12, -5, 8], scale: 1.6 },
  { position: [14, -4, 10], scale: 1.8 },
  { position: [0.5, -9, 1], scale: 2.4 },
  { position: [-8, 12, -16], scale: 1.3 },
  { position: [10, 11, -17], scale: 1.4 },
  { position: [-4, 5, 15], scale: 1.0 },
  { position: [9, -7.5, -8], scale: 1.4 },
];

// ── Camera shots ───────────────────────────────────────────────────────────
// Camera = target + offset. `shift` moves the island on screen (fraction of the
// viewport) so it sits beside the hero box / chapter card: x on wide screens, y on tall ones.
export type Shot = { target: Vec3; offset: Vec3; shiftWide: number; shiftTall: number };

export const SHOTS: Record<SpyId, Shot> = {
  hero: { target: [0.5, 0.6, -1], offset: [29.3, 23, 37.7], shiftWide: -0.2, shiftTall: 0.15 },
  projects: { target: [0, 3.4, -2], offset: [18.0, 14.2, 25.0], shiftWide: -0.1, shiftTall: 0.12 },
  research: { target: [-4.3, 2.9, -2.6], offset: [-16.5, 8.2, 10.5], shiftWide: -0.1, shiftTall: 0.12 },
  experience: { target: [4.3, 3.2, -2.3], offset: [14.4, 8.6, 18.4], shiftWide: -0.1, shiftTall: 0.12 },
  story: { target: [-2.2, 0.8, 2.6], offset: [-8.2, 8.0, 14.8], shiftWide: -0.1, shiftTall: 0.12 },
  contact: { target: [4, 1.1, 2], offset: [12.0, 9.2, 15.6], shiftWide: -0.1, shiftTall: 0.12 },
};
