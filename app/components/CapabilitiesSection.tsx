import type { Capability } from "../data/siteContent";
import { SectionHeading } from "./SectionHeading";

export function CapabilitiesSection({ capabilities }: { capabilities: Capability[] }) {
  return (
    <section id="capabilities" data-section className="space-y-10">
      <SectionHeading
        eyebrow="Full-stack craft"
        title="Capabilities spanning code and composition"
        description="Every stream keeps a dedicated lead so front-end, back-end, mobile, and design stay in sync from the first pull request."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {capabilities.map((service) => (
          <div
            key={service.title}
            className={`rainbow-border rounded-3xl bg-linear-to-br ${service.accent} p-6 text-white shadow-lg shadow-black/20`}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-white/80">{service.subtitle}</p>
            <h3 className="neon-text mt-4 text-2xl font-semibold">{service.title}</h3>
            <p className="mt-3 text-base text-slate-100">{service.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
