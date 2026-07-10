export function EducationCard({ entry }) {
  return (
    <article className="education-card">
      <div className="education-card__header">
        <h3 className="education-card__degree">{entry.degree}</h3>
        <span className="education-card__duration">{entry.duration}</span>
      </div>
      <p className="education-card__institution">{entry.institution}</p>
      <p className="education-card__score">{entry.score}</p>
      {entry.description ? (
        <p className="education-card__description">{entry.description}</p>
      ) : null}
    </article>
  );
}