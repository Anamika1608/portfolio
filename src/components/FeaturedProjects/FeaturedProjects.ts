import { ProjectCardProps } from "./ProjectCard.types";

export const projectData: ProjectCardProps[] = [
  {
    title: "Safire",
    category: "Browser extension",
    role: "AI safety workflow built end-to-end",
    description: "Real-time social harassment detection that hides harmful messages, keeps evidence, and turns incidents into report-ready workflows.",
    techStack: ["Plasmo", "Upstash", "Puppeteer", "NextJS", "ExpressJS", "Gemini"],
    focusAreas: ["Agentic AI", "Browser UX", "Safety automation"],
    featuredMetric: "98% detection accuracy",
    proofPoints: [
      "Built the extension, dashboard, detection pipeline, and reporting flow across social-media surfaces.",
      "Used Plasmo, Puppeteer, Redis, RAG, and Next.js to keep detection fast and auditable.",
    ],
    imageUrl: "/featured-projects/safire.png",
    liveUrl: "https://trysafire.com",
    repoUrl: "https://github.com/Anamika1608/Harassment-Saver-Project",
    variant: "default"
  },
  {
    title: "Echosphere",
    category: "AI operations platform",
    role: "Full-stack workflow automation",
    description: "A PG community system where residents raise voice issues and owners dispatch technicians without manual follow-up.",
    techStack: ["React", "Socket.io", "WebRTC", "MediaSoup", "Express"],
    focusAreas: ["Voice UX", "Ops automation", "Realtime dashboards"],
    featuredMetric: "50% less manual assignment",
    proofPoints: [
      "Built resident reporting, owner dashboards, technician assignment, auto-dispatch calls, and WhatsApp updates.",
      "Designed around real ops flow: issue intake, ownership, technician routing, and status visibility.",
    ],
    imageUrl: "/featured-projects/echosphere.png",
    liveUrl: "https://echosphere-gray.vercel.app/",
    repoUrl: "https://github.com/Anamika1608/Echosphere",
    variant: "default"
  },
  {
    title: "Detoxie",
    category: "Mobile behavior app",
    role: "Design x engineering mobile build",
    description: "A React Native app that interrupts Instagram Reels loops with usage tracking, native overlays, to-dos, and personal vision photos.",
    techStack: ["React", "React Native", "Expo", "Android Accessibility Service", "Custom Native Modules"],
    focusAreas: ["React Native", "Native overlays", "Behavior UX"],
    featuredMetric: "Android overlay system",
    proofPoints: [
      "Built native Android accessibility pieces and custom Expo modules instead of stopping at a web-only prototype.",
      "Shaped the UX around behavior change: friction at the right moment, not generic screen-time charts.",
    ],
    imageUrl: "/featured-projects/detoxie.jpeg",
    liveUrl: "https://detoxie.vercel.app",
    repoUrl: "https://github.com/Anamika1608/Detoxie",
    variant: "default"
  },
  // {
  //   title: "Skymate",
  //   description: "Smart weather platform offering personalized forecasts, lifestyle recommendations, and interactive user engagement.",
  //   techStack: ["React", "Express", "MongoDB", "Cloudinary", "Weather API", "Groq"],
  //   images: [
  //     '/featured-projects/detoxie/home.png',
  //     '/featured-projects/detoxie/permission.png',
  //     '/featured-projects/detoxie/settings.png',
  //     '/featured-projects/detoxie/welcome.png'
  //   ],
  //   imageUrl: "/featured-projects/skymate.png",
  //   liveUrl: "https://skymate.vercel.app",
  //   repoUrl: "https://github.com/Anamika1608/SkyMate",
  //   variant: "default"
  // },
  {
    title: "Hyperpersona",
    category: "Agentic commerce engine",
    role: "AI/backend systems with product UI",
    description: "Agentic ecommerce recommendation engine for real-time product rankings, pair-up suggestions, and traceable MCP/API workflows.",
    techStack: ["FastAPI", "Python", "React", "TypeScript", "MCP", "Strands", "AWS"],
    focusAreas: ["MCP/API", "Ecommerce AI", "AWS"],
    featuredMetric: "5-tool MCP server",
    proofPoints: [
      "Built recommendation pipelines across personalized rails, cart complements, and similar-price substitutes.",
      "Productionized the system around FastAPI, MCP, Strands, AWS, vector search, and verifier-backed generation.",
    ],
    imageUrl: "/featured-projects/hyperpersona.jpeg",
    liveUrl: "https://try-hyperpersona.vercel.app/",
    repoUrl: "https://github.com/Anamika1608/Hyperpersona",
    variant: "default"
  },
  // {
  //   title: "Connect-Me",
  //   description: "Scalable video conferencing web-app using SFU to connect 100+ concurrent live users.",
  //   techStack: ["React", "Socket.io", "WebRTC", "MediaSoup", "Express"],
  //   imageUrl: "/featured-projects/skymate.png",
  //   liveUrl: "#",
  //   repoUrl: "https://github.com/Anamika1608/Connect-Me",
  //   variant: "default"
  // },
  {
    title: "Connect-Me",
    description: "An AI-Based voice powered PG community platform that connects residents and owners with auto calling to technicians.",
    techStack: ["React", "Socket.io", "WebRTC", "MediaSoup", "Express"],
    imageUrl: "/featured-projects/echosphere.png",
    liveUrl: "https://echosphere-gray.vercel.app/",
    repoUrl: "https://github.com/Anamika1608/Echosphere",
    variant: "default"
  },
  {
    title: "Skymate",
    description: "Smart weather platform offering personalized forecasts, lifestyle recommendations, and interactive user engagement.",
    techStack: ["React", "Express", "MongoDB", "Cloudinary", "Weather API", "Groq"],
    imageUrl: "/featured-projects/skymate.png",
    liveUrl: "https://skymate.vercel.app",
    repoUrl: "https://github.com/Anamika1608/SkyMate",
    variant: "default"
  },
  // {
  //   title: "Jivika",
  //   description: "A PWA having interactive 3D models of herbal plants, along with detailed information about each plant.",
  //   techStack: ["React", "PWA", "Three.js", "GLB 3D Models", "Blender"],
  //   imageUrl: "/featured-projects/jivika.jpg",
  //   liveUrl: "https://jivika-plants.vercel.app",
  //   repoUrl: "https://github.com/Anamika1608/Jivika",
  //   variant: "default"
  // },
];
