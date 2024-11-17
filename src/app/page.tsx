import { FrontendSkillsShowcaseComponent } from "@/components/Skills";
import AboutMe from "@/components/about-me";
import { BlogSection } from "@/components/blogGroups";
import Hero from "@/components/hero";

import React from "react";

const page = () => {
  return (
    <main className="w-full bg-white">
      <Hero />
      <BlogSection />
      <FrontendSkillsShowcaseComponent />
      <AboutMe />
    </main>
  );
};

export default page;
