import { useNavigate } from 'react-router-dom';

export function BlogCard({ blog }) {
  const navigate = useNavigate();

  return (
    <article
      onClick={() => navigate(`/blog/${blog.id}`)}
      className="group relative cursor-pointer overflow-hidden rounded-xl border border-[rgba(255,215,0,0.15)] bg-[rgba(26,28,46,0.45)] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[rgba(0,217,255,0.5)] hover:bg-[rgba(26,28,46,0.65)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),0_0_20px_rgba(0,217,255,0.2)]"
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-semibold text-[#FFD700]">{blog.date}</span>
        <div className="flex gap-2">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-[rgba(255,215,0,0.2)] bg-[rgba(26,28,46,0.45)] px-[0.6rem] py-[0.25rem] text-[clamp(0.75rem,0.7rem+0.2vw,0.82rem)] font-medium text-[#FFD700]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <h3 className="mb-3 font-[Literata,Georgia,serif] text-[clamp(1.2rem,1.05rem+0.6vw,1.4rem)] font-semibold text-[#FAFBFF]">
        {blog.title}
      </h3>
      <p className="mb-3 text-[clamp(0.95rem,0.9rem+0.2vw,1rem)] leading-[1.7] text-[#B8C5D6]">
        {blog.excerpt}
      </p>
      <span className="bg-[linear-gradient(90deg,#FFD700,#00D9FF)] bg-clip-text text-sm font-semibold text-transparent group-hover:underline">
        Read more &rarr;
      </span>
    </article>
  );
}
