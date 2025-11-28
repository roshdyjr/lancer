import type { TeamMember } from "../data/siteContent";
import { SectionHeading } from "./SectionHeading";

export function TeamSection({ team }: { team: TeamMember[] }) {
  return (
    <section id="squad" data-section className="space-y-10">
      <SectionHeading
        eyebrow="Squad"
        title="Freelancers who act like co-founders"
        description="Intentionally small roster so every project gets senior hands spanning design to infrastructure."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {team.map((member, index) => (
          <div key={member.name} className="rainbow-card rounded-3xl p-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-white/80 to-transparent text-lg font-semibold text-slate-900">
              {member.name
                .split(" ")
                .map((part) => part[0])
                .join("")}
            </div>
            <h3 className="mt-6 text-xl font-semibold text-white">{member.name}</h3>
            <p className="text-sm text-emerald-300">{member.title}</p>
            <p className="mt-4 text-sm text-slate-200">{member.focus}</p>
            <div className="mt-6 text-xs uppercase tracking-[0.35em] text-emerald-100/70">Core Pod {index + 1}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
