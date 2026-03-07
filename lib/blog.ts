import fs from "fs";
import path from "path";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
}

const blogData: Omit<BlogPost, "content">[] = [
  {
    slug: "agressie-in-de-zorg",
    title: "Agressie in de zorg: 60% van medewerkers maakt het mee — wat kunt u doen?",
    excerpt: "Uit recent onderzoek (NOS, februari 2026) blijkt dat 60% van de zorgmedewerkers te maken heeft gehad met agressie. Wat kunt u als zorginstelling doen?",
    date: "2026-03-01",
    readTime: "6 min",
  },
  {
    slug: "zorgbeveiligers-met-zorginzicht",
    title: "Waarom zorgbeveiligers met zorginzicht het verschil maken",
    excerpt: "Het verschil tussen een standaard beveiliger en een zorgbeveiliger is enorm. Ontdek waarom zorginzicht onmisbaar is voor veiligheid in de zorg.",
    date: "2026-03-03",
    readTime: "6 min",
  },
  {
    slug: "vaste-beveiligers-voordelen",
    title: "Vaste beveiligers in uw zorginstelling: de voordelen",
    excerpt: "Wisselende inhuurkrachten ondermijnen de veiligheid. Lees waarom vaste beveiligingsteams effectiever, goedkoper en prettiger zijn.",
    date: "2026-03-05",
    readTime: "5 min",
  },
  {
    slug: "de-escalatie-in-de-zorg",
    title: "De-escalatie in de zorg: hoe getrainde beveiligers incidenten voorkomen",
    excerpt: "De-escalatie is geen trucje, maar een professionele vaardigheid. Ontdek hoe getrainde zorgbeveiligers incidenten voorkomen met verbale technieken.",
    date: "2026-03-07",
    readTime: "6 min",
  },
];

export function getAllPosts(): BlogPost[] {
  return blogData.map((post) => {
    const filePath = path.join(process.cwd(), "content", "blog", `${post.slug}.md`);
    const content = fs.readFileSync(filePath, "utf-8");
    return { ...post, content };
  });
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const meta = blogData.find((p) => p.slug === slug);
  if (!meta) return undefined;
  const filePath = path.join(process.cwd(), "content", "blog", `${meta.slug}.md`);
  const content = fs.readFileSync(filePath, "utf-8");
  return { ...meta, content };
}

export function getAllSlugs(): string[] {
  return blogData.map((p) => p.slug);
}
