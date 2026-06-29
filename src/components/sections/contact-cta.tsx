import Link from "next/link";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";

export function ContactCta() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <Card>
          <CardContent className="grid gap-6 md:grid-cols-[0.25fr_1fr_0.42fr] md:items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-[1.5rem] border border-primary/15 bg-primary/8 text-primary md:h-24 md:w-24">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-10 w-10">
                <path
                  d="m3 12 17-7-7 17-2.5-7.5L3 12Z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.75"
                />
              </svg>
            </div>
            <div>
              <h2 className="type-display-2">Let&apos;s build something great.</h2>
              <p className="type-body mt-3 max-w-2xl">
                I&apos;m open to thoughtful product work, design system leadership, and collaborations that care
                about craft as much as outcomes.
              </p>
            </div>
            <div className="space-y-3">
              <Button asChild>
                <Link href="/contact">Get in touch</Link>
              </Button>
              <p className="type-meta">
                <a className="font-semibold text-primary transition hover:text-[var(--brand-strong)]" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
                <br />
                {siteConfig.location}
              </p>
            </div>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}
