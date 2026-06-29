import { blogPosts } from "@/content/site";
import { PageIntro } from "@/components/sections/page-intro";
import { Container } from "@/components/ui/container";
import { PostCard } from "@/components/ui/post-card";

export const metadata = {
  title: "Blog",
  description: "Writing on design systems, frontend architecture, modern CSS, and accessibility.",
};

export default function BlogPage() {
  return (
    <main id="main-content">
      <PageIntro
        title="Blog"
        description="A growing set of notes on design systems, frontend decision-making, and interface quality."
      />
      <Container className="pb-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </main>
  );
}
