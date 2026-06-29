import Link from "next/link";
import { navigation, siteConfig } from "@/content/site";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border/80 py-10 md:mt-24 md:py-12">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="type-display-3 text-foreground">{siteConfig.name}</p>
            <p className="type-body mt-3 max-w-xl">{siteConfig.description}</p>
          </div>
          <div className="self-start md:self-auto">
            <ThemeToggle />
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <nav aria-label="Footer navigation">
            <ul className="type-label flex flex-wrap gap-5 text-foreground-muted">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link className="transition hover:text-primary" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="type-meta">
            <a className="transition hover:text-primary" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            {" · "}
            <a className="transition hover:text-primary" href={siteConfig.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
