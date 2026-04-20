import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { FeaturedProjects } from "@/components/portfolio/FeaturedProjects";
import { Stats } from "@/components/portfolio/Stats";
import { Research } from "@/components/portfolio/Research";
import { Experience } from "@/components/portfolio/Experience";
import { Story } from "@/components/portfolio/Story";
import { Contact } from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <FeaturedProjects />
        <Stats />
        <Research />
        <Experience />
        <Story />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
