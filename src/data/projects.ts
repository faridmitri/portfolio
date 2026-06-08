import type { Project } from './types';

// ── Professional projects (delivered at work) ────────────────────────────────
// Set personal: true to move a project into the "Personal Projects" group.
export const projects: Project[] = [
  {
    title: 'Generative AI Self-Service Support Chatbot',
    tagline: 'Employee HR assistant powered by Vertex AI',
    description:
      'Designed and deployed a Generative AI chatbot that lets employees self-serve common HR questions, dramatically reducing ticket volume and freeing the support team for higher-value work.',
    tech: ['Vertex AI', 'Generative AI', 'LLM Orchestration', 'GCP'],
    metric: 'HR support calls reduced by 60%',
    featured: true,
  },
  {
    title: 'In-App AI Agents Platform',
    tagline: 'Custom AI assistants inside WorkJam',
    description:
      'Configured and deployed AI Agents within the WorkJam platform, empowering customers to build and manage their own custom AI-powered assistants directly in the application.',
    tech: ['AI Agents', 'ADK', 'Vertex AI', 'Prompt Engineering'],
    featured: true,
  },
  {
    title: 'Near Real-Time CDC Ingestion Pipelines',
    tagline: 'Streaming + batch data into BigQuery',
    description:
      'Architected ingestion pipelines handling Change Data Capture, near real-time updates, and incremental/batch loads, with SCD Type 1 & 2 modeling for accurate historical tracking and fast enterprise reporting.',
    tech: ['Dataflow', 'dbt', 'BigQuery', 'Cloud Composer', 'CDC'],
    metric: '+15% processing efficiency & data quality',
  },
  {
    title: 'Data-as-a-Service Delivery Platform',
    tagline: 'Secure, subscription-based datasets',
    description:
      'Built a Data-as-a-Service solution that lets customers securely subscribe to tailored datasets, delivered automatically through productized pipelines.',
    tech: ['BigQuery', 'Dataflow', 'Automation', 'GCP'],
  },
  {
    title: 'Serverless Automated Data Transfer',
    tagline: 'High reliability at near-zero cost',
    description:
      'Implemented a fully serverless, event-driven data transfer pipeline using Cloud Functions, Pub/Sub, and Cloud Scheduler — highly reliable while keeping operational cost under a dollar a month.',
    tech: ['Cloud Functions', 'Pub/Sub', 'Cloud Scheduler'],
    metric: 'Operational cost < $1 / month',
  },
  {
    title: 'Purchase-Intent Prediction Model',
    tagline: 'Real-time scoring of website visitors',
    description:
      'Developed and deployed a real-time predictive model with BigQuery ML and Vertex AI to accurately identify purchase intent for website visitors, enabling targeted engagement.',
    tech: ['BigQuery ML', 'Vertex AI', 'GA4', 'MLOps'],
  },

  // ── Personal projects ───────────────────────────────────────────────────────
  // Add your own side projects below with personal: true.
  {
    title: 'Autonomous Digital Creator Agent',
    tagline: 'Agentic AI that researches, writes, publishes & promotes — fully autonomously',
    description:
      'Built an end-to-end Agentic AI system that runs with zero human input: it discovers trending Google Cloud topics, writes a 1,000–2,000 word SEO-optimized article, generates a cover image with Imagen 4, publishes to Blogger, cross-posts to Facebook, and pings Google\'s Indexing API — all autonomously. The architecture uses an orchestrator agent that delegates to three specialist agents over the A2A protocol.',
    tech: ['Google ADK', 'Gemini 2.5 Flash', 'Imagen 4', 'A2A', 'MCP', 'Cloud Run', 'Secret Manager', 'Artifact Registry', 'GitHub Actions'],
    link: { label: 'View on GitHub', href: 'https://github.com/faridmitri/DigitalCreatorAgent' },
    featured: true,
    personal: true,
  },
];
