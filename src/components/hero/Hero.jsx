import { useState } from 'react';
import { personal } from '../../data/personal';
import { useReveal } from '../../hooks/useReveal';
import fallbackPhoto from '../../assets/images/profile.svg';

const FALLBACK_PHOTO = fallbackPhoto;
export function Hero() {
  const [ref, visible] = useReveal();
  const [imgSrc, setImgSrc] = useState(personal.photo || FALLBACK_PHOTO);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="hero" ref={ref}>
      <div className={`container reveal${visible ? ' reveal--visible' : ''}`}>
        <div className="hero__inner">
          <div className="hero__content">
            <span className="hero__greeting">Hello, I'm</span>
            <h1 className="hero__title">{personal.name}</h1>
            <p className="hero__subtitle">{personal.title}</p>
            <p className="hero__tagline">{personal.tagline}</p>

            <div className="hero__cta">
              {personal.resumeUrl ? (
                <a
                  className="btn btn--primary"
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              ) : null}
              <button
                type="button"
                className="btn btn--ghost"
                onClick={() => scrollTo('contact')}
              >
                Get in Touch
              </button>
            </div>


          </div>

          <div className="hero__photo-wrap">
            <div className="hero__photo">
              <img
                src={imgSrc}
                alt={`${personal.name} profile photo`}
                onError={() => setImgSrc(FALLBACK_PHOTO)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}