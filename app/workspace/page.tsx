import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  CircleDollarSign,
  ListChecks,
  MapPin,
  Smartphone,
  UsersRound,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const spendlyFeatures = [
  {
    title: "Shared Circles",
    description:
      "Families, partners, flatmates, or friend groups can create private circles and keep shopping responsibilities in one place.",
    icon: UsersRound,
  },
  {
    title: "Live Shopping Lists",
    description:
      "Items can be added, assigned, and ticked off as people shop, reducing duplicate purchases and forgotten essentials.",
    icon: ListChecks,
  },
  {
    title: "Location-Aware Errands",
    description:
      "Inspired by the usefulness of Life360-style circles, Spendly can eventually help groups coordinate who is near a shop.",
    icon: MapPin,
  },
  {
    title: "Spending Context",
    description:
      "Future versions could track rough spend, split costs, or show who bought what without turning the app into a full finance tool.",
    icon: CircleDollarSign,
  },
];

const buildPlan = [
  "Define the core user flows for creating a circle, inviting people, and adding list items.",
  "Design the first mobile screens for circle overview, shared list, item detail, and completed items.",
  "Build a small MVP with authentication, circle membership, and real-time list updates.",
  "Test with a small group and write a case study covering product decisions and technical tradeoffs.",
];

const stackIdeas = [
  "React Native or Expo",
  "TypeScript",
  "Supabase or Firebase",
  "Real-time data",
  "Push notifications",
  "Mobile UX",
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

          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div className="max-w-3xl">
              <Badge variant="outline" className="mb-5 gap-2">
                <Smartphone className="size-3.5" />
                Current App Idea
              </Badge>
              <h1 className="text-5xl font-semibold leading-tight tracking-normal sm:text-6xl">
                Spendly is a shared shopping list app for real households.
              </h1>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                I am planning a mobile app for families, partners, flatmates,
                and small groups who need a simple way to coordinate shopping.
                The idea is to combine shared lists with the feeling of private
                circles, so people can tick off what has been bought as they go.
              </p>
            </div>

            <Card className="overflow-hidden">
              <div className="relative aspect-square bg-[#16f26d]">
                <Image
                  src="/spendly-logo.jpg"
                  alt="Spendly shopping cart logo"
                  fill
                  priority
                  sizes="(min-width: 1024px) 28rem, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_42%,rgba(0,0,0,0.5)_100%)]" />
                <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.38)]" />
              </div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <CardTitle className="text-lg">Project Status</CardTitle>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stackIdeas.map((item) => (
                    <Badge key={item} variant="outline">
                      {item}
                    </Badge>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-6 text-muted-foreground">
                  Early concept. This page will become the public build log,
                  product notes, and eventual case study for the app.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-8 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-normal">
              What Spendly Should Do
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              The first version should stay small: shared circles, shared
              lists, and a smooth way to mark progress while shopping.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {spendlyFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <Card key={feature.title}>
                  <CardHeader>
                    <div className="mb-3 flex size-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.75fr_1fr] lg:px-10">
          <div>
            <Badge variant="outline" className="mb-4">
              Build Plan
            </Badge>
            <h2 className="text-3xl font-semibold tracking-normal">
              From idea to case study.
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              The goal is not just to build another todo list. The goal is to
              show product thinking, mobile UX decisions, real-time state, and a
              clear technical write-up.
            </p>
          </div>

          <div className="space-y-4">
            {buildPlan.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-lg border border-border bg-card p-4"
              >
                <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-secondary text-sm font-medium text-secondary-foreground">
                  {index + 1}
                </div>
                <p className="text-sm leading-6 text-muted-foreground">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Card>
            <CardContent className="grid gap-6 p-6 md:grid-cols-[auto_1fr_auto] md:items-center">
              <div className="flex size-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <CheckCircle2 className="size-6" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold tracking-normal">
                  Portfolio angle
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Spendly can become a strong portfolio project because it has a
                  real audience, clear collaboration problems, mobile-first UX,
                  and enough technical depth for authentication, permissions,
                  real-time data, and deployment decisions.
                </p>
              </div>
              <Link
                href="/#projects"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "rounded-lg",
                )}
              >
                Back to projects
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
