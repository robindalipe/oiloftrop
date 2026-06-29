import { ContactCta } from "@/components/sections/contact-cta";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { HomeHero } from "@/components/sections/home-hero";
import { LatestWriting } from "@/components/sections/latest-writing";

export default function HomePage() {
  return (
    <main id="main-content">
      <HomeHero />
      <FeaturedProjects />
      <LatestWriting />
      <ContactCta />
    </main>
  );
}
