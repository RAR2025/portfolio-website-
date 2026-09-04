import { useEffect, useRef } from 'react';

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const hexToRgb = (hex) => {
  const clean = hex.replace('#', '');
  const n = parseInt(clean, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
};

const mixRgb = (a, b, t) => [
  Math.round(a.r + (b.r - a.r) * t),
  Math.round(a.g + (b.g - a.g) * t),
  Math.round(a.b + (b.b - a.b) * t),
];

const rgba = (rgb, alpha) =>
  `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha.toFixed(3)})`;

export function InteractiveGrid({
  cellSize = 44,
  baseColor = '#FFD700',
  activeColor = '#00D9FF',
  proximity = 120,
  shockRadius = 250,
  shockStrength = 1,
  resistance = 750,
  returnDuration = 1.5,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const base = hexToRgb(baseColor);
    const active = hexToRgb(activeColor);

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let energies = new Float32Array(0);

    const mouse = { x: -9999, y: -9999, active: false };
    const waves = [];
    let rafId = 0;
    let lastTime = performance.now();
    let running = false;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(width / cellSize) + 1;
      rows = Math.ceil(height / cellSize) + 1;
      energies = new Float32Array(cols * rows);
    };

    const drawBaseGrid = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let c = 0; c <= cols; c++) {
        ctx.moveTo(c * cellSize + 0.5, 0);
        ctx.lineTo(c * cellSize + 0.5, height);
      }
      for (let r = 0; r <= rows; r++) {
        ctx.moveTo(0, r * cellSize + 0.5);
        ctx.lineTo(width, r * cellSize + 0.5);
      }
      ctx.strokeStyle = `rgba(${base.r}, ${base.g}, ${base.b}, 0.09)`;
      ctx.stroke();
    };

    const hasActivity = () => {
      if (mouse.active || waves.length) return true;
      for (let i = 0; i < energies.length; i++) {
        if (energies[i] > 0.02) return true;
      }
      return false;
    };

    const startLoop = () => {
      if (running || reducedMotion) return;
      running = true;
      lastTime = performance.now();
      rafId = requestAnimationFrame(frame);
    };

    const frame = (time) => {
      const dt = clamp((time - lastTime) / 1000, 0, 0.05);
      lastTime = time;
      const tau = returnDuration / 3;
      const decay = Math.exp(-dt / tau);
      const riseFactor = 1 - Math.exp(-dt * (1000 / resistance));

      for (let i = waves.length - 1; i >= 0; i--) {
        const w = waves[i];
        w.radius += dt * (shockRadius / 0.55);
        const progress = w.radius / shockRadius;
        if (progress >= 1) {
          waves.splice(i, 1);
          continue;
        }
        const impulse = shockStrength * (1 - progress);
        const x0 = Math.max(0, Math.floor((w.x - w.radius - cellSize) / cellSize));
        const x1 = Math.min(cols - 1, Math.ceil((w.x + w.radius + cellSize) / cellSize));
        const y0 = Math.max(0, Math.floor((w.y - w.radius - cellSize) / cellSize));
        const y1 = Math.min(rows - 1, Math.ceil((w.y + w.radius + cellSize) / cellSize));
        for (let cy = y0; cy <= y1; cy++) {
          for (let cx = x0; cx <= x1; cx++) {
            const cxp = cx * cellSize + cellSize / 2;
            const cyp = cy * cellSize + cellSize / 2;
            const dist = Math.hypot(cxp - w.x, cyp - w.y);
            const band = Math.abs(dist - w.radius);
            if (band < cellSize) {
              energies[cy * cols + cx] += impulse * (1 - band / cellSize) * 0.1;
            }
          }
        }
      }

      if (mouse.active) {
        const x0 = Math.max(0, Math.floor((mouse.x - proximity) / cellSize));
        const x1 = Math.min(cols - 1, Math.ceil((mouse.x + proximity) / cellSize));
        const y0 = Math.max(0, Math.floor((mouse.y - proximity) / cellSize));
        const y1 = Math.min(rows - 1, Math.ceil((mouse.y + proximity) / cellSize));
        for (let cy = y0; cy <= y1; cy++) {
          for (let cx = x0; cx <= x1; cx++) {
            const cxp = cx * cellSize + cellSize / 2;
            const cyp = cy * cellSize + cellSize / 2;
            const dist = Math.hypot(cxp - mouse.x, cyp - mouse.y);
            if (dist < proximity) {
              const target = 1 - dist / proximity;
              const idx = cy * cols + cx;
              energies[idx] += (target - energies[idx]) * riseFactor;
            }
          }
        }
      }

      ctx.clearRect(0, 0, width, height);

      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let c = 0; c <= cols; c++) {
        ctx.moveTo(c * cellSize + 0.5, 0);
        ctx.lineTo(c * cellSize + 0.5, height);
      }
      for (let r = 0; r <= rows; r++) {
        ctx.moveTo(0, r * cellSize + 0.5);
        ctx.lineTo(width, r * cellSize + 0.5);
      }
      ctx.strokeStyle = `rgba(${base.r}, ${base.g}, ${base.b}, 0.09)`;
      ctx.stroke();

      ctx.globalCompositeOperation = 'lighter';
      for (let i = 0; i < energies.length; i++) {
        const e = energies[i];
        if (e > 0.015) {
          energies[i] = e * decay;
          const cx = (i % cols) * cellSize;
          const cy = Math.floor(i / cols) * cellSize;
          ctx.fillStyle = rgba(
            mixRgb(base, active, clamp(e * 1.05, 0, 1)),
            clamp(e * 0.09, 0, 0.18)
          );
          ctx.beginPath();
          if (ctx.roundRect) {
            ctx.roundRect(cx + 2, cy + 2, cellSize - 4, cellSize - 4, cellSize * 0.18);
          } else {
            ctx.rect(cx + 2, cy + 2, cellSize - 4, cellSize - 4);
          }
          ctx.fill();
        } else {
          energies[i] = e * decay;
        }
      }

      for (const w of waves) {
        ctx.strokeStyle = rgba(
          [active.r, active.g, active.b],
          Math.max(0, 1 - w.radius / shockRadius) * 0.06
        );
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(w.x, w.y, w.radius, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.globalCompositeOperation = 'source-over';

      if (hasActivity()) {
        rafId = requestAnimationFrame(frame);
      } else {
        running = false;
        rafId = 0;
        energies.fill(0);
        drawBaseGrid();
      }
    };

    const onPointerMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
      startLoop();
    };

    const onPointerUp = () => {
      mouse.active = false;
    };

    const onPointerDown = (e) => {
      if (e.pointerType === 'touch') return;
      let node = e.target;
      while (node && node !== document.body) {
        if (
          node.closest &&
          node.closest('button, a, input, select, textarea, [role="button"]')
        ) {
          return;
        }
        if (node.classList) {
          for (const token of node.classList) {
            if (
              token.includes('card') ||
              token.includes('panel') ||
              token.includes('sidebar')
            ) {
              return;
            }
          }
        }
        node = node.parentElement;
      }
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
      waves.push({ x: e.clientX, y: e.clientY, radius: 0 });
      startLoop();
    };

    const onBlur = () => {
      mouse.active = false;
    };

    const onResize = () => {
      resize();
      drawBaseGrid();
      if (hasActivity()) startLoop();
    };

    resize();
    drawBaseGrid();
    if (!reducedMotion) {
      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerdown', onPointerDown);
      window.addEventListener('pointerup', onPointerUp);
      window.addEventListener('pointercancel', onPointerUp);
      window.addEventListener('blur', onBlur);
    }
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafId);
      rafId = 0;
      running = false;
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
      window.removeEventListener('blur', onBlur);
      window.removeEventListener('resize', onResize);
    };
  }, [cellSize, baseColor, activeColor, proximity, shockRadius, shockStrength, resistance, returnDuration]);

  return <canvas ref={canvasRef} className="interactive-grid" aria-hidden="true" />;
}