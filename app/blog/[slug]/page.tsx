import { notFound } from "next/navigation";
import { blogPosts } from "@/content/site";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main id="main-content" className="pb-16 pt-12 md:pb-20 md:pt-16">
      <Container className="max-w-4xl">
        <Card className="p-8 md:p-12">
          <CardContent className="space-y-8">
            <Badge variant="outline" className="type-label w-fit border-primary/15 bg-primary/8 text-primary">
              {post.category}
            </Badge>
            <div className="space-y-4">
              <h1 className="type-display-1 text-balance">{post.title}</h1>
              <div className="type-meta flex flex-wrap gap-3">
                <span>{post.publishedAt}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
            <div className="space-y-6">
              {post.body.map((paragraph) => (
                <p key={paragraph} className="type-body-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      </Container>
    </main>
  );
}
