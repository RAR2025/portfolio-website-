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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setIsOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header
        role="banner"
        className={`sticky top-0 z-[100] h-[72px] border-b backdrop-blur-xl transition-all duration-300 ${
          isScrolled
            ? 'bg-[rgba(26,28,46,0.65)] [backdrop-filter:blur(20px)_saturate(2)]'
            : 'bg-[rgba(26,28,46,0.45)] [backdrop-filter:blur(12px)_saturate(1.8)]'
        } border-[rgba(255,215,0,0.15)]`}
      >
        <div className="mx-auto flex h-full w-full max-w-[1120px] items-center justify-between gap-6 px-6 max-[480px]:px-4 relative z-[1]">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            aria-label="Go to top"
            className="inline-flex items-center gap-3 font-[Literata,Georgia,serif] text-[clamp(1.05rem,1rem+0.3vw,1.15rem)] font-semibold text-[#FAFBFF] transition-transform duration-300 hover:rotate-[3deg] hover:scale-105"
          >
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-8 items-center justify-center rounded bg-[linear-gradient(90deg,#FFD700,#00D9FF)] bg-[length:200%_100%] text-base font-bold text-[#0a0e27] shadow-[0_0_20px_rgba(255,215,0,0.3)] animate-[brandGradient_4s_linear_infinite]"
            >
              RAR
            </span>
            <span className="whitespace-nowrap bg-[linear-gradient(90deg,#FAFBFF,#00D9FF)] bg-clip-text text-transparent max-[420px]:hidden">
              Ruturaj Rajwade
            </span>
          </a>

          <nav
            className="hidden items-center gap-1 min-[901px]:flex"
            aria-label="Primary navigation"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                aria-current={activeId === item.id ? 'true' : undefined}
                className={`relative rounded px-3 py-[0.4rem] text-[clamp(0.75rem,0.7rem+0.2vw,0.82rem)] font-semibold uppercase tracking-[0.08em] transition-colors duration-150 ${
                  activeId === item.id
                    ? 'text-[#FFD700] after:scale-x-100'
                    : 'text-[#B8C5D6] hover:text-[#FAFBFF] after:scale-x-0'
                } after:absolute after:bottom-0 after:left-2 after:right-2 after:h-[2px] after:rounded after:bg-[linear-gradient(90deg,#FFD700,#00D9FF)] after:origin-left after:transition-transform after:duration-300`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              className="hidden h-[38px] w-[38px] items-center justify-center rounded border border-[rgba(255,215,0,0.15)] text-[#FAFBFF] transition-colors hover:border-[#FFD700] hover:bg-[rgba(26,28,46,0.65)] hover:text-[#FFD700] max-[900px]:inline-flex"
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        <div
          className={`border-t border-[rgba(255,215,0,0.15)] bg-[rgba(26,28,46,0.65)] backdrop-blur-xl py-3 ${
            isOpen ? 'block min-[901px]:hidden' : 'hidden'
          }`}
        >
          <div className="mx-auto w-full max-w-[1120px] px-6 relative z-[1]">
            <ul className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      handleNavClick(e, item.id);
                      closeMenu();
                    }}
                    className={`block px-4 py-[0.7rem] text-[clamp(0.75rem,0.7rem+0.2vw,0.82rem)] font-semibold uppercase tracking-[0.08em] ${
                      activeId === item.id ? 'text-[#FFD700]' : 'text-[#B8C5D6]'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      <div
        onClick={closeMenu}
        aria-hidden="true"
        className={`fixed inset-0 z-[99] bg-[rgba(10,14,39,0.8)] backdrop-blur-md transition-opacity duration-300 ${
          isOpen ? 'block min-[901px]:hidden opacity-100' : 'hidden opacity-0'
        }`}
      />
    </>
  );
}
