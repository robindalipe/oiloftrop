import type { BlogPost, NavItem, SideProject } from "@/types/content";

export const siteConfig = {
  name: "Robin Dalipe",
  url: "https://robindalipe.com",
  email: "rdalipe@gmail.com",
  linkedin: "https://www.linkedin.com/in/robin-dalipe-664a5352/",
  location: "Sydney, Australia",
  description:
    "Frontend engineer and design systems specialist building accessible, scalable digital experiences across product teams and side ventures.",
};

export const navigation: NavItem[] = [
  { href: "/about", label: "About" },
  { href: "/side-projects", label: "Side Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const heroHighlights = [
  "10+ years shipping frontend systems and polished product UI",
  "Lead UI Developer at Paramount ANZ",
  "Design systems, accessibility, React, Next.js, and frontend architecture",
];

export const coreCapabilities = [
  "Design systems and component libraries",
  "Frontend architecture for React and Next.js",
  "Accessible UI and performance-minded implementation",
  "Cross-functional collaboration with product, design, and engineering",
  "Mentoring teams and raising frontend quality bars",
];

export const sideProjects: SideProject[] = [
  {
    slug: "tito-taco",
    title: "Tito Taco",
    summary: "A Filipino and Mexican food venture shaped as both a brand and digital experience.",
    description:
      "I run Tito Taco as a creative outlet outside software, blending food, branding, and storytelling into a small business with a distinct voice.",
    tags: ["Branding", "Web", "Food"],
    year: "2025",
    role: "Founder",
    accent: "from-[#1f4b41] via-[#16a085] to-[#d5efe8]",
  },
  {
    slug: "adhd-helper",
    title: "ADHD Helper",
    summary: "A lightweight productivity companion focused on clarity, structure, and momentum.",
    description:
      "This project explores how calmer UX, strong defaults, and focused interaction patterns can reduce friction for everyday task management.",
    tags: ["Productivity", "Accessibility", "UX"],
    year: "2025",
    role: "Product Design and Frontend",
    accent: "from-[#101c2c] via-[#1d4e89] to-[#d7e5fb]",
  },
  {
    slug: "card-organiser",
    title: "Card Organiser",
    summary: "A digital utility for sorting collections with fast, tactile interactions.",
    description:
      "I built this to test interaction density, drag-and-drop flows, and clean information hierarchy without losing usability on smaller screens.",
    tags: ["Interaction Design", "React", "Tooling"],
    year: "2024",
    role: "Frontend Engineering",
    accent: "from-[#182127] via-[#33404a] to-[#ecf1ef]",
  },
  {
    slug: "lunch-picker",
    title: "Lunch Picker",
    summary: "A playful side project that removes decision fatigue from quick team choices.",
    description:
      "This experiment focuses on tone, delight, and low-friction UI patterns while still keeping the layout practical and reusable.",
    tags: ["Micro Product", "Frontend", "Experiment"],
    year: "2024",
    role: "UI and Frontend",
    accent: "from-[#402f18] via-[#c57f17] to-[#fdecc8]",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "building-design-systems-that-scale",
    title: "Building design systems that scale",
    excerpt:
      "The practical decisions that keep a design system useful after the first launch, not just visually tidy.",
    category: "Design Systems",
    publishedAt: "May 12, 2025",
    readTime: "6 min read",
    body: [
      "A design system only becomes valuable when teams can use it without slowing down. The first version usually proves visual consistency. The harder problem is keeping the system usable while product teams move quickly and requirements get messy.",
      "I look for systems that treat API design, accessibility, documentation, and governance as one job. A component that looks correct but carries unclear usage rules will still create product drift.",
      "The strongest systems create confidence. They reduce visual debate, make implementation faster, and leave enough room for product teams to solve real customer problems without rebuilding the same primitives every sprint.",
    ],
  },
  {
    slug: "modern-css-for-modern-interfaces",
    title: "Modern CSS for modern interfaces",
    excerpt:
      "Why cleaner CSS architecture matters more than another layer of utility churn or one-off overrides.",
    category: "Frontend",
    publishedAt: "Apr 28, 2025",
    readTime: "5 min read",
    body: [
      "Modern CSS is powerful enough to handle complex layout, theming, and responsive behavior without becoming opaque. The win is not using every new feature. The win is choosing a structure the next engineer can understand quickly.",
      "I prefer systems that make tokens obvious, components predictable, and exceptions rare. That usually means stronger primitives, clearer layering, and fewer styling decisions hidden in scattered files.",
      "When CSS architecture is calm, teams ship faster. Reviews get easier, defects drop, and the visual system becomes something the product can trust instead of work around.",
    ],
  },
  {
    slug: "accessibility-is-a-product-decision",
    title: "Accessibility is a product decision",
    excerpt:
      "Accessible interfaces are not a QA checkbox. They are a sign that the product team respected the shape of real user needs.",
    category: "Accessibility",
    publishedAt: "Mar 18, 2025",
    readTime: "4 min read",
    body: [
      "Accessibility improves products long before a release audit. It influences copy, interaction patterns, focus management, contrast, error handling, and the assumptions a team makes about how a person moves through a screen.",
      "I have found that accessible work often improves the default experience for everyone. Better semantics sharpen design decisions. Better keyboard support usually exposes layout issues sooner. Better content structure improves comprehension on every device.",
      "Teams do their best work when accessibility is designed into the system from the start. That is when quality becomes repeatable instead of reactive.",
    ],
  },
];

export const contactDetails = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    label: "LinkedIn",
    value: "Robin Dalipe",
    href: siteConfig.linkedin,
  },
  {
    label: "Location",
    value: siteConfig.location,
    href: "",
  },
];
