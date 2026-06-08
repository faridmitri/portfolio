// ─────────────────────────────────────────────────────────────────────────────
// Shared content types for the portfolio.
// Every section of the site reads from a typed data file in this folder.
// To add content, open the matching file (e.g. projects.ts) and add an entry —
// TypeScript will tell you if a required field is missing.
// ─────────────────────────────────────────────────────────────────────────────

export interface SocialLink {
  /** Display label, e.g. "LinkedIn" */
  label: string;
  /** Full URL */
  href: string;
  /** Icon id from src/components/Icon.astro (e.g. "linkedin", "mail") */
  icon: string;
}

export interface Profile {
  name: string;
  /** Short role headline, e.g. "Lead Data Engineer & Cloud Architect" */
  title: string;
  /** One-line tagline shown under the title in the hero */
  tagline: string;
  location: string;
  email: string;
  phone: string;
  /** 1–3 short paragraphs for the About section */
  summary: string[];
  socials: SocialLink[];
  /** Optional path (in /public) to a downloadable resume, e.g. "/Farid-Mitri-CV.pdf" */
  resumeUrl?: string;
  /** Optional path (in /public) to a profile photo, e.g. "/avatar.jpg" */
  avatar?: string;
}

export interface Stat {
  /** Big number/label, e.g. "12+" */
  value: string;
  /** Caption, e.g. "Years of experience" */
  label: string;
}

export interface Experience {
  role: string;
  company: string;
  /** Optional note shown next to the company, e.g. "Premium Google Partner" */
  companyNote?: string;
  /** Optional path (in /public) to company logo, e.g. "/logos/workjam.svg" */
  logo?: string;
  /** Initials + brand color used when no logo is set */
  logoFallback?: { initials: string; color: string };
  /** e.g. "Aug 2024" */
  start: string;
  /** e.g. "Present" */
  end: string;
  location?: string;
  /** Bullet-point achievements */
  highlights: string[];
  /** Optional tech tags shown as chips */
  tech?: string[];
}

export interface Project {
  title: string;
  /** Short tagline shown under the title */
  tagline: string;
  description: string;
  /** Tech stack chips */
  tech: string[];
  /** Optional headline metric, e.g. "HR support calls reduced 60%" */
  metric?: string;
  /** Optional external link */
  link?: { label: string; href: string };
  /** Whether to feature it larger in the grid */
  featured?: boolean;
  /** Mark true to show under "Personal Projects" instead of "Selected Work" */
  personal?: boolean;
}

export interface Certification {
  name: string;
  issuer: string;
  /** e.g. "Jul 2025" */
  date: string;
  /** Credly / credential verification URL */
  link?: string;
  /** Credly badge image URL */
  badgeImage?: string;
  /** Optional extra note, e.g. "Recertified" */
  note?: string;
}

export interface Award {
  title: string;
  issuer: string;
  description?: string;
  /** Optional path in /public to an award image/badge photo, e.g. "/awards/hackathon.jpg" */
  image?: string;
  /** Icon key used when no image is set: "trophy" | "medal" | "gem" | "star" */
  icon?: 'trophy' | 'medal' | 'gem' | 'star';
}

export interface SkillGroup {
  category: string;
  /** Icon id for the group header (optional) */
  icon?: string;
  skills: string[];
}

export interface Workshop {
  title: string;
  /** e.g. "Google Montreal" or "Online" */
  location: string;
  /** e.g. "Jul 2025" */
  date: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  detail?: string;
}
