import { WorkExperienceItem } from "./types";

export const workExperiencesData: WorkExperienceItem[] = [
  {
    id: "1",
    role: "Software Engineer",
    company: "Zenact",
    period: "Feb 2026 - Present",
    companyLogo: "/work-experience/logos/zenact-favicon.png",
    tags: ["Observability", "Backend Infra", "Automation"],
    isExpandable: false,
  },
  {
    id: "2",
    role: "SWE Intern",
    company: "takeUforward",
    period: "Jun 2025 - Aug 2025",
    companyLogo: "/work-experience/logos/tuf.png",
    summary:
      "Worked on coding-platform tooling and frontend systems for a large developer education product.",
    tags: ["Developer Tools", "Frontend Systems", "C++ Runtime"],
    stack: ["C++", "GDB", "Docker", "React", "TypeScript"],
    impactLabels: ["Built", "Revamped", "Shipped"],
    description: [
      "Built Debugger Mode for a 1.5M+ user coding platform, creating a VS Code-like C++ execution engine with Go and GDB.",
      "Revamped a complex side panel into a clean, extensible learning interface the team could iterate on quickly.",
      "Shipped Focus Mode to reduce distractions, improving user engagement by 60%.",
    ],
  },
  {
    id: "3",
    role: "SDE Intern",
    company: "Mazinda",
    period: "Dec 2024 - Feb 2025",
    companyLogo: "/work-experience/logos/mazinda.svg",
    summary:
      "Built delivery operations tooling across mobile workflows, tracking, and admin control surfaces.",
    tags: ["Operations", "Realtime Tracking", "Admin Tools"],
    stack: ["React Native", "Node.js", "GPS", "Maps", "Dashboards"],
    impactLabels: ["Engineered", "Centralized", "Optimized"],
    description: [
      "Engineered a delivery partner app with resumable onboarding and real-time GPS tracking, reducing order assignment time by 30%.",
      "Centralized delivery operations with an admin dashboard using live geolocation data to monitor 200+ daily deliveries.",
      "Built and optimized the order assignment backend with dynamic reassignment when a delivery partner rejects an order.",
    ],
  },
  {
    id: "4",
    role: "Full Stack Developer",
    company: "I am Better than me",
    period: "Sept 2024 - Dec 2024",
    companyLogo: "https://c.animaapp.com/m8nag6vuQg1Dnq/img/frame-217.svg",
    summary:
      "Worked across backend performance, realtime collaboration, and authentication for a community product.",
    tags: ["Realtime", "Backend", "RBAC"],
    stack: ["Socket.io", "Mediasoup", "Cloudinary", "Twilio", "Node.js"],
    impactLabels: ["Optimized", "Architected", "Developed"],
    description: [
      "Optimized backend performance by integrating Cloudinary for file uploads, reducing latency by 30%.",
      "Architected real-time collaboration features using Socket.io and Mediasoup, enabling video conferencing for 100+ concurrent users.",
      "Built authentication, RBAC access controls, and two-factor verification with Twilio and Nodemailer, reducing failed login attempts by 40%.",
    ],
  },
];
