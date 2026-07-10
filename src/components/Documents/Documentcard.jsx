export function Documentcard({ document }) {
  return (
    <article className="document-card">
      <div className="document-card__thumb">
        {document.thumbnail ? (
          <img
            src={document.thumbnail}
            alt={`${document.title} preview`}
            loading="lazy"
          />
        ) : null}
      </div>
      <div className="document-card__body">
        <span className="document-card__type">{document.type}</span>
        <h3 className="document-card__title">{document.title}</h3>
        {document.fileUrl ? (
          <a
            className="btn btn--ghost btn--sm"
            href={document.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View / Download
          </a>
        ) : null}
      </div>
    </article>
  );
}