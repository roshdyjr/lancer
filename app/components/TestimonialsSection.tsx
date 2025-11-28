import type { Testimonial } from "../data/siteContent";
import { SectionHeading } from "./SectionHeading";

export function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section id="voices" data-section className="space-y-10">
      <SectionHeading
        eyebrow="Signal checks"
        title="Leaders talking about code color"
        description="Testimonials get their own gradients, sampled from the same tonal spectrum for cohesion."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="rainbow-card rounded-3xl p-6">
            <p className="text-base text-slate-100">&ldquo;{testimonial.quote}&rdquo;</p>
            <p className="mt-4 text-sm font-semibold text-white">{testimonial.name}</p>
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-100/80">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
