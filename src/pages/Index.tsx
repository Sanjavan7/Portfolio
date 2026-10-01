import { lazy, Suspense } from "react";
import { useReducedMotion } from "framer-motion";
import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { FeaturedProjects } from "@/components/portfolio/FeaturedProjects";
import { Stats } from "@/components/portfolio/Stats";
import { Research } from "@/components/portfolio/Research";
import { Experience } from "@/components/portfolio/Experience";
import { Story } from "@/components/portfolio/Story";
import { Contact } from "@/components/portfolio/Contact";
import { IntroLoader, useIntroLoader } from "@/components/portfolio/IntroLoader";
import { ChapterOpener } from "@/components/portfolio/ChapterOpener";
import { SideIndex } from "@/components/portfolio/SideIndex";
import { CHAPTERS } from "@/components/island/chapters";
import { useChapterSpy } from "@/hooks/useChapterSpy";

// three.js is only downloaded for the main page, in its own chunk.
const IslandBackdrop = lazy(() => import("@/components/island/IslandBackdrop"));

const Index = () => {
  const { show, dismiss } = useIntroLoader();
  const { active, backdropVisible } = useChapterSpy();
  const reducedMotion = useReducedMotion() ?? false;
  const [projects, research, experience, story, contact] = CHAPTERS;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {show && <IntroLoader onDone={dismiss} />}
      <Suspense fallback={<div className="fixed inset-0 z-0" style={{ background: "#A5C3DA" }} />}>
        <IslandBackdrop chapter={active} running={backdropVisible && !show} reducedMotion={reducedMotion} />
      </Suspense>
      <Header />
      <SideIndex active={active} />
      <main className="relative z-10">
        <Hero />
        <ChapterOpener chapter={projects} />
        <div data-chapter="projects">
          <FeaturedProjects />
          <Stats />
        </div>
        <ChapterOpener chapter={research} />
        <div data-chapter="research">
          <Research />
        </div>
        <ChapterOpener chapter={experience} />
        <div data-chapter="experience">
          <Experience />
        </div>
        <ChapterOpener chapter={story} />
        <div data-chapter="story">
          <Story />
        </div>
        <ChapterOpener chapter={contact} />
        <div data-chapter="contact">
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default Index;
