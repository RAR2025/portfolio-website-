import { skills } from '../../data/skills';
import { SkillCard } from './SkillCard';
import { useReveal } from '../../hooks/useReveal';

export function Techstack() {
  const [ref, visible] = useReveal();

  return (
    <section
      id="skills"
      ref={ref}
      className="relative scroll-mt-[72px] overflow-hidden bg-[#0A0E27] py-[clamp(2.5rem,5vw,4rem)]"
    >
      <div
        className={`mx-auto w-full max-w-[1120px] px-6 max-[480px]:px-4 relative z-[1] transition-all duration-300 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
        }`}
      >
        <span className="mb-3 inline-block text-[clamp(0.75rem,0.7rem+0.2vw,0.82rem)] font-semibold uppercase tracking-[0.15em] text-[#FFD700] [text-shadow:0_0_12px_rgba(255,215,0,0.25)]">
          Tech Stack
        </span>
        <h2 className="mb-2 text-center font-[Literata,Georgia,serif] text-[clamp(1.4rem,1.1rem+1.2vw,1.85rem)] font-semibold text-[#FAFBFF]">
          Tools I work with
        </h2>
        <p className="mb-10 text-center text-[clamp(0.95rem,0.9rem+0.2vw,1rem)] text-[#B8C5D6]">
          A snapshot of languages, frameworks, and areas I&apos;m actively building in.
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="relative overflow-hidden rounded-lg border border-[rgba(255,215,0,0.15)] bg-[rgba(26,28,46,0.45)] p-6 shadow-[0_4px_16px_rgba(0,0,0,0.4),0_12px_32px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[rgba(0,217,255,0.5)] hover:bg-[rgba(26,28,46,0.65)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),0_0_20px_rgba(0,217,255,0.2)]"
            >
              <h3 className="mb-4 bg-[linear-gradient(90deg,#FFD700,#00D9FF)] bg-clip-text text-[clamp(0.85rem,0.8rem+0.2vw,0.92rem)] font-semibold uppercase tracking-[0.05em] text-transparent">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <SkillCard key={skill.id} skill={skill} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
