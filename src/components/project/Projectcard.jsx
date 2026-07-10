const FALLBACK_THUMB =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240"><rect width="400" height="240" fill="#cbd5e1"/><text x="200" y="130" text-anchor="middle" font-family="Poppins,sans-serif" font-size="18" fill="#475569">Project Preview</text></svg>`
  );

export function Projectcard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__thumb">
        <img
          src={project.thumbnail || FALLBACK_THUMB}
          alt={`${project.title} preview`}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.src = FALLBACK_THUMB;
          }}
        />
      </div>
      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>

        {project.tech && project.tech.length > 0 ? (
          <div className="project-card__tags">
            {project.tech.map((tag) => (
              <span key={tag} className="project-tag">
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        <div className="project-card__actions">
          {project.github ? (
            <a
              className="btn btn--ghost btn--sm"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          ) : null}
          {project.live ? (
            <a
              className="btn btn--primary btn--sm"
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}