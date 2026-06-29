import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { SideProject } from "@/types/content";

export function ProjectCard({ project }: { project: SideProject }) {
  return (
    <article className="h-full">
      <Card className="h-full p-0">
        <div className={`h-56 bg-gradient-to-br ${project.accent} p-5 md:p-6`}>
          <div className="flex h-full items-end">
            <div className="rounded-[1.5rem] border border-white/30 bg-white/80 px-4 py-3 shadow-lg backdrop-blur dark:border-white/10 dark:bg-black/15">
              <p className="type-label text-foreground/70">{project.role}</p>
              <p className="type-display-3 mt-2 text-foreground">{project.title}</p>
            </div>
          </div>
        </div>
        <CardContent className="space-y-5 px-6 pb-6 pt-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="type-display-3 text-foreground">{project.title}</h3>
            <span className="type-meta">{project.year}</span>
          </div>
          <p className="type-body">{project.summary}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="type-label border-primary/15 bg-primary/8 text-primary"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </article>
  );
}
