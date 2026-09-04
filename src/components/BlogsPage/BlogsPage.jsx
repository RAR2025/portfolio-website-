import { Link } from 'react-router-dom';
import { blogs } from '../../data/blogs';
import { BlogCard } from '../about/BlogCard';

export function BlogsPage() {
  return (
    <section className="section">
      <div className="container blogs-page">
        <span className="section-title-eyebrow">Blogs</span>
        <h1 className="section-title">All Blogs</h1>
        <p className="section-subtitle">
          Thoughts, journeys, and lessons I've written down along the way.
        </p>

        <div className="blogs-page__list">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        <Link className="btn btn--ghost blog-page__back" to="/">
          &larr; Back
        </Link>
      </div>
    </section>
  );
}