export type Lang = 'en' | 'tr';

export const translations = {
  en: {
    nav: {
      about: 'About', skills: 'Skills', projects: 'Projects', experience: 'Experience', education: 'Education', contact: 'Contact',
    },
    hero: {
      role: 'AI & Data Engineer',
      tagline: 'Building intelligent systems with LLMs, AI agents, RAG pipelines, and data analytics. Focused on production-ready AI backends and applied machine learning.',
      cta_projects: 'View Projects', cta_cv: 'View CV', cta_github: 'GitHub', cta_linkedin: 'LinkedIn',
    },
    about: {
      label: 'About',
      heading: 'AI Engineer building practical systems',
      body: `Computer Engineering graduate working as an AI Engineer, focused on building production-ready AI systems that solve real problems. My work spans LLM applications, RAG-based retrieval, AI agents, backend integration, and data analytics pipelines.

I care about the full delivery stack — from model design and prompt engineering to observability, tracing, and deployment. I work at the boundary between research and engineering, translating complex ideas into clean, maintainable systems.

Currently building AI-powered healthcare products at Qkare Bilgi Teknolojileri.`,
    },
    skills: { label: 'Skills', heading: 'Tech Stack' },
    projects: {
      label: 'Projects', heading: 'Featured Work',
      github: 'GitHub', demo: 'Live Demo', case_study: 'Case Study', article: 'Article', private_note: 'Private',
      status_public: 'Public', status_private: 'Private', status_company: 'Company', status_academic: 'Academic',
      problem: 'Problem', contribution: 'My Contribution', highlights: 'Technical Highlights', impact: 'Impact',
    },
    analyzer: {
      label: 'AI Analyzer',
      heading: 'Intelligent Analysis Pipeline',
      subheading: 'Agent-based multi-step reasoning with structured evaluation, LLM observability, and automated report generation — integrated into production backend services.',
      capability_1_title: 'Multi-step Reasoning',
      capability_1_body: 'Complex queries broken into auditable reasoning chains with LangChain LCEL — each step traceable and inspectable.',
      capability_2_title: 'Observability & Tracing',
      capability_2_body: 'Every LLM call, retrieval step, and tool use logged via Langfuse for full debuggability and monitoring.',
      capability_3_title: 'Structured Evaluation',
      capability_3_body: 'Outputs validated against schemas with quality gates at every stage — not just generated, but verified.',
      capability_4_title: 'Backend Integration',
      capability_4_body: 'Tightly integrated with FastAPI services, PostgreSQL databases, and external APIs for real-world data access.',
      capability_5_title: 'Report Generation',
      capability_5_body: 'Structured decision-support reports generated automatically, consumable by non-technical stakeholders.',
      capability_6_title: 'Agent Orchestration',
      capability_6_body: 'LangChain LCEL pipelines coordinating retrieval, reasoning, tool use, and response in a coherent loop.',
    },
    experience: { label: 'Experience', heading: 'Experience' },
    education: { label: 'Education', heading: 'Academic Background' },
    cv: {
      label: 'Resume',
      heading: 'Curriculum Vitae',
      body: 'Full overview of experience, projects, and technical skills.',
      download: 'Download CV', view: 'View Online',
    },
    contact: {
      label: 'Contact', heading: "Let's Connect",
      body: 'Open to AI engineering roles, interesting projects, and technical conversations.',
      email_label: 'Email', location_label: 'Location', location_value: 'Türkiye',
    },
    footer: { built: 'Built with React & Tailwind CSS' },
  },
  tr: {
    nav: {
      about: 'Hakkımda', skills: 'Yetenekler', projects: 'Projeler', experience: 'Deneyim', education: 'Eğitim', contact: 'İletişim',
    },
    hero: {
      role: 'Yapay Zeka & Veri Mühendisi',
      tagline: 'LLM tabanlı backend servisleri, agentic iş akışları ve veri platformları geliştiriyorum. Yapılandırılmış LLM çıktıları, tenant-safe veri erişimi ve ölçülebilir AI kalitesine odaklanan, uçtan uca production deneyimine sahip sistemler kuruyorum.',
      cta_projects: 'Projeleri Gör', cta_cv: 'CV\'yi Gör', cta_github: 'GitHub', cta_linkedin: 'LinkedIn',
    },
    about: {
      label: 'Hakkımda',
      heading: 'Pratik sistemler geliştiren Yapay Zeka Mühendisi',
      body: `LLM tabanlı backend servisleri, agentic iş akışları ve veri platformları geliştiren Yapay Zeka ve Veri Mühendisiyim. LangGraph orkestrasyonu, prompt engineering, evaluation pipeline'ları, FastAPI servisleri ve gözlemlenebilir altyapılar üzerinde uçtan uca production deneyimine sahibim. Özellikle yapılandırılmış LLM çıktıları, tenant-safe veri erişimi ve ölçülebilir yapay zeka kalitesi üzerine çalışıyorum.

Şu anda QKare Bilgi Teknolojileri'nde iş gücü verileri, psikometrik değerlendirmeler ve LLM destekli özellikleri birleştiren B2B İK analitiği SaaS platformunda çekirdek geliştirici olarak yer alıyorum.`,
    },
    skills: { label: 'Yetenekler', heading: 'Teknoloji Yığını' },
    projects: {
      label: 'Projeler', heading: 'Öne Çıkan Çalışmalar',
      github: 'GitHub', demo: 'Canlı Demo', case_study: 'Vaka Çalışması', article: 'Makale', private_note: 'Özel',
      status_public: 'Açık Kaynak', status_private: 'Özel', status_company: 'Şirket', status_academic: 'Akademik',
      problem: 'Problem', contribution: 'Katkım', highlights: 'Teknik Özellikler', impact: 'Etki',
    },
    analyzer: {
      label: 'AI Analyzer',
      heading: 'Akıllı Analiz Altyapısı',
      subheading: 'Analiz modülleri için ayrılmış domain sözleşmeleri ve PostgreSQL RLS kuralları ile çalışan, tenant-safe doğal dil tabanlı analitik altyapısı.',
      capability_1_title: 'Multi-step Akıl Yürütme',
      capability_1_body: 'LangChain LCEL tabanlı denetlenebilir reasoning süreçleri; her adım Langfuse ile izlenebilir ve incelenebilir yapıda.',
      capability_2_title: 'Gözlemlenebilirlik ve İzleme',
      capability_2_body: 'Her LLM çağrısı, veri erişimi ve tool kullanımı Langfuse üzerinden tam hata ayıklama desteğiyle kaydedilir.',
      capability_3_title: 'Yapılandırılmış Değerlendirme',
      capability_3_body: 'LLM çıktıları her aşamada şemalarla doğrulanır ve kalite standartlarına göre değerlendirilir.',
      capability_4_title: 'Backend Entegrasyonu',
      capability_4_body: 'FastAPI servisleri, PostgreSQL RLS ve harici API\'lar ile tenant-safe veri erişimi sağlanır.',
      capability_5_title: 'Rapor Üretimi',
      capability_5_body: 'Teknik olmayan paydaşların kullanabileceği yapılandırılmış, karar destekleyici analitik raporları otomatik olarak üretilir.',
      capability_6_title: 'Ajan Orkestrasyonu',
      capability_6_body: 'Erişim, tool kullanımı ve yanıtları tutarlı bir döngüde birleştiren LangChain/LangGraph tabanlı ajan sistemleri.',
    },
    experience: { label: 'Deneyim', heading: 'İş Geçmişi' },
    education: { label: 'Eğitim', heading: 'Akademik Geçmiş' },
    cv: {
      label: 'Özgeçmiş',
      heading: 'Curriculum Vitae',
      body: 'Deneyim, proje ve teknik becerilerimin tam özeti.',
      download: 'CV\'yi İndir', view: 'Online Görüntüle',
    },
    contact: {
      label: 'İletişim', heading: 'Bağlanalım',
      body: 'AI mühendisliği rolleri, ilginç projeler ve teknik sohbetlere açığım.',
      email_label: 'E-posta', location_label: 'Konum', location_value: 'Türkiye',
    },
    footer: { built: 'React & Tailwind CSS ile yapıldı' },
  },
};
