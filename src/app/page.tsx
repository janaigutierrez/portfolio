import IntroReveal from "@/components/sections/IntroReveal";
import Hero from "@/components/sections/Hero";
import AudienceSection from "@/components/sections/AudienceSection";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/layout/Footer";

export default function Page() {
  return (
    <>
      <IntroReveal />
      <Hero />
      <AudienceSection />
      <ProjectsGrid />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </>
  );
}