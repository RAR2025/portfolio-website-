export function ProfileCard({ profile, stats, isLive }) {
  const Logo = profile.logo;

  return (
    <article className="profile-card">
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
              <div className="profile-card__stat-value">{stat.value}</div>
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
