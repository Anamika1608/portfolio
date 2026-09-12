import { ProjectCardProps } from "./ProjectCard.types";

export const projectData: ProjectCardProps[] = [
  {
    title: "Safire",
    description: "Browser extension that detects and hides harassment on social media, with evidence reports.",
    techStack: ["Plasmo", "Upstash", "Puppeteer", "NextJS", "ExpressJS", "Gemini"],
    imageUrl: "/featured-projects/safire.png",
    liveUrl: "https://trysafire.com",
    repoUrl: "https://github.com/Anamika1608/Harassment-Saver-Project",
    variant: "default"
  },
  {
    title: "Echosphere",
    description: "Voice-driven community platform that auto-dispatches technicians for residents.",
    techStack: ["React", "Socket.io", "WebRTC", "MediaSoup", "Express"],
    imageUrl: "/featured-projects/echosphere.png",
    liveUrl: "https://echosphere-gray.vercel.app/",
    repoUrl: "https://github.com/Anamika1608/Echosphere",
    variant: "default"
  },
  {
    title: "Detoxie",
    description: "Android app that interrupts Reels binges with your own to-dos and goals.",
    techStack: ["React", "React Native", "Expo", "Android Accessibility Service", "Custom Native Modules"],
    imageUrl: "/featured-projects/detoxie.jpeg",
    liveUrl: "https://detoxie.vercel.app",
    repoUrl: "https://github.com/Anamika1608/Detoxie",
    variant: "default"
  },
  {
    title: "Hyperpersona",
    description: "E-commerce recommendation agent; every MCP and API call is logged and traceable.",
    techStack: ["FastAPI", "Python", "React", "TypeScript", "MCP", "Strands", "AWS"],
    imageUrl: "/featured-projects/hyperpersona.jpeg",
    liveUrl: "https://try-hyperpersona.vercel.app/",
    repoUrl: "https://github.com/Anamika1608/Hyperpersona",
    variant: "default"
  },
];
