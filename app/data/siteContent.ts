export type SectionConfig = {
  label: string;
  href: `#${string}`;
  tone: string;
  tag: string;
};

export type Stat = {
  label: string;
  value: string;
  accent: string;
};

export type Principle = {
  label: string;
  detail: string;
};

export type Capability = {
  title: string;
  subtitle: string;
  copy: string;
  accent: string;
};

export type Stack = {
  title: string;
  copy: string;
  badges: string[];
  accent: string;
};

export type ProcessStep = {
  title: string;
  detail: string;
};

export type CaseStudy = {
  client: string;
  result: string;
  description: string;
  palette: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export type TeamMember = {
  name: string;
  title: string;
  focus: string;
};

export type CapacityItem = {
  label: string;
  value: string;
};

export const navItems: SectionConfig[] = [
  { label: "Overview", href: "#overview", tone: "from-emerald-400 via-cyan-400 to-blue-500", tag: "00" },
  { label: "Capabilities", href: "#capabilities", tone: "from-fuchsia-500 via-pink-500 to-orange-400", tag: "01" },
  { label: "Stacks", href: "#stacks", tone: "from-amber-400 via-lime-400 to-emerald-400", tag: "02" },
  { label: "Process", href: "#process", tone: "from-sky-400 via-indigo-500 to-purple-500", tag: "03" },
  { label: "Launches", href: "#launches", tone: "from-rose-400 via-orange-400 to-yellow-400", tag: "04" },
  { label: "Voices", href: "#voices", tone: "from-cyan-400 via-blue-500 to-purple-500", tag: "05" },
  { label: "Squad", href: "#squad", tone: "from-emerald-400 via-teal-400 to-cyan-500", tag: "06" },
  { label: "Contact", href: "#contact", tone: "from-indigo-400 via-sky-400 to-cyan-500", tag: "07" },
];

export const stats: Stat[] = [
  { label: "Multi-surface apps shipped", value: "68", accent: "text-emerald-300" },
  { label: "Stack coverage", value: "FE / BE / Mobile", accent: "text-sky-300" },
  { label: "Avg. release sprint", value: "18 days", accent: "text-yellow-300" },
];

export const principles: Principle[] = [
  { label: "Code x Narrative", detail: "Design and engineering review the same PR so UI stories and logic stay inseparable." },
  { label: "Latency Matters", detail: "Budgets track perceived speed - profilers and RUM dashboards launch with every engagement." },
  { label: "Pods Stay Embedded", detail: "Front-end, back-end, and mobile leads ride along until the release hits production traffic." },
];

export const capabilities: Capability[] = [
  {
    title: "Experience Engineering",
    subtitle: "Front-end / Design Systems",
    copy: "Composables, accessibly themed UI, and cinematic interactions crafted in React, Next.js, and WebGL moments.",
    accent: "from-emerald-400/90 via-cyan-400/80 to-blue-500/90",
  },
  {
    title: "Platform Architecture",
    subtitle: "Back-end / APIs / Integrations",
    copy: "Event-driven Node runtimes, serverless edges, and GraphQL/REST gateways stitched to your product truth.",
    accent: "from-fuchsia-400/90 via-purple-400/80 to-indigo-500/90",
  },
  {
    title: "Mobile & Devices",
    subtitle: "React Native / Native Bridges",
    copy: "Shared design tokens and offline-first patterns extend to iOS, Android, visionOS, and in-store canvases.",
    accent: "from-amber-400/90 via-orange-400/80 to-rose-500/90",
  },
];

export const stacks: Stack[] = [
  {
    title: "Front-end Systems",
    copy: "Next.js App Router, RSC streaming, and design tokens rendered through Storybook + Chromatic.",
    badges: ["TypeScript", "Next.js 16", "Tailwind v4", "Framer Motion"],
    accent: "from-emerald-500/20 via-cyan-500/10 to-transparent",
  },
  {
    title: "Back-end Platforms",
    copy: "Serverless Node clusters, Prisma data meshes, and observability baked in with OpenTelemetry.",
    badges: ["Node 22", "Prisma", "Postgres", "tRPC"],
    accent: "from-sky-500/20 via-indigo-500/10 to-transparent",
  },
  {
    title: "Mobile Surface",
    copy: "Shared component libraries powering React Native, Expo Router, and native bridges for device sensors.",
    badges: ["React Native", "Expo", "Swift bridges", "Kotlin Multiplatform"],
    accent: "from-fuchsia-500/20 via-rose-500/10 to-transparent",
  },
  {
    title: "Product Design",
    copy: "Motion systems, token orchestration, and UX research loops tightened with playable prototypes.",
    badges: ["Figma", "Jitter", "Rive", "Maze"],
    accent: "from-amber-500/20 via-orange-500/10 to-transparent",
  },
];

export const process: ProcessStep[] = [
  {
    title: "Signal Sprint",
    detail: "Discovery + code spike in 7 days: architecture decisions, risk list, and Figma-to-PR proof.",
  },
  {
    title: "Stack Choreography",
    detail: "Pods pair program front-end, APIs, and mobile flows so feature flags hit every surface together.",
  },
  {
    title: "Launch Theatre",
    detail: "Motion previews, device labs, and observability drills rehearse the drop like a product premiere.",
  },
  {
    title: "Momentum Ops",
    detail: "Experiment backlog, growth narratives, and platform hardening keep the ship tight post-launch.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    client: "RelayForge",
    result: "+184% qualified demo volume",
    description: "Unified React + RN component library, live data visualizations, and headless CMS marketing surface in 6 weeks.",
    palette: "from-sky-500/90 via-cyan-400/80 to-emerald-400/90",
  },
  {
    client: "MonarchOS",
    result: "Deployed 2.3M devices",
    description: "Edge-ready Node platform, offline-first mobile suite, and animated onboarding across kiosk + mobile.",
    palette: "from-indigo-500/90 via-purple-500/80 to-pink-500/90",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sara Dunne",
    role: "VP Product, RelayForge",
    quote: "Front-end and API engineers sat in the same design crit - they shipped a cohesive surface none of us imagined.",
  },
  {
    name: "Leo Moretti",
    role: "CTO, MonarchOS",
    quote: "Their pods understood embedded hardware constraints yet iterated like a startup. Deploy day was calm.",
  },
  {
    name: "Camila Ortega",
    role: "Head of Design, Northbeam",
    quote: "We finally have a design system that lives in Figma and in our monorepo without drift.",
  },
];

export const team: TeamMember[] = [
  { name: "Eli Navarro", title: "Front-end Principal", focus: "Radiant UI systems & motion engineering" },
  { name: "Noor Rahman", title: "Platform Architect", focus: "Distributed APIs & data choreography" },
  { name: "Isa Marin", title: "Mobile Lead", focus: "React Native, native bridges, and sensor UX" },
];

export const capacity: CapacityItem[] = [
  { label: "January Build", value: "1 slot" },
  { label: "February Platform Retainer", value: "2 slots" },
  { label: "Growth Experiments", value: "Waitlist" },
];
