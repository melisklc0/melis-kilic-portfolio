// src/data/experience.ts
// Edit work experience and education entries here.

export interface ExperienceEntry {
  id: string;
  company: string;
  role: { en: string; tr: string };
  period: string;
  description: { en: string; tr: string };
  responsibilities: { en: string[]; tr: string[] };
  techStack: string[];
  type: 'work' | 'education';
}

export const experience: ExperienceEntry[] = [
  {
    id: 'qkare',
    type: 'work',
    company: 'QKare Information Technologies',
    role: { en: 'AI & Data Engineer', tr: 'Yapay Zeka & Veri Mühendisi' },
    period: '2025 - Present',
    description: {
      en: 'Working across QKare’s B2B HR analytics platform, where workforce data, psychometric assessments, and LLM-backed product features meet. I contribute to dbt/PostgreSQL transformation layers, tenant-safe embedded BI, LangChain/LangGraph analytics agents, KPI and competency advisor services, and shared FastAPI gateway infrastructure with observability, Docker, and CI conventions.',
      tr: 'QKare’in workforce data, psychometric assessment ve LLM-backed product feature’ları birleştiren B2B HR analytics platformunda çalışıyorum. dbt/PostgreSQL transformation layer, tenant-safe embedded BI, LangChain/LangGraph analytics agent’ları, KPI ve competency advisor servisleri, observability, Docker ve CI convention’ları olan shared FastAPI gateway altyapısına katkı veriyorum.',
    },
    responsibilities: {
      en: [
        'Shipped LLM-backed product features with LangChain, LangGraph, FastAPI, and structured outputs',
        'Worked on PostgreSQL RLS, dbt marts, Superset embedding, observability, and AI service scaffolding',
      ],
      tr: [
        'LangChain, LangGraph, FastAPI ve structured outputs ile LLM-backed product feature’lar geliştirdim',
        'PostgreSQL RLS, dbt mart’lar, Superset embedding, observability ve AI service scaffolding tarafında çalıştım',
      ],
    },
    techStack: [
      'LLM Agents',
      'FastAPI',
      'PostgreSQL RLS',
      'dbt',
      'Embedded BI',
      'Langfuse',
      'Docker',
    ],
  },
  {
    id: 'inncrea',
    type: 'work',
    company: 'Inncrea Software & IT',
    role: { en: 'AI Research Intern', tr: 'Yapay Zeka Araştırma Stajyeri' },
    period: '08/2024 - 09/2024',
    description: {
      en: 'Researched CT-based stroke classification with CNN baselines, knowledge distillation, and repeatable evaluation workflows, forming the experimental foundation for the public Stroke Classification project.',
      tr: 'BT tabanlı stroke classification için CNN baseline’ları, knowledge distillation ve repeatable evaluation workflow’ları üzerine çalıştım; bu çalışma public Stroke Classification projesinin deneysel temelini oluşturdu.',
    },
    responsibilities: {
      en: [
        'Built repeatable CT image classification experiments with preprocessing and fold-based evaluation',
        'Compared CNN backbones and distilled teacher models into lighter EfficientNet students',
      ],
      tr: [
        'Preprocessing ve fold-based evaluation içeren repeatable CT image classification deneyleri kurdum',
        'CNN backbone’larını karşılaştırıp teacher modelleri daha hafif EfficientNet student modellere distill ettim',
      ],
    },
    techStack: [
      'Stroke Classification',
      'Medical Imaging',
      'Knowledge Distillation',
      'PyTorch',
      'Computer Vision',
    ],
  },
  {
    id: 'sivas-governorship',
    type: 'work',
    company: 'Sivas Governorship',
    role: { en: 'IT Intern', tr: 'Bilgi İşlem Stajyeri' },
    period: '07/2023 - 08/2023',
    description: {
      en: 'Completed an IT internship in a public-sector information systems environment.',
      tr: 'Kamu kurumunda bilgi işlem süreçleri ve kurum içi sistemler üzerine staj yaptım.',
    },
    responsibilities: {
      en: [],
      tr: [],
    },
    techStack: ['IT Support', 'Public Sector Systems'],
  },
];

export const education: ExperienceEntry[] = [
  {
    id: 'scu',
    type: 'education',
    company: 'Sivas Cumhuriyet University',
    role: { en: "Bachelor's Degree, Computer Engineering", tr: 'Bilgisayar Mühendisliği Lisans' },
    period: '09/2021 - 07/2025',
    description: {
      en: 'Computer Engineering education with a strong focus on AI, software systems, deep learning, and applied machine learning projects.',
      tr: 'Yapay zeka, yazılım sistemleri, derin öğrenme ve uygulamalı makine öğrenmesi projelerine odaklanan bilgisayar mühendisliği eğitimi.',
    },
    responsibilities: {
      en: [],
      tr: [],
    },
    techStack: ['Computer Engineering', 'Machine Learning', 'Deep Learning', 'Software Systems'],
  },
  {
    id: 'agh-erasmus',
    type: 'education',
    company: 'AGH University of Krakow',
    role: { en: 'Erasmus+ Participant', tr: 'Erasmus+ Katılımcısı' },
    period: '09/2023 - 03/2024',
    description: {
      en: 'Erasmus+ study period in Krakow, Poland, within the Computer Engineering field.',
      tr: 'Polonya Krakow’da Computer Engineering alanında Erasmus+ öğrenim dönemi.',
    },
    responsibilities: {
      en: [],
      tr: [],
    },
    techStack: ['Computer Engineering', 'Erasmus+', 'International Study'],
  },
  {
    id: 'national-tech-academy',
    type: 'education',
    company: 'National Technology Academy',
    role: { en: 'AI Specialization Program', tr: 'Yapay Zeka Uzmanlık Programı' },
    period: '12/2024 - 06/2025',
    description: {
      en: 'AI specialization training focused on practical artificial intelligence foundations and applied workflows.',
      tr: 'Pratik yapay zeka temelleri ve uygulamalı iş akışlarına odaklanan yapay zeka uzmanlık eğitimi.',
    },
    responsibilities: {
      en: [],
      tr: [],
    },
    techStack: ['Artificial Intelligence', 'Applied AI', 'Machine Learning'],
  },
];
