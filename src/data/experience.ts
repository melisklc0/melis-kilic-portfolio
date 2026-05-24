// src/data/experience.ts
// Edit work experience and education entries here.

export interface ExperienceEntry {
  id: string;
  company: { en: string; tr: string };
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
    company: { en: 'QKare Information Technologies', tr: 'QKare Bilgi Teknolojileri' },
    role: { en: 'AI & Data Engineer', tr: 'Yapay Zeka & Veri Mühendisi' },
    period: '2025 - Present',
    description: {
      en: 'Working across QKare’s B2B HR analytics platform, where workforce data, psychometric assessments, and LLM-backed product features meet. I contribute to dbt/PostgreSQL transformation layers, tenant-safe embedded BI, LangChain/LangGraph analytics agents, KPI and competency advisor services, and shared FastAPI gateway infrastructure with observability, Docker, and CI conventions.',
      tr: 'İş gücü verileri, psikometrik değerlendirmeler ve LLM destekli özellikleri birleştiren B2B İK analitiği SaaS platformunda çalışıyorum. Agentic AI servisleri, veri katmanları, evaluation pipeline\'ları ve FastAPI altyapısında çekirdek geliştirici olarak görev alıyorum.',
    },
    responsibilities: {
      en: [
        'Shipped LLM-backed product features with LangChain, LangGraph, FastAPI, and structured outputs',
        'Worked on PostgreSQL RLS, dbt marts, Superset embedding, observability, and AI service scaffolding',
      ],
      tr: [
        'LangChain/LangGraph tabanlı servisleri FastAPI backend altyapısı ve yapılandırılmış çıktılarla production ortamına taşıdım',
        'PostgreSQL RLS kuralları, dbt veri martları, Superset gömülü BI ve yeniden kullanılabilir AI servis altyapıları geliştirdim',
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
    company: { en: 'Inncrea Software & IT', tr: 'Inncrea Yazılım & Bilişim' },
    role: { en: 'AI Research Intern', tr: 'Yapay Zeka Araştırma Stajyeri' },
    period: '08/2024 - 09/2024',
    description: {
      en: 'Researched CT-based stroke classification with CNN baselines, knowledge distillation, and repeatable evaluation workflows, forming the experimental foundation for the public Stroke Classification project.',
      tr: 'İnme tespiti için CT görüntü sınıflandırma deneyleri kurdum; fold-based evaluation, veri artırma pipeline\'ları ve CNN backbone benchmarking süreçleriyle deneyleri tekrarlanabilir hale getirdim.',
    },
    responsibilities: {
      en: [
        'Built repeatable CT image classification experiments with preprocessing and fold-based evaluation',
        'Compared CNN backbones and distilled teacher models into lighter EfficientNet students',
      ],
      tr: [
        'Ön işleme ve fold-based evaluation içeren tekrarlanabilir CT görüntü sınıflandırma deneyleri kurdum',
        'CNN backbone\'ları üzerinde karşılaştırmalı deneyler yürüterek teacher modellerin bilgisini daha hafif EfficientNet student modellere aktardım (knowledge distillation)',
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
    company: { en: 'Sivas Governorship', tr: 'Sivas Valiliği' },
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
    company: { en: 'Sivas Cumhuriyet University', tr: 'Sivas Cumhuriyet Üniversitesi' },
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
    company: { en: 'AGH University of Krakow', tr: 'AGH Krakow Bilim ve Teknoloji Üniversitesi' },
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
    company: { en: 'National Technology Academy', tr: 'Milli Teknoloji Akademisi' },
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
