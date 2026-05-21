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
      tagline: 'LLM\'ler, yapay zeka ajanları, RAG pipeline\'ları ve veri analitiği ile akıllı sistemler geliştiriyorum. Üretime hazır AI backend\'leri ve uygulamalı makine öğrenmesine odaklanıyorum.',
      cta_projects: 'Projeleri Gör', cta_cv: 'CV\'yi Gör', cta_github: 'GitHub', cta_linkedin: 'LinkedIn',
    },
    about: {
      label: 'Hakkımda',
      heading: 'Pratik sistemler geliştiren AI Mühendisi',
      body: `Gerçek sorunları çözen üretime hazır yapay zeka sistemleri geliştirmeye odaklanan Bilgisayar Mühendisliği mezunuyum. Çalışmalarım LLM uygulamaları, RAG tabanlı erişim, yapay zeka ajanları, backend entegrasyonu ve veri analitiği pipeline'larını kapsar.

Teslimat yığınının tamamıyla ilgileniyorum — model tasarımı ve prompt mühendisliğinden gözlemlenebilirlik, izleme ve dağıtıma kadar. Araştırma ile mühendisliğin kesişiminde çalışarak karmaşık fikirleri temiz, sürdürülebilir sistemlere dönüştürüyorum.

Şu anda Qkare Bilgi Teknolojileri'nde yapay zeka destekli sağlık ürünleri geliştiriyorum.`,
    },
    skills: { label: 'Yetenekler', heading: 'Teknoloji Yığını' },
    projects: {
      label: 'Projeler', heading: 'Öne Çıkan Çalışmalar',
      github: 'GitHub', demo: 'Canlı Demo', case_study: 'Vaka Çalışması', article: 'Makale', private_note: 'Özel',
      status_public: 'Açık Kaynak', status_private: 'Özel', status_company: 'Şirket', status_academic: 'Akademik',
      problem: 'Problem', contribution: 'Katkım', highlights: 'Teknik Özellikler', impact: 'Etki',
    },
    analyzer: {
      label: 'AI Analizörü',
      heading: 'Akıllı Analiz Pipeline\'ı',
      subheading: 'Yapılandırılmış değerlendirme, LLM gözlemlenebilirliği ve otomatik rapor üretimiyle ajan tabanlı çok adımlı akıl yürütme — üretim backend servislerine entegre.',
      capability_1_title: 'Çok Adımlı Akıl Yürütme',
      capability_1_body: 'LangChain LCEL ile denetlenebilir akıl yürütme zincirleri — her adım izlenebilir ve incelenebilir.',
      capability_2_title: 'Gözlemlenebilirlik & İzleme',
      capability_2_body: 'Her LLM çağrısı, erişim adımı ve araç kullanımı Langfuse üzerinden tam hata ayıklama için kaydedilir.',
      capability_3_title: 'Yapılandırılmış Değerlendirme',
      capability_3_body: 'Her aşamada kalite geçitleriyle şemalara göre doğrulanan çıktılar — sadece üretilmez, doğrulanır.',
      capability_4_title: 'Backend Entegrasyonu',
      capability_4_body: 'Gerçek dünya veri erişimi için FastAPI servisleri, PostgreSQL ve harici API\'larla sıkı entegrasyon.',
      capability_5_title: 'Rapor Üretimi',
      capability_5_body: 'Teknik olmayan paydaşların kullanabileceği yapılandırılmış karar destek raporları otomatik olarak üretilir.',
      capability_6_title: 'Ajan Orkestrasyonu',
      capability_6_body: 'Erişim, akıl yürütme, araç kullanımı ve yanıtı tutarlı bir döngüde koordine eden LangChain LCEL pipeline\'ları.',
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
