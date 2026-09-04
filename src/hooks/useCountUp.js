import { useEffect, useRef, useState } from 'react';

export function useCountUp(
  target,
  { active = true, duration = 1400, decimals = 0, start = 0 } = {}
) {
  const [value, setValue] = useState(start);
  const frameRef = useRef(0);

  useEffect(() => {
    if (!active) return undefined;

    if (target === start) {
      setValue(target);
      return undefined;
    }

    const from = start;
    const startTime = performance.now();
    frameRef.current = requestAnimationFrame(function tick(now) {
      const elapsed = Math.min((now - startTime) / duration, 1);
      const eased = elapsed >= 1 ? 1 : 1 - Math.pow(2, -10 * elapsed);
      setValue(from + (target - from) * eased);
      if (elapsed < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    });

    return () => cancelAnimationFrame(frameRef.current);
  }, [target, active, duration, decimals, start]);

  const display =
    decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();

  return display;
}