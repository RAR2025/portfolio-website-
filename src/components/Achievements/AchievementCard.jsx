export function AchievementCard({ achievement }) {
  return (
    <article className="achievement-card">
      {achievement.image ? (
        <div className="achievement-card__image">
          <img src={achievement.image} alt={achievement.title} loading="lazy" />
        </div>
      ) : null}
      <div className="achievement-card__body">
        <span className="achievement-card__competition">
          {achievement.competition}
        </span>
        <h3 className="achievement-card__title">{achievement.title}</h3>
        <span className="achievement-card__position">{achievement.position}</span>
        {achievement.description ? (
          <p className="achievement-card__description">
            {achievement.description}
          </p>
        ) : null}
        <div className="achievement-card__date">
          {achievement.date ? <span>{achievement.date}</span> : null}
          {achievement.certificate ? (
            <a
              href={achievement.certificate}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: '0.75rem', color: 'var(--primary)' }}
            >
              View Certificate
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}