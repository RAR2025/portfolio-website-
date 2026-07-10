export function SkillCard({ skill }) {
  return (
    <li className="skill-card" title={skill.name}>
      {skill.name}
    </li>
  );
}