import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import ThemeToggle from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import {
  experience,
  profile,
  projects,
  siteBuildNotes,
  skills,
  snapshot,
  workspaceItems,
} from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-6 gap-2 bg-background/70">
              <Sparkles className="size-3.5" />
              {profile.role} based in {profile.location}
            </Badge>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl">
              {profile.name} builds practical software and automation tools.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              I am a third-year Computer Science student currently gaining
              professional experience with TypeScript, Next.js, internal tools,
              and AI-assisted workflows.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#experience"
                className={cn(buttonVariants({ size: "lg" }), "rounded-lg")}
              >
                View experience
                <ArrowRight className="size-4" />
              </a>
              <Link
                href="/workspace"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-lg",
                )}
              >
                Open workspace
                <Layers3 className="size-4" />
              </Link>
            </div>

            <div className="mt-10 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
              {snapshot.map((item) => (
                <div
                  key={item}
                  className="border-l border-border pl-3 leading-6"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-card shadow-2xl shadow-foreground/10">
              <Image
                src="/cj-profile.jpeg"
                alt="CJ McClair standing under colorful umbrella lights"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                priority
                className="object-cover object-[center_38%]"
              />
            </div>
            <div className="absolute -bottom-5 left-5 right-5 rounded-lg border border-border bg-background/95 p-4 shadow-xl backdrop-blur">
              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <Code2 className="size-5" />
                </div>
                <div>
                  <p className="font-medium">Portfolio in progress</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    This page is designed to grow as my experience, case
                    studies, and project evidence become more complete.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="border-b border-border py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Experience"
            title="Real experience first, placeholders clearly marked."
            description="This section is set up for concrete roles, dates, responsibilities, tools, and what I am learning or contributing."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {experience.map((item) => (
              <Card key={`${item.company}-${item.role}`}>
                <CardHeader>
                  <div className="mb-5 flex items-start justify-between gap-4">
                    {item.logo ? (
                      <div className="flex h-14 max-w-72 items-center rounded-md border border-border bg-white p-3">
                        <Image
                          src={item.logo}
                          alt={`${item.company} logo`}
                          width={260}
                          height={36}
                          className="h-auto w-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="flex h-10 items-center rounded-md border border-dashed border-border px-3 text-xs text-muted-foreground">
                        Placeholder
                      </div>
                    )}
                    <Badge variant="outline">{item.dates}</Badge>
                  </div>
                  <CardTitle className="text-xl">{item.role}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {item.company} · {item.location}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-b border-border py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Featured Work"
            title="Projects with room for evidence, not filler."
            description="This area keeps real builds, internship work, and placeholders separate so the site can mature without pretending everything is finished."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.title} className="flex flex-col">
                <CardHeader>
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <Badge variant="outline">{project.status}</Badge>
                    <BriefcaseBusiness className="size-5 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <p className="text-sm leading-6 text-muted-foreground">
                    {project.summary}
                  </p>
                  <p className="mt-4 text-sm leading-6">{project.impact}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                  <Link
                    href={project.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium"
                  >
                    Explore project
                    <ExternalLink className="size-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="built" className="border-b border-border py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <SectionHeading
            eyebrow="This Site"
            title="How the portfolio is built."
            description="This portfolio is also a project: it shows the frameworks I am using, why they make sense, and how the site can keep growing as I add real experience."
          />
          <div className="grid gap-4">
            {siteBuildNotes.map((note) => (
              <Card key={note.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{note.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {note.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="border-b border-border py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <SectionHeading
            eyebrow="Toolkit"
            title="Tools I am actively using or learning."
            description="A concise view of the frameworks, languages, and workflows that currently appear in my internship, coursework, and portfolio build."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((skillGroup) => (
              <Card key={skillGroup.group}>
                <CardHeader>
                  <CardTitle className="text-base">{skillGroup.group}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item) => (
                      <Badge key={item} variant="outline">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="workspace" className="border-b border-border py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionHeading
                eyebrow="Workspace"
                title="A place to keep adding evidence."
                description="The workspace route gives you a structured area for project notes, experiments, case studies, and future content as your portfolio matures."
              />
              <Link
                href="/workspace"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "mt-8 rounded-lg",
                )}
              >
                Go to workspace
                <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="grid gap-4">
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
        </div>
      </section>

      <section id="about" className="border-b border-border py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-10">
          <div>
            <SectionHeading
              eyebrow="About"
              title="Focused on becoming useful in real engineering teams."
              description="I am shaping this portfolio around concrete work: what I have built, what I am learning on placement, and how I communicate technical decisions."
            />
          </div>
          <div className="space-y-4">
            {workspaceItems.map((item) => (
              <div
                key={item.title}
                className="grid gap-3 border-l border-border pl-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                  <h3 className="font-medium">{item.title}</h3>
                </div>
                <p className="text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 rounded-lg border border-border bg-card p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                Contact
              </Badge>
              <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">
                Looking for a motivated junior developer?
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">
                I am open to internships, graduate roles, and projects where I
                can contribute, learn quickly, and keep shipping useful work.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={`mailto:${profile.email}`}
                className={cn(buttonVariants({ size: "lg" }), "rounded-lg")}
              >
                Email me
                <Mail className="size-4" />
              </a>
              <a
                href={profile.github}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-lg",
                )}
              >
                GitHub
                <GitHubLogoIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground">
            CJ
          </span>
          <span className="hidden text-sm font-medium sm:inline">
            {profile.name}
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <a href="#projects" className="hover:text-foreground">
            Projects
          </a>
          <a href="#experience" className="hover:text-foreground">
            Experience
          </a>
          <a href="#skills" className="hover:text-foreground">
            Skills
          </a>
          <a href="#built" className="hover:text-foreground">
            Built
          </a>
          <Link href="/workspace" className="hover:text-foreground">
            Workspace
          </Link>
          <a href="#contact" className="hover:text-foreground">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 text-sm text-muted-foreground sm:flex">
            <MapPin className="size-4" />
            {profile.location}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className="mb-4 flex items-center gap-2 text-sm font-medium text-muted-foreground">
        <GraduationCap className="size-4" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold leading-tight tracking-normal sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
