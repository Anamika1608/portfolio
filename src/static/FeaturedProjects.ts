import { ProjectCardProps } from "../components/FeaturedProjects/ProjectCard.types";

export const projectData: ProjectCardProps[] = [
  {
    title: "Safire",
    description: "An AI-powered system with a dashboard to detect, hide, and manage real-time harassment messages on social-media.",
    techStack: ["Plasmo", "Upstash", "Puppeteer", "NextJS", "ExpressJS", "Gemini"],
    imageUrl: "/featured-projects/safire.png",
    liveUrl: "https://safire-five.vercel.app",
    repoUrl: "https://github.com/Anamika1608/Harassment-Saver-Project",
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
  {
    title: "Sukoon",
    description: "Mental wellness platform offering empathetic AI conversations, dream analysis with digital detox detoxification",
    techStack: ["React", "TailwindCSS", "Framer", "Gsap", "Hume", "Gemini"],
    imageUrl: "/featured-projects/sukoon.png",
    liveUrl: "https://sukoon-space.vercel.app",
    repoUrl: "https://github.com/Sukoon-A-Mental-Wellness-Platform/website",
    variant: "default"
  },
  // that connects 100+ users in real-time with automatic presence notifications
  {
    title: "Connect-Me",
    description: "Scalable video conferencing web-app using SFU to connect 100+ concurrent live users.",
    techStack: ["React", "Socket.io", "WebRTC", "MediaSoup", "Express"],
    imageUrl: "/featured-projects/skymate.png",
    liveUrl: "#",
    repoUrl: "https://github.com/Anamika1608/Connect-Me",
    variant: "default"
  },
  {
    title: "Jivika",
    description: "A PWA having interactive 3D models of herbal plants, along with detailed information about each plant.",
    techStack: ["React", "PWA", "Three.js", "GLB 3D Models", "Blender"],
    imageUrl: "/featured-projects/stamprino.png",
    liveUrl: "https://jivika-orpin.vercel.app",
    repoUrl: "https://github.com/Anamika1608/Jivika",
    variant: "default"
  },

];
