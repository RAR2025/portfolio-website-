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
      <section className="relative scroll-mt-[72px] overflow-hidden bg-[#0A0E27] py-[clamp(2.5rem,5vw,4rem)]">
        <div className="mx-auto w-full max-w-[1120px] px-6 max-[480px]:px-4 relative z-[1]">
          <p className="text-[#FAFBFF]">Blog post not found.</p>
          <Link
            to="/"
            className="mt-4 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border-[1.5px] border-[rgba(255,215,0,0.3)] bg-transparent px-[1.4rem] py-[0.7rem] font-semibold text-[#B8C5D6] transition-all hover:border-[rgba(0,217,255,0.6)] hover:bg-[rgba(0,217,255,0.1)] hover:text-[#FAFBFF]"
          >
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="relative scroll-mt-[72px] overflow-hidden bg-[#0A0E27] py-[clamp(2.5rem,5vw,4rem)]">
      <div className="mx-auto w-full max-w-[720px] px-6 max-[480px]:px-4 relative z-[1]">
        <article className="flex flex-col gap-10">
          <header className="flex flex-col gap-4">
            <span className="mb-3 inline-block text-[clamp(0.75rem,0.7rem+0.2vw,0.82rem)] font-semibold uppercase tracking-[0.15em] text-[#FFD700] [text-shadow:0_0_12px_rgba(255,215,0,0.25)]">
              {blog.date}
            </span>
            <h1 className="bg-[linear-gradient(90deg,#FFD700,#00D9FF)] bg-clip-text font-[Literata,Georgia,serif] text-[clamp(1.85rem,1.3rem+2.4vw,2.75rem)] leading-[1.2] text-transparent">
              {blog.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-[rgba(255,215,0,0.2)] bg-[rgba(26,28,46,0.45)] px-[0.9rem] py-[0.4rem] text-[clamp(0.85rem,0.8rem+0.2vw,0.92rem)] font-medium text-[#FFD700]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>
          <div className="flex flex-col gap-6 text-[clamp(0.95rem,0.9rem+0.2vw,1rem)] leading-[1.85] text-[#FAFBFF]">
            {blog.content.map((paragraph, index) => (
              <p key={index} className="m-0 mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
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
