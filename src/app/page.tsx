import { Header } from "@/components/Navbar/Header";
import { HeroSection } from "@/components/Hero/HeroSection";
import { ProjectGrid } from "@/components/FeaturedProjects/ProjectGrid";
import { projectData } from "@/static/FeaturedProjects";
import { workExperiencesData } from "@/components/WorkExperience/workExperiencesData"
import WorkExperience from "@/components/WorkExperience/WorkExperience"

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectGrid projects={projectData} />
      <WorkExperience experiences={workExperiencesData} />
    </div>
  );
}

