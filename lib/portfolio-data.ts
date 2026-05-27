export const profile = {
  name: "Chris McClair",
  role: "Third-year Computer Science student",
  location: "Glasgow, Scotland",
  email: "cj@mcclair.net",
  github: "https://github.com/ChrisJMcClair",
  linkedin: "https://www.linkedin.com/in/christopher-mcclair-007b69356/",
  cv: "/cv.pdf",
};

export const snapshot = [
  "Third-year Computer Science student",
  "Software engineering intern at Simple Online Pharmacy",
  "Building with Next.js, TypeScript, Tailwind CSS, and automation tools",
];

export const experience = [
  {
    company: "Simple Online Pharmacy",
    role: "Software Engineering Intern",
    dates: "May-Jun 2026 - Present",
    location: "Glasgow, Scotland",
    logo: "/simple-online-pharmacy.png",
    description:
      "Working on internal automation tools and AI-assisted workflows while gaining hands-on experience with modern software engineering and web development practices using TypeScript and Next.js under mentorship from senior developers.",
    stack: ["Next.js", "TypeScript", "Git", "Langdock", "Automation"],
  },
  {
    company: "Placeholder Company",
    role: "Placeholder Experience",
    dates: "Placeholder",
    location: "Placeholder",
    logo: null,
    description:
      "Placeholder for future work experience",
    stack: ["Placeholder"],
  },
];

export const projects = [
  {
    title: "Chris McClair Portfolio",
    status: "Live build",
    summary:
      "This site is a deployable Next.js portfolio built to present experience, projects, and a workspace for future case studies.",
    impact:
      "I used Next.js for routing and deployment readiness, TypeScript for safer component and data changes, Tailwind CSS for fast responsive styling, and shadcn-style components for consistent UI.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn", "Vercel"],
    href: "/workspace",
  },
  {
    title: "Internal Automation Tools",
    status: "Internship",
    summary:
      "Contributing to internal tooling and AI-assisted workflows during my internship at Simple Online Pharmacy.",
    impact:
      "Currently focused on learning professional engineering practices, using Git effectively, and building useful automation under senior developer mentorship.",
    stack: ["Next.js", "TypeScript", "Git", "Langdock", "Automation"],
    href: "#experience",
  },
  {
    title: "Spendly",
    status: "Planning",
    summary:
      "A shared shopping list mobile app for families, partners, flatmates, and small groups.",
    impact:
      "The goal is to explore mobile UX, private circles, real-time shared lists, and useful coordination without overcomplicating the product.",
    stack: ["Mobile app", "TypeScript", "Real-time data", "Product design"],
    href: "/workspace",
  },
];

export const skills = [
  {
    group: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn"],
  },
  {
    group: "Engineering",
    items: ["Git", "Component design", "Responsive UI", "Deployment"],
  },
  {
    group: "Automation",
    items: ["AI-assisted workflows", "Langdock", "Internal tools"],
  },
  {
    group: "Computer Science",
    items: ["Python", "Java", "SQL", "Problem solving"],
  },
];

export const siteBuildNotes = [
  {
    title: "Why Next.js",
    description:
      "It gives the portfolio a production-ready structure with file-based routing, image optimization, static generation, and a straightforward Vercel deployment path.",
  },
  {
    title: "Why TypeScript",
    description:
      "Most of the content is data-driven, so TypeScript helps keep project, experience, and workspace entries consistent as the site grows.",
  },
  {
    title: "Why Tailwind and shadcn",
    description:
      "Tailwind keeps layout work fast and responsive, while shadcn-style primitives give the interface reusable buttons, cards, and badges without hiding the underlying code.",
  },
];

export const workspaceItems = [
  {
    title: "Experience Log",
    description:
      "add some details on experience",
    tags: ["Experience", "Internship", "Notes"],
  },
  {
    title: "Project Case Studies",
    description:
      "Turn each project into a short write-up covering problem, constraints, technical choices, outcome, and links.",
    tags: ["Projects", "Writing", "Evidence"],
  },
  {
    title: "Spendly Build Log",
    description:
      "Notes, design decisions, technical tradeoffs, and progress updates for the shared shopping list app.",
    tags: ["Mobile app", "Product", "Build log"],
  },
];
