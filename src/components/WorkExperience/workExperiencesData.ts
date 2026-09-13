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
      "Integrated an end-to-end OpenTelemetry + Axiom pipeline (OTLP collectors, Go, Docker, AWS, Temporal) capturing logs and traces for sandbox and device-worker runtimes.",
      "Optimized sandbox worker bootstrap from 12s to 3s by removing blocking OTel readiness waits and pre-warming E2B binaries.",
      "Shipped Blacksmith multi-arch Docker builds in the CI/CD pipeline and automated QA assertion and report generation.",
      "Implemented end-to-end customer data encryption in an isolated AWS account with KMS and JWE, enforcing a strict data boundary no internal staff can cross.",
      "Engineered a QA workflow builder that composes and runs ordered test-suite sequences, triggered from GitHub pull requests and token mentions.",
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
      "Led the POC for Debugger Mode: a VS Code-like C++ execution engine on Go and GDB, giving learners breakpoints and step-through inside the browser.",
      "Rebuilt a complex side panel in React and TypeScript into an extensible component the team can iterate on quickly, and introduced Focus Mode; engagement went up 60%.",
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
      "Developed the order-assignment backend (Node.js) with dynamic reassignment on partner rejection, real-time GPS tracking, and background alarm notifications that fire with the app closed.",
      "Added a resumable onboarding flow to the React Native partner app and an admin dashboard to onboard 50+ delivery personnel, monitor live orders, and process withdrawals.",
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
      "Created an LLM-driven agentic flow that generates a personalised growth path per user, and a pub/sub notification system across the platform.",
      "Shipped realtime video collaboration on Mediasoup (SFU) and Socket.io for 100+ concurrent users, plus auth with RBAC and two-factor login via Twilio.",
    ],
  },
];
