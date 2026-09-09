import React from "react";
import Link from "next/link";

import { getBlogPosts } from "@/lib/mdx";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { CalendarDays, User } from "lucide-react";
import RevealAnimation from "@/components/reveal-animations";

export const metadata = {
  title: "Blogs | ANUJ RAJPUT",
  description:
    "Technical articles, development notes, project insights, and lessons learned by ANUJ RAJPUT.",
};

export default function BlogPage() {
  const posts = getBlogPosts().sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }

    return 1;
  });

  return (
    <div className="container mx-auto px-4 py-24 min-h-screen font-sans">
      <RevealAnimation>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Developer Blogs
          </h1>

          <p className="text-zinc-400 text-center max-w-2xl mx-auto">
            Exploring web development, programming, projects, and lessons
            learned while building modern applications.
          </p>
        </div>
      </RevealAnimation>

      {posts.length === 0 ? (
        <div className="flex justify-center">
          <Card className="w-full max-w-2xl bg-black/40 border-zinc-800 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Blogs Coming Soon
              </CardTitle>

              <CardDescription className="text-center">
                Technical articles and development insights will be published
                here soon.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <RevealAnimation key={post.slug} delay={index * 0.1}>
              <Link href={`/blogs/${post.slug}`}>
                <Card className="h-full bg-black/40 border-zinc-800 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 group overflow-hidden hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-3 gap-3">
                      <Badge
                        variant="outline"
                        className="border-purple-500/30 text-purple-400"
                      >
                        {post.metadata.tags?.[0] || "Development"}
                      </Badge>

                      <span className="text-xs text-zinc-500 flex items-center gap-1 whitespace-nowrap">
                        <CalendarDays className="w-3 h-3" />
                        {post.metadata.publishedAt}
                      </span>
                    </div>

                    <CardTitle className="text-xl group-hover:text-purple-400 transition-colors">
                      {post.metadata.title}
                    </CardTitle>

                    <CardDescription className="line-clamp-3">
                      {post.metadata.summary}
                    </CardDescription>
                  </CardHeader>

                  <CardContent />

                  <CardFooter className="mt-auto">
                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                      <User className="w-4 h-4" />
                      {post.metadata.author || "ANUJ RAJPUT"}
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            </RevealAnimation>
          ))}
        </div>
      )}
    </div>
  );
}