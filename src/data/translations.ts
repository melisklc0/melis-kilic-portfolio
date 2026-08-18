export type Lang = 'en' | 'tr';

export const translations = {
  en: {
    nav: {
      about: 'About', skills: 'Skills', projects: 'Projects', experience: 'Experience', education: 'Education', contact: 'Contact',
    },
    hero: {
      role: 'AI & Data Engineer',
      tagline: 'I build LLM-backed backend services, agentic workflows, and governed data platforms. End-to-end production experience, focused on structured LLM outputs, tenant-safe data access, and measurable AI quality.',
      cta_projects: 'View Projects', cta_cv: 'View CV', cta_github: 'GitHub', cta_linkedin: 'LinkedIn',
    },
    skills: { label: 'Skills', heading: 'Tech Stack' },
    projects: {
      label: 'Projects', heading: 'Featured Work',
      github: 'GitHub', demo: 'Live Demo', case_study: 'Case Study', article: 'Article', private_note: 'Private',
      status_public: 'Public', status_private: 'Private', status_company: 'Company', status_academic: 'Academic',
      problem: 'Problem', contribution: 'My Contribution', highlights: 'Technical Highlights', impact: 'Impact',
    },
    experience: { label: 'Experience', heading: 'Experience' },
    education: { label: 'Education', heading: 'Academic Background' },
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
    skills: { label: 'Yetenekler', heading: 'Teknoloji Yığını' },
    projects: {
      label: 'Projeler', heading: 'Öne Çıkan Çalışmalar',
      github: 'GitHub', demo: 'Canlı Demo', case_study: 'Vaka Çalışması', article: 'Makale', private_note: 'Özel',
      status_public: 'Açık Kaynak', status_private: 'Özel', status_company: 'Şirket', status_academic: 'Akademik',
      problem: 'Problem', contribution: 'Katkım', highlights: 'Teknik Özellikler', impact: 'Etki',
    },
    experience: { label: 'Deneyim', heading: 'İş Geçmişi' },
    education: { label: 'Eğitim', heading: 'Akademik Geçmiş' },
    contact: {
      label: 'İletişim', heading: 'Bağlanalım',
      body: 'AI mühendisliği rolleri, ilginç projeler ve teknik sohbetlere açığım.',
      email_label: 'E-posta', location_label: 'Konum', location_value: 'Türkiye',
    },
    footer: { built: 'React & Tailwind CSS ile yapıldı' },
  },
};
