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
    <article className="group relative flex flex-col overflow-hidden rounded-lg border border-[rgba(255,215,0,0.15)] bg-[rgba(26,28,46,0.45)] shadow-[0_4px_16px_rgba(0,0,0,0.4),0_12px_32px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[rgba(0,217,255,0.5)] hover:bg-[rgba(26,28,46,0.65)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),0_0_20px_rgba(0,217,255,0.2)]">
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#1A1C2E]">
        {document.thumbnail && !showFallback ? (
          isPdf ? (
            <iframe
              src={`${document.thumbnail}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
              title={`${document.title} preview`}
              loading="lazy"
              className="pointer-events-none block h-full w-full overflow-hidden border-0 transition-transform duration-300 group-hover:scale-[1.03]"
            />
          ) : (
            <img
              src={document.thumbnail}
              alt={`${document.title} preview`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          )
        ) : showFallback ? (
          <a
            href={document.fileUrl || document.thumbnail}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${document.title} PDF`}
            className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[linear-gradient(135deg,rgba(0,217,255,0.08),#1A1C2E)] p-3 text-center text-[#FAFBFF]"
          >
            <img src={documentIcon} alt="" className="h-12 w-12 object-contain opacity-90" />
            <span className="bg-[linear-gradient(90deg,#FFD700,#00D9FF)] bg-clip-text text-[clamp(0.85rem,0.8rem+0.2vw,0.92rem)] font-semibold text-transparent">
              Tap to open PDF
            </span>
          </a>
        ) : null}
      </div>

      <div className="flex flex-grow flex-col gap-2 p-4">
        <span className="self-start rounded-full border border-[rgba(255,215,0,0.25)] bg-[rgba(255,215,0,0.12)] px-[0.6rem] py-[0.2rem] text-[clamp(0.75rem,0.7rem+0.2vw,0.82rem)] font-semibold uppercase tracking-[0.06em] text-[#FFD700]">
          {document.type}
        </span>
        <h3 className="flex-grow font-[Literata,Georgia,serif] text-[clamp(0.95rem,0.9rem+0.2vw,1rem)] font-semibold text-[#FAFBFF]">
          {document.title}
        </h3>

        {document.fileUrl && (
          <a
            href={document.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border-[1.5px] border-[rgba(255,215,0,0.3)] bg-transparent px-[0.9rem] py-[0.45rem] text-[clamp(0.85rem,0.8rem+0.2vw,0.92rem)] font-semibold text-[#B8C5D6] transition-all hover:border-[rgba(0,217,255,0.6)] hover:bg-[rgba(0,217,255,0.1)] hover:text-[#FAFBFF]"
          >
            View / Download
          </a>
        )}
      </div>
    </article>
  );
}
