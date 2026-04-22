import { useEffect } from "react";

const ORANGE = "#FF6D3B";
const ORANGE_DARK = "#C94A22";
const GOLD = "#FABF48";
const CREAM = "#FEF9F2";
const NAVY = "#2A3242";
const SIZE = 64;

const ROLL_DURATION = 1400;

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const drawCoin = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
  scaleX: number,
  rotation: number,
  showFront: boolean,
) => {
  const thickness = r * 0.22;

  ctx.save();
  ctx.translate(x, y);

  // drop shadow under coin
  ctx.save();
  ctx.globalAlpha = 0.2;
  ctx.fillStyle = NAVY;
  ctx.beginPath();
  ctx.ellipse(0, r + thickness * 0.7, r * 0.7, r * 0.12, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  const absScale = Math.abs(scaleX);
  const sx = absScale === 0 ? 0.001 : absScale;

  ctx.save();
  ctx.scale(sx, 1);

  // bottom "thickness" layer — darker orange disc offset downward
  ctx.fillStyle = ORANGE_DARK;
  ctx.beginPath();
  ctx.arc(0, thickness, r, 0, Math.PI * 2);
  ctx.fill();

  // face disc
  ctx.fillStyle = ORANGE;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fill();

  // inner gold ring
  ctx.strokeStyle = GOLD;
  ctx.lineWidth = r * 0.14;
  ctx.beginPath();
  ctx.arc(0, 0, r * 0.72, 0, Math.PI * 2);
  ctx.stroke();

  // face content, rotates with rolling
  ctx.save();
  ctx.rotate(rotation);
  if (showFront) {
    ctx.fillStyle = CREAM;
    ctx.font = `900 ${r * 1.15}px Nunito, system-ui, sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("S", 0, r * 0.08);
  } else {
    ctx.fillStyle = CREAM;
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.26, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();

  ctx.restore(); // scale
  ctx.restore(); // translate
};

const drawFrame = (ctx: CanvasRenderingContext2D, elapsed: number) => {
  ctx.clearRect(0, 0, SIZE, SIZE);

  const cx = SIZE / 2;
  const cy = SIZE / 2 - SIZE * 0.03; // nudge up to keep drop shadow visible
  const r = SIZE * 0.4;

  if (elapsed < ROLL_DURATION) {
    // ROLLING phase
    const p = easeOutCubic(elapsed / ROLL_DURATION);
    const startX = -r * 1.5;
    const x = startX + (cx - startX) * p;
    const rotation = p * Math.PI * 2.5;
    drawCoin(ctx, x, cy, r, 1, rotation, true);
  } else {
    // FLIPPING phase — rotate around vertical axis, loop forever
    const t = (elapsed - ROLL_DURATION) / 380;
    const flip = Math.cos(t);
    const showFront = flip >= 0;
    drawCoin(ctx, cx, cy, r, flip, 0, showFront);
  }
};

export const useAnimatedFavicon = () => {
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = document.createElement("canvas");
    canvas.width = SIZE;
    canvas.height = SIZE;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    const originalHref = link.href;

    let raf = 0;
    let lastUpdate = 0;
    const start = performance.now();

    const tick = (now: number) => {
      if (now - lastUpdate > 33) {
        drawFrame(ctx, now - start);
        link!.href = canvas.toDataURL("image/png");
        lastUpdate = now;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else {
        raf = requestAnimationFrame(tick);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVisibility);
      if (link) link.href = originalHref;
    };
  }, []);
};
