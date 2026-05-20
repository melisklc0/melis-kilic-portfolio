// src/data/projects.ts
// Each project has both 'en' and 'tr' content fields.
// Replace placeholder text with cleaned project briefs as they become available.
// Required fields: id, title, summary
// Optional: problem, contribution, highlights[], techStack[], impact, links, status, featured

export type ProjectStatus = 'public' | 'private' | 'company' | 'academic';

export interface ProjectLinks {
  github?: string;
  demo?: string;
  case_study?: string;
  article?: string;
  private_note?: string;
}

export interface ProjectContent {
  title: string;
  summary: string;
  problem?: string;
  contribution?: string;
  highlights?: string[];
  impact?: string;
}

export interface Project {
  id: string;
  en: ProjectContent;
  tr: ProjectContent;
  techStack: string[];
  links: ProjectLinks;
  status: ProjectStatus;
  featured?: boolean;
}

export const projects: Project[] = [
  // ─────────────────────────────────────────────
  // PASTE CLEANED PROJECT BRIEF HERE: Analytics Dashboard
  // ─────────────────────────────────────────────
  {
    id: 'analytics-dashboard',
    featured: true,
    status: 'company',
    techStack: ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'SQL', 'Docker'],
    links: {
      private_note: 'Internal company project — details available on request.',
    },
    en: {
      title: 'Analytics Dashboard',
      summary: 'A full-stack analytics platform for visualizing KPIs, business metrics, and operational data in real time.',
      problem: 'Stakeholders lacked a unified view of business performance across multiple data sources, requiring manual report generation.',
      contribution: 'Designed and built the backend data pipeline, REST API layer, and frontend dashboard components.',
      highlights: [
        'SQL-based aggregation pipeline for multi-source data consolidation',
        'FastAPI backend with structured query endpoints',
        'React + TypeScript dashboard with interactive charts',
        'Role-based access control',
      ],
      impact: 'Reduced reporting turnaround from hours to seconds, enabling real-time decision-making for stakeholders.',
    },
    tr: {
      title: 'Analitik Kontrol Paneli',
      summary: 'KPI\'ları, iş metriklerini ve operasyonel verileri gerçek zamanlı görselleştiren tam yığın bir analitik platform.',
      problem: 'Paydaşlar, birden fazla veri kaynağı genelinde iş performansının birleşik bir görünümünden yoksundu ve manuel rapor üretimi gerekiyordu.',
      contribution: 'Backend veri pipeline\'ını, REST API katmanını ve frontend gösterge paneli bileşenlerini tasarladım ve geliştirdim.',
      highlights: [
        'Çok kaynaklı veri birleştirme için SQL tabanlı agregasyon pipeline\'ı',
        'Yapılandırılmış sorgu endpoint\'leri olan FastAPI backend',
        'İnteraktif grafiklerle React + TypeScript gösterge paneli',
        'Rol tabanlı erişim kontrolü',
      ],
      impact: 'Raporlama sürecini saatlerden saniyelere indirerek paydaşlar için gerçek zamanlı karar almayı mümkün kıldı.',
    },
  },

  // ─────────────────────────────────────────────
  // PASTE CLEANED PROJECT BRIEF HERE: AI Analyzer
  // ─────────────────────────────────────────────
  {
    id: 'ai-analyzer',
    featured: true,
    status: 'company',
    techStack: ['Python', 'LangChain', 'FastAPI', 'OpenAI', 'Langfuse', 'PostgreSQL', 'Docker'],
    links: {
      private_note: 'Internal company project — details available on request.',
    },
    en: {
      title: 'AI Analyzer',
      summary: 'An agent-based analysis system for structured evaluation, multi-step reasoning, and automated report generation.',
      problem: 'Manual analysis workflows were time-consuming and inconsistent. There was no standardized way to extract structured insights from unstructured inputs.',
      contribution: 'Built the LangChain LCEL pipeline, agent orchestration logic, observability layer, and FastAPI integration.',
      highlights: [
        'Multi-step reasoning with LangChain LCEL chains',
        'Langfuse-based LLM call tracing and observability',
        'Structured output validation against schemas',
        'FastAPI backend with async processing',
        'Automated report generation',
      ],
      impact: 'Reduced analysis time significantly and improved consistency of evaluation outputs.',
    },
    tr: {
      title: 'AI Analizörü',
      summary: 'Yapılandırılmış değerlendirme, çok adımlı akıl yürütme ve otomatik rapor üretimi için ajan tabanlı analiz sistemi.',
      problem: 'Manuel analiz iş akışları zaman alıcı ve tutarsızdı. Yapılandırılmamış girdilerden yapılandırılmış içgörüler çıkarmak için standartlaştırılmış bir yol yoktu.',
      contribution: 'LangChain LCEL pipeline\'ını, ajan orkestrasyon mantığını, gözlemlenebilirlik katmanını ve FastAPI entegrasyonunu geliştirdim.',
      highlights: [
        'LangChain LCEL zincirleriyle çok adımlı akıl yürütme',
        'Langfuse tabanlı LLM çağrısı izleme ve gözlemlenebilirlik',
        'Şemalara karşı yapılandırılmış çıktı doğrulaması',
        'Asenkron işleme ile FastAPI backend',
        'Otomatik rapor üretimi',
      ],
      impact: 'Analiz süresini önemli ölçüde azalttı ve değerlendirme çıktılarının tutarlılığını iyileştirdi.',
    },
  },

  // ─────────────────────────────────────────────
  // PASTE CLEANED PROJECT BRIEF HERE: KPI Advisor
  // ─────────────────────────────────────────────
  {
    id: 'kpi-advisor',
    featured: true,
    status: 'company',
    techStack: ['Python', 'LangChain', 'OpenAI', 'FastAPI', 'SQL', 'React'],
    links: {
      private_note: 'Internal company project — details available on request.',
    },
    en: {
      title: 'KPI Advisor',
      summary: 'An LLM-powered advisory tool that interprets KPI data and generates natural-language recommendations for business decisions.',
      problem: 'Business users needed to derive actionable insights from complex metric data without deep technical expertise.',
      contribution: 'Designed the LLM pipeline, prompt engineering strategy, and integration with the analytics data layer.',
      highlights: [
        'Natural language KPI interpretation using LLMs',
        'Prompt engineering for domain-specific business reasoning',
        'RAG-based context injection from historical KPI data',
        'Structured recommendation output format',
      ],
      impact: 'Enabled non-technical stakeholders to query business performance using natural language.',
    },
    tr: {
      title: 'KPI Danışmanı',
      summary: 'KPI verilerini yorumlayan ve iş kararları için doğal dil önerileri üreten LLM destekli bir danışmanlık aracı.',
      problem: 'İş kullanıcıları, derin teknik uzmanlık gerektirmeden karmaşık metrik verilerden uygulanabilir içgörüler elde etmeye ihtiyaç duyuyordu.',
      contribution: 'LLM pipeline\'ını, prompt mühendisliği stratejisini ve analitik veri katmanıyla entegrasyonu tasarladım.',
      highlights: [
        'LLM\'ler kullanarak doğal dil KPI yorumu',
        'Alana özgü iş akıl yürütmesi için prompt mühendisliği',
        'Geçmiş KPI verilerinden RAG tabanlı bağlam enjeksiyonu',
        'Yapılandırılmış öneri çıktı formatı',
      ],
      impact: 'Teknik olmayan paydaşların doğal dil kullanarak iş performansını sorgulamasını mümkün kıldı.',
    },
  },

  // ─────────────────────────────────────────────
  // PASTE CLEANED PROJECT BRIEF HERE: AI API Monorepo
  // ─────────────────────────────────────────────
  {
    id: 'ai-api-monorepo',
    featured: false,
    status: 'company',
    techStack: ['Python', 'FastAPI', 'Docker', 'GitLab CI/CD', 'LangChain', 'PostgreSQL'],
    links: {
      private_note: 'Internal company project.',
    },
    en: {
      title: 'AI API Monorepo',
      summary: 'A production-grade monorepo architecture for managing multiple AI microservices, shared utilities, and CI/CD pipelines.',
      problem: 'Multiple AI services needed a unified repository structure with shared abstractions, versioned deployments, and automated pipelines.',
      contribution: 'Designed the monorepo structure, shared utility libraries, Dockerized service templates, and CI/CD workflow.',
      highlights: [
        'Monorepo structure with shared Python utilities',
        'Dockerized microservice templates',
        'GitLab CI/CD pipelines for automated testing and deployment',
        'Centralized configuration management',
      ],
      impact: 'Improved developer velocity and deployment consistency across the team.',
    },
    tr: {
      title: 'AI API Monorepo',
      summary: 'Birden fazla AI mikroservisini, paylaşılan yardımcı programları ve CI/CD pipeline\'larını yönetmek için üretim kalitesinde monorepo mimarisi.',
      problem: 'Birden fazla AI servisi, paylaşılan soyutlamalar, sürümlü dağıtımlar ve otomatik pipeline\'larla birleşik bir depo yapısına ihtiyaç duyuyordu.',
      contribution: 'Monorepo yapısını, paylaşılan yardımcı program kütüphanelerini, Dockerize edilmiş servis şablonlarını ve CI/CD iş akışını tasarladım.',
      highlights: [
        'Paylaşılan Python yardımcı programlarıyla monorepo yapısı',
        'Dockerize edilmiş mikroservis şablonları',
        'Otomatik test ve dağıtım için GitLab CI/CD pipeline\'ları',
        'Merkezi yapılandırma yönetimi',
      ],
      impact: 'Ekip genelinde geliştirici hızını ve dağıtım tutarlılığını iyileştirdi.',
    },
  },

  // ─────────────────────────────────────────────
  // PASTE CLEANED PROJECT BRIEF HERE: Grid Coach
  // ─────────────────────────────────────────────
  {
    id: 'grid-coach',
    featured: false,
    status: 'private',
    techStack: ['Python', 'FastAPI', 'React', 'TypeScript', 'LLM'],
    links: {},
    en: {
      title: 'Grid Coach',
      summary: 'An AI-powered coaching and planning tool for structured goal tracking and productivity workflows.',
      // TODO: Replace with cleaned project brief
      problem: 'Placeholder — replace with actual problem description.',
      contribution: 'Placeholder — replace with your contribution.',
      highlights: ['Placeholder highlight 1', 'Placeholder highlight 2'],
      impact: 'Placeholder — replace with actual impact.',
    },
    tr: {
      title: 'Grid Coach',
      summary: 'Yapılandırılmış hedef takibi ve verimlilik iş akışları için yapay zeka destekli bir koçluk ve planlama aracı.',
      problem: 'Yer tutucu — gerçek problem açıklamasıyla değiştirin.',
      contribution: 'Yer tutucu — katkınızla değiştirin.',
      highlights: ['Yer tutucu özellik 1', 'Yer tutucu özellik 2'],
      impact: 'Yer tutucu — gerçek etkiyle değiştirin.',
    },
  },

  // ─────────────────────────────────────────────
  // PASTE CLEANED PROJECT BRIEF HERE: Task Manager
  // ─────────────────────────────────────────────
  {
    id: 'task-manager',
    featured: false,
    status: 'public',
    techStack: ['React', 'TypeScript', 'FastAPI', 'Python', 'PostgreSQL'],
    links: {
      // github: 'https://github.com/melisklc0/...',
    },
    en: {
      title: 'Task Manager',
      summary: 'A full-stack task and project management application with a clean React frontend and FastAPI backend.',
      // TODO: Replace with cleaned project brief
      problem: 'Placeholder — replace with actual problem description.',
      contribution: 'Placeholder — replace with your contribution.',
      highlights: ['Placeholder highlight 1', 'Placeholder highlight 2'],
      impact: 'Placeholder — replace with actual impact.',
    },
    tr: {
      title: 'Görev Yöneticisi',
      summary: 'Temiz bir React frontend ve FastAPI backend ile tam yığın görev ve proje yönetimi uygulaması.',
      problem: 'Yer tutucu — gerçek problem açıklamasıyla değiştirin.',
      contribution: 'Yer tutucu — katkınızla değiştirin.',
      highlights: ['Yer tutucu özellik 1', 'Yer tutucu özellik 2'],
      impact: 'Yer tutucu — gerçek etkiyle değiştirin.',
    },
  },

  // ─────────────────────────────────────────────
  // PASTE CLEANED PROJECT BRIEF HERE: Stroke Classification
  // ─────────────────────────────────────────────
  {
    id: 'stroke-classification',
    featured: true,
    status: 'academic',
    techStack: ['Python', 'PyTorch', 'Deep Learning', 'Knowledge Distillation', 'Medical Imaging'],
    links: {
      // article: 'https://...',
      // github: 'https://github.com/melisklc0/...',
    },
    en: {
      title: 'Stroke Classification with Knowledge Distillation',
      summary: 'Deep learning-based medical image classification for stroke detection, using knowledge distillation to improve lightweight model performance.',
      problem: 'Medical image classification models are computationally expensive. Deploying them in resource-constrained clinical environments requires smaller, faster models without significant accuracy loss.',
      contribution: 'Researched and implemented knowledge distillation techniques to compress a larger teacher model into a deployable student model for stroke classification from medical images.',
      highlights: [
        'Deep learning architecture for medical image classification',
        'Knowledge distillation pipeline (teacher–student framework)',
        'Evaluation on stroke imaging datasets',
        'Performance benchmarking: accuracy vs. model size tradeoffs',
      ],
      impact: 'Demonstrated that lightweight distilled models can achieve competitive accuracy for clinical stroke classification tasks.',
    },
    tr: {
      title: 'Bilgi Damıtma ile İnme Sınıflandırması',
      summary: 'İnme tespiti için derin öğrenme tabanlı tıbbi görüntü sınıflandırması; hafif model performansını iyileştirmek için bilgi damıtma kullanımı.',
      problem: 'Tıbbi görüntü sınıflandırma modelleri hesaplama açısından pahalıdır. Bunları kaynak kısıtlı klinik ortamlarda kullanmak, önemli doğruluk kaybı olmadan daha küçük, daha hızlı modeller gerektirir.',
      contribution: 'İnme sınıflandırması için daha büyük bir öğretmen modelini dağıtılabilir bir öğrenci modeline sıkıştırmak amacıyla bilgi damıtma tekniklerini araştırıp uyguladım.',
      highlights: [
        'Tıbbi görüntü sınıflandırması için derin öğrenme mimarisi',
        'Bilgi damıtma pipeline\'ı (öğretmen–öğrenci çerçevesi)',
        'İnme görüntüleme veri setleri üzerinde değerlendirme',
        'Performans karşılaştırması: doğruluk ve model boyutu dengesi',
      ],
      impact: 'Hafif damıtılmış modellerin klinik inme sınıflandırma görevleri için rekabetçi doğruluk elde edebildiğini gösterdi.',
    },
  },
];
