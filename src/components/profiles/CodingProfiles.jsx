import { useEffect, useState } from 'react';
import { profiles } from '../../data/profiles';
import { ProfileCard } from './ProfileCard';
import { useReveal } from '../../hooks/useReveal';

export function CodingProfiles() {
  const [ref, visible] = useReveal();
  const [liveStats, setLiveStats] = useState({});

  useEffect(() => {
    let active = true;

    profiles.forEach((profile) => {
      if (!profile.api) return;

      fetch(profile.api.url)
        .then((res) => {
          if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
          return res.json();
        })
        .then((data) => {
          if (!active) return;
          setLiveStats((prev) => ({ ...prev, [profile.id]: profile.api.stats(data) }));
        })
        .catch(() => {
          if (!active) return;
        });
    });

    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="profiles" className="section" ref={ref}>
      <div className={`container reveal${visible ? ' reveal--visible' : ''}`}>
        <span className="section-title-eyebrow">Coding Profiles</span>
        <h2 className="section-title">Where I practise & compete</h2>
        <p className="section-subtitle">
          Track records on competitive programming and open-source platforms.
        </p>

        <div className="profiles__grid">
          {profiles.map((profile) => {
            const stats = profile.api
              ? (liveStats[profile.id] ?? profile.fallback)
              : profile.stats;
            const isLive = profile.api && Boolean(liveStats[profile.id]);

            return (
              <ProfileCard key={profile.id} profile={profile} stats={stats} isLive={isLive} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
