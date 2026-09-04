import { useNavigate } from 'react-router-dom';
import { personal } from '../../data/personal';
import { blogs } from '../../data/blogs';
import { useReveal } from '../../hooks/useReveal';
import { BlogCard } from './BlogCard';

const BLOG_PREVIEW_COUNT = 3;

export function About() {
  const [ref, visible] = useReveal();
  const navigate = useNavigate();
  const previewBlogs = blogs.slice(0, BLOG_PREVIEW_COUNT);
  const hasMoreBlogs = blogs.length > BLOG_PREVIEW_COUNT;

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
              {previewBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>

            {hasMoreBlogs && (
              <button
                type="button"
                className="btn btn--ghost btn--sm about__blog-all"
                onClick={() => navigate('/blogs')}
              >
                View all blogs &rarr;
              </button>
            )}
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
              <h3 className="about__subhead">Future Goal</h3>
              <p>{personal.futureGoals}</p>
            </div>

          </aside>

        </div>
      </div>
    </section>
  );
}
