import { education } from '../../data/education';
import { EducationCard } from './EducationCard';
import { useReveal } from '../../hooks/useReveal';

export function Education() {
  const [ref, visible] = useReveal();

  return (
    <section id="education" className="section" ref={ref}>
      <div className={`container reveal${visible ? ' reveal--visible' : ''}`}>
        <span className="section-title-eyebrow">Education</span>
        <h2 className="section-title">Academic background</h2>
        <p className="section-subtitle">
          My learning journey so far — from school to university.
        </p>

        <div className="education__list">
          {education.map((entry) => (
            <EducationCard key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
}