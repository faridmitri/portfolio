import type { SkillGroup } from './types';

export const skillGroups: SkillGroup[] = [
  {
    category: 'Cloud Platforms',
    icon: 'cloud',
    skills: ['Google Cloud Platform (GCP)', 'AWS'],
  },
  {
    category: 'Data Engineering',
    icon: 'database',
    skills: [
      'BigQuery',
      'Dataflow',
      'dbt',
      'Data Fusion',
      'Pub/Sub',
      'Cloud Functions',
      'Fivetran',
      'Informatica',
    ],
  },
  {
    category: 'AI / ML',
    icon: 'sparkles',
    skills: [
      'Generative AI',
      'Agentic AI',
      'Vertex AI',
      'BigQuery ML',
      'Prompt Engineering',
      'LLM Orchestration',
    ],
  },
  {
    category: 'Agentic AI',
    icon: 'bot',
    skills: [
      'ADK (Agent Development Kit)',
      'A2A (Agent-to-Agent)',
      'MCP (Model Context Protocol)',
    ],
  },
  {
    category: 'Programming',
    icon: 'code',
    skills: ['Python', 'SQL', 'Kotlin', 'RPG400'],
  },
  {
    category: 'Databases',
    icon: 'database',
    skills: ['BigQuery', 'DB2', 'SQL Server', 'Cloud SQL', 'Firebase'],
  },
  {
    category: 'BI & Analytics',
    icon: 'chart',
    skills: ['Looker', 'Google Analytics 4 (GA4)'],
  },
];
