import Link from "next/link";
import { navigation, siteConfig } from "@/content/site";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/88 backdrop-blur-xl">
      <Container className="flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="type-display-3 leading-none text-foreground transition hover:text-primary">
            {siteConfig.name}
          </Link>
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 md:justify-end">
          <nav aria-label="Primary navigation" className="overflow-x-auto">
            <ul className="type-label flex min-w-max items-center gap-5 text-foreground-muted md:gap-8">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link className="transition hover:text-primary" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}
