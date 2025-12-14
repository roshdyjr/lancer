import Link from "next/link";
import TeamMember from "../data/siteContent";
import { SectionHeading } from "./SectionHeading";
import Image from "next/image";

export function TeamSection({ team }: { team: TeamMember[] }) {
  return (
    <section id="squad" data-section className="space-y-12">
      <SectionHeading
        eyebrow="Squad"
        title="Freelancers who act like co-founders"
        description="Intentionally small roster so every project gets senior hands spanning design to infrastructure."
      />

      <div className="grid gap-8 md:grid-cols-3">
        {team.map((member, index) => {
          // Customize tech stack based on member
          let techStack = [];

          if (
            member.name.toLowerCase().includes("ahmed") ||
            member.name.toLowerCase().includes("amar")
          ) {
            techStack = ["Html" , "Css" , "JavaScript", "React", "Next.js" , "TypeScript" , "TailwindCSS", "Figma"];
          } else if (member.name.toLowerCase().includes("mohamed")) {
            techStack = ["Node.js", "Express", "MongoDB" , "PostgreSQL", "Docker", "AWS" , "GraphQL" , "Angular" , "TypeScript" , "tailwindCSS" ];
          } else {
            techStack = ["React", "TypeScript", "Next.js"]; // default
          }

          return (
            <div
              key={member.name}
              className="group relative rounded-3xl p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/10"
            >
              {/* Profile image */}
              <div className="relative h-20 w-20 rounded-2xl overflow-hidden mb-6 ring-1 ring-gray-700 group-hover:ring-emerald-500/30 transition-all duration-300">
                <Image
                  src={member.photo}
                  alt={member.name}
                  className="object-cover"
                  width={80}
                  height={80}
                />
                <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-emerald-500 ring-2 ring-gray-900 group-hover:scale-125 transition-transform duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-100 transition-colors duration-300">
                {member.name}
              </h3>

              <div className="mb-4">
                <p className="inline-flex items-center text-emerald-400 font-medium bg-emerald-500/10 px-3 py-1 rounded-full text-sm group-hover:bg-emerald-500/20 transition-all duration-300">
                  {member.title}
                </p>
              </div>

              <p className="text-slate-300 leading-relaxed mb-6">
                {member.focus}
              </p>

              {/* Tech stack - customized per member */}
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs text-gray-400 bg-gray-900/50 rounded-full group-hover:text-gray-300 group-hover:bg-gray-800 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Corner accent - hover effect */}
              <div className="absolute top-0 right-0 h-12 w-12 bg-gradient-to-bl from-emerald-500/5 to-transparent rounded-bl-3xl group-hover:from-emerald-500/15 transition-all duration-300" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
