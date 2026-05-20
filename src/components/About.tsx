import { useLang } from '../hooks/useLang';

const copy = {
  en: {
    label: 'Background',
    heading: 'About Me',
    body: [
      <>I am an AI Engineer focused on LLMs, multi-agent architectures, and modern data stacks, with a Computer Engineering background and hands-on production experience.</>,
      <>At Qkare, I work across agent orchestration, RAG pipelines, FastAPI services, dbt + PostgreSQL data models, and Superset-based analytics layers. I care about systems that are not only impressive in demos, but also observable, maintainable, and useful in real workflows.</>,
      <>My work spans structured LLM output, Pydantic validation, retrieval patterns, LLM-as-judge evaluation, deep learning experiments, and cost-aware inference pipelines from research prototypes to production B2B products.</>,
    ],
    stats: [
      { value: '3+', label: 'AI and software roles' },
      { value: '109', label: 'dbt models in production' },
      { value: '8+', label: 'production AI systems shipped' },
    ],
  },
  tr: {
    label: 'Background',
    heading: 'Hakkımda',
    body: [
      <>LLM'ler, multi-agent mimariler ve modern veri stackleri üzerine çalışan bir AI Engineer'ım; bilgisayar mühendisliği geçmişimi üretim ortamındaki pratik sistemlerle birleştiriyorum.</>,
      <>Qkare'de agent orchestration, RAG pipeline'ları, FastAPI servisleri, dbt + PostgreSQL veri modelleri ve Superset tabanlı analitik katmanları üzerinde çalışıyorum. Demo'da iyi görünen değil, izlenebilir, sürdürülebilir ve gerçek iş akışlarında kullanılan sistemler kurmayı önemsiyorum.</>,
      <>Çalışmalarım structured LLM output, Pydantic validation, retrieval pattern'ları, LLM-as-judge değerlendirme, deep learning denemeleri ve maliyet duyarlı inference pipeline'larını kapsıyor.</>,
    ],
    stats: [
      { value: '3+', label: 'AI ve yazılım rolü' },
      { value: '109', label: 'production dbt modeli' },
      { value: '8+', label: 'yayına alınan AI sistemi' },
    ],
  },
};

export function About() {
  const { lang } = useLang();
  const c = copy[lang];

  return (
    <section id="about" className="relative bg-page py-20 md:py-24">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <h2 className="section-title mb-8">{c.heading}</h2>
            <div className="relative space-y-5 border-l border-border pl-5 md:pl-7">
              {c.body.map((paragraph, index) => (
                <p key={index} className="max-w-2xl text-base leading-8 text-text-secondary">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:pt-10">
            {c.stats.map((stat) => (
              <div key={stat.label} className="relative overflow-hidden rounded-2xl border border-border bg-surface/70 p-6 shadow-card backdrop-blur">
                <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#0F3248,#2D607D,#A06448)]" />
                <p className="font-display text-4xl font-semibold leading-none text-accent-dark">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
