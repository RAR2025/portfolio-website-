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
  const [ripples, setRipples] = useState([]);

  const addRipple = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const ripple = {
      id: Date.now() + Math.random(),
      x: event.clientX - rect.left - 20,
      y: event.clientY - rect.top - 20,
    };
    setRipples((prev) => [...prev, ripple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
    }, 650);
  };

  const handleCopy = async (event) => {
    if (!personal.email) return;
    addRipple(event);
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (err) {
      void err;
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative scroll-mt-[72px] overflow-hidden bg-[#0A0E27] py-[clamp(3.5rem,7vw,5rem)]"
    >
      <div
        className={`mx-auto w-full max-w-[1120px] px-6 max-[480px]:px-4 relative z-[1] transition-all duration-300 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
        }`}
      >
        <span className="mb-3 inline-block text-[clamp(0.75rem,0.7rem+0.2vw,0.82rem)] font-semibold uppercase tracking-[0.15em] text-[#FFD700] [text-shadow:0_0_12px_rgba(255,215,0,0.25)]">
          Contact
        </span>
        <h2 className="mb-2 text-center font-[Literata,Georgia,serif] text-[clamp(1.4rem,1.1rem+1.2vw,1.85rem)] font-semibold text-[#FAFBFF]">
          Let&apos;s build something together
        </h2>
        <p className="mb-10 text-center text-[clamp(0.95rem,0.9rem+0.2vw,1rem)] text-[#B8C5D6]">
          Have an opportunity, hackathon, or just want to say hi? My inbox is open.
        </p>

        <div className="relative mx-auto max-w-[640px] overflow-hidden rounded-xl border border-[rgba(255,215,0,0.15)] bg-[rgba(26,28,46,0.45)] p-[clamp(2rem,5vw,3rem)] text-center shadow-[0_4px_16px_rgba(0,0,0,0.4),0_12px_32px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all hover:border-[rgba(0,217,255,0.5)] hover:bg-[rgba(26,28,46,0.65)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),0_0_20px_rgba(0,217,255,0.2)]">
          <p className="relative z-[1] mb-5 text-[clamp(0.95rem,0.9rem+0.2vw,1rem)] text-[#B8C5D6]">
            The fastest way to reach me is via email. I usually reply within a day.
          </p>

          {personal.email ? (
            <div className="relative z-[1] mb-5 inline-flex items-center gap-2 break-all bg-[linear-gradient(90deg,#FFD700,#00D9FF)] bg-clip-text text-[clamp(1.05rem,1rem+0.3vw,1.15rem)] font-semibold text-transparent">
              <span className="text-[#FFD700]">
                <MailIcon />
              </span>
              <a href={`mailto:${personal.email}`}>{personal.email}</a>
            </div>
          ) : null}

          <div className="relative z-[1] mb-5 flex flex-wrap justify-center gap-3">
            {personal.email ? (
              <button
                type="button"
                onClick={handleCopy}
                className={`relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full border px-[1.4rem] py-[0.7rem] font-semibold transition-all duration-300 hover:-translate-y-[1px] active:scale-[0.97] ${
                  copied
                    ? 'border-[rgba(6,214,160,0.6)] bg-[rgba(6,214,160,0.2)] text-[#06D6A0] shadow-[0_0_20px_rgba(6,214,160,0.3)]'
                    : 'border-[1.5px] border-[rgba(255,215,0,0.3)] bg-transparent text-[#B8C5D6] hover:border-[rgba(0,217,255,0.6)] hover:bg-[rgba(0,217,255,0.1)] hover:text-[#FAFBFF]'
                }`}
              >
                {copied ? 'Copied!' : 'Copy Email'}
                {ripples.map((ripple) => (
                  <span
                    key={ripple.id}
                    style={{ left: ripple.x, top: ripple.y }}
                    className="pointer-events-none absolute h-10 w-10 rounded-full bg-white/35 animate-[ripple_600ms_ease-out_forwards]"
                  />
                ))}
              </button>
            ) : null}
          </div>

          <div className="relative z-[1] flex justify-center gap-3">
            {personal.socials.github1 ? (
              <a href={personal.socials.github1} aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="relative inline-flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[rgba(255,215,0,0.15)] text-[#B8C5D6] transition-all duration-300 hover:-translate-y-[2px] hover:scale-105 hover:border-[#e6edf3] hover:text-[#e6edf3] hover:shadow-[0_0_20px_rgba(230,237,243,0.2)]">
                <GitHubIcon />
                <span className="pointer-events-none absolute -bottom-[1.8rem] left-1/2 whitespace-nowrap -translate-x-1/2 translate-y-[6px] text-[0.7rem] font-semibold text-[#FAFBFF] opacity-0 transition-all hover:translate-y-0 hover:opacity-100">
                  GitHub
                </span>
              </a>
            ) : null}
            {personal.socials.github2 ? (
              <a href={personal.socials.github2} aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="relative inline-flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[rgba(255,215,0,0.15)] text-[#B8C5D6] transition-all duration-300 hover:-translate-y-[2px] hover:scale-105 hover:border-[#e6edf3] hover:text-[#e6edf3]">
                <GitHubIcon />
                <span className="pointer-events-none absolute -bottom-[1.8rem] left-1/2 whitespace-nowrap -translate-x-1/2 text-[0.7rem] font-semibold text-[#FAFBFF] opacity-0">
                  GitHub
                </span>
              </a>
            ) : null}
            {personal.socials.linkedin ? (
              <a href={personal.socials.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="relative inline-flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[rgba(255,215,0,0.15)] text-[#B8C5D6] transition-all duration-300 hover:-translate-y-[2px] hover:border-[#0a66c2] hover:text-[#0a66c2] hover:shadow-[0_0_20px_rgba(10,102,194,0.3)]">
                <LinkedInIcon />
                <span className="pointer-events-none absolute -bottom-[1.8rem] left-1/2 whitespace-nowrap -translate-x-1/2 text-[0.7rem] font-semibold text-[#FAFBFF] opacity-0">
                  LinkedIn
                </span>
              </a>
            ) : null}
            {personal.socials.twitter ? (
              <a href={personal.socials.twitter} aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="relative inline-flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[rgba(255,215,0,0.15)] text-[#B8C5D6] transition-all duration-300 hover:-translate-y-[2px] hover:border-[#1d9bf0] hover:text-[#1d9bf0] hover:shadow-[0_0_20px_rgba(29,155,240,0.3)]">
                <TwitterIcon />
                <span className="pointer-events-none absolute -bottom-[1.8rem] left-1/2 whitespace-nowrap -translate-x-1/2 text-[0.7rem] font-semibold text-[#FAFBFF] opacity-0">
                  Twitter
                </span>
              </a>
            ) : null}
            {personal.socials.leetcode ? (
              <a href={personal.socials.leetcode} aria-label="LeetCode" target="_blank" rel="noopener noreferrer" className="relative inline-flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[rgba(255,215,0,0.15)] text-[#B8C5D6] transition-all duration-300 hover:-translate-y-[2px] hover:border-[#FFD700] hover:text-[#FFD700] hover:shadow-[0_0_20px_rgba(255,215,0,0.3)]">
                <LeetCodeIcon />
                <span className="pointer-events-none absolute -bottom-[1.8rem] left-1/2 whitespace-nowrap -translate-x-1/2 text-[0.7rem] font-semibold text-[#FAFBFF] opacity-0">
                  LeetCode
                </span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
