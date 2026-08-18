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
        'Shipped multi-agent HR analytics and coaching features in production with LangChain, LangGraph, FastAPI, and structured outputs',
        'Designed a tenant-safe LangGraph platform with request-scoped PostgreSQL RLS-aware tool calls and YAML-backed prompt configuration versioned in Git',
        'Made AI Coach quality measurable: 49 POML orchestrator prompts across 43 coaching modes, simulated LLM-to-LLM sessions, and LLM-as-judge scoring across 5 quality dimensions',
        'Grounded a position-based KPI recommendation service in 2,680 APQC metrics and 1,631 PCF nodes, with LLM-as-judge SMART-alignment scoring',
        'Powered tenant-safe Superset dashboards by modeling 56 mart tables through a 109-model dbt Core layer, resolving critical employee-level aggregation errors',
        'Enforced PostgreSQL RLS tenant boundaries as testable pipeline contracts with automated parity tests',
        'Built a reusable FastAPI gateway factory with standardized auth, structured JSON logging, correlation IDs, OpenTelemetry hooks, and cookiecutter scaffolding',
      ],
      tr: [
        'LangChain/LangGraph tabanlı multi-agent workforce analytics ve coaching özelliklerini FastAPI altyapısı ve yapılandırılmış çıktılarla production ortamına taşıdım',
        'Request bazlı PostgreSQL RLS uygulayan tool call\'lar, ayrılmış domain sözleşmeleri ve Git\'te versiyonlanan YAML prompt yapılandırmalarıyla tenant-safe bir LangGraph platformu kurdum',
        '43 koçluk modu için 49 POML orchestrator prompt\'u, LLM-to-LLM simülasyonları ve 5 boyutta LLM-as-judge puanlamasıyla AI Coach kalitesini ölçülebilir hale getirdim',
        'Pozisyon bazlı KPI öneri servisini 2.680 APQC metriği ve 1.631 PCF düğümüyle ilişkilendirdim; LLM-as-judge SMART uyumluluk puanlaması ekledim',
        '109 modelden oluşan dbt Core katmanıyla 56 veri mart tablosunu besledim ve Superset panolarındaki çalışan seviyesinde oluşan kritik metrik hesaplama hatalarını çözdüm',
        'PostgreSQL native RLS kurallarını otomatik parite testleriyle doğrulanabilir pipeline sözleşmelerine dönüştürerek tenant izolasyonunu güçlendirdim',
        'Standart auth, yapılandırılmış JSON loglama, correlation ID, OpenTelemetry hook\'ları ve cookiecutter scaffolding içeren yeniden kullanılabilir bir FastAPI gateway factory geliştirdim',
      ],
    },
    techStack: [
      'LangGraph',
      'LangChain',
      'FastAPI',
      'PostgreSQL RLS',
      'dbt Core',
      'Apache Superset',
      'LLM-as-Judge',
      'OpenTelemetry',
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
        'Built repeatable CT image classification experiments with augmentation pipelines and fold-based evaluation',
        'Benchmarked 7 CNN backbones to select the teacher, then ran knowledge distillation across 6 student architectures',
      ],
      tr: [
        'Veri artırma pipeline\'ları ve fold-based evaluation içeren tekrarlanabilir CT görüntü sınıflandırma deneyleri kurdum',
        '7 CNN backbone üzerinde karşılaştırmalı deneyler yürüterek öğretmen model seçimini yaptım; seçilen modelle 6 farklı öğrenci mimarisi üzerinde knowledge distillation deneyleri gerçekleştirdim',
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
