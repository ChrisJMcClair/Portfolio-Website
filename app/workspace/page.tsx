import Link from "next/link";
import { ArrowLeft, BookOpen, FolderKanban, Lightbulb } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { projects, workspaceItems } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const lanes = [
  {
    title: "Now",
    icon: FolderKanban,
    items: ["Refine homepage copy", "Add real project links", "Deploy to Vercel"],
  },
  {
    title: "Next",
    icon: BookOpen,
    items: ["Write first project case study", "Add downloadable CV", "Connect LinkedIn and GitHub"],
  },
  {
    title: "Ideas",
    icon: Lightbulb,
    items: ["AI-powered study tool", "Module revision dashboard", "Interactive project timeline"],
  },
];

export default function WorkspacePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "mb-10 rounded-lg",
            )}
          >
            <ArrowLeft className="size-4" />
            Back home
          </Link>
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-5">
              Workspace
            </Badge>
            <h1 className="text-5xl font-semibold leading-tight tracking-normal sm:text-6xl">
              A practical place to grow the portfolio.
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Use this page as your working surface for case studies, learning
              logs, deployment tasks, and project ideas. The content comes from
              simple arrays, so you can keep adding without touching the design.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 lg:grid-cols-3 lg:px-10">
          {lanes.map((lane) => {
            const Icon = lane.icon;

            return (
              <Card key={lane.title}>
                <CardHeader>
                  <div className="mb-3 flex size-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle>{lane.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
                    {lane.items.map((item) => (
                      <li key={item} className="border-l border-border pl-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-8 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-normal">
              Workspace Areas
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              These are the buckets you can expand as your portfolio becomes a
              living record of your work.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {workspaceItems.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-8 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-normal">
              Project Pipeline
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Keep this list honest: replace placeholders with real repos, live
              demos, screenshots, and lessons learned.
            </p>
          </div>
          <div className="grid gap-5">
            {projects.map((project) => (
              <Card key={project.title}>
                <CardContent className="grid gap-5 p-6 md:grid-cols-[1fr_auto] md:items-center">
                  <div>
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <Badge variant="outline">{project.status}</Badge>
                      {project.stack.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold tracking-normal">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {project.summary}
                    </p>
                  </div>
                  <Link
                    href={project.href}
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "rounded-lg",
                    )}
                  >
                    Open
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
