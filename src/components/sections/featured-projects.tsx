import Link from "next/link";
import { sideProjects } from "@/content/site";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function FeaturedProjects() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <Separator className="mb-8" />
        <div className="mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title="Selected Side Projects"
            description="A few projects where I can move quickly, test ideas, and stay close to the craft."
          />
          <Link href="/side-projects" className="type-label text-primary transition hover:text-[var(--brand-strong)]">
            View all projects →
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {sideProjects.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
