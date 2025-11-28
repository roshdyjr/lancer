import type { ProcessStep } from "../data/siteContent";
import { SectionHeading } from "./SectionHeading";

export function ProcessSection({ process }: { process: ProcessStep[] }) {
  return (
    <section id="process" data-section className="space-y-10">
      <SectionHeading
        eyebrow="Flow"
        title="Color-synced delivery ritual"
        description="Discovery, engineering, and growth dress in their own palettes so everyone feels the rhythm of the build."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {process.map((step, index) => (
          <div key={step.title} className="rainbow-card rounded-3xl p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-400 to-cyan-500 text-lg font-semibold text-slate-900">
                {index + 1}
              </span>
              <h3 className="neon-text text-xl font-semibold">{step.title}</h3>
            </div>
            <p className="mt-4 text-sm text-slate-200">{step.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
