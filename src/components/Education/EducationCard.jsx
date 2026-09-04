import { useCountUp } from '../../hooks/useCountUp';
import { useReveal } from '../../hooks/useReveal';

export function EducationCard({ entry }) {
  const [ref, visible] = useReveal();

  const match = String(entry.score).match(/^([^0-9]*)([\d.]+)(.*)$/);
  const prefix = match ? match[1] : '';
  const rawNumber = match ? match[2] : '';
  const suffix = match ? match[3] : '';
  const number = match ? Number(rawNumber) : null;
  const decimals =
    match && rawNumber.includes('.') ? rawNumber.split('.')[1].length : 0;

  const display = useCountUp(number ?? 0, {
    active: visible && number !== null,
    duration: 1600,
    decimals,
  });

  return (
    <article className="education-card" ref={ref}>
      <div className="education-card__header">
        <h3 className="education-card__degree">{entry.degree}</h3>
        <span className="education-card__duration">{entry.duration}</span>
      </div>
      <p className="education-card__institution">{entry.institution}</p>
      <p className="education-card__score">
        {prefix}
        {number !== null ? display : ''}
        {suffix}
      </p>
      {entry.description ? (
        <p className="education-card__description">{entry.description}</p>
      ) : null}
    </article>
  );
}