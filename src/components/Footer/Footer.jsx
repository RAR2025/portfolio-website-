import { useEffect, useRef } from 'react';
import { personal } from '../../data/personal';

export function Footer() {
  const year = new Date().getFullYear();
  const lineRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      if (lineRef.current) {
        lineRef.current.style.width = `${progress * 100}%`;
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <footer
      role="contentinfo"
      className="relative border-t border-[rgba(255,215,0,0.15)] bg-[rgba(26,28,46,0.45)] py-10 text-center backdrop-blur-xl"
    >
      <span
        ref={lineRef}
        aria-hidden="true"
        style={{ width: 0 }}
        className="absolute left-0 top-0 h-[2px] bg-[linear-gradient(90deg,#FFD700,#00D9FF)] shadow-[0_0_20px_rgba(0,217,255,0.4)]"
      />
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-4 px-6 max-[480px]:px-4 relative z-[1]">
        <p className="text-[clamp(0.85rem,0.8rem+0.2vw,0.92rem)] text-[#B8C5D6]">
          © {year} {personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
