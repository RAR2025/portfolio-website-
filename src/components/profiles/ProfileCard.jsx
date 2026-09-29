import { useCountUp } from '../../hooks/useCountUp';
import { useReveal } from '../../hooks/useReveal';

function StatValue({ value, active }) {
  const raw = String(value).trim();
  const numeric = /^\d+(\.\d+)?$/.test(raw);
  const target = Number(raw);
  const decimals = numeric && raw.includes('.') ? 2 : 0;
  const display = useCountUp(numeric ? target : 0, {
    active: active && numeric,
    decimals,
  });

  if (!numeric) return value;
  return display;
}

export function ProfileCard({ profile, stats, isLive }) {
  const Logo = profile.logo;
  const [ref, visible] = useReveal();

  return (
    <article
      ref={ref}
      className="relative flex flex-col gap-4 overflow-hidden rounded-xl border border-[rgba(255,215,0,0.15)] bg-[rgba(26,28,46,0.45)] p-6 shadow-[0_4px_16px_rgba(0,0,0,0.4),0_12px_32px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[rgba(0,217,255,0.5)] hover:bg-[rgba(26,28,46,0.65)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),0_0_20px_rgba(255,215,0,0.3)]"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg text-[clamp(1.4rem,1.1rem+1.2vw,1.85rem)]">
          {Logo && <Logo size={42} />}
        </div>

        <div>
          <h3 className="font-[Literata,Georgia,serif] text-[clamp(1.05rem,1rem+0.3vw,1.15rem)] font-bold text-[#FAFBFF]">
            {profile.platform}
          </h3>
          <p className="text-[clamp(0.85rem,0.8rem+0.2vw,0.92rem)] text-[#B8C5D6]">
            @{profile.username}
          </p>
        </div>

        {isLive && (
          <span className="ml-auto inline-flex items-center gap-[6px] rounded-full border border-[rgba(6,214,160,0.5)] bg-[rgba(6,214,160,0.2)] px-[0.6rem] py-[0.25rem] text-[clamp(0.75rem,0.7rem+0.2vw,0.82rem)] font-semibold uppercase tracking-[0.08em] text-[#06D6A0]">
            <span className="h-2 w-2 rounded-full bg-[#06D6A0] animate-[livePulse_2s_infinite]" />
            Live
          </span>
        )}
      </div>

      {profile.description && (
        <p className="flex-grow text-[clamp(0.95rem,0.9rem+0.2vw,1rem)] text-[#B8C5D6]">
          {profile.description}
        </p>
      )}

      {stats?.length > 0 && (
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="bg-[linear-gradient(90deg,#FFD700,#00D9FF)] bg-clip-text text-[clamp(1.4rem,1.1rem+1.2vw,1.85rem)] font-extrabold leading-none tracking-[-0.02em] text-transparent">
                <StatValue value={stat.value} active={visible} />
              </div>
              <div className="mt-2 text-[clamp(0.75rem,0.7rem+0.2vw,0.82rem)] uppercase tracking-[0.1em] text-[#B8C5D6]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      )}

      <a
        href={profile.profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border-[1.5px] border-[rgba(255,215,0,0.3)] bg-transparent px-[0.9rem] py-[0.45rem] text-[clamp(0.85rem,0.8rem+0.2vw,0.92rem)] font-semibold text-[#B8C5D6] transition-all hover:border-[rgba(0,217,255,0.6)] hover:bg-[rgba(0,217,255,0.1)] hover:text-[#FAFBFF]"
      >
        Visit Profile
      </a>
    </article>
  );
}
