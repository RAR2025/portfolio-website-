import { useState } from 'react';
import { personal } from '../../data/personal';
import { useReveal } from '../../hooks/useReveal';
import fallbackPhoto from '../../assets/images/profile.svg';

import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const GitHubIcon = () => <FaGithub size={18} />;
export const LinkedInIcon = () => <FaLinkedin size={18} />;
export const TwitterIcon = () => <FaXTwitter size={18} />;
export const MailIcon = () => <MdEmail size={18} />;

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

            <div className="hero__socials">
              {personal.socials.github1 ? (
                <a
                  href={personal.socials.github1}
                  className="hero__social"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                </a>
              ) : null}
              {personal.socials.github2 ? (
                <a
                  href={personal.socials.github2}
                  className="hero__social"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                </a>
              ) : null}
              {personal.socials.linkedin ? (
                <a
                  href={personal.socials.linkedin}
                  className="hero__social"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon />
                </a>
              ) : null}
              {personal.socials.twitter ? (
                <a
                  href={personal.socials.twitter}
                  className="hero__social"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon />
                </a>
              ) : null}
              {personal.email ? (
                <a
                  href={`mailto:${personal.email}`}
                  className="hero__social"
                  aria-label="Email"
                >
                  <MailIcon />
                </a>
              ) : null}
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