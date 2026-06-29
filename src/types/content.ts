export type NavItem = {
  href: string;
  label: string;
};

export type SideProject = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  year: string;
  role: string;
  accent: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime: string;
  body: string[];
};
