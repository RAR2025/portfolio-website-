import { Link } from 'react-router-dom';
import { blogs } from '../../data/blogs';
import { BlogCard } from '../about/BlogCard';

export function BlogsPage() {
  return (
    <section className="relative scroll-mt-[72px] overflow-hidden bg-[#0A0E27] py-[clamp(2.5rem,5vw,4rem)]">
      <div className="mx-auto w-full max-w-[720px] px-6 max-[480px]:px-4 relative z-[1]">
        <span className="mb-3 inline-block text-[clamp(0.75rem,0.7rem+0.2vw,0.82rem)] font-semibold uppercase tracking-[0.15em] text-[#FFD700] [text-shadow:0_0_12px_rgba(255,215,0,0.25)]">
          Blogs
        </span>
        <h1 className="mb-2 text-center font-[Literata,Georgia,serif] text-[clamp(1.85rem,1.3rem+2.4vw,2.75rem)] font-bold text-[#FAFBFF]">
          All Blogs
        </h1>
        <p className="mb-10 text-center text-[clamp(0.95rem,0.9rem+0.2vw,1rem)] text-[#B8C5D6]">
          Thoughts, journeys, and lessons I&apos;ve written down along the way.
        </p>

        <div className="flex flex-col gap-4">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        <Link
          to="/"
          className="mt-10 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border-[1.5px] border-[rgba(255,215,0,0.3)] bg-transparent px-[1.4rem] py-[0.7rem] font-semibold text-[#B8C5D6] transition-all hover:border-[rgba(0,217,255,0.6)] hover:bg-[rgba(0,217,255,0.1)] hover:text-[#FAFBFF]"
        >
          &larr; Back
        </Link>
      </div>
    </section>
  );
}
