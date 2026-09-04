import { useEffect, useState } from 'react';
import documentIcon from '../../assets/icons/document.svg';

function isTouchOrSmallScreen() {
  if (typeof window === 'undefined') return false;
  const touch = navigator.maxTouchPoints > 0;
  const small = window.matchMedia('(max-width: 768px)').matches;
  return touch || small;
}

export function Documentcard({ document }) {
  const isPdf = document.thumbnail?.toLowerCase().endsWith('.pdf');
  const [hideInlinePdf, setHideInlinePdf] = useState(false);

  useEffect(() => {
    if (!isPdf) return;
    if (typeof navigator === 'undefined') return;
    const ua = navigator.userAgent;
    const isIOS =
      /iPad|iPhone|iPod/.test(ua) ||
      (ua.includes('Mac') && navigator.maxTouchPoints > 1);
    const isWebkit = /WebKit/.test(ua);
    const isChrome = /CriOS/.test(ua);
    const isFirefox = /FxiOS/.test(ua);
    const isIosSafari = isIOS && isWebkit && !isChrome && !isFirefox;
    setHideInlinePdf(isIosSafari || isTouchOrSmallScreen());
  }, [isPdf]);

  const showFallback = isPdf && hideInlinePdf;

  return (
    <article className="document-card">
      <div className="document-card__thumb">
        {document.thumbnail && !showFallback ? (
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
        ) : showFallback ? (
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
