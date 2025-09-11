import { Header } from "@/components/Navbar/Header";
import { HeroSection } from "@/components/Hero/HeroSection";
import { ProjectGrid } from "@/components/FeaturedProjects/ProjectGrid";
import { projectData } from "@/components/FeaturedProjects/FeaturedProjects";
import { workExperiencesData } from "@/components/WorkExperience/workExperiencesData"
import WorkExperience from "@/components/WorkExperience/WorkExperience"
import OpenSource from "@/components/OpenSource/OpenSource";
import MoreProjects from "@/components/MoreProjects/MoreProjects";
import Reccomendations from "@/components/Reccomendations/Reccomendations";
import Blogs from "@/components/Blogs/Blogs";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectGrid projects={projectData} />
      <WorkExperience experiences={workExperiencesData} />
      <OpenSource />
      <MoreProjects />
      <Blogs/>
      <Reccomendations/>
      <Contact/>
    </div>
  );
}

