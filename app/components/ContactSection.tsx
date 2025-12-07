import type { CapacityItem } from "../data/siteContent";
import { SectionHeading } from "./SectionHeading";

export function ContactSection({ capacity }: { capacity: CapacityItem[] }) {
  return (
  <section
  id="contact"
  data-section
  className="relative overflow-hidden rainbow-border rounded-4xl bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-600 p-8 md:p-10 lg:p-12 text-slate-900"
>
  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>

  <div className="relative z-10 mx-auto max-w-4xl text-center">
    {/* Header - Centered */}
    <div className="max-w-3xl mx-auto">
      <p className="text-sm uppercase tracking-[0.35em] font-semibold text-slate-900/90 bg-white/30 px-4 py-2 rounded-full inline-block">
        Book the crew
      </p>
      <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
        Ready for a full-stack
        <span className="block mt-2 bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent">
          ship date?
        </span>
      </h2>
      <p className="mt-8 text-lg md:text-xl text-slate-900/90 leading-relaxed mx-auto max-w-2xl">
        Drop a dream, KPI, or knotty technical blocker. We reply within 24
        hours with pod configuration, stack fit, and an interactive
        prototype teaser.
      </p>
    </div>

    {/* Contact Methods - Centered */}
    <div className="mt-12 mx-auto max-w-2xl">
      {/* Email */}
      <a
        href="mailto:medoem82950@gmail.com"
        className="group relative flex items-center gap-6 rounded-3xl bg-white/95 p-6 transition-all hover:bg-white hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/40 backdrop-blur-sm border border-white/20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-cyan-400/0 to-blue-600/0 group-hover:from-emerald-400/5 group-hover:via-cyan-400/5 group-hover:to-blue-600/5 transition-all duration-500"></div>
        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-400 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
          <svg
            className="h-7 w-7 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div className="relative flex-1 text-left">
          <div className="font-semibold text-lg text-slate-900 group-hover:text-slate-950">
            Email us directly
          </div>
          <div className="text-base text-slate-700 group-hover:text-slate-900 mt-1 font-medium">
            medoem82950@gmail.com
          </div>
        </div>
        <div className="relative h-8 w-8 rounded-full bg-slate-100 group-hover:bg-cyan-100 flex items-center justify-center transition-colors">
          <svg
            className="h-5 w-5 text-slate-600 group-hover:text-cyan-600 group-hover:translate-x-1 transition-all duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/01125670497?text=Hi%20Aurora%20Lancer%20Team,%20I'd%20like%20to%20discuss%20a%20project"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-6 rounded-3xl bg-white/95 p-6 transition-all hover:bg-white hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/40 backdrop-blur-sm border border-white/20 overflow-hidden mt-6"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-emerald-400/0 to-green-600/0 group-hover:from-green-400/5 group-hover:via-emerald-400/5 group-hover:to-green-600/5 transition-all duration-500"></div>
        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform duration-300">
          <svg
            className="h-7 w-7 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.304-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411" />
          </svg>
        </div>
        <div className="relative flex-1 text-left">
          <div className="font-semibold text-lg text-slate-900 group-hover:text-slate-950">
            Chat on WhatsApp
          </div>
          <div className="text-base text-slate-700 group-hover:text-slate-900 mt-1 font-medium">
            +20 112 567 0497
          </div>
        </div>
        <div className="relative h-8 w-8 rounded-full bg-slate-100 group-hover:bg-green-100 flex items-center justify-center transition-colors">
          <svg
            className="h-5 w-5 text-slate-600 group-hover:text-green-600 group-hover:translate-x-1 transition-all duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </a>
    </div>

    {/* Response Time - Centered */}
    <div className="mt-10 flex items-center justify-center gap-4">
      <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/40">
        <div className="relative">
          <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
          <div className="absolute inset-0 h-3 w-3 rounded-full bg-green-500 animate-ping opacity-75"></div>
        </div>
        <span className="font-semibold text-slate-800">
          Average response:
        </span>
        <span className="text-slate-700 font-medium">2 hours</span>
      </div>
    </div>
  </div>
</section>
  );
}
