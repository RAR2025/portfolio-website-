import { useEffect, useRef, useState } from 'react';
import { personal } from '../../data/personal';

export function Footer() {
  const [showTop, setShowTop] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const year = new Date().getFullYear();

  return (
    <>
      <footer className="footer" role="contentinfo" ref={footerRef}>
        <div className="container footer__inner">
          <p className="footer__copy">
            © {year} {personal.name}. All rights reserved.
          </p>
        </div>
      </footer>

      <button
        type="button"
        className={`footer__top${showTop ? ' footer__top--visible' : ''}${footerVisible ? ' footer__top--hidden' : ''}`}
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