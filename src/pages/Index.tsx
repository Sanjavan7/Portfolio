import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { FeaturedProjects } from "@/components/portfolio/FeaturedProjects";
import { Stats } from "@/components/portfolio/Stats";
import { Research } from "@/components/portfolio/Research";
import { Experience } from "@/components/portfolio/Experience";
import { Story } from "@/components/portfolio/Story";
import { Contact } from "@/components/portfolio/Contact";
import { IntroLoader, useIntroLoader } from "@/components/portfolio/IntroLoader";

const Index = () => {
  const { show, dismiss } = useIntroLoader();
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {show && <IntroLoader onDone={dismiss} />}
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
