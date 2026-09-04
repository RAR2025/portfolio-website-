import { useNavigate } from 'react-router-dom';

export function BlogCard({ blog }) {
  const navigate = useNavigate();

  return (
    <article className="about__blog-card" onClick={() => navigate(`/blog/${blog.id}`)}>
      <div className="about__blog-card-header">
        <span className="about__blog-card-date">{blog.date}</span>
        <div className="about__blog-card-tags">
          {blog.tags.map((tag) => (
            <span key={tag} className="chip chip--sm">{tag}</span>
          ))}
        </div>
      </div>
      <h3 className="about__blog-card-title">{blog.title}</h3>
      <p className="about__blog-card-excerpt">{blog.excerpt}</p>
      <span className="about__blog-card-link">Read more &rarr;</span>
    </article>
  );
}
