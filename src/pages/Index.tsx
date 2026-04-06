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
      {/* Top ribbon accent bar */}
      <div className="ribbon-top" />
      <Header />
      <main>
        <Hero />
        <hr className="section-divider" />
        <FeaturedProjects />
        <hr className="section-divider" />
        <Stats />
        <hr className="section-divider" />
        <Research />
        <hr className="section-divider" />
        <Experience />
        <hr className="section-divider" />
        <Story />
        <hr className="section-divider" />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
