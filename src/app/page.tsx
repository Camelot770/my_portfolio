import {
  Hero,
  Manifesto,
  FounderSection,
  FeaturedProjects,
  AboutPreview,
  Services,
  CTA,
  FAQ,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <FounderSection />
      <FeaturedProjects />
      <AboutPreview />
      <Services />
      <CTA />
      <FAQ />
    </>
  );
}
