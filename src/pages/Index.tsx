import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { FeaturedProjects } from "@/components/portfolio/FeaturedProjects";
import { Stats } from "@/components/portfolio/Stats";
import { Tracks } from "@/components/portfolio/Tracks";
import { Research } from "@/components/portfolio/Research";
import { Experience } from "@/components/portfolio/Experience";
import { Story } from "@/components/portfolio/Story";
import { FAQ } from "@/components/portfolio/FAQ";
import { CTA } from "@/components/portfolio/CTA";
import { Contact } from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <FeaturedProjects />
        <Stats />
        <Tracks />
        <Research />
        <Experience />
        <Story />
        <FAQ />
        <CTA />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
