import { ProjectCardProps } from "../components/FeaturedProjects/ProjectCard.types";

export const projectData: ProjectCardProps[] = [
    {
        title: "E-commerce Platform",
        description: "A fully functional e-commerce platform with product management, cart functionality, and user authentication.",
        techStack: ["React", "Node.js", "MongoDB", "Stripe"],
        imageUrl: "/projects/ecommerce.jpg",
        liveUrl: "https://example.com/ecommerce",
        repoUrl: "https://github.com/yourusername/ecommerce",
        size: "large"
    },
    {
        title: "Weather App",
        description: "Real-time weather information using weather API integration.",
        techStack: ["JavaScript", "API", "CSS"],
        imageUrl: "/projects/weather.jpg",
        liveUrl: "https://example.com/weather",
        repoUrl: "https://github.com/yourusername/weather-app",
        size: "small"
    },
    {
        title: "Task Manager",
        description: "A simple but effective task management application with drag and drop capabilities.",
        techStack: ["React", "Firebase", "Tailwind"],
        imageUrl: "/projects/task-manager.jpg",
        liveUrl: "https://example.com/tasks",
        repoUrl: "https://github.com/yourusername/task-manager",
        size: "small"
    },
    {
        title: "Portfolio Website",
        description: "A modern, responsive portfolio website to showcase projects and skills.",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
        imageUrl: "/projects/portfolio.jpg",
        liveUrl: "https://example.com",
        repoUrl: "https://github.com/yourusername/portfolio",
        size: "large"
    },
    // Add more projects as needed
];