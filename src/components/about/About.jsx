import { personal } from '../../data/personal';
import { blogs } from '../../data/blogs';
import { useReveal } from '../../hooks/useReveal';
import { BlogCard } from './BlogCard';

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

          <div className="about__blogs">
            <h3 className="about__subhead">Blogs</h3>
            <div className="about__blog-list">
              {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
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
