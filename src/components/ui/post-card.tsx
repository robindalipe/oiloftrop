import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { BlogPost } from "@/types/content";

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="h-full">
      <Card className="h-full p-0">
        <div className="h-52 bg-[linear-gradient(135deg,rgba(13,20,24,0.95),rgba(22,160,133,0.78),rgba(247,248,246,0.62))] p-5 dark:bg-[linear-gradient(135deg,rgba(12,18,22,1),rgba(18,82,71,0.94),rgba(18,33,38,1))] md:p-6">
          <div className="flex h-full flex-col justify-between">
            <Badge variant="outline" className="type-label w-fit border-white/18 bg-white/10 text-white">
              {post.category}
            </Badge>
            <div className="max-w-xs rounded-[1.5rem] border border-white/18 bg-black/20 p-4 backdrop-blur">
              <p className="type-display-3 leading-none text-white">{post.title}</p>
            </div>
          </div>
        </div>
        <CardContent className="space-y-4 px-6 pb-6 pt-5">
          <div className="type-meta flex flex-wrap gap-3">
            <span>{post.publishedAt}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <p className="type-body">{post.excerpt}</p>
          <Button asChild variant="link" className="w-fit">
            <Link href={`/blog/${post.slug}`}>Read article</Link>
          </Button>
        </CardContent>
      </Card>
    </article>
  );
}
