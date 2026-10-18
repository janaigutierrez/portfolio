import { Quote } from "lucide-react";

export interface TestimonialAuthor {
  name: string;
  role: string;
}

export interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
}

function initials(name: string) {
  return name
    .split(/[\s&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("");
}

export function TestimonialCard({ author, text }: TestimonialCardProps) {
  return (
    <div
      className="flex w-[300px] shrink-0 flex-col gap-4 rounded-2xl p-6 text-start transition-colors duration-300"
      style={{
        backgroundColor: "rgba(255,255,255,0.1)",
        border: "1px solid rgba(255,255,255,0.18)",
        boxShadow: "0 16px 40px rgba(9,17,12,0.28), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      <Quote size={20} strokeWidth={1.5} style={{ color: "var(--amber)" }} aria-hidden="true" />
      <p className="text-sm leading-relaxed" style={{ color: "var(--paper)" }}>
        &ldquo;{text}&rdquo;
      </p>
      <div className="flex items-center gap-3 mt-auto">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-mono text-xs"
          style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "var(--paper)" }}
          aria-hidden="true"
        >
          {initials(author.name)}
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-medium" style={{ color: "var(--paper)" }}>
            {author.name}
          </p>
          <p
            className="font-mono text-[10px] uppercase tracking-widest"
            style={{ color: "rgba(238,242,239,0.65)" }}
          >
            {author.role}
          </p>
        </div>
      </div>
    </div>
  );
}
