import { Header } from "@/components/Navbar/Header";
import { HeroSection } from "@/components/Hero/HeroSection";
import { ProjectGrid } from "@/components/FeaturedProjects/ProjectGrid";
import { projectData } from "@/static/FeaturedProjects";


export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <ProjectGrid projects={projectData} />
    </div>
  );
}

