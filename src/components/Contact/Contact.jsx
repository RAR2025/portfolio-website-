import { useState } from 'react';
import { personal } from '../../data/personal';
import { useReveal } from '../../hooks/useReveal';
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";

export const GitHubIcon = () => <FaGithub size={18} />;
export const LinkedInIcon = () => <FaLinkedin size={18} />;
export const TwitterIcon = () => <FaXTwitter size={18} />;
export const MailIcon = () => <MdEmail size={18} />;
export const LeetCodeIcon = () => <SiLeetcode size={18} />;

export function Contact() {
  const [ref, visible] = useReveal();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!personal.email) return;
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (err) {
      void err;
    }
  };

  return (
    <section id="contact" className="section" ref={ref}>
      <div className={`container reveal${visible ? ' reveal--visible' : ''}`}>
        <span className="section-title-eyebrow">Contact</span>
        <h2 className="section-title">Let's build something together</h2>
        <p className="section-subtitle">
          Have an opportunity, hackathon, or just want to say hi? My inbox is open.
        </p>

        <div className="contact__inner">
          <p className="contact__lead">
            The fastest way to reach me is via email. I usually reply within a day.
          </p>

          {personal.email ? (
            <div className="contact__email">
              <MailIcon />
              <a href={`mailto:${personal.email}`}>{personal.email}</a>
            </div>
          ) : null}

          <div className="contact__actions">
            <a
              className="btn btn--primary"
              href={`mailto:${personal.email}`}
            >
              Send Email
            </a>
            {personal.email ? (
              <button
                type="button"
                className="btn btn--ghost"
                onClick={handleCopy}
              >
                {copied ? 'Copied!' : 'Copy Email'}
              </button>
            ) : null}
          </div>

          <div className="contact__socials">
            {personal.socials.github1 ? (
              <a href={personal.socials.github1} className="contact__social" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
              </a>
            ) : null}
            {personal.socials.github2 ? (
              <a href={personal.socials.github2} className="contact__social" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
              </a>
            ) : null}
            {personal.socials.linkedin ? (
              <a href={personal.socials.linkedin} className="contact__social" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
              </a>
            ) : null}
            {personal.socials.twitter ? (
              <a href={personal.socials.twitter} className="contact__social" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <TwitterIcon />
              </a>
            ) : null}
            {personal.socials.leetcode ? (
              <a href={personal.socials.leetcode} className="contact__social" aria-label="LeetCode" target="_blank" rel="noopener noreferrer">
                <LeetCodeIcon />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}