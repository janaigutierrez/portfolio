import { TestimonialCard, type TestimonialAuthor } from "@/components/ui/testimonial-card";

interface TestimonialMarqueeProps {
  testimonials: Array<{ author: TestimonialAuthor; text: string }>;
  duration?: number;
  gap?: string;
}

export function TestimonialMarquee({
  testimonials,
  duration = 36,
  gap = "1.5rem",
}: TestimonialMarqueeProps) {
  return (
    <div
      className="group relative flex overflow-hidden py-2"
      style={{ gap }}
    >
      {[0, 1].map((setIdx) => (
        <div
          key={setIdx}
          className="animate-marquee flex shrink-0 group-hover:[animation-play-state:paused]"
          style={{ gap, ["--gap" as string]: gap, ["--duration" as string]: `${duration}s` }}
          aria-hidden={setIdx === 1}
        >
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} author={t.author} text={t.text} />
          ))}
        </div>
      ))}

      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[var(--olive)] to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[var(--olive)] to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}
