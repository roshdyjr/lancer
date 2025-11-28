import type { CapacityItem } from "../data/siteContent";

export function ContactSection({ capacity }: { capacity: CapacityItem[] }) {
  return (
    <section
      id="contact"
      data-section
      className="rainbow-border rounded-4xl bg-linear-to-br from-emerald-400 via-cyan-400 to-blue-600 p-10 text-slate-900"
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-slate-900/80">Book the crew</p>
          <h2 className="mt-4 text-3xl font-semibold">Ready for a full-stack ship date?</h2>
          <p className="mt-4 text-base text-slate-900/80">
            Drop a dream, KPI, or knotty technical blocker. We reply within 24 hours with pod configuration, stack fit, and an
            interactive prototype teaser.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="mailto:hello@auroralancer.studio"
              className="inline-flex items-center gap-2 rounded-full border border-slate-900/20 bg-slate-900/10 px-6 py-3 text-slate-900 transition hover:border-slate-900"
            >
              hello@auroralancer.studio
            </a>
            <a
              href="https://calendly.com"
              className="inline-flex items-center gap-2 rounded-full border border-slate-900/20 px-6 py-3 text-slate-900 transition hover:border-slate-900"
            >
              30-min chemistry call
              <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
        <div className="rainbow-border rounded-3xl bg-white/80 p-6 text-slate-900 shadow-xl shadow-blue-500/30">
          <p className="text-sm uppercase tracking-[0.35em]">Upcoming capacity</p>
          <ul className="mt-4 space-y-4 text-sm">
            {capacity.map((item, index) => (
              <li key={item.label} className={`flex items-center justify-between ${index !== capacity.length - 1 ? "border-b border-slate-900/10 pb-3" : ""}`}>
                <span>{item.label}</span>
                <span className="font-semibold">{item.value}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs uppercase tracking-[0.35em] text-slate-500">Avg. response • 7h</p>
        </div>
      </div>
    </section>
  );
}
