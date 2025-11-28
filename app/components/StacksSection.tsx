import type { Stack } from "../data/siteContent";
import { SectionHeading } from "./SectionHeading";

export function StacksSection({ stacks }: { stacks: Stack[] }) {
  return (
    <section id="stacks" data-section className="space-y-10">
      <SectionHeading
        eyebrow="Surface-specific focus"
        title="Stacks we obsess over"
        description="From design token orchestration to distributed APIs, we keep each layer expressive yet measurable."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {stacks.map((stack) => (
          <div
            key={stack.title}
            className={`rainbow-border rounded-3xl bg-linear-to-br ${stack.accent} p-6 text-white shadow-inner shadow-black/40`}
          >
            <h3 className="neon-text text-xl font-semibold">{stack.title}</h3>
            <p className="mt-3 text-sm text-slate-100/80">{stack.copy}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {stack.badges.map((badge) => (
                <span key={badge} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-100">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
