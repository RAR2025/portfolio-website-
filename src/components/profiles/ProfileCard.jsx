import { useCountUp } from '../../hooks/useCountUp';
import { useReveal } from '../../hooks/useReveal';

function StatValue({ value, active }) {
  const raw = String(value).trim();
  const numeric = /^\d+(\.\d+)?$/.test(raw);
  const target = Number(raw);
  const decimals = numeric && raw.includes('.') ? 2 : 0;
  const display = useCountUp(numeric ? target : 0, {
    active: active && numeric,
    decimals,
  });

  if (!numeric) return value;
  return display;
}

export function ProfileCard({ profile, stats, isLive }) {
  const Logo = profile.logo;
  const [ref, visible] = useReveal();

  return (
    <article className="profile-card" ref={ref}>
      <div className="profile-card__header">
        <div className="profile-card__logo">
          {Logo && <Logo size={42} />}
        </div>

        <div>
          <h3 className="profile-card__platform">{profile.platform}</h3>
          <p className="profile-card__username">@{profile.username}</p>
        </div>

        {isLive && (
          <span className="profile-card__live">
            <span className="profile-card__live-dot" />
            Live
          </span>
        )}
      </div>

      {profile.description && (
        <p className="profile-card__description">
          {profile.description}
        </p>
      )}

      {stats?.length > 0 && (
        <div className="profile-card__stats">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="profile-card__stat-value">
                <StatValue value={stat.value} active={visible} />
              </div>
              <div className="profile-card__stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      )}

      <a
        className="btn btn--ghost btn--sm"
        href={profile.profileUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Profile
      </a>
    </article>
  );
}