import { Helmet } from "react-helmet-async";
import Hero from "../sections/home/Hero";
import ProjectsSection from "../sections/home/ProjectsSection";
import AboutSection from "../sections/home/AboutSection";
import ContactSection from "../sections/home/ContactSection";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>David Muñoz — Portfolio</title>
        <meta name="description" content="Portafolio de David Muñoz." />
      </Helmet>

      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}