import { UnifiedScrollyBackground } from "@/components/UnifiedScrollyBackground";
import { HeroIntro } from "@/components/HeroIntro";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] flex flex-col items-center">
      <UnifiedScrollyBackground />

      {/* 
        The entire page content sits z-10 above the fixed background. 
        Total page length will naturally drive the UnifiedScrollyBackground's scroll mapping.
      */}
      <div className="relative z-10 w-full flex flex-col">
        <HeroIntro />

        {/* We add a large spacer so the user can enjoy the 0-119 zoom-in before text appears */}
        <div className="h-screen w-full" />

        <About />
        <Experience />
        <Projects />

        {/* We add another spacer to allow the 119-0 zoom-out to breathe before the footer */}
        <div className="h-[50vh] w-full" />

        <Contact />
      </div>
    </main>
  );
}
