import { useEffect, useState } from 'react';
import { NAV_ITEMS } from '../../utils/constants';
import { useScrollSpy } from '../../hooks/useScrollSpy';
function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function handleNavClick(event, id) {
  event.preventDefault();
  const target = document.getElementById(id);
  if (!target) return;
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Navbar() {
  const activeId = useScrollSpy(NAV_ITEMS.map((item) => item.id));
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar" role="banner">
      <div className="container navbar__inner">
        <a
          href="#home"
          className="navbar__brand"
          onClick={(e) => handleNavClick(e, 'home')}
          aria-label="Go to top"
        >
          <span className="navbar__brand-mark" aria-hidden="true">
            RAR
          </span>
          <span>Ruturaj Rajwade</span>
        </a>

        <nav className="navbar__list" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`navbar__link${
                activeId === item.id ? ' navbar__link--active' : ''
              }`}
              onClick={(e) => handleNavClick(e, item.id)}
              aria-current={activeId === item.id ? 'true' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            type="button"
            className="navbar__toggle"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div
        className={`navbar__mobile${isOpen ? ' navbar__mobile--open' : ''}`}
      >
        <div className="container">
          <ul className="navbar__mobile-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`navbar__link${
                    activeId === item.id ? ' navbar__link--active' : ''
                  }`}
                  onClick={(e) => {
                    handleNavClick(e, item.id);
                    closeMenu();
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className={`navbar__overlay${isOpen ? ' navbar__overlay--visible' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </header>
  );
}