import { achievements } from '../../data/achievements';
import { AchievementCard } from './AchievementCard';
import { useReveal } from '../../hooks/useReveal';

export function Achievements() {
  const [ref, visible] = useReveal();

  return (
    <section id="achievements" className="section" ref={ref}>
      <div className={`container reveal${visible ? ' reveal--visible' : ''}`}>
        <span className="section-title-eyebrow">Achievements</span>
        <h2 className="section-title">Milestones & awards</h2>
        <p className="section-subtitle">
          Hackathons, contests, and competitions I'm proud of.
        </p>

        <div className="achievements__grid">
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </div>
    </section>
  );
}