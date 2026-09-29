import { useState } from 'react';
import { personal } from '../../data/personal';
import { useReveal } from '../../hooks/useReveal';
import fallbackPhoto from '../../assets/images/profile.svg';

const PROFILE_WEBP = '/images/profile-577.webp';

const FALLBACK_PHOTO = fallbackPhoto;
export function Hero() {
  const [ref, visible] = useReveal();
  const [imgSrc, setImgSrc] = useState(personal.photo || FALLBACK_PHOTO);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative overflow-hidden bg-[radial-gradient(circle_at_50%_50%,#0A0E27_0%,#1A1C2E_50%,#12131F_100%)] pb-[clamp(4rem,8vw,6rem)] pt-[clamp(3rem,6vw,5rem)] animate-[heroHueShift_8s_ease-in-out_infinite] max-[768px]:animate-none"
    >
      <div
        className={`mx-auto w-full max-w-[1120px] px-6 max-[480px]:px-4 relative z-[1] transition-all duration-300 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
        }`}
      >
        <div className="relative z-[1] grid grid-cols-1 items-center gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="mb-3 inline-block bg-[linear-gradient(90deg,#FFD700,#00D9FF)] bg-clip-text text-base font-semibold tracking-[0.05em] text-transparent animate-[heroFadeUp_500ms_ease-out_both]">
              Hello, I&apos;m
            </span>
            <h1 className="mb-4 bg-[linear-gradient(90deg,#FFD700,#00D9FF)] bg-clip-text font-[Literata,Georgia,serif] text-[clamp(1.85rem,1.3rem+2.4vw,2.75rem)] font-bold leading-[1.2] text-transparent animate-[heroFadeUp_500ms_ease-out_100ms_both]">
              {personal.name}
            </h1>
            <p className="mb-3 text-[clamp(1.2rem,1.05rem+0.6vw,1.4rem)] font-semibold text-[#FFD700] [text-shadow:0_0_20px_rgba(255,215,0,0.2)] animate-[heroFadeUp_500ms_ease-out_200ms_both]">
              {personal.title}
            </p>
            <p className="mb-6 max-w-[56ch] text-[clamp(0.95rem,0.9rem+0.2vw,1rem)] leading-[1.6] text-[#B8C5D6] animate-[heroFadeUp_500ms_ease-out_300ms_both]">
              {personal.tagline}
            </p>

            <div className="mb-6 flex flex-wrap gap-3 animate-[heroFadeUp_500ms_ease-out_400ms_both] max-[480px]:w-full">
              {personal.resumeUrl ? (
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent bg-[linear-gradient(90deg,#FFD700,#00D9FF)] bg-[length:200%_100%] px-[1.4rem] py-[0.7rem] font-semibold text-[#0a0e27] shadow-[0_4px_16px_rgba(0,217,255,0.3)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-[position:100%_0] hover:shadow-[0_0_20px_rgba(0,217,255,0.4)] active:scale-[0.97] max-[480px]:flex-1"
                >
                  Download Resume
                </a>
              ) : null}
              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border-[1.5px] border-[rgba(255,215,0,0.3)] bg-transparent px-[1.4rem] py-[0.7rem] font-semibold text-[#B8C5D6] transition-all duration-300 hover:-translate-y-[1px] hover:border-[rgba(0,217,255,0.6)] hover:bg-[rgba(0,217,255,0.1)] hover:text-[#FAFBFF] active:scale-[0.97] max-[480px]:flex-1"
              >
                Get in Touch
              </button>
            </div>
          </div>

          <div className="relative flex justify-center animate-[heroSlideIn_500ms_ease-out_200ms_both]">
            <div className="relative aspect-[3/4] w-[clamp(220px,28vw,340px)]">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 m-auto h-[calc(100%+40px)] w-[calc(100%+40px)] rounded-full border-[1.5px] border-[rgba(255,215,0,0.15)] animate-[ringSpin_12s_linear_infinite] max-[768px]:animate-none"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 m-auto hidden h-[calc(100%+90px)] w-[calc(100%+90px)] rounded-full border-[1.5px] border-[rgba(0,217,255,0.12)] animate-[ringSpinReverse_18s_linear_infinite] min-[481px]:block max-[768px]:animate-none"
              />
              <div className="relative h-full w-full rounded-xl bg-[conic-gradient(from_0deg,#FFD700,#00D9FF,#FFD700,#00D9FF,#FFD700)] p-[3px] shadow-[0_4px_16px_rgba(0,0,0,0.4),0_12px_32px_rgba(0,0,0,0.2)] transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(0,217,255,0.4)] max-[768px]:animate-none animate-[borderRotate_5s_linear_infinite]">
                <picture>
                  <source srcSet={PROFILE_WEBP} type="image/webp" />
                  <img
                    src={imgSrc}
                    alt={`${personal.name} profile photo`}
                    onError={() => setImgSrc(FALLBACK_PHOTO)}
                    fetchpriority="high"
                    decoding="async"
                    width="577"
                    height="759"
                    className="h-full w-full rounded-[10px] bg-[#1A1C2E] object-contain"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[150px] bg-gradient-to-b from-transparent to-[#0A0E27]"
      />
    </section>
  );
}
