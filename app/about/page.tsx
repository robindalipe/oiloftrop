import Link from "next/link";
import { coreCapabilities, siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/sections/page-intro";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "About",
  description: `About ${siteConfig.name}, a frontend engineer and design systems specialist based in ${siteConfig.location}.`,
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageIntro
        title="About"
        description="I focus on product interfaces that feel considered, perform well, and scale without losing clarity."
      />
      <Container className="grid gap-6 pb-16 md:gap-8 md:pb-20 lg:grid-cols-[1.15fr_0.85fr]">
        <Card>
          <section>
            <CardHeader className="gap-4">
              <Badge variant="outline" className="type-label w-fit border-primary/20 bg-primary/8 text-primary">
                Product-minded frontend
              </Badge>
              <CardTitle className="type-display-2">
                Designing systems that keep clarity under pressure
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <p className="type-body">
                  I&apos;m a Sydney-based frontend engineer working at the intersection of UI quality, systems
                  thinking, and product delivery. My work has centered on building interfaces that hold up under
                  real-world complexity, not just polished launch screens.
                </p>
                <p className="type-body">
                  With over 10 years in frontend development, I specialize in intuitive, scalable user interfaces
                  with a strong focus on UI, UX, and design systems. I care about the details because they
                  compound. Good naming, clear patterns, and accessible defaults create better products over time.
                </p>
                <p className="type-body">
                  I&apos;m passionate about translating design intent into clean, functional code and thrive in
                  collaborative environments where design and engineering work closely together. Outside software,
                  I spend time building creative side projects and growing Tito Taco, which keeps my perspective
                  grounded in craft, speed, and customer experience.
                </p>
              </div>
            </CardContent>
          </section>
        </Card>
        <aside className="space-y-6">
          <Card>
            <CardHeader className="gap-3">
              <p className="type-label text-primary">Core capabilities</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {coreCapabilities.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2.5 h-2 w-2 rounded-full bg-primary" />
                    <span className="type-body text-[0.97rem]">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="gap-3">
              <p className="type-label text-primary">Currently</p>
              <CardTitle className="type-display-2">Lead UI Developer at Paramount ANZ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <p className="type-body">
                Leading frontend delivery, mentoring engineers, and evolving scalable UI systems across product
                experiences including the 10 website.
              </p>
              <Separator />
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Button asChild variant="outline">
                  <Link href="/contact">Start a conversation</Link>
                </Button>
                <p className="type-meta">{siteConfig.location}</p>
              </div>
            </CardContent>
          </Card>
        </aside>
      </Container>
    </main>
  );
}
