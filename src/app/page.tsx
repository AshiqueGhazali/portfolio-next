import React from "react";
import IntroScene from "./components/scenes/IntroScene";
import TextScene from "./components/scenes/TextScene";
import SkillsScene from "./components/scenes/SkillsScene";
import ProjectsScene from "./components/scenes/ProjectsScene";
import ExperienceScene from "./components/scenes/ExperienceScene";
import ContactScene from "./components/scenes/ContactScene";

export default function Page() {
  return (
    <main className="relative w-full bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      {/* Scroll-driven Story Sections */}
      <IntroScene />
      <TextScene />
      <SkillsScene />
      <ProjectsScene />
      <ExperienceScene />
      <ContactScene />
    </main>
  );
}
