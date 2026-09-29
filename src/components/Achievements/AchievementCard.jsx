export function AchievementCard({ achievement }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-lg border border-[rgba(255,215,0,0.15)] bg-[rgba(26,28,46,0.45)] shadow-[0_4px_16px_rgba(0,0,0,0.4),0_12px_32px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[rgba(157,78,221,0.4)] hover:bg-[rgba(26,28,46,0.65)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),0_0_20px_rgba(157,78,221,0.25)]">
      {achievement.image ? (
        <div className="relative aspect-video overflow-hidden">
          <img
            src={achievement.image}
            alt={achievement.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          />
        </div>
      ) : null}
      <div className="flex flex-grow flex-col gap-2 p-6">
        <span className="bg-[linear-gradient(90deg,#FFD700,#00D9FF)] bg-clip-text text-[clamp(0.75rem,0.7rem+0.2vw,0.82rem)] font-semibold uppercase tracking-[0.08em] text-transparent">
          {achievement.competition}
        </span>
        <h3 className="font-[Literata,Georgia,serif] text-[clamp(1.05rem,1rem+0.3vw,1.15rem)] font-semibold text-[#FAFBFF]">
          {achievement.title}
        </h3>
        <span className="self-start rounded-full border border-[rgba(157,78,221,0.4)] bg-[rgba(157,78,221,0.15)] px-3 py-[0.3rem] text-[clamp(0.85rem,0.8rem+0.2vw,0.92rem)] text-[#9D4EDD] shadow-[0_0_20px_rgba(157,78,221,0.25)]">
          {achievement.position}
        </span>
        {achievement.description ? (
          <p className="text-[clamp(0.95rem,0.9rem+0.2vw,1rem)] text-[#B8C5D6]">
            {achievement.description}
          </p>
        ) : null}
        <div className="mt-auto flex items-center gap-3 text-[clamp(0.85rem,0.8rem+0.2vw,0.92rem)] text-[#B8C5D6]">
          {achievement.date ? <span>{achievement.date}</span> : null}
          {achievement.certificate ? (
            <a
              href={achievement.certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-[#FFD700] hover:text-[#00D9FF]"
            >
              View Certificate
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
