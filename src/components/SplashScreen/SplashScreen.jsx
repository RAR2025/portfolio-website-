import { useEffect, useRef } from 'react';

function SplashScreen({ onFinish }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const onFinishRef = useRef(onFinish);
  onFinishRef.current = onFinish;
  const exitingRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    const startTime = performance.now();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const cx = () => canvas.width / 2;
    const cy = () => canvas.height / 2;

    function createParticle() {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.random() * 0.45 * Math.min(canvas.width, canvas.height);
      return {
        angle,
        radius: r,
        size: Math.random() * 4 + 1.5,
        speed: (Math.random() * 0.5 + 0.1) * (Math.random() > 0.5 ? 1 : -1),
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.025,
        type: Math.floor(Math.random() * 5),
        alpha: Math.random() * 0.45 + 0.25,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.025 + 0.008,
        hue: Math.random() * 30 + 40,
      };
    }

    const particles = Array.from({ length: 90 }, () => createParticle());

    function drawShape(ctx, x, y, size, type, rotation, hue, alpha) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      if (type === 0) {
        ctx.arc(0, 0, size, 0, Math.PI * 2);
      } else if (type === 4) {
        for (let i = 0; i < 3; i++) {
          const a = (i / 3) * Math.PI * 2 - Math.PI / 2;
          i === 0 ? ctx.moveTo(Math.cos(a) * size, Math.sin(a) * size) : ctx.lineTo(Math.cos(a) * size, Math.sin(a) * size);
        }
        ctx.closePath();
      } else {
        const sides = type + 2;
        for (let i = 0; i < sides; i++) {
          const a = (i / sides) * Math.PI * 2 - Math.PI / 2;
          i === 0 ? ctx.moveTo(Math.cos(a) * size, Math.sin(a) * size) : ctx.lineTo(Math.cos(a) * size, Math.sin(a) * size);
        }
        ctx.closePath();
      }
      ctx.fillStyle = `hsla(${hue}, 80%, 60%, ${alpha})`;
      ctx.fill();
      ctx.strokeStyle = `hsla(${hue}, 60%, 70%, ${alpha * 0.7})`;
      ctx.lineWidth = 0.8;
      ctx.stroke();
      ctx.restore();
    }

    function drawBackground(time) {
      ctx.fillStyle = '#060701';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const grad = ctx.createRadialGradient(cx(), cy(), 0, cx(), cy(), Math.max(canvas.width, canvas.height) * 0.7);
      grad.addColorStop(0, 'rgba(255, 215, 0, 0.06)');
      grad.addColorStop(0.3, 'rgba(184, 155, 111, 0.03)');
      grad.addColorStop(1, 'rgba(6, 7, 1, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function drawGrid(time) {
      const elapsed = (time - startTime) / 1000;
      ctx.save();
      ctx.translate(cx(), cy());

      const maxR = Math.max(canvas.width, canvas.height) * 0.6;

      for (let r = 50; r < maxR; r += 50) {
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(184, 155, 111, ${0.03 + 0.02 * Math.sin(elapsed * 0.3 + r * 0.01)})`;
        ctx.lineWidth = 0.3;
        ctx.stroke();
      }

      for (let i = 0; i < 24; i++) {
        const a = (i / 24) * Math.PI * 2 + elapsed * 0.02;
        ctx.beginPath();
        ctx.moveTo(Math.cos(a) * 30, Math.sin(a) * 30);
        ctx.lineTo(Math.cos(a) * maxR, Math.sin(a) * maxR);
        ctx.strokeStyle = `rgba(184, 155, 111, 0.025)`;
        ctx.lineWidth = 0.3;
        ctx.stroke();
      }

      ctx.restore();
    }

    function drawBackgroundShapes(time) {
      const elapsed = (time - startTime) / 1000;
      ctx.save();
      ctx.translate(cx(), cy());

      [3, 4, 5, 6, 7, 8, 10].forEach((sides, i) => {
        const size = 60 + i * 40 + 25 * Math.sin(elapsed * 0.12 + i * 0.5);
        const rot = elapsed * (0.06 + i * 0.008) * (i % 2 === 0 ? 1 : -1);
        ctx.save();
        ctx.rotate(rot);
        ctx.beginPath();
        for (let j = 0; j < sides; j++) {
          const a = (j / sides) * Math.PI * 2 - Math.PI / 2;
          j === 0 ? ctx.moveTo(Math.cos(a) * size, Math.sin(a) * size) : ctx.lineTo(Math.cos(a) * size, Math.sin(a) * size);
        }
        ctx.closePath();
        ctx.strokeStyle = `rgba(255, 215, 0, ${0.03 + 0.025 * Math.sin(elapsed * 0.08 + i * 0.7)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
        ctx.restore();
      });

      ctx.restore();
    }

    function drawMandala(time) {
      const elapsed = (time - startTime) / 1000;
      ctx.save();
      ctx.translate(cx(), cy());

      [30, 55, 80, 105, 130, 160].forEach((radius, idx) => {
        const count = 6 + idx * 5;
        const rot = elapsed * (0.2 + idx * 0.035) * (idx % 2 === 0 ? 1 : -1);

        for (let i = 0; i < count; i++) {
          const a = (i / count) * Math.PI * 2 + rot;
          const x = Math.cos(a) * radius;
          const y = Math.sin(a) * radius;
          const s = Math.max(2.2 - idx * 0.2, 0.5);

          ctx.beginPath();
          ctx.arc(x, y, s, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 215, 0, ${0.4 - idx * 0.045})`;
          ctx.fill();
          ctx.strokeStyle = `rgba(184, 155, 111, ${0.35 - idx * 0.04})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });

      ctx.restore();
    }

    function drawSpiral(time) {
      const elapsed = (time - startTime) / 1000;
      const count = Math.min(Math.floor(elapsed * 10), 35);
      const c = 5.5;

      ctx.save();
      ctx.translate(cx(), cy());

      for (let i = 0; i < count; i++) {
        const r = c * Math.sqrt(i + 1);
        const a = (i + 1) * Math.PI * (3 - Math.sqrt(5)) + elapsed * 0.04;
        const x = Math.cos(a) * r;
        const y = Math.sin(a) * r;
        const alpha = Math.max(0, 1 - i / count) * 0.55;

        ctx.beginPath();
        ctx.arc(x, y, Math.max(1.5 - (i / count) * 0.8, 0.3), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 215, 0, ${alpha})`;
        ctx.fill();
      }

      ctx.restore();
    }

    function drawPulsingRing(time) {
      if (exitingRef.current) return;
      const elapsed = (time - startTime) / 1000;
      const radius = 20 + 5 * Math.sin(elapsed * 2);
      const alpha = 0.15 + 0.1 * Math.sin(elapsed * 2.5);

      ctx.save();
      ctx.translate(cx(), cy());
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255, 215, 0, ${alpha})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();
    }

    function animate(time) {
      drawBackground(time);
      drawGrid(time);
      drawBackgroundShapes(time);
      drawMandala(time);
      drawSpiral(time);
      drawPulsingRing(time);

      const scatterSpeed = exitingRef.current ? 8 : 1;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.angle += p.speed * 0.005 * scatterSpeed;
        p.rotation += p.rotSpeed;
        p.pulse += p.pulseSpeed;

        if (exitingRef.current) {
          p.radius += Math.abs(p.speed) * 3;
          p.alpha *= 0.97;
        }

        const x = cx() + Math.cos(p.angle) * p.radius;
        const y = cy() + Math.sin(p.angle) * p.radius;
        const alpha = p.alpha * (0.65 + 0.35 * Math.sin(p.pulse));
        const size = p.size * (1 + 0.15 * Math.sin(p.pulse));

        if (alpha > 0.01) {
          drawShape(ctx, x, y, size, p.type, p.rotation, p.hue, alpha);
        }
      }

      if (!exitingRef.current) {
        for (let i = 0; i < particles.length; i++) {
          const p1 = particles[i];
          const x1 = cx() + Math.cos(p1.angle) * p1.radius;
          const y1 = cy() + Math.sin(p1.angle) * p1.radius;

          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const x2 = cx() + Math.cos(p2.angle) * p2.radius;
            const y2 = cy() + Math.sin(p2.angle) * p2.radius;
            const dx = x1 - x2;
            const dy = y1 - y2;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxDist = 100;

            if (dist < maxDist) {
              ctx.beginPath();
              ctx.moveTo(x1, y1);
              ctx.lineTo(x2, y2);
              const avgHue = (p1.hue + p2.hue) / 2;
              ctx.strokeStyle = `hsla(${avgHue}, 60%, 60%, ${0.1 * (1 - dist / maxDist)})`;
              ctx.lineWidth = 0.4;
              ctx.stroke();
            }
          }
        }
      }

      if (exitingRef.current) {
        const stillAlive = particles.some(p => p.alpha > 0.01);
        if (stillAlive) {
          animId = requestAnimationFrame(animate);
        }
      } else {
        animId = requestAnimationFrame(animate);
      }
    }

    animId = requestAnimationFrame(animate);

    const timer = setTimeout(() => {
      exitingRef.current = true;
      if (containerRef.current) {
        containerRef.current.classList.add('splash--exit');
      }
      setTimeout(() => onFinishRef.current(), 800);
    }, 2500);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(timer);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div ref={containerRef} className="splash">
      <canvas ref={canvasRef} className="splash__canvas" />
      <div className="splash__content">
        <p className="splash__line">Not merely a coder, but a <span className="splash__highlight">digital artist</span></p>
      </div>
    </div>
  );
}

export default SplashScreen;
