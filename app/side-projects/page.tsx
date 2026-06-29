import { sideProjects } from "@/content/site";
import { PageIntro } from "@/components/sections/page-intro";
import { Container } from "@/components/ui/container";
import { ProjectCard } from "@/components/ui/project-card";

export const metadata = {
  title: "Side Projects",
  description: "A selection of side projects exploring product design, frontend craft, and experimentation.",
};

export default function SideProjectsPage() {
  return (
    <main id="main-content">
      <PageIntro
        title="Side Projects"
        description="These projects give me room to test interaction ideas, explore product concepts, and keep the work tactile."
      />
      <Container className="pb-20">
        <div className="grid gap-6 lg:grid-cols-2">
          {sideProjects.map((project) => (
            <div key={project.slug} className="space-y-4">
              <ProjectCard project={project} />
              <p className="px-2 text-sm leading-7 text-foreground-muted">{project.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
