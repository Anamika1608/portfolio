import { WorkExperienceItem } from "./types";

export const workExperiencesData: WorkExperienceItem[] = [
  {
    id: "zenact",
    role: "Software Engineer",
    company: "Zenact",
    stack: ["Go", "Python", "AWS", "Temporal", "Docker", "OpenTelemetry", "Axiom", "Blacksmith", "GitHub Actions"],
    companyUrl: "https://zenact.ai",
    period: "Feb 2026 — May 2026",
    summary:
      "Runtime infrastructure for AI-agent sandboxes: observability, security, and CI for sandbox and device workers.",
    description: [
      "Cut sandbox worker bootstrap from 12s to 3s by removing blocking OpenTelemetry waits and pre-warming sandbox binaries.",
      "Shipped OpenTelemetry logs and traces to Axiom across Temporal workflows for sandbox and device workers, in Go.",
      "Built customer data encryption in an isolated AWS account with KMS and JWE; internal staff cannot read it.",
      "Built a QA workflow builder that runs ordered test suites from GitHub pull requests, and added multi-arch Docker builds on Blacksmith to CI.",
    ],
  },
  {
    id: "tuf",
    role: "SWE Intern",
    company: "takeUforward",
    stack: ["Go", "C++", "GDB", "Docker", "React", "TypeScript"],
    companyUrl: "https://takeuforward.org",
    period: "Jun 2025 — Aug 2025",
    summary:
      "Developer tooling and learning UX for a 1.5M+ learner coding platform.",
    description: [
      "Led the POC for Debugger Mode: a C++ debugger on GDB that runs inside the browser, so learners can step through their code.",
      "Rebuilt a complex side panel where the team can iterate quickly, and built Focus Mode, a distraction-free way to solve problems; engagement went up 60%.",
    ],
  },
  {
    id: "mazinda",
    role: "SDE Intern",
    company: "Mazinda",
    stack: ["React Native", "Node.js", "Express", "MongoDB", "GPS", "Maps", "push notifications"],
    companyUrl: "https://mazinda.com",
    period: "Dec 2024 — Feb 2025",
    summary:
      "Delivery-partner app, dispatch backend, and admin tooling for 200+ daily orders.",
    description: [
      "Built the order-assignment backend with dynamic reassignment on rejection, real-time GPS tracking, and background alarm alerts that work with the app closed.",
      "Built resumable partner onboarding and an admin dashboard to manage 50+ delivery personnel, live orders, and withdrawals.",
    ],
  },
  {
    id: "iabtm",
    role: "Full Stack Developer",
    company: "I am Better than me",
    stack: ["Node.js", "Socket.io", "Mediasoup", "pub/sub", "Cloudinary", "Twilio", "LLM APIs"],
    companyUrl: "https://iambetterthanme.com",
    period: "Sep 2024 — Dec 2024",
    summary:
      "Backend, realtime, and auth for a personal-growth community product.",
    description: [
      "Built an agentic flow that generates a personalised growth path for each user, and pub/sub notifications across the platform.",
      "Built realtime video collaboration using Mediasoup for 100+ concurrent users, plus auth, RBAC, and two-factor login.",
    ],
  },
];
