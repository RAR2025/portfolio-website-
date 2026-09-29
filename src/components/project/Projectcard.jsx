const FALLBACK_THUMB =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240"><rect width="400" height="240" fill="#0B0D06"/><text x="200" y="130" text-anchor="middle" font-family="Poppins,sans-serif" font-size="18" fill="#B89B6F">Project Preview</text></svg>`
  );

export function Projectcard({ project }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-lg border border-[rgba(255,215,0,0.15)] bg-[rgba(26,28,46,0.45)] shadow-[0_4px_16px_rgba(0,0,0,0.4),0_12px_32px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[rgba(0,217,255,0.5)] hover:bg-[rgba(26,28,46,0.65)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),0_0_20px_rgba(0,217,255,0.2)]">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.thumbnail || FALLBACK_THUMB}
          alt={`${project.title} preview`}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.src = FALLBACK_THUMB;
          }}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(10,14,39,0.6))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="flex flex-grow flex-col gap-3 p-6">
        <h3 className="relative inline-block font-[Literata,Georgia,serif] text-[clamp(1.05rem,1rem+0.3vw,1.15rem)] font-semibold text-[#FAFBFF] after:absolute after:-bottom-[2px] after:left-0 after:h-[2px] after:w-0 after:bg-[linear-gradient(90deg,#FFD700,#00D9FF)] after:transition-all after:duration-300 group-hover:after:w-full">
          {project.title}
        </h3>
        <p className="flex-grow text-[clamp(0.95rem,0.9rem+0.2vw,1rem)] text-[#B8C5D6]">
          {project.description}
        </p>

        {project.tech && project.tech.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[rgba(255,215,0,0.1)] bg-[#12131F] px-[0.7rem] py-[0.35rem] text-[clamp(0.85rem,0.8rem+0.2vw,0.92rem)] font-medium text-[#B8C5D6] transition-all hover:scale-105 hover:bg-[rgba(255,215,0,0.1)] hover:text-[#FFD700]"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-2 flex flex-wrap gap-2">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border-[1.5px] border-[rgba(255,215,0,0.3)] bg-transparent px-[0.9rem] py-[0.45rem] text-[clamp(0.85rem,0.8rem+0.2vw,0.92rem)] font-semibold text-[#B8C5D6] transition-all hover:border-[rgba(0,217,255,0.6)] hover:bg-[rgba(0,217,255,0.1)] hover:text-[#FAFBFF]"
            >
              GitHub
            </a>
          ) : null}
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent bg-[linear-gradient(90deg,#FFD700,#00D9FF)] bg-[length:200%_100%] px-[0.9rem] py-[0.45rem] text-[clamp(0.85rem,0.8rem+0.2vw,0.92rem)] font-semibold text-[#0a0e27] shadow-[0_4px_16px_rgba(0,217,255,0.3)] transition-all hover:bg-[position:100%_0] hover:shadow-[0_0_20px_rgba(0,217,255,0.4)]"
            >
              Live Demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
