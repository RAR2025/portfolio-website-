import { projects } from '../../data/projects';
import { Projectcard } from './Projectcard';
import { useReveal } from '../../hooks/useReveal';

export function Projects() {
  const [ref, visible] = useReveal();

  return (
    <section id="projects" className="section section--alt" ref={ref}>
      <div className={`container reveal${visible ? ' reveal--visible' : ''}`}>
        <span className="section-title-eyebrow">Projects</span>
        <h2 className="section-title">Things I've built</h2>
        <p className="section-subtitle">
          A selection of recent work in web, ML, and APIs.
        </p>

        <div className="projects__grid">
          {projects.map((project) => (
            <Projectcard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}