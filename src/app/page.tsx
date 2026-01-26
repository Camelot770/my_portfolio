import {
  Hero,
  Manifesto,
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
      <FeaturedProjects />
      <AboutPreview />
      <Services />
      <CTA />
      <FAQ />
    </>
  );
}
