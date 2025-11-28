import { SectionHeading } from "./SectionHeading";
import type { CaseStudy } from "../data/siteContent";

export function CaseStudiesSection({ caseStudies }: { caseStudies: CaseStudy[] }) {
  return (
    <section id="launches" data-section className="space-y-10">
      <SectionHeading
        eyebrow="Launch films"
        title="Selected technicolor releases"
        description="Full-stack drops where UI, APIs, and mobile builds landed on the same day."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {caseStudies.map((study) => (
          <div key={study.client} className={`rainbow-border rounded-3xl bg-linear-to-br ${study.palette} p-6 text-slate-900`}>
            <div className="flex items-center justify-between">
              <p className="text-sm uppercase tracking-[0.25em]">{study.client}</p>
              <span className="text-sm font-semibold">{study.result}</span>
            </div>
            <p className="mt-4 text-lg text-slate-900/90">{study.description}</p>
            <div className="mt-6 flex items-center justify-between text-sm font-medium">
              <span>View case deck</span>
              <span aria-hidden>↗</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
