import { useState } from 'react';
import { documents } from '../../data/documents';
import { Documentcard } from './Documentcard';
import { useReveal } from '../../hooks/useReveal';

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'Marksheet', label: 'Marksheets' },
  { key: 'Certificate', label: 'Certificates' },
];

export function Document() {
  const [ref, visible] = useReveal();
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? documents
    : documents.filter((d) => d.type === activeFilter);

  return (
    <section id="documents" className="section section--md section--alt" ref={ref}>
      <div className={`container reveal${visible ? ' reveal--visible' : ''}`}>
        <span className="section-title-eyebrow">Documents</span>
        <h2 className="section-title section-title--left">Marksheets & more</h2>
        <p className="section-subtitle section-subtitle--left">
          Academic documents and credentials. Click to view or download.
        </p>

        <div className="documents__filters">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              className={`btn btn--sm ${activeFilter === f.key ? 'btn--primary' : 'btn--ghost'}`}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="documents__grid">
          {filtered.map((document) => (
            <Documentcard key={document.id} document={document} />
          ))}
        </div>
      </div>
    </section>
  );
}