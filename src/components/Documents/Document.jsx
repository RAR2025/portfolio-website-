import { documents } from '../../data/documents';
import { Documentcard } from './Documentcard';
import { useReveal } from '../../hooks/useReveal';

export function Document() {
  const [ref, visible] = useReveal();

  return (
    <section id="documents" className="section section--md" ref={ref}>
      <div className={`container reveal${visible ? ' reveal--visible' : ''}`}>
        <span className="section-title-eyebrow">Documents</span>
        <h2 className="section-title section-title--left">Certificates & more</h2>
        <p className="section-subtitle section-subtitle--left">
          Academic documents and credentials. Click to view or download.
        </p>

        <div className="documents__grid">
          {documents.map((document) => (
            <Documentcard key={document.id} document={document} />
          ))}
        </div>
      </div>
    </section>
  );
}