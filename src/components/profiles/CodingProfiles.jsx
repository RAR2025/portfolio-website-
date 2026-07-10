import { profiles } from '../../data/profiles';
import { ProfileCard } from './ProfileCard';
import { useReveal } from '../../hooks/useReveal';

export function CodingProfiles() {
  const [ref, visible] = useReveal();

  return (
    <section id="profiles" className="section" ref={ref}>
      <div className={`container reveal${visible ? ' reveal--visible' : ''}`}>
        <span className="section-title-eyebrow">Coding Profiles</span>
        <h2 className="section-title">Where I practise & compete</h2>
        <p className="section-subtitle">
          Track records on competitive programming and open-source platforms.
        </p>

        <div className="profiles__grid">
          {profiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      </div>
    </section>
  );
}