export function FloatingBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[1] h-full w-full overflow-hidden">
      <span className="absolute left-[6%] top-[8%] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,#00D9FF,transparent)] opacity-[0.05] blur-[1px] animate-[drift1_22s_ease-in-out_infinite]" />
      <span className="absolute bottom-[18%] right-[10%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,#9D4EDD,transparent)] opacity-[0.05] blur-[1px] animate-[drift2_27s_ease-in-out_infinite_reverse]" />
      <span className="absolute left-[15%] top-[60%] h-[160px] w-[160px] rounded-full bg-[radial-gradient(circle,#FFD700,transparent)] opacity-[0.05] blur-[1px] animate-[drift1_30s_ease-in-out_infinite]" />
      <span className="absolute bottom-[8%] left-[30%] h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,#06D6A0,transparent)] opacity-[0.05] blur-[1px] animate-[drift2_25s_ease-in-out_infinite]" />
      <span className="absolute right-[25%] top-[30%] h-[140px] w-[140px] rounded-full bg-[radial-gradient(circle,#D4A574,transparent)] opacity-[0.05] blur-[1px] animate-[drift1_35s_ease-in-out_infinite_reverse]" />
    </div>
  );
}
