import { personal } from '../../data/personal';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <p className="footer__copy">
          © {year} {personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}