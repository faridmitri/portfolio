import type { Experience } from './types';

// Most recent first. Add a new role by copying a block to the top.
export const experience: Experience[] = [
  {
    role: 'Data Engineer',
    company: 'WorkJam',
    // logo: '/logos/workjam.svg',  // uncomment after adding the file to /public/logos/
    logoFallback: { initials: 'WJ', color: '#0057ff' },
    start: 'Aug 2024',
    end: 'Present',
    highlights: [
      'Configured and deployed AI Agents within the WorkJam platform, empowering customers to create and manage custom AI-powered assistants directly in the application.',
      'Architected and implemented data ingestion pipelines handling Change Data Capture (CDC), near real-time updates, and incremental/batch processes using Dataflow, dbt, BigQuery, and Cloud Composer.',
      'Implemented advanced data modeling — Slowly Changing Dimension (SCD) Type 1 and Type 2 in BigQuery — for accurate historical tracking and optimized enterprise reporting performance.',
      'Developed a Data-as-a-Service (DaaS) solution enabling customers to securely subscribe to tailored datasets through automated delivery pipelines.',
      'Optimized large-scale ingestion and transformation pipelines, improving processing efficiency and data quality by 15%.',
    ],
    tech: ['Dataflow', 'dbt', 'BigQuery', 'Cloud Composer', 'AI Agents', 'CDC'],
  },
  {
    role: 'Lead Data Engineer / Cloud Architect',
    company: 'ISolution',
    companyNote: 'Premium Google Partner',
    // logo: '/logos/isolution.svg',
    logoFallback: { initials: 'IS', color: '#34a853' },
    start: 'Feb 2023',
    end: 'Aug 2024',
    highlights: [
      'Designed and deployed a Generative AI chatbot for employee self-service support, reducing HR support calls by 60%.',
      'Led implementation of robust ETL/ELT pipelines integrating disparate sources (AWS Aurora MySQL, MS SQL Server, DB2, GA4) into BigQuery with automated data cleansing, cutting manual processing and operational costs.',
      'Implemented a serverless automated data-transfer pipeline (Cloud Functions, Pub/Sub, Cloud Scheduler) with high reliability while keeping operational costs below $1/month.',
      'Developed and deployed a real-time predictive model using BigQuery ML and Vertex AI to accurately identify purchase intent for website visitors.',
    ],
    tech: ['Vertex AI', 'BigQuery ML', 'Cloud Functions', 'Pub/Sub', 'GA4', 'ETL/ELT'],
  },
  {
    role: 'Senior Software Developer / Data Engineer',
    company: 'Credit Libanais Bank',
    // logo: '/logos/credit-libanais.svg',
    logoFallback: { initials: 'CL', color: '#c00020' },
    start: 'Apr 2013',
    end: 'Feb 2023',
    highlights: [
      'Directed and executed a major data migration project, reducing data processing time by 25% and enabling faster, more accurate decision-making for bank management.',
      'Developed and optimized complex ETL mappings and transformations, increasing system performance by 15%.',
      'Designed and deployed data-retrieval APIs, improving data response time for banking operations by 20%.',
      'Designed scalable software and data solutions aligned with enterprise banking operations from detailed business and technical analysis.',
      'Collaborated with Mastercard to develop and integrate secure web services for the TRANSFAST Worldwide Money Transfer platform.',
    ],
    tech: ['ETL', 'Informatica', 'DB2', 'SQL Server', 'APIs', 'RPG400'],
  },
];
