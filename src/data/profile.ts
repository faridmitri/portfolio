import type { Profile, Stat } from './types';

export const profile: Profile = {
  name: 'Farid Mitri',
  title: 'Senior Data Engineer — Agentic AI & Data Platforms',
  tagline:
    'Designing large-scale data & AI platforms on Google Cloud — from real-time pipelines to production Generative AI.',
  location: 'Montreal, Quebec',
  email: 'faridmitri@gmail.com',
  phone: '+1 (438) 462-0078',
  summary: [
    'Senior Data Engineer with 12+ years of experience designing and optimizing large-scale data and AI solutions, primarily on Google Cloud Platform (GCP) — now focused on agentic AI systems and the architecture behind them.',
    'Proven expertise in building end-to-end MLOps / data pipelines, Generative AI applications (BigQuery ML, Pub/Sub, Dataflow), and implementing robust cloud security and architecture — Professional Data Engineer and Professional Cloud Architect certified.',
    'Expert at delivering significant business outcomes, including deploying Generative AI for self-service support and achieving substantial cost-efficiency across critical serverless pipelines.',
  ],
  socials: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/farid-mitri',
      icon: 'linkedin',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/faridmitri',
      icon: 'github',
    },
    {
      label: 'Email',
      href: 'mailto:faridmitri@gmail.com',
      icon: 'mail',
    },
  ],
  // Drop your CV PDF into the /public folder and point this at it to enable the
  // "Download CV" button (e.g. "/Farid-Mitri-CV.pdf"). Leave undefined to hide it.
  resumeUrl: '/farid-mitri-cv.pdf',
  // Drop your photo into /public (e.g. /public/avatar.jpg) and set this path.
  // Supports .jpg, .png, .webp. Leave undefined to show the initials monogram.
  avatar: '/fm.png',
};

// Quick-glance numbers shown in the hero. Edit freely.
export const stats: Stat[] = [
  { value: '12+', label: 'Years of experience' },
  { value: '5+', label: 'Cloud certifications' },
  { value: '60%', label: 'HR support calls cut by GenAI' },
  { value: '<$1', label: 'Monthly cost of serverless pipeline' },
];
