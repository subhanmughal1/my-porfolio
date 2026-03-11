import { cn } from "@/lib/utils";

export function ProfileCover() {
  return (
    <div
      className={cn(
        "aspect-2/1 border-x border-edge select-none sm:aspect-3/1",
        "flex items-center justify-center text-black dark:text-white",
        "screen-line-before screen-line-after before:-top-px after:-bottom-px",
        "relative overflow-hidden",
        "bg-background"
      )}
    >
      {/* Dot grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5" />

      {/* Centered initials mark */}
      <div className="relative flex flex-col items-center gap-2">
        <div className="flex items-center justify-center rounded-lg border border-edge bg-background px-5 py-3 shadow-sm">
          <span className="font-mono text-sm tracking-[0.25em] text-muted-foreground uppercase">
            Muhammad Subhan
          </span>
        </div>
        <span className="font-mono text-xs tracking-widest text-muted-foreground/60 uppercase">
          Full-Stack Developer · Python
        </span>
      </div>
    </div>
  );
}