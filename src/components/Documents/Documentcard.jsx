import { useEffect, useState } from 'react';
import documentIcon from '../../assets/icons/document.svg';

export function Documentcard({ document }) {
  const isPdf = document.thumbnail?.toLowerCase().endsWith('.pdf');
  const [isIosSafari, setIsIosSafari] = useState(false);

  useEffect(() => {
    if (typeof navigator === 'undefined') return;
    const ua = navigator.userAgent;
    const isIOS =
      /iPad|iPhone|iPod/.test(ua) ||
      (ua.includes('Mac') && navigator.maxTouchPoints > 1);
    const isWebkit = /WebKit/.test(ua);
    const isChrome = /CriOS/.test(ua);
    const isFirefox = /FxiOS/.test(ua);
    setIsIosSafari(isIOS && isWebkit && !isChrome && !isFirefox);
  }, []);

  const hideInlinePdf = isPdf && isIosSafari;

  return (
    <article className="document-card">
      <div className="document-card__thumb">
        {document.thumbnail && !hideInlinePdf ? (
          isPdf ? (
            <iframe
              src={`${document.thumbnail}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
              title={`${document.title} preview`}
              loading="lazy"
              className="document-card__pdf"
            />
          ) : (
            <img
              src={document.thumbnail}
              alt={`${document.title} preview`}
              loading="lazy"
            />
          )
        ) : hideInlinePdf ? (
          <a
            className="document-card__pdf-fallback"
            href={document.fileUrl || document.thumbnail}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${document.title} PDF`}
          >
            <img src={documentIcon} alt="" className="document-card__pdf-icon" />
            <span className="document-card__pdf-cta">Tap to open PDF</span>
          </a>
        ) : null}
      </div>

      <div className="document-card__body">
        <span className="document-card__type">{document.type}</span>
        <h3 className="document-card__title">{document.title}</h3>

        {document.fileUrl && (
          <a
            className="btn btn--ghost btn--sm"
            href={document.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View / Download
          </a>
        )}
      </div>
    </article>
  );
}
