import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { FeaturedProjects } from "@/components/portfolio/FeaturedProjects";
import { Stats } from "@/components/portfolio/Stats";
import { Research } from "@/components/portfolio/Research";
import { Experience } from "@/components/portfolio/Experience";
import { Story } from "@/components/portfolio/Story";
import { Contact } from "@/components/portfolio/Contact";
import { BotanicalCornerTopRight, BotanicalCornerBottomLeft, BotanicalBorder } from "@/components/portfolio/BotanicalSVG";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Global background botanical decorations — scattered across the entire page */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top area */}
        <BotanicalCornerBottomLeft className="absolute top-[120vh] -left-16 w-[300px] h-[300px] md:w-[450px] md:h-[450px]" opacity={0.03} />
        <BotanicalCornerTopRight className="absolute top-[180vh] -right-20 w-[350px] h-[350px] md:w-[500px] md:h-[500px]" opacity={0.025} />

        {/* Mid area */}
        <BotanicalCornerBottomLeft className="absolute top-[280vh] -right-24 w-[280px] h-[280px] md:w-[420px] md:h-[420px] rotate-90" opacity={0.03} />
        <BotanicalCornerTopRight className="absolute top-[350vh] -left-20 w-[320px] h-[320px] md:w-[480px] md:h-[480px] -rotate-90" opacity={0.025} />

        {/* Bottom area */}
        <BotanicalCornerBottomLeft className="absolute top-[450vh] -right-16 w-[260px] h-[260px] md:w-[400px] md:h-[400px]" opacity={0.03} />
        <BotanicalCornerTopRight className="absolute top-[520vh] -left-16 w-[300px] h-[300px] md:w-[450px] md:h-[450px] rotate-180" opacity={0.025} />

        {/* Vine borders scattered */}
        <BotanicalBorder className="absolute top-[200vh] left-0 w-full h-[150px]" opacity={0.025} />
        <BotanicalBorder className="absolute top-[400vh] left-0 w-full h-[150px]" opacity={0.02} />
      </div>

      <Header />
      <main className="relative z-10">
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
