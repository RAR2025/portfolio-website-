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
    <section
      id="about"
      ref={ref}
      className="relative scroll-mt-[72px] overflow-hidden bg-[#0A0E27] py-[clamp(2rem,4vw,3rem)]"
    >
      <div
        className={`mx-auto w-full max-w-[1120px] px-6 max-[480px]:px-4 relative z-[1] transition-all duration-300 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
        }`}
      >
        <span className="mb-3 inline-block text-[clamp(0.75rem,0.7rem+0.2vw,0.82rem)] font-semibold uppercase tracking-[0.15em] text-[#FFD700] [text-shadow:0_0_12px_rgba(255,215,0,0.25)]">
          About
        </span>
        <h2 className="mb-2 text-left font-[Literata,Georgia,serif] text-[clamp(1.4rem,1.1rem+1.2vw,1.85rem)] font-semibold text-[#FAFBFF]">
          Behind the Code
        </h2>
        <p className="mb-10 text-left text-[clamp(0.95rem,0.9rem+0.2vw,1rem)] text-[#B8C5D6]">
          Curious learner, builder, and lifelong student of computer science.
        </p>
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1.2fr_1fr] max-[900px]:grid-cols-1">
          <div className="flex flex-col gap-4">
            <h3 className="mb-3 mt-5 font-[Literata,Georgia,serif] text-base font-semibold text-[#FAFBFF]">
              Blogs
            </h3>
            <div className="flex flex-col gap-4">
              {previewBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>

            {hasMoreBlogs && (
              <button
                type="button"
                onClick={() => navigate('/blogs')}
                className="mt-3 inline-flex items-center justify-center gap-2 self-start whitespace-nowrap rounded-full border-[1.5px] border-[rgba(255,215,0,0.3)] bg-transparent px-[0.9rem] py-[0.45rem] text-[clamp(0.85rem,0.8rem+0.2vw,0.92rem)] font-semibold text-[#B8C5D6] transition-all hover:border-[rgba(0,217,255,0.6)] hover:bg-[rgba(0,217,255,0.1)] hover:text-[#FAFBFF]"
              >
                View all blogs &rarr;
              </button>
            )}
          </div>

          <aside className="flex flex-col gap-5 md:sticky md:top-[calc(72px+1rem)] max-[900px]:static">
            <div className="relative overflow-hidden rounded-xl border border-[rgba(255,215,0,0.15)] bg-[rgba(26,28,46,0.45)] p-6 shadow-[0_4px_16px_rgba(0,0,0,0.4),0_12px_32px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(0,217,255,0.5)] hover:bg-[rgba(26,28,46,0.65)] hover:shadow-[0_0_20px_rgba(0,217,255,0.2)]">
              <h3 className="mb-3 font-[Literata,Georgia,serif] text-base font-semibold text-[#FAFBFF]">
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {personal.interests.map((interest) => (
                  <span
                    key={interest}
                    className="inline-flex items-center rounded-full border border-[rgba(255,215,0,0.2)] bg-[rgba(26,28,46,0.45)] px-[0.9rem] py-[0.4rem] text-[clamp(0.85rem,0.8rem+0.2vw,0.92rem)] font-medium text-[#FFD700] transition-all hover:border-[rgba(0,217,255,0.5)] hover:bg-[rgba(0,217,255,0.15)]"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-[rgba(255,215,0,0.15)] bg-[rgba(26,28,46,0.45)] p-6 shadow-[0_4px_16px_rgba(0,0,0,0.4),0_12px_32px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(0,217,255,0.5)] hover:bg-[rgba(26,28,46,0.65)]">
              <h3 className="mb-3 font-[Literata,Georgia,serif] text-base font-semibold text-[#FAFBFF]">
                Strengths
              </h3>
              <div className="flex flex-wrap gap-2">
                {personal.strengths.map((strength) => (
                  <span
                    key={strength}
                    className="inline-flex items-center rounded-full border border-[rgba(255,215,0,0.2)] bg-[rgba(26,28,46,0.45)] px-[0.9rem] py-[0.4rem] text-[clamp(0.85rem,0.8rem+0.2vw,0.92rem)] font-medium text-[#FFD700] transition-all hover:border-[rgba(0,217,255,0.5)] hover:bg-[rgba(0,217,255,0.15)]"
                  >
                    {strength}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-[rgba(255,215,0,0.15)] bg-[rgba(26,28,46,0.45)] p-6 shadow-[0_4px_16px_rgba(0,0,0,0.4),0_12px_32px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(0,217,255,0.5)] hover:bg-[rgba(26,28,46,0.65)]">
              <h3 className="mb-3 font-[Literata,Georgia,serif] text-base font-semibold text-[#FAFBFF]">
                Future Goal
              </h3>
              <p className="m-0 text-[#FAFBFF]">{personal.futureGoals}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
