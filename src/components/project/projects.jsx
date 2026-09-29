import { projects } from '../../data/projects';
import { Projectcard } from './Projectcard';
import { useReveal } from '../../hooks/useReveal';

export function Projects() {
  const [ref, visible] = useReveal();

  return (
    <section
      id="projects"
      ref={ref}
      className="relative scroll-mt-[72px] overflow-hidden bg-[#0A0E27] py-[clamp(2.5rem,5vw,4rem)]"
    >
      <div
        className={`mx-auto w-full max-w-[1120px] px-6 max-[480px]:px-4 relative z-[1] transition-all duration-300 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
        }`}
      >
        <span className="mb-3 inline-block text-[clamp(0.75rem,0.7rem+0.2vw,0.82rem)] font-semibold uppercase tracking-[0.15em] text-[#FFD700] [text-shadow:0_0_12px_rgba(255,215,0,0.25)]">
          Projects
        </span>
        <h2 className="mb-2 text-center font-[Literata,Georgia,serif] text-[clamp(1.4rem,1.1rem+1.2vw,1.85rem)] font-semibold text-[#FAFBFF]">
          Things I&apos;ve built
        </h2>
        <p className="mb-10 text-center text-[clamp(0.95rem,0.9rem+0.2vw,1rem)] text-[#B8C5D6]">
          A selection of recent work in web, ML, and APIs.
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Projectcard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
