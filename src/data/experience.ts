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
    role: { en: 'AI Engineer', tr: 'Yapay Zeka Mühendisi' },
    period: '06/2025 - Present',
    description: {
      en: 'Designing production-ready AI and data systems across multi-agent orchestration, RAG pipelines, analytics-ready data models, and Superset-based BI workflows.',
      tr: 'Multi-agent orkestrasyon, RAG pipeline’ları, analitiğe hazır veri modelleri ve Superset tabanlı BI iş akışları üzerinde üretime hazır AI ve veri sistemleri tasarlıyorum.',
    },
    responsibilities: {
      en: [
        'Built and optimized multi-agent architectures with LangChain and LangGraph',
        'Integrated agent routing and orchestration through FastAPI and Pydantic',
        'Prototyped RAG pipelines using ChromaDB and prompt refinement workflows',
        'Designed dbt models on PostgreSQL for analytics-ready enterprise data layers',
        'Developed and customized Apache Superset dashboards aligned with KPIs',
      ],
      tr: [
        'LangChain ve LangGraph ile multi-agent mimarileri geliştirdim ve optimize ettim',
        'FastAPI ve Pydantic ile agent routing ve orkestrasyon akışlarını entegre ettim',
        'ChromaDB kullanan RAG pipeline prototipleri ve prompt iyileştirme akışları geliştirdim',
        'PostgreSQL üzerinde analitiğe hazır enterprise veri katmanları için dbt modelleri tasarladım',
        'KPI odaklı Apache Superset dashboardları geliştirdim ve görsel olarak özelleştirdim',
      ],
    },
    techStack: ['Python', 'FastAPI', 'Pydantic', 'LangChain', 'LangGraph', 'ChromaDB', 'dbt', 'PostgreSQL', 'Superset'],
  },
  {
    id: 'inncrea',
    type: 'work',
    company: 'Inncrea Yazılım Bilişim San. Tic. Ltd. Şti.',
    role: { en: 'Deep Learning Intern', tr: 'Deep Learning Stajyeri' },
    period: '08/2024 - 09/2024',
    description: {
      en: 'Worked on medical image classification experiments with CNN architectures, cross-validation, augmentation, and metric-driven model comparison.',
      tr: 'CNN mimarileri, cross-validation, augmentation ve metrik odaklı model karşılaştırmalarıyla tıbbi görüntü sınıflandırma deneyleri üzerinde çalıştım.',
    },
    responsibilities: {
      en: [
        'Trained ResNet18, VGG16, and DenseNet models for medical image classification',
        'Applied data augmentation and 3-fold cross-validation to improve generalization',
        'Tracked Accuracy and F1-Score to guide architecture and training adjustments',
      ],
      tr: [
        'Tıbbi görüntü sınıflandırması için ResNet18, VGG16 ve DenseNet modelleri eğittim',
        'Genelleme performansını artırmak için data augmentation ve 3-fold cross-validation uyguladım',
        'Mimari ve eğitim ayarlarını yönlendirmek için Accuracy ve F1-Score metriklerini takip ettim',
      ],
    },
    techStack: ['Python', 'PyTorch', 'CNN', 'ResNet18', 'VGG16', 'DenseNet', 'Medical Imaging'],
  },
  {
    id: 'sivas-governorship',
    type: 'work',
    company: 'T.C. Sivas Valiliği',
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
