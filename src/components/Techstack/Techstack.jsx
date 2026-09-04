import { skills } from '../../data/skills';
import { SkillCard } from './SkillCard';
import { useReveal } from '../../hooks/useReveal';

export function Techstack() {
  const [ref, visible] = useReveal();

  return (
    <section id="skills" className="section" ref={ref}>
      <div className={`container reveal${visible ? ' reveal--visible' : ''}`}>
        <span className="section-title-eyebrow">Tech Stack</span>
        <h2 className="section-title">Tools I work with</h2>
        <p className="section-subtitle">
          A snapshot of languages, frameworks, and areas I'm actively building in.
        </p>

        <div className="skills__grid">
          {skills.map((group) => (
            <div className="skills__category" key={group.category}>
              <h3 className="skills__category-title">{group.category}</h3>
              <ul className="skills__list">
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