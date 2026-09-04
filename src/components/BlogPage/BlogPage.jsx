import { useParams, Link } from 'react-router-dom';
import { blogs } from '../../data/blogs';
import { useEffect } from 'react';

export function BlogPage() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!blog) {
    return (
      <section className="section">
        <div className="container">
          <p>Blog post not found.</p>
          <Link className="btn btn--ghost" to="/">
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container blog-page">
        <article className="blog-page__article">
          <header className="blog-page__header">
            <span className="section-title-eyebrow">{blog.date}</span>
            <h1 className="blog-page__title">{blog.title}</h1>
            <div className="blog-page__tags">
              {blog.tags.map((tag) => (
                <span key={tag} className="chip">{tag}</span>
              ))}
            </div>
          </header>
          <div className="blog-page__content">
            {blog.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
        <Link className="btn btn--ghost blog-page__back" to="/">
          &larr; Back
        </Link>
      </div>
    </section>
  );
}
