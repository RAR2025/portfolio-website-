import { useEffect, useState } from 'react';
import { personal } from '../../data/personal';

export function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const year = new Date().getFullYear();

  return (
    <>
      <footer className="footer" role="contentinfo">
        <div className="container footer__inner">
          <p className="footer__copy">
            © {year} {personal.name}. All rights reserved.
          </p>
        </div>
      </footer>

      <button
        type="button"
        className={`footer__top${showTop ? ' footer__top--visible' : ''}`}
        onClick={handleTop}
        aria-label="Scroll to top"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      </button>
    </>
  );
}