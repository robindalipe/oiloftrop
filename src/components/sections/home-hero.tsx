import Image from "next/image";
import Link from "next/link";
import { heroHighlights, siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

export function HomeHero() {
  return (
    <section className="pb-12 pt-8 md:pb-20 md:pt-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10">
          <div>
            <Badge variant="outline" className="type-label border-primary/20 bg-primary/8 text-primary">
              Frontend systems and design systems
            </Badge>
            <h1 className="type-hero mt-6 max-w-5xl text-balance">
              I build accessible, scalable <span className="text-primary">frontend systems</span> and design systems.
            </h1>
            <p className="type-body-lg mt-6 max-w-2xl">
              I&apos;m a Sydney-based frontend engineer and design systems specialist with 10+ years of
              experience crafting thoughtful digital experiences that are fast, inclusive, and built to scale.
              Currently Lead UI Developer at Paramount ANZ, where I help shape frontend delivery for products
              including the 10 website.
            </p>
            <div className="mt-8 rounded-[1.5rem] border border-primary/15 bg-primary/7 p-5">
              <p className="type-body">
                Outside of work, I&apos;m building{" "}
                <a
                  className="font-semibold text-primary transition hover:text-[var(--brand-strong)]"
                  href="https://titotaco.com.au/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tito Taco
                </a>
                , a side venture bringing bold Filipino flavours to the streets.
              </p>
            </div>
            <ul className="mt-8 space-y-3">
              {heroHighlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2.5 h-2 w-2 rounded-full bg-primary" />
                  <span className="type-body text-[0.97rem]">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/side-projects">View my work</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/about">About me</Link>
              </Button>
            </div>
            <p className="type-meta mt-5">{siteConfig.location}</p>
          </div>
          <div className="relative">
            <div className="surface-card relative overflow-hidden rounded-[2.25rem] border border-white/30 p-3">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(22,160,133,0.14),transparent_35%)]" />
              <Image
                src="/robin-dalipe.jpg"
                alt={`${siteConfig.name} portrait`}
                width={800}
                height={800}
                className="relative z-10 aspect-square rounded-[1.8rem] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
