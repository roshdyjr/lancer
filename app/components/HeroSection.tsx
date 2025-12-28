import Link from "next/link";
import type { Principle, Stat } from "../data/siteContent";

export function HeroSection({ stats, principles }: { stats: Stat[]; principles: Principle[] }) {
  return (
    <section
      id="overview"
      data-section
      className="rainbow-border rounded-4xl bg-linear-to-br from-slate-900/85 via-slate-900/60 to-slate-900/30 p-10 shadow-[0_0_80px_rgba(16,185,129,0.35)]"
    >
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <p className="text-sm uppercase tracking-[0.4em] text-emerald-300">RAM SW Development</p>
          <h1 className="heading-glow text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Freelance founders building luminous software across front-end, back-end, and mobile.
          </h1>
          <p className="max-w-2xl text-lg text-slate-300">
            We are a roaming squad of designers and full-stack engineers who choreograph every surface of your product
            launch - web, platform, and native - in one technicolor thread.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-transparent bg-white px-6 py-3 text-slate-900 shadow-xl shadow-emerald-400/30 transition hover:-translate-y-0.5"
            >
              Book build scope
              <span aria-hidden>↗</span>
            </Link>
            <Link
              href="#launches"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-white transition hover:border-emerald-300/80"
            >
              Review recent launches
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rainbow-card rounded-2xl p-4 text-white">
                <p className={`text-3xl font-semibold ${stat.accent}`}>{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-100/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rainbow-card rounded-3xl p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-200/80">Build principles</p>
          <div className="mt-6 space-y-6">
            {principles.map((item) => (
              <div key={item.label} className="rainbow-card rounded-2xl p-5">
                <p className="text-sm font-semibold text-white">{item.label}</p>
                <p className="mt-2 text-sm text-slate-200">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
