import { SectionHeading } from "./SectionHeading";
import type { CaseStudy } from "../data/siteContent";
import MetaGaming from "../../public/meta-gaming.png";
import HayatTours from "../../public/Hayat.png";
import Cure from "../../public/Cure-master.png";
import FilmFlex from "../../public/FilmFlex.png";
import FreshCart from "../../public/FreshCart.png";
import Print from "../../public/Print.png";
import Image from "next/image";
import Link from "next/link";

export function CaseStudiesSection({
  caseStudies,
}: {
  caseStudies: CaseStudy[];
}) {
  const Projects = [
    {
      Image: MetaGaming,
      title: "Meta-Gaming",
      description:
        "Master the game beyond the game. Strategy meets psychology.",
      href: "https://meta-gaming.vercel.app/",
    },
    {
      Image: HayatTours,
      title: "Hayat",
      description: "  Luxury Transport, Seamless Experience",
      href: "https://hayat-tours-travels.vercel.app/en",
    },
    {
      Image: Cure,
      title: "Cure-Master",
      description:
        "Revolutionizing healthcare with AI-driven diagnostics and personalized treatment plans.",
      href: "https://cure-master.vercel.app/",
    },
    {
      Image: FilmFlex,
      title: "FilmFlex",
      description:
        "Stream your favorite movies and shows anytime, anywhere with FilmFlex.",
      href: "https://film-flix-eight.vercel.app/",
    },
    {
      Image: FreshCart,
      title: "FreshCart",
      description:
        "Your one-stop online shop for fresh groceries and everyday essentials.",
      href: "https://darling-macaron-bbbc12.netlify.app/",
    },
    {
      Image: Print,
      title: "PrintPro",
      description:
        "High-quality printing solutions for all your personal and business needs.",
      href: "https://new.print.sa/en",
    },
  ];

  return (
    <section id="launches" data-section className="space-y-10">
      <SectionHeading
        eyebrow="Launch films"
        title="Selected technicolor releases"
        description="Full-stack drops where UI, APIs, and mobile builds landed on the same day."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {Projects.map((Info) => (
          <Link
            href={Info.href || "#"}
            key={Info.title}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-br ${study.palette} p-6 text-white shadow-xl">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 opacity-20"></div>

              <div className="relative z-10">
                <h1 className="text-center text-3xl font-bold py-3 mb-4">
                  {Info.title}
                </h1>

                <div className="mb-4 overflow-hidden rounded-2xl">
                  {Info.Image ? (
                    <Image
                      src={Info.Image}
                      alt={Info.title ?? "Case Study Image"}
                      className="w-full h-[300px]"
                    />
                  ) : (
                    <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-2xl">
                      <span className="text-gray-500">No image available</span>
                    </div>
                  )}
                </div>

                <p className="text-center text-lg font-medium">
                  {Info.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* <div className="grid gap-6 lg:grid-cols-2">
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
      </div> */}
    </section>
  );
}
