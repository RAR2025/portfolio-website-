export function SkillCard({ skill }) {
  return (
    <li
      title={skill.name}
      className="inline-flex cursor-default items-center gap-[0.4rem] rounded-full border border-[rgba(255,215,0,0.12)] bg-[#12131F] px-[0.95rem] py-[0.45rem] text-[clamp(0.85rem,0.8rem+0.2vw,0.92rem)] font-medium text-[#FAFBFF] transition-all duration-300 hover:-translate-y-[2px] hover:border-[rgba(0,217,255,0.4)] hover:bg-[rgba(255,215,0,0.1)] hover:text-[#FFD700] hover:shadow-[0_0_20px_rgba(0,217,255,0.2)]"
    >
      {skill.name}
    </li>
  );
}
