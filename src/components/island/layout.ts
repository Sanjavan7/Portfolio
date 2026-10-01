// Island layout: everything is placed on a 1-unit grid that matches the Kenney kits.
// Terrain tiles are 2x2 units; buildings, trees and props are Kenney models (CC0).
import type { SpyId } from "./chapters";

export type Vec3 = [number, number, number];

export const PALETTE = {
  sky: "#A5C3DA",
  grass: "#86B85A",
  cliff: "#A9B98C",
  cloud: "#F6F4EF",
  water: "#9FD3E6",
  pitch: "#9CD46A",
  line: "#FFFFFF",
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

// Deterministic jitter so the underside is jagged but identical on every load.
const hash = (x: number, z: number) => {
  const s = Math.sin(x * 12.9898 + z * 78.233) * 43758.5453;
  return s - Math.floor(s);
};

export type Tile = { x: number; z: number; top: number; bottom: number };

export const TILES: Tile[] = ROWS.flatMap((z, r) =>
  COLS.flatMap((x, c) => {
    const top = HEIGHTS[r][c];
    if (top === null) return [];
    const edge = r === 0 || r === ROWS.length - 1 || c === 0 || c === COLS.length - 1;
    const bottom = -(edge ? 1.6 : 2.8) - hash(x, z) * 2.2;
    return [{ x, z, top, bottom }];
  }),
);

// ── Models ─────────────────────────────────────────────────────────────────
export type Placement = { url: string; position: Vec3; rotationY?: number; scale?: number };

const castle = (m: string) => `/models/castle/${m}.glb`;
const town = (m: string) => `/models/town/${m}.glb`;
const plat = (m: string) => `/models/platformer/${m}.glb`;

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
export const WINDMILL_BLADES: Vec3 = [WORKSHOP[0], WORKSHOP[1] + 2.45, WORKSHOP[2] + 0.62];
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

const scenery = (): Placement[] => [
  // behind the castle
  { url: plat("tree-pine"), position: [-1.2, 2.5, -5.0] },
  { url: town("tree-high-round"), position: [0.3, 2.5, -5.3] },
  { url: plat("tree"), position: [1.4, 2.5, -4.9] },
  // observatory plateau
  { url: plat("flowers"), position: [-5.2, 1.5, -0.8] },
  { url: castle("tree-small"), position: [-2.6, 1.5, -3.5] },
  { url: town("tree"), position: [-5.3, 1.5, -3.8] },
  { url: plat("tree-pine"), position: [-3.2, 1.5, -5.0] },
  { url: plat("flowers"), position: [-3.0, 1.5, -0.8] },
  // workshop plateau
  { url: plat("tree-pine"), position: [5.4, 1.5, -0.8] },
  { url: town("tree"), position: [5.3, 1.5, -3.9] },
  { url: plat("tree-pine"), position: [3.2, 1.5, -4.9] },
  { url: plat("flowers"), position: [2.8, 1.5, -0.6] },
  // middle and front
  { url: plat("tree"), position: [-1.3, 1.0, 1.3] },
  { url: plat("flowers"), position: [-0.4, 1.0, 0.6] },
  { url: plat("tree-pine"), position: [-3.0, 0.5, 0.6] },
  { url: castle("tree-large"), position: [-5.4, 0.5, 0.3] },
  { url: plat("flowers"), position: [-3.4, 0.5, 1.6] },
];

export const PLACEMENTS: Placement[] = [
  ...castlePieces(),
  ...observatoryPieces(),
  ...workshopPieces(),
  ...cabinPieces(),
  ...marketPieces(),
  ...scenery(),
];

export const MODEL_URLS = [...new Set([...PLACEMENTS.map((p) => p.url), town("windmill"), plat("coin-gold")])];

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
  { position: [1, -2.2, 4.04], size: [0.8, 5.4, 0.08] },
];

// ── Floating islets and clouds around the main island ──
export const ISLETS: { position: Vec3; size: number; tree?: string }[] = [
  { position: [-9, 3, -6], size: 1.0, tree: plat("tree-pine") },
  { position: [9.5, 4, -7], size: 0.8 },
  { position: [-10, -0.5, 2], size: 0.9, tree: plat("tree") },
  { position: [10.5, 0.5, 4], size: 1.1, tree: plat("tree-pine") },
  { position: [-6.5, 6.5, -9], size: 0.6 },
  { position: [6.5, 7, -10], size: 0.7, tree: plat("tree") },
  { position: [-1.5, -3.5, 8.5], size: 0.7 },
  { position: [12.5, 3, -2], size: 0.6 },
  { position: [-12.5, 4.5, -1], size: 0.7 },
];

export const CLOUDS: { position: Vec3; scale: number }[] = [
  { position: [-15, 0, -8], scale: 1.4 },
  { position: [15, 2, -6], scale: 1.2 },
  { position: [-11, -4.5, 8], scale: 1.3 },
  { position: [13, -3.5, 10], scale: 1.5 },
  { position: [1, -7, 1], scale: 2.2 },
  { position: [-7, 11, -15], scale: 1.1 },
  { position: [9, 10, -16], scale: 1.2 },
  { position: [-3, 4, 14], scale: 0.9 },
];

// ── Camera keyframes ───────────────────────────────────────────────────────
// `shift` moves the island on screen (fraction of the viewport) so it sits beside
// the hero box / chapter card instead of under it: x on wide screens, y on tall ones.
export type Shot = { position: Vec3; target: Vec3; shiftWide: number; shiftTall: number };

export const SHOTS: Record<SpyId, Shot> = {
  hero: { position: [23, 18.5, 28], target: [0.5, 0.8, -1], shiftWide: -0.2, shiftTall: 0.16 },
  projects: { position: [9, 10.5, 10.5], target: [0, 3.4, -2], shiftWide: -0.1, shiftTall: 0.12 },
  research: { position: [-12, 7, 5.5], target: [-4.3, 3.0, -2.6], shiftWide: -0.1, shiftTall: 0.12 },
  experience: { position: [11.5, 7.5, 7], target: [4.3, 3.2, -2.2], shiftWide: -0.1, shiftTall: 0.12 },
  story: { position: [-6.5, 4.6, 9.8], target: [-2.4, 0.8, 2.4], shiftWide: -0.1, shiftTall: 0.12 },
  contact: { position: [10, 5.6, 9.6], target: [4, 1, 1.8], shiftWide: -0.1, shiftTall: 0.12 },
};
