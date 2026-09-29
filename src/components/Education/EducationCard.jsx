import { useCountUp } from '../../hooks/useCountUp';
import { useReveal } from '../../hooks/useReveal';

export function EducationCard({ entry }) {
  const [ref, visible] = useReveal();

  const match = String(entry.score).match(/^([^0-9]*)([\d.]+)(.*)$/);
  const prefix = match ? match[1] : '';
  const rawNumber = match ? match[2] : '';
  const suffix = match ? match[3] : '';
  const number = match ? Number(rawNumber) : null;
  const decimals =
    match && rawNumber.includes('.') ? rawNumber.split('.')[1].length : 0;

  const display = useCountUp(number ?? 0, {
    active: visible && number !== null,
    duration: 1600,
    decimals,
  });

  return (
    <article
      ref={ref}
      className="group relative grid grid-cols-1 gap-3 overflow-hidden rounded-lg border border-[rgba(255,215,0,0.15)] bg-[rgba(26,28,46,0.45)] p-6 shadow-[0_4px_16px_rgba(0,0,0,0.4),0_12px_32px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[rgba(0,217,255,0.5)] hover:bg-[rgba(26,28,46,0.65)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.3),0_0_30px_rgba(0,217,255,0.2)]"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="font-[Literata,Georgia,serif] text-[clamp(1.05rem,1rem+0.3vw,1.15rem)] font-semibold text-[#FAFBFF]">
          {entry.degree}
        </h3>
        <span className="rounded-full border border-[rgba(255,215,0,0.3)] bg-[rgba(255,215,0,0.12)] px-3 py-1 text-[clamp(0.85rem,0.8rem+0.2vw,0.92rem)] font-semibold text-[#FFD700]">
          {entry.duration}
        </span>
      </div>
      <p className="font-medium text-[#FAFBFF]">{entry.institution}</p>
      <p className="mt-1 text-[clamp(0.85rem,0.8rem+0.2vw,0.92rem)] text-[#7A8596]">
        {prefix}
        {number !== null ? display : ''}
        {suffix}
      </p>
      {entry.description ? (
        <p className="mt-2 text-[clamp(0.95rem,0.9rem+0.2vw,1rem)] text-[#FAFBFF]">
          {entry.description}
        </p>
      ) : null}
    </article>
  );
}
