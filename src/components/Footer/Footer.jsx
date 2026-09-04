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
    <footer className="footer" role="contentinfo">
      <span ref={lineRef} className="footer__progress-line" aria-hidden="true" />
      <div className="container footer__inner">
        <p className="footer__copy">
          © {year} {personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}