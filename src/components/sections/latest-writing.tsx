import Link from "next/link";
import { blogPosts } from "@/content/site";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { PostCard } from "@/components/ui/post-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function LatestWriting() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <Separator className="mb-8" />
        <div className="mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Writing"
            title="Latest Writing"
            description="Notes on design systems, frontend architecture, accessibility, and what makes interfaces easier to trust."
          />
          <Link href="/blog" className="type-label text-primary transition hover:text-[var(--brand-strong)]">
            View all articles →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.slice(0, 2).map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
