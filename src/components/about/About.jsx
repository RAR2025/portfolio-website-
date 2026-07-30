import { personal } from '../../data/personal';
import { useReveal } from '../../hooks/useReveal';

export function About() {
  const [ref, visible] = useReveal();

  return (
    <section id="about" className="section section--md section--alt" ref={ref}>
      <div className={`container reveal${visible ? ' reveal--visible' : ''}`}>
        <span className="section-title-eyebrow">About</span>
        <h2 className="section-title section-title--left">Behind the Code</h2>
        <p className="section-subtitle section-subtitle--left">
          Curious learner, builder, and lifelong student of computer science.
        </p>
        <div className="about__grid">

          <div className="about__bio">
            {personal.bio.map((paragraph, index) => {
              const dotIndex = paragraph.indexOf('. ');
              const hasLead = dotIndex !== -1 && dotIndex < 120;
              const lead = hasLead ? paragraph.slice(0, dotIndex + 1) : '';
              const rest = hasLead ? paragraph.slice(dotIndex + 1) : paragraph;
              return (
                <p key={index}>
                  {hasLead ? <span className="about__bio-lead">{lead}</span> : null}
                  {rest}
                </p>
              );
            })}
          </div>

          <aside className="about__sidebar">

            <div className="about__panel">
              <h3 className="about__subhead">Interests</h3>

              <div className="about__chips">
                {personal.interests.map((interest) => (
                  <span key={interest} className="chip">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="about__panel">
              <h3 className="about__subhead">Strengths</h3>

              <div className="about__chips">
                {personal.strengths.map((strength) => (
                  <span key={strength} className="chip">
                    {strength}
                  </span>
                ))}
              </div>
            </div>

            <div className="about__panel">
              <h3 className="about__subhead">Future Goals</h3>
              <p>{personal.futureGoals}</p>
            </div>

          </aside>

        </div>
      </div>
    </section>
  );
}