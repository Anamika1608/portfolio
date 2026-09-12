import { WorkExperienceItem } from "./types";

export const workExperiencesData: WorkExperienceItem[] = [
  {
    id: "zenact",
    role: "Software Engineer",
    company: "Zenact",
    companyUrl: "https://zenact.ai",
    period: "2026",
    summary:
      "Runtime infra for AI-agent sandboxes: observability, security, and CI for device-worker fleets.",
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
    companyUrl: "https://takeuforward.org",
    period: "2025",
    summary:
      "Built a GDB-backed C++ Debugger Mode and a distraction-free Focus Mode for a 1.5M-learner platform; engagement up 60%.",
  },
  {
    id: "mazinda",
    role: "SDE Intern",
    company: "Mazinda",
    companyUrl: "https://mazinda.com",
    period: "2024 — 2025",
    summary:
      "Shipped the delivery-partner app and dispatch backend for 200+ daily orders; order-assignment time down 30%.",
  },
  {
    id: "iabtm",
    role: "Full Stack Developer",
    company: "I am Better than me",
    companyUrl: "https://iambetterthanme.com",
    period: "2024",
    summary:
      "Built realtime video collaboration for 100+ concurrent users, plus auth, RBAC, and two-factor login.",
  },
];
