// src/data/projects.ts
// Production project cards are written as bilingual portfolio copy, not literal translations.

export type ProjectStatus = 'public' | 'private' | 'company' | 'academic';

export interface ProjectLinks {
  github?: string;
  demo?: string;
  case_study?: string;
  article?: string;
  private_note?: string;
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectContribution {
  module: string;
  title: string;
  description: string;
}

export interface ProjectContent {
  title: string;
  subtitle?: string;
  badge?: string;
  recognition?: {
    brand: string;
    title: string;
    detail: string;
  };
  supportingSummary?: string;
  supportingImpact?: string;
  summary: string;
  roleLine?: string;
  focusTitle?: string;
  focusSummary?: string;
  metrics?: ProjectMetric[];
  contributions?: ProjectContribution[];
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
  {
    id: 'analytics-platform',
    featured: true,
    status: 'company',
    techStack: ['dbt Core', 'PostgreSQL RLS', 'Apache Superset', 'FastAPI', 'Docker', 'SQL', 'Python'],
    links: {
      private_note: 'Built at QKare; source code is private.',
    },
    en: {
      title: 'Analytics Platform',
      subtitle: 'Production · B2B SaaS analytics',
      badge: 'Production · Embedded BI',
      summary:
        'A multi-tenant workforce analytics platform that turns psychometric, competency, and HR assessment data into secure dashboards embedded inside a SaaS product. The stack combines a 109-model dbt transformation layer, PostgreSQL row-level security, and a customized Apache Superset deployment for production BI workflows.',
      roleLine: 'Role: Data / Analytics Engineer · Focus: mart correctness, dynamic dimensions, RLS validation, embedded BI',
      focusTitle: 'I owned the reliability layer of an embedded workforce analytics platform.',
      focusSummary:
        'My work focused on making dashboard numbers trustworthy, turning RLS behavior into dbt-tested contracts, and refactoring canonical dimension logic so tenant-specific analytics could be driven by database configuration instead of brittle hardcoded mappings.',
      metrics: [
        { value: '109', label: 'dbt models' },
        { value: '56', label: 'mart tables' },
        { value: '13', label: 'AI precompute marts' },
        { value: '4', label: 'security layers' },
      ],
      contributions: [
        {
          module: 'Data Correctness',
          title: 'Turned dashboard numbers into tested data contracts',
          description:
            'Fixed dashboard/test-data mismatches across workforce marts by removing null-score distortion, aligning benchmark populations, and replacing average-of-averages logic with employee-level aggregation. Added reusable dbt parity tests so the same class of chart bugs is caught automatically.',
        },
        {
          module: 'Dynamic Dimensions',
          title: 'Made behavioral and competency marts database-driven',
          description:
            'Refactored canonical psychometric dimensions, score facts, and competency-group models so N:1 and N:N mappings aggregate at the right grain. Moved leadership and core competency filtering from hardcoded canonical dimensions into tenant-aware database configuration used by dashboards.',
        },
        {
          module: 'Tenant-Safe Analytics',
          title: 'Turned RLS behavior into a testable contract',
          description:
            'Strengthened tenant-boundary validation by adding dbt tests that simulate dashboard read-role access and assert zero cross-tenant rows. PostgreSQL RLS checks became part of the analytics pipeline instead of a manual dashboard-only verification step.',
        },
        {
          module: 'Embedded BI Reliability',
          title: 'Stabilized production Superset embedding',
          description:
            'Resolved iframe blockers around CSRF, guest tokens, exports, and transaction-scoped session variables. This protected the embedded dashboard experience and kept per-query RLS enforcement aligned with user context.',
        },
        {
          module: 'platform extension',
          title: 'Turkish Embedded BI',
          description:
            'Delivered Turkish localization and upgrade-resilient frontend patching for Superset, including locale-aware filter search and automated translation build steps.',
        },
      ],
      impact:
        'Helped move analytics from fragile chart logic into a production-grade BI layer with correctly grained dynamic marts, repeatable data-quality checks, tenant-safe access, and a localized embedded dashboard experience.',
    },
    tr: {
      title: 'Analytics Platform',
      subtitle: 'Production · B2B SaaS Analitiği',
      badge: 'Production · Embedded BI',
      summary:
        'İş gücü verileri, psikometrik değerlendirmeler ve İK verilerini SaaS ürününün içine gömülü güvenli bir dashboard deneyimine taşıyan multi-tenant analitik platformu. 109 dbt modelinden oluşan veri dönüştürme katmanı, PostgreSQL row-level security (RLS) ve özelleştirilmiş Apache Superset akışıyla production BI ihtiyaçlarını karşılayacak şekilde tasarlandı.',
      roleLine: 'Rol: Veri & Analitik Mühendisi · Odak: Veri doğruluğu, dinamik boyutlar, RLS doğrulaması, embedded BI',
      focusTitle: 'Analitik doğruluğu, tenant izolasyonu ve embedded BI kesişiminde çalıştım.',
      focusSummary:
        'Odağım dashboard metriklerinin güvenilir kalmasını sağlamaktı: Benchmark uyumsuzluklarını düzelttim, RLS davranışını dbt ile test edilebilen kontratlara çevirdim ve psikometrik boyut/yetkinlik mantığını hardcoded eşlemeler yerine veritabanı kontrollü, tenant-safe yapılandırmalarla çalışacak hale getirdim.',
      metrics: [
        { value: '109', label: 'dbt modeli' },
        { value: '56', label: 'veri mart tablosu' },
        { value: '13', label: 'AI precompute tablosu' },
        { value: '4', label: 'güvenlik katmanı' },
      ],
      contributions: [
        {
          module: 'Veri Doğruluğu',
          title: 'Dashboard verilerini test edilebilir veri kontratlarına dönüştürme',
          description:
            'İş gücü veri martlarındaki seçim ve benchmark metrikleri arasındaki farkları düzelttim: Eksik skor sapmaları, benchmark kitle uyumsuzluğu ve ortalamaların ortalaması kaynaklı hatalar temizlendi. Aynı tür grafik hatalarının tekrarlanmaması için yeniden kullanılabilir dbt testleri ekledim.',
        },
        {
          module: 'Dinamik Boyutlar',
          title: 'Davranışsal ve yetkinlik martlarını veritabanı kontrollü hale getirme',
          description:
            'Temel psikometrik boyut, skor doğrulama ve yetkinlik grubu modellerini doğru grain seviyesinde yeniden kurguladım; N:1 ve N:N eşlemelerden kaynaklı skor bozulmalarını çözdüm. Liderlik ve temel yetkinlik filtrelerini sabit boyutlardan çıkarıp tenant-aware veritabanı yapılandırmaları üzerinden dashboardlara taşıdım.',
        },
        {
          module: 'Tenant-Safe Analitik',
          title: 'RLS kurallarını test edilebilir kontratlara çevirme',
          description:
            'Dashboard okuma davranışını simüle eden dbt testleriyle tenant-boundary doğrulama sürecini güçlendirdim. Böylece PostgreSQL RLS kontrolleri manuel bir doğrulama olmaktan çıkıp, analitik pipeline içinde test edilen bir güvenlik kontratına dönüştü.',
        },
        {
          module: 'Embedded BI Güvenilirliği',
          title: 'Production ortamında Superset entegrasyon stabilitesi',
          description:
            'Iframe yapılandırmasındaki CSRF, misafir token, dışa aktarım akışı ve session değişkenleri ile ilgili problemleri çözdüm. Bu çalışma gömülü dashboard deneyimini güvence altına alırken, sorgu bazlı RLS uygulamasını kullanıcı bağlamıyla tutarlı hale getirdi.',
        },
        {
          module: 'Platform Genişletmesi',
          title: 'Türkçe Embedded BI Desteği',
          description:
            'Superset için Türkçe dil desteği akışını, sürüm güncellemelerine daha dayanıklı frontend yamalarını ve Türkçe filter search davranışını iyileştirdim.',
        },
      ],
      impact:
        'Analitik süreçlerin kırılgan grafik mantığından çıkıp, doğru verilerle çalışan, veri kalitesi testleriyle korunan, tenant-safe erişim sağlayan ve yerelleştirilmiş gömülü dashboard deneyimi sunan production kalitesinde bir BI katmanına evrilmesine katkı sağladım.',
    },
  },
  {
    id: 'analyzer-platform',
    featured: true,
    status: 'company',
    techStack: ['LangChain', 'LangGraph', 'Langfuse', 'FastAPI', 'PostgreSQL RLS', 'OpenTelemetry', 'WebSocket', 'YAML'],
    links: {
      private_note: 'Built at QKare; source code is private.',
    },
    en: {
      title: 'Analyzer Platform',
      subtitle: 'LLM analytics over governed data',
      badge: 'LLM Analytics',
      supportingSummary:
        'A governed conversational analytics platform that lets HR and managers ask natural-language questions over workforce and psychometric data through secure APIs, streaming agents, and voice/chat orchestration. The system connects LangChain analysis skills, a LangGraph gateway, dbt-backed PostgreSQL marts, tenant-safe RLS, and Langfuse/OpenTelemetry observability so business users can get reliable insights without writing SQL.',
      supportingImpact:
        'Helped mature the analyzer into a platform-style AI service rather than a set of isolated analysis modules. The work clarified shared domain contracts, made prompt behavior easier to review through YAML configuration, and strengthened the path between LLM reasoning and tenant-safe analytics data.\n\nThe result was a more production-minded analyzer layer: consistent auth across REST and streaming flows, request-scoped user context for governed tool calls, Langfuse-aware operational visibility, and more resilient handling of incomplete analytics metadata.',
      summary:
        'A governed conversational analytics platform that turns workforce and psychometric marts into natural-language insights through secure APIs, streaming agents, and voice/chat orchestration. The architecture separates analytics modeling, LLM interpretation, and real-time delivery while preserving tenant boundaries through RLS-aware execution.',
      roleLine: 'Role: AI & Backend Engineer · Focus: architecture refactor, governed SQL, prompts-as-config, observability',
      focusTitle: 'I helped turn the analyzer into a maintainable, production-minded AI platform.',
      focusSummary:
        'My work focused on the parts that make an LLM analytics system dependable after the prototype stage: clear domain contracts, reviewable prompt configuration, tenant-aware execution context, and Langfuse/OpenTelemetry signals that help engineers understand what happened during an agent-driven analysis run.',
      metrics: [
        { value: '18', label: 'YAML configs' },
        { value: '8+', label: 'analysis skills' },
        { value: '4', label: 'security layers' },
        { value: '2', label: 'service layers' },
      ],
      contributions: [
        {
          module: 'Architecture',
          title: 'Clarified the shared analytics domain model',
          description:
            'Turned repeated enum and result-shape definitions into shared contracts used across competency, risk, impact, pattern, and nine-box analysis modules. This reduced semantic drift in a codebase where several domain concepts appear in multiple analysis paths.',
        },
        {
          module: 'Prompt System',
          title: 'Made prompt behavior easier to review and evolve',
          description:
            'Shifted core prompt structure and result-chat rules out of scattered Python strings and into YAML-backed configuration. Prompt changes became closer to product configuration: visible in review, versioned in Git, and less tangled with service code.',
        },
        {
          module: 'Governed Data Access',
          title: 'Kept agent tool calls aligned with tenant-safe data access',
          description:
            'Worked on request-scoped user context and RLS-aware SQL execution so agent tools could query analytics marts through the same tenant and identity constraints expected by the rest of the platform.',
        },
        {
          module: 'Operations',
          title: 'Made analysis runs traceable with LLM observability',
          description:
            'Improved structured logging and tracing context around skill entry points, database access, and operational probes, with Langfuse/OpenTelemetry in the platform observability path. This made real user analysis activity easier to separate from health checks and startup noise.',
        },
        {
          module: 'Gateway Reliability',
          title: 'Stabilized the chat and voice orchestration boundary',
          description:
            'Improved the handoff between the conversational gateway and the analysis engine, including auth consistency, role-routing diagnostics, and employee identity parsing for downstream analysis context.',
        },
      ],
      impact:
        'The Analyzer Platform became easier to trust, change, and operate: domain logic was less duplicated, prompt behavior was more reviewable, governed SQL paths were clearer, and Langfuse/OpenTelemetry observability gave engineers better visibility into how real analysis requests moved through the system.',
    },
    tr: {
      title: 'Analyzer Platform',
      subtitle: 'Governed data üzerinde LLM analytics',
      badge: 'LLM Analytics',
      supportingSummary:
        'İnsan Kaynakları ve yöneticilerin iş gücü verileri ve psikometrik veriler üzerinde doğal dille sorgulama yapabildiği, API\'ler, streaming agent\'lar ve ses/sohbet orkestrasyonu içeren governed conversational analytics platformu. Sistem; LangChain analiz yeteneklerini, LangGraph gateway\'i, dbt tabanlı PostgreSQL martlarını, tenant-safe RLS yapısını ve Langfuse/OpenTelemetry gözlemlenebilirliğini bir araya getirerek SQL yazmadan güvenilir içgörüler sunar.',
      supportingImpact:
        'Analyzer\'ın bağımsız analiz modülleri yerine bütünleşik bir AI servisi platformuna evrilmesine katkı sağladım. Bu çalışma; ortak domain sözleşmelerini netleştirdi, prompt davranışlarının YAML konfigürasyonu üzerinden kolayca incelenmesini sağladı ve LLM akıl yürütme süreci ile tenant-safe analitik veri arasındaki bağlantıyı güçlendirdi.\n\nSonuç olarak daha production-ready bir analyzer katmanı oluştu: REST ve streaming akışlarında tutarlı kimlik doğrulama, governed tool call\'lar için request-scoped kullanıcı bağlamı, Langfuse entegreli operasyonel izlenebilirlik ve eksik analitik metadatalarına karşı daha dayanıklı bir yapı.',
      summary:
        'İş gücü ve psikometrik veri martlarını, API\'ler ve streaming agent\'lar ile doğal dil üzerinden içgörülere dönüştüren governed conversational analytics platformu. Mimari; analitik modelleme, LLM yorumlama ve gerçek zamanlı sunum katmanlarını birbirinden ayırırken, RLS destekli execution ile tenant sınırlarını korur.',
      roleLine: 'Rol: AI & Backend Mühendisi · Odak: Mimari refactoring, governed SQL, prompt konfigürasyonları, observability',
      focusTitle: 'Analyzer\'ı sürdürülebilir ve production-ready bir AI platformuna dönüştürmeye yardımcı oldum.',
      focusSummary:
        'Odağım, bir LLM analitik sistemini prototip aşamasından sonra güvenilir kılan bileşenlerdi: Net domain sözleşmeleri, incelenebilir prompt konfigürasyonları, tenant-aware execution bağlamı ve bir agent\'ın analizi sırasında neler olduğunu anlamayı sağlayan Langfuse/OpenTelemetry sinyalleri.',
      metrics: [
        { value: '18', label: 'YAML konfigürasyonu' },
        { value: '8+', label: 'analiz yeteneği' },
        { value: '4', label: 'güvenlik katmanı' },
        { value: '2', label: 'servis katmanı' },
      ],
      contributions: [
        {
          module: 'Mimari',
          title: 'Ortak analitik domain modelini netleştirme',
          description:
            'Yetkinlik, risk, etki, kalıp ve nine-box analiz modüllerinde tekrarlanan enum ve result-shape tanımlarını ortak sözleşmelere taşıdım. Böylece aynı domain kavramının farklı analiz yollarında anlam kaymasına uğramasını engelledim.',
        },
        {
          module: 'Prompt Sistemi',
          title: 'Prompt davranışlarını incelenebilir ve yönetilebilir hale getirme',
          description:
            'Temel prompt yapısını ve result-chat kurallarını dağınık Python stringlerinden çıkarıp YAML tabanlı yapılandırmalara taşıdım. Prompt değişiklikleri ürün konfigürasyonuna yaklaşarak Git üzerinde versiyonlanabilir ve kolayca incelenebilir hale geldi.',
        },
        {
          module: 'Governed Veri Erişimi',
          title: 'Agent tool call\'larını tenant-safe veri erişimiyle uyumlu hale getirme',
          description:
            'Agent araçlarının analitik martları sorgularken platformun geri kalanıyla aynı tenant ve kimlik kısıtlamalarına tabi olması için request-scoped kullanıcı bağlamı ve RLS-aware SQL çalıştırma altyapısı üzerinde çalıştım.',
        },
        {
          module: 'Operasyon',
          title: 'Analiz süreçlerini LLM observability ile izlenebilir kılma',
          description:
            'Tool başlangıç noktaları, veri tabanı erişimi ve operasyonel testler etrafındaki structured loglama ve tracing bağlamını iyileştirdim. Langfuse ve OpenTelemetry entegrasyonu sayesinde gerçek kullanıcı analiz aktiviteleri, sistem health check\'lerinden daha net ayrıştırılabilir hale geldi.',
        },
        {
          module: 'Gateway Güvenilirliği',
          title: 'Sohbet ve ses orkestrasyon sınırını stabilize etme',
          description:
            'Conversational gateway ile analiz motoru arasındaki aktarımı güçlendirdim. Auth tutarlılığı, role-routing teşhisleri ve alt analiz bağlamları için çalışan kimliği ayrıştırma (identity parsing) adımlarını iyileştirdim.',
        },
      ],
      impact:
        'Analyzer Platform daha güvenilir, yönetilebilir ve operasyonel hale geldi: Domain mantığındaki tekrarlar azaldı, prompt davranışları görünür kılındı, governed SQL yolları netleşti ve Langfuse/OpenTelemetry observability sayesinde mühendislerin analiz isteklerinin sistemdeki akışını izlemeleri kolaylaştı.',
    },
  },
  {
    id: 'ai-coach-platform',
    featured: true,
    status: 'company',
    techStack: ['LangGraph', 'POML', 'OpenAI Evals', 'LLM-as-Judge', 'FastAPI', 'CopilotKit', 'JSONL'],
    links: {
      private_note: 'Built at QKare; source code is private.',
    },
    en: {
      title: 'AI Coach Platform',
      subtitle: 'Multi-agent coaching system',
      badge: 'AI Coach',
      summary:
        'An enterprise AI coaching platform that routes employee conversations across specialized coaching agents using LangGraph orchestration, modular POML prompts, and structured coaching taxonomy data. The system turns coaching quality from a subjective chatbot question into a scenario-driven evaluation workflow with simulated users, LLM-to-LLM conversations, OpenAI Evals exports, and LLM-as-judge scoring.',
      roleLine: 'Role: LLM Systems & Prompt Engineer · Focus: orchestrator prompts, scenario evals, prompt library, agent UI',
      focusTitle: 'I worked on the prompt and orchestration layer that made the coach testable.',
      focusSummary:
        'My work focused on the parts that decide how the AI coach behaves: orchestrator POML prompts, role/mode/style routing, prompt library quality, simulated coachee scenarios, and an evaluation loop where generated coaching conversations are scored across concrete dimensions instead of judged by vibes.',
      metrics: [
        { value: '49', label: 'POML prompts' },
        { value: '43', label: 'coaching modes' },
        { value: '5', label: 'eval dimensions' },
        { value: '4', label: 'AI agents' },
      ],
      contributions: [
        {
          module: 'orchestration',
          title: 'Authored orchestrator prompts for agent routing',
          description:
            'Built orchestrator-layer POML assets that help decide the active coaching agent, mode, style, and relationship stage from the conversation context. Added integration coverage so prompt loading and multi-agent routing assets could evolve without silently breaking the coaching stack.',
        },
        {
          module: 'evaluation',
          title: 'Made coaching quality measurable with LLM-as-judge evals',
          description:
            'Helped shape an evaluation workflow for conversational AI: careful user scenarios drive LLM-to-LLM coaching sessions, then outputs are scored with referee-style LLM judging across role/style alignment, technique use, coaching principles, safety, and conversational flow.',
        },
        {
          module: 'prompt system',
          title: 'Expanded and standardized the modular POML library',
          description:
            'Extended the prompt library with pattern-enhancement templates, English-standardized prompt assets for more consistent model behavior, and fixed UTF-8 POML compilation issues on Windows so prompt iteration stayed reliable across developer environments.',
        },
        {
          module: 'simulation data',
          title: 'Built scenario datasets for realistic coaching tests',
          description:
            'Added and expanded structured coaching scenarios from discovery context so the team could test agent behavior against realistic employee development situations instead of ad hoc chat examples.',
        },
        {
          module: 'product surface',
          title: 'Integrated LangGraph coaching with a streaming UI',
          description:
            'Connected the LangGraph coaching agent to a CopilotKit/Next.js chat surface and Dockerized the local stack, making multi-agent coaching sessions easier to demo, debug, and evaluate interactively.',
        },
      ],
      impact:
        'Helped move the coach from a promising chatbot prototype toward a maintainable AI product: modular prompts, testable orchestration, scenario-based simulation, measurable coaching quality, and interactive agent surfaces.',
    },
    tr: {
      title: 'AI Coach Platform',
      subtitle: 'Multi-agent coaching sistemi',
      badge: 'AI Coach',
      summary:
        'Çalışan gelişim sohbetlerini LangGraph orkestrasyonu, modüler POML promptları ve yapılandırılmış koçluk taksonomisi üzerinden farklı AI agent\'lara yönlendiren kurumsal bir coaching platformu. Sistem, “sohbet iyi çalışıyor mu?” sorusunu subjektif bir yorum olmaktan çıkarıp simüle edilmiş kullanıcılar, LLM-to-LLM sohbetler, OpenAI Evals uyumlu çıktılar ve LLM-as-judge puanlaması ile senaryo tabanlı bir evaluation workflow haline getiriyor.',
      roleLine: 'Rol: LLM Sistemleri & Prompt Mühendisi · Odak: Orchestrator promptları, senaryo testleri, prompt library, agent UI',
      focusTitle: 'AI Coach davranışını test edilebilir kılan prompt ve orkestrasyon katmanında çalıştım.',
      focusSummary:
        'Odağım AI Coach\'un nasıl davranacağını belirleyen altyapıydı: Orchestrator POML promptları, rol/mod/stil yönlendirmeleri, prompt kütüphanesinin kalitesi, simüle edilmiş kullanıcı senaryoları ve üretilen koçluk sohbetlerinin hislere göre değil somut boyutlara göre (LLM-as-judge) değerlendirildiği bir döngü.',
      metrics: [
        { value: '49', label: 'POML prompt' },
        { value: '43', label: 'koçluk modu' },
        { value: '5', label: 'değerlendirme boyutu' },
        { value: '4', label: 'AI agent' },
      ],
      contributions: [
        {
          module: 'Orkestrasyon',
          title: 'Agent yönlendirmeleri için orchestrator promptlarının yazılması',
          description:
            'Sohbet bağlamından yola çıkarak aktif coaching agent, mod, stil ve ilişki aşamasını belirleyen orchestrator-layer POML bileşenlerini hazırladım. Prompt yükleme ve multi-agent routing yapısı değişirken sistemin sessizce bozulmasını engellemek için entegrasyon testleri ekledim.',
        },
        {
          module: 'Değerlendirme',
          title: 'Koçluk kalitesini LLM-as-judge eval ile ölçülebilir hale getirme',
          description:
            'Conversational AI değerlendirmesi için bir akış kurmaya yardımcı oldum: Belirlenmiş kullanıcı senaryoları üzerinden LLM-to-LLM koçluk seansları üretilir, ardından çıktılar rol/stil uyumu, teknik kullanımı, koçluk prensipleri, güvenlik ve sohbet akışı gibi boyutlarda hakem tarzı bir LLM judge ile puanlanır.',
        },
        {
          module: 'Prompt Sistemi',
          title: 'Modüler POML prompt kütüphanesinin genişletilmesi ve standartlaştırılması',
          description:
            'Desen geliştirme (pattern-enhancement) şablonları ekledim, daha tutarlı model davranışı için prompt bileşenlerini İngilizce olarak standartlaştırdım ve Windows üzerindeki UTF-8 POML derleme sorunlarını çözerek prompt iterasyon süreçlerini daha güvenilir hale getirdim.',
        },
        {
          module: 'Simülasyon Verisi',
          title: 'Gerçekçi koçluk testleri için senaryo veri setleri oluşturma',
          description:
            'Araştırma bulgularından yola çıkarak yapılandırılmış koçluk senaryoları (scenario datasets) ekledim; böylece agent davranışı rastgele sohbet örnekleri yerine gerçekçi çalışan gelişim durumlarıyla test edilebilir hale geldi.',
        },
        {
          module: 'Ürün Arayüzü',
          title: 'LangGraph tabanlı koçluk yapısını streaming UI ile entegre etme',
          description:
            'LangGraph coaching agent\'ını CopilotKit/Next.js sohbet arayüzüne bağladım ve lokal çalışma ortamını Docker ile paketleyerek multi-agent koçluk seanslarını demo, hata ayıklama ve değerlendirme için daha erişilebilir hale getirdim.',
        },
      ],
      impact:
        'AI Coach projesinin gelecek vadeden bir chatbot prototipinden, sürdürülebilir bir AI ürününe dönüşmesine katkı sağladım: Modüler promptlar, test edilebilir orkestrasyon, senaryo tabanlı simülasyon, ölçülebilir koçluk kalitesi ve interaktif agent arayüzleri aynı sistemde birleşti.',
    },
  },
  {
    id: 'ai-agent-api-gateway',
    featured: true,
    status: 'company',
    techStack: ['FastAPI', 'Cookiecutter', 'Docker', 'GitLab CI', 'OpenTelemetry', 'Pydantic', 'uv', 'Structured JSON Logs'],
    links: {
      private_note: 'Built at QKare; source code is private.',
    },
    en: {
      title: 'AI Agent API Gateway',
      subtitle: 'Monorepo platform for AI microservices',
      badge: 'Platform',
      summary:
        'A FastAPI monorepo that standardizes how LLM-backed microservices are exposed through one invoke API instead of each agent rebuilding auth, payload contracts, observability, Docker setup, and CI wiring from scratch. Existing AI agents can plug into a shared gateway pattern while keeping their domain logic in separate services.',
      roleLine:
        'Role: AI Platform Contributor · Focus: monorepo architecture, gateway factory, agent scaffolding, observability contracts',
      focusTitle: 'I helped turn one-off AI service wiring into a reusable gateway pattern.',
      focusSummary:
        'My work focused on the platform mechanics that make new AI agents easier to expose and operate: shared configuration, structured request logging, correlation IDs, a reusable FastAPI app factory, automated agent registration, environment-driven CORS, and cookiecutter templates that generate deployment-ready agent shells.',
      metrics: [
        { value: '4', label: 'agent defaults' },
        { value: '2', label: 'run modes' },
        { value: '1', label: 'gateway contract' },
        { value: '1', label: 'pipeline generator' },
      ],
      contributions: [
        {
          module: 'Gateway Architecture',
          title: 'Built a reusable FastAPI app factory for agent services',
          description:
            'Introduced a create_gateway_app-style factory and per-agent app entrypoints so the monorepo gateway and standalone agent containers share the same middleware, system routes, health behavior, and startup conventions.',
        },
        {
          module: 'Agent Onboarding',
          title: 'Automated registration into shared config and routing',
          description:
            'Reduced scattered manual edits when adding agents by extending post-generation flows that update core configuration and application routing. New agent handlers can plug into the same invoke surface with fewer integration mistakes.',
        },
        {
          module: 'Scaffolding',
          title: 'Standardized production-ready agent templates',
          description:
            'Hardened cookiecutter-generated agents with multi-stage Docker builds, non-root runtime patterns, uv lockfile installs, compose files, and health checks aligned with the gateway entrypoint.',
        },
        {
          module: 'Operations',
          title: 'Created shared configuration and observability conventions',
          description:
            'Added environment-driven core settings, structured JSON logging, request/correlation IDs, dynamic service naming, and OpenTelemetry-oriented hooks so agent calls are easier to debug across local and containerized environments.',
        },
        {
          module: 'Integration Contract',
          title: 'Kept agents thin by standardizing the gateway boundary',
          description:
            'Positioned agents as lightweight HTTP integration shells: validate the shared request envelope, attach operational context, and delegate to downstream LLM-backed domain services without duplicating gateway concerns.',
        },
      ],
      impact:
        'The monorepo gave AI services a common operating model: one invoke contract, shared auth and observability expectations, repeatable Docker/CI scaffolding, and a cleaner path for connecting existing agents to frontend and platform consumers.',
    },
    tr: {
      title: 'AI Agent API Gateway',
      subtitle: 'AI microservice\'leri için monorepo platformu',
      badge: 'Platform',
      summary:
        'LLM destekli microservice\'lerin kimlik doğrulama, payload sözleşmeleri, observability, Docker kurulumu ve CI entegrasyonu gibi adımları sıfırdan kurmasını engelleyen FastAPI monorepo platformu. Mevcut AI agent\'ları, kendi iş mantıklarını ayrı servislerde tutarak ortak bir gateway üzerinden dışarı açılabilir.',
      roleLine: 'Rol: AI Platform Geliştiricisi · Odak: Monorepo mimarisi, gateway factory, agent scaffolding, observability sözleşmeleri',
      focusTitle: 'Tek seferlik AI servisi kurulumlarını yeniden kullanılabilir bir gateway mimarisine dönüştürdüm.',
      focusSummary:
        'Odağım yeni AI agent\'larını yayına almayı ve yönetmeyi kolaylaştıran platform mekanikleriydi: Ortak konfigürasyon, yapılandırılmış request loglama, correlation ID\'ler, yeniden kullanılabilir FastAPI app factory, otomatik agent kaydı, ortam bazlı CORS yönetimi ve yayına hazır agent şablonları üreten cookiecutter yapıları.',
      metrics: [
        { value: '4', label: 'varsayılan agent ayarı' },
        { value: '2', label: 'çalışma modu' },
        { value: '1', label: 'gateway sözleşmesi' },
        { value: '1', label: 'pipeline üreticisi' },
      ],
      contributions: [
        {
          module: 'Gateway Mimarisi',
          title: 'Agent servisleri için yeniden kullanılabilir FastAPI app factory',
          description:
            'create_gateway_app tarzı bir factory ve agent bazlı uygulama başlangıç noktaları kurdum. Böylece monorepo gateway ve bağımsız agent container\'ları aynı middleware, sistem yönlendirmeleri, health behavior ve başlangıç kurallarını paylaşır hale geldi.',
        },
        {
          module: 'Agent Onboarding',
          title: 'Ortak konfigürasyon ve routing için otomatik kayıt sistemi',
          description:
            'Yeni bir agent eklerken gereken dağınık manuel düzenlemeleri azalttım. Temel konfigürasyon ve yönlendirme işlemlerini güncelleyen otomasyon adımlarıyla, yeni agent\'ların aynı API yüzeyine daha az hatayla bağlanmasını sağladım.',
        },
        {
          module: 'Scaffolding',
          title: 'Production ortamına hazır agent template standartları',
          description:
            'Cookiecutter ile üretilen agent\'ları; multi-stage Docker build, non-root çalışma yapısı, uv kilit dosyası (lockfile), compose dosyaları ve gateway ile uyumlu health check desenleriyle güçlendirdim.',
        },
        {
          module: 'Operasyon',
          title: 'Ortak konfigürasyon ve observability standartları',
          description:
            'Ortam değişkenleriyle yönetilen temel ayarlar, yapılandırılmış JSON logları, request/correlation ID\'leri, dinamik servis isimlendirmeleri ve OpenTelemetry uyumlu kancalar ekleyerek, agent isteklerinin lokal ve konteyner ortamlarında hata ayıklamasını kolaylaştırdım.',
        },
        {
          module: 'Entegrasyon Sözleşmesi',
          title: 'Agent mimarisini gateway sınırında standartlaştırarak hafif tutma',
          description:
            'Agent\'ları hafif HTTP entegrasyon katmanları olarak konumlandırdım: Gelen ortak istek doğrulanır, operasyonel bağlam eklenir ve asıl iş mantığı (domain logic) yeniden yazılmadan arka plandaki LLM destekli servise devredilir.',
        },
      ],
      impact:
        'Monorepo, AI servisleri için ortak bir çalışma modeli sundu: Tek bir entegrasyon sözleşmesi, paylaşılan auth ve observability standartları, tekrarlanabilir Docker/CI kurulumları ve mevcut agent\'ları platform kullanıcılarına bağlamak için daha temiz bir altyapı.',
    },
  },
  {
    id: 'task-manager-agent',
    status: 'company',
    techStack: ['Jira MCP', 'Transcript Processing', 'Voice Models', 'LangGraph', 'FastAPI', 'Pydantic', 'OpenAI API', 'uv'],
    links: {
      private_note: 'Built at QKare; source code is private.',
    },
    en: {
      title: 'Task Manager Agent',
      subtitle: 'Jira work-item automation POC',
      badge: 'Agentic Workflow',
      supportingSummary:
        'AI assistant POC that turns meeting transcripts, voice inputs, and messy collaboration context into structured Jira work items and sprint actions.',
      supportingImpact:
        'Built transcript-processing flows, configured voice model paths, and added Jira tools beyond the MCP baseline for more reliable sprint automation.',
      summary:
        'A proof-of-concept AI assistant for turning meeting transcripts, voice inputs, and messy collaboration context into structured Jira work items and sprint actions.',
      impact:
        'Built meeting-transcript processing flows, configured voice model paths, and extended the Jira MCP integration with additional tools and typed request/response models. This moved task capture toward reliable workflow automation with validated tool calls, sprint lifecycle support, and cleaner local/service operations.',
    },
    tr: {
      title: 'Task Manager Agent',
      subtitle: 'Jira iş öğesi (work-item) otomasyonu POC',
      badge: 'Agentic Workflow',
      supportingSummary:
        'Toplantı dökümleri, sesli komutlar ve dağınık işbirliği bağlamlarını yapılandırılmış Jira görevlerine ve sprint aksiyonlarına çeviren AI asistanı konsept çalışması.',
      supportingImpact:
        'Transcript işleme akışlarını kurdum, voice model yollarını yapılandırdım ve Jira MCP tabanına ek araçlar geliştirerek sprint otomasyonu süreçlerini güçlendirdim.',
      summary:
        'Toplantı dökümleri, sesli komutlar ve dağınık işbirliği bağlamlarını yapılandırılmış Jira görevlerine ve sprint aksiyonlarına çeviren konsept (POC) AI asistanı.',
      impact:
        'Toplantı dökümü (transcript) işleme akışlarını kurdum, sesli model yollarını yapılandırdım ve Jira MCP entegrasyonunu yeni araçlar ve typed request/response modelleriyle genişlettim. Bu çalışma; görev yakalama sürecini doğrulanmış tool call\'lar, sprint döngüsü desteği ve daha temiz operasyonlarla güvenilir bir iş akışı otomasyonuna dönüştürdü.',
    },
  },
  {
    id: 'cv-parsing-platform',
    status: 'company',
    techStack: ['LLM Security', 'OpenAI API', 'LangChain', 'PDF Guard', 'Structured Outputs', 'Pydantic', 'FastAPI'],
    links: {
      private_note: 'Built at QKare; source code is private.',
    },
    en: {
      title: 'CV Parsing Platform',
      subtitle: 'LLM validation and safety chain',
      badge: 'LLM Safety',
      supportingSummary:
        'An LLM-powered resume validation and safety pipeline focused on protecting the document-ingest boundary before downstream search or matching workflows.',
      supportingImpact:
        'Made resume ingestion safer by filtering non-CV, abusive, off-topic, and prompt-injection-style uploads before heavier AI processing.',
      summary:
        'An LLM-powered resume validation and safety pipeline focused on protecting the document-ingest boundary before downstream search or matching workflows.',
      impact:
        'Built the CV validation chain and added a security guard layer. By adding PDF file-type checks, converting LLM responses into safer typed objects, and adding token discipline, we filter non-CV, abusive, off-topic, and prompt-injection-style uploads—making resume ingestion safer before heavier AI processing.',
    },
    tr: {
      title: 'CV Parsing Platform',
      subtitle: 'LLM doğrulama ve güvenlik zinciri',
      badge: 'LLM Safety',
      supportingSummary:
        'Arama veya eşleştirme iş akışlarından önce belge kabul sınırını (document-ingest boundary) korumaya odaklanan LLM tabanlı özgeçmiş doğrulama ve güvenlik altyapısı.',
      supportingImpact:
        'Özgeçmiş formatında olmayan, küfürlü, konu dışı ve prompt injection içeren yüklemeleri ağır yapay zeka işlemlerinden önce filtreleyerek belge kabul sürecini daha güvenli hale getirdi.',
      summary:
        'Arama veya eşleştirme iş akışlarından önce belge kabul sınırını (document-ingest boundary) korumaya odaklanan LLM tabanlı özgeçmiş doğrulama ve güvenlik altyapısı.',
      impact:
        'CV doğrulama zincirini kurarak bir güvenlik katmanı ekledim. PDF dosya türü kontrolleri, LLM yanıtlarının güvenli veri tiplerine (typed objects) dönüştürülmesi ve token optimizasyonu sayesinde; özgeçmiş formatında olmayan, küfürlü, konu dışı ve prompt injection benzeri yüklemeler ağır yapay zeka işlemlerine ulaşmadan filtrelenir.',
    },
  },
  {
    id: 'kpi-advisor',
    featured: true,
    status: 'company',
    techStack: [
      'FastAPI',
      'OpenAI JSON Mode',
      'Pydantic',
      'Redis',
      'Streamlit',
      'Docker',
      'OpenAI Evals JSONL',
      'pandas',
      'openpyxl',
    ],
    links: {
      private_note: 'Built at QKare; source code is private.',
    },
    en: {
      title: 'KPI Advisor',
      subtitle: 'Position-based KPI recommendation AI',
      badge: 'Production - B2B SaaS',
      summary:
        'A position-based KPI recommendation service for HR and performance teams, powered by APQC/PCF metrics and a curated golden dataset. It can generate useful KPI suggestions from sparse role context, even a short position description or basic role fields, and returns reviewable JSON outputs with measurement logic, benchmarks, frequency, indicator type, and rationale.',
      roleLine:
        'Role: AI & Backend Engineer · Focus: KPI recommendation quality, prompt rules, eval workflow, service readiness',
      focusTitle: 'I helped turn KPI drafting into a grounded recommendation workflow.',
      focusSummary:
        'The problem was not dataset creation by itself: teams needed reliable KPI suggestions from sparse position context without losing business meaning. I worked on the recommendation layer, prompt/schema constraints, APQC/PCF grounding, golden-dataset-backed review loops, LLM-as-judge scoring, and the FastAPI/Streamlit service path that made the system repeatable.',
      metrics: [
        { value: '2,680', label: 'APQC metrics' },
        { value: '1,631', label: 'PCF nodes' },
        { value: '9', label: 'prompt rules' },
        { value: '4', label: 'pipeline steps' },
      ],
      contributions: [
        {
          module: 'Problem',
          title: 'Position-specific KPI suggestions were hard to standardize',
          description:
            'Different roles needed measurable KPI recommendations, but manual spreadsheet drafting was slow, inconsistent, and hard to review. The service needed to preserve role context while grounding suggestions in a recognized process framework.',
        },
        {
          module: 'My contribution',
          title: 'Designed the recommendation output around usable KPI objects',
          description:
            'Tightened prompts and response schemas so the model produced more than KPI names: each recommendation carries measurement logic, data-source guidance, leading/lagging type, baseline or benchmark, frequency, performance area, and rationale.',
        },
        {
          module: 'Solution',
          title: 'Connected generation, grounding, and review into one loop',
          description:
            'Prepared anonymized position context, aligned generation with APQC/PCF retrieval, exported results for business review, and added LLM-as-judge checks for SMART alignment, role relevance, and clarity.',
        },
        {
          module: 'Quality loop',
          title: 'Made recommendation quality measurable',
          description:
            'Built OpenAI Evals-compatible JSONL paths and score-based review outputs so KPI candidates could be compared, filtered, and improved instead of accepted as opaque LLM responses.',
        },
        {
          module: 'Service',
          title: 'Packaged the advisor as an operable AI microservice',
          description:
            'Supported the FastAPI API, Streamlit review UI, Docker setup, environment-based OpenAI configuration, Redis caching path, and shared logging/metrics expectations for AI services.',
        },
      ],
      impact:
        'Moved KPI design toward a repeatable AI recommendation service: grounded in process-framework metrics, constrained by schema and prompt rules, measurable through evals, and usable by reviewers before business adoption.',
    },
    tr: {
      title: 'KPI Advisor',
      subtitle: 'Pozisyona dayalı KPI öneri AI servisi',
      badge: 'Production - B2B SaaS',
      summary:
        'İnsan Kaynakları ve performans ekipleri için pozisyona göre yapılandırılmış KPI önerileri üreten, APQC/PCF metrikleri ve derlenmiş altın veri seti (golden dataset) ile çalışan bir KPI Advisor servisi. Kısa bir pozisyon tanımı gibi kısıtlı bağlamla (sparse context) bile anlamlı KPI adayları üretir; ölçüm mantığı, benchmark, ölçüm sıklığı (frequency), gösterge türü (indicator type) ve gerekçe (rationale) içeren, incelenebilir JSON çıktıları döndürür.',
      roleLine: 'Rol: AI & Backend Mühendisi · Odak: KPI öneri kalitesi, prompt kuralları, eval akışı, servis hazırlığı',
      focusTitle: 'KPI taslağı oluşturma sürecini veriye dayalı (grounded) bir öneri akışına dönüştürdüm.',
      focusSummary:
        'Buradaki ana problem sadece veri seti oluşturmak değildi; kısıtlı pozisyon bağlamından yola çıkarak iş anlamını (business meaning) kaybetmeyen güvenilir KPI önerileri çıkarmaktı. Öneri katmanı (recommendation layer), prompt/şema kısıtları, APQC/PCF temellendirmesi (grounding), golden-dataset destekli inceleme döngüleri, LLM-as-judge puanlaması ve sistemi tekrarlanabilir kılan FastAPI/Streamlit servis yapısı üzerinde çalıştım.',
      metrics: [
        { value: '2,680', label: 'APQC metriği' },
        { value: '1,631', label: 'PCF düğümü' },
        { value: '9', label: 'prompt kuralı' },
        { value: '4', label: 'pipeline adımı' },
      ],
      contributions: [
        {
          module: 'Problem',
          title: 'Pozisyona özel KPI önerilerini standardize etmek zordu',
          description:
            'Farklı roller için ölçülebilir KPI önerileri gerekiyordu ancak elektronik tablo (spreadsheet) üzerinden manuel taslak hazırlamak yavaş, tutarsız ve incelenmesi zor bir süreçti. Servisin rol bağlamını (role context) korurken, önerileri kabul görmüş bir süreç çerçevesine (process framework) dayandırması gerekiyordu.',
        },
        {
          module: 'Katkım',
          title: 'Öneri çıktısını kullanılabilir KPI objeleri etrafında tasarlama',
          description:
            'Promptları ve yanıt şemalarını (response schemas) daralttım; model sadece KPI isimleri üretmekle kalmayıp, her öneride ölçüm mantığı, veri kaynağı yönergeleri, öncü/ardıl (leading/lagging) türü, referans değeri (benchmark), performans alanı ve mantıksal gerekçe sunar hale geldi.',
        },
        {
          module: 'Çözüm',
          title: 'Generation, grounding ve review adımlarını tek bir döngüde birleştirme',
          description:
            'Anonimleştirilmiş pozisyon bağlamı hazırladım, LLM üretimini APQC/PCF veri çekme (retrieval) işlemiyle uyumlu hale getirdim, sonuçları business review için dışa aktardım ve SMART uyumluluğu, rol uygunluğu ve netlik için LLM-as-judge kontrolleri ekledim.',
        },
        {
          module: 'Kalite Döngüsü',
          title: 'Öneri kalitesini ölçülebilir hale getirme',
          description:
            'OpenAI Evals uyumlu JSONL yolları ve puan bazlı (score-based) inceleme çıktıları oluşturdum; böylece KPI adayları kapalı kutu LLM yanıtları olarak kalmaktan çıkıp karşılaştırılabilir, filtrelenebilir ve iyileştirilebilir hale geldi.',
        },
        {
          module: 'Servis',
          title: 'Advisor modülünü operasyonel bir AI mikroservisi olarak paketleme',
          description:
            'FastAPI tabanlı API, Streamlit tabanlı inceleme arayüzü, Docker kurulumu, ortam değişkenine dayalı OpenAI konfigürasyonu, Redis önbellekleme (caching) yolu ve AI servisleri için ortak loglama/metrik altyapılarını destekledim.',
        },
      ],
      impact:
        'KPI tasarım sürecini manuel elektronik tablo hazırlığından, tekrarlanabilir bir AI öneri servisine dönüştürdü: Process-framework metrikleriyle desteklenen, şema ve prompt kurallarıyla sınırlandırılmış, eval\'lerle ölçülebilen ve iş birimlerine ulaşmadan önce denetlenebilen bir yapı.',
    },
  },
  {
    id: 'stroke-classification',
    featured: true,
    status: 'academic',
    techStack: [
      'PyTorch',
      'Computer Vision',
      'Medical Imaging',
      'MLOps',
      'Knowledge Distillation',
      'Hugging Face',
      'Streamlit',
      'ONNX',
      'Torchvision',
      'Soft-Voting Ensemble',
    ],
    links: {
      github: 'https://github.com/melisklc0/Stroke-Classification',
      demo: 'https://huggingface.co/spaces/melisklc0/stroke-classification',
      article:
        'https://github.com/melisklc0/Stroke-Classification/blob/main/thesis/Stroke_Classification_Thesis_Report.pdf',
    },
    en: {
      title: 'Stroke Classification',
      subtitle: 'CT image classification with KD',
      badge: 'Open source capstone',
      recognition: {
        brand: 'TEKNOFEST',
        title: 'Healthcare Artificial Intelligence Competition',
        detail: 'Accepted',
      },
      summary:
        'An open-source stroke classification system for head CT scans, accepted to the TEKNOFEST Healthcare Artificial Intelligence Competition. Built around the question: can a lightweight student model outperform a heavier teacher? Using knowledge distillation, EfficientNet-B0 surpassed the InceptionV3 teacher while staying cheaper to run, and a soft-voting ensemble pushed prediction stability to 98.2% accuracy/F1.',
      roleLine:
        'Role: ML Engineer & Researcher · Focus: data pipeline, CNN baselines, knowledge distillation, public demo',
      focusTitle: 'I built a lightweight clinical decision-support prototype from teacher-student deep learning.',
      focusSummary:
        'Medical imaging needs both speed and accuracy, so the core bet was to transfer the dark knowledge of a heavier InceptionV3 teacher into a more efficient EfficientNet-B0 student. I modernized the system with a YAML-driven data pipeline, uv-based environment setup, 3-fold CNN/KD evaluation, ensemble testing, published model/data artifacts, and a live Streamlit demo.',
      metrics: [
        { value: '98.2%', label: 'peak accuracy' },
        { value: '49.5K', label: 'CT images' },
        { value: '7', label: 'model families' },
        { value: '3', label: 'CV folds' },
      ],
      contributions: [
        {
          module: 'Problem',
          title: 'Fast CT inference needed lower model cost without losing accuracy',
          description:
            'Stroke screening is time-sensitive, but heavier CNN teachers can create inference cost and hardware bottlenecks. The project tested whether a smaller student model could preserve diagnostic signal while being easier to run.',
        },
        {
          module: 'Data pipeline',
          title: 'Rebuilt the project as a modular MLOps pipeline',
          description:
            'Moved the workflow beyond local research scripts with YAML configuration, uv dependency management, fold-based preprocessing, class balancing, augmentation, and dataset pull/push steps for repeatable experiments.',
        },
        {
          module: 'Modeling',
          title: 'Distilled InceptionV3 knowledge into EfficientNet students',
          description:
            'Compared multiple torchvision backbones, used InceptionV3 as the teacher baseline, and transferred its dark knowledge into lighter EfficientNet student models that reached 98.0% F1.',
        },
        {
          module: 'Evaluation',
          title: 'Used soft-voting to maximize prediction stability',
          description:
            'Evaluated fold-level metrics, loss curves, confusion matrices, and error reports, then combined distilled models with soft voting to reach 98.2% accuracy/F1 on the internal validation protocol.',
        },
        {
          module: 'Publishing',
          title: 'Published the system as a working public demo',
          description:
            'Published the model, dataset mirrors, and Streamlit demo on Hugging Face/Kaggle, with Hub loading and ONNX export paths so the classifier can be inspected and tried without local training.',
        },
      ],
      impact:
        'Showed that a compact student model can outperform a heavier teacher for CT stroke classification, reducing inference constraints while keeping the full system reproducible, inspectable, publicly demoable, and externally validated through TEKNOFEST Healthcare AI acceptance.',
    },
    tr: {
      title: 'Stroke Classification',
      subtitle: 'Knowledge Distillation ile CT image classification',
      badge: 'Open source capstone',
      recognition: {
        brand: 'TEKNOFEST',
        title: 'Sağlıkta Yapay Zeka Yarışması',
        detail: 'Kabul Edildi',
      },
      summary:
        'Beyin bilgisayarlı tomografi (BT) görüntüleri için geliştirilen, TEKNOFEST Sağlıkta Yapay Zeka Yarışması’na kabul edilen açık kaynaklı inme (stroke) sınıflandırma sistemi. Projenin çıkış noktası şuydu: Hafif bir "öğrenci" (student) model, daha ağır bir "öğretmen" (teacher) modeli geride bırakabilir mi? Knowledge distillation kullanarak, daha düşük maliyetli EfficientNet-B0 modeli InceptionV3 teacher modelini aştı; soft-voting ensemble yaklaşımıyla tahmin kararlılığı %98.2 accuracy/F1 seviyesine taşındı.',
      roleLine: 'Rol: ML Mühendisi & Araştırmacı · Odak: Veri pipeline\'ı, CNN temelleri, knowledge distillation, public demo',
      focusTitle: 'Teacher-student deep learning ile hafif bir klinik karar destek prototipi kurdum.',
      focusSummary:
        'Medikal görüntüleme hem hız hem doğruluk gerektirdiğinden, temel fikir ağır InceptionV3 teacher modelinin gizli bilgisini (dark knowledge) daha verimli olan EfficientNet-B0 student modele aktarmaktı. Sistemi YAML tabanlı data pipeline, uv tabanlı ortam kurulumu, 3 katlı (3-fold) CNN/KD değerlendirmesi, ensemble testi, açık model/veri bileşenleri ve Streamlit demosu ile modernize ettim.',
      metrics: [
        { value: '%98.2', label: 'tepe doğruluk (accuracy)' },
        { value: '49.5K', label: 'BT görüntüsü' },
        { value: '7', label: 'model ailesi' },
        { value: '3', label: 'CV katmanı (fold)' },
      ],
      contributions: [
        {
          module: 'Problem',
          title: 'Hızlı BT analizi (inference), doğruluktan ödün vermeden düşük model maliyeti gerektiriyordu',
          description:
            'İnme (stroke) taraması zamana duyarlı bir işlemdir; ancak ağır CNN teacher modelleri inference maliyeti ve donanım darboğazları yaratabilir. Projede, daha küçük bir student modelin donanım dostu kalırken teşhis yeteneğini (diagnostic signal) koruyup koruyamayacağı test edildi.',
        },
        {
          module: 'Veri Pipeline\'ı',
          title: 'Projeyi modüler bir MLOps pipeline\'ı olarak yeniden inşa etme',
          description:
            'İş akışını yerel araştırma script\'lerinden çıkararak; YAML konfigürasyonu, uv bağımlılık yönetimi, fold tabanlı ön işleme (preprocessing), sınıf dengeleme (class balancing), veri artırma (augmentation) ve veri seti çekme/gönderme adımlarıyla tekrarlanabilir bir deney yapısına taşıdım.',
        },
        {
          module: 'Modelleme',
          title: 'InceptionV3 bilgisini EfficientNet student modellere aktarma (distillation)',
          description:
            'Farklı torchvision omurgalarını (backbone) karşılaştırdım, InceptionV3 modelini teacher temeli olarak konumlandırdım ve dark knowledge bilgisini %98.0 F1 skoruna ulaşan daha hafif EfficientNet student modellerine aktardım.',
        },
        {
          module: 'Değerlendirme',
          title: 'Tahmin kararlılığını (prediction stability) en üst düzeye çıkarmak için soft-voting kullanımı',
          description:
            'Fold tabanlı metrikler, kayıp (loss) eğrileri, karmaşıklık matrisleri (confusion matrix) ve hata raporlarıyla modelleri değerlendirdim; ardından distilled modelleri soft-voting ile birleştirerek iç doğrulama protokolünde %98.2 accuracy/F1 seviyesine ulaştım.',
        },
        {
          module: 'Yayınlama',
          title: 'Sistemi çalışan bir public demo olarak yayına alma',
          description:
            'Modeli, veri seti kopyalarını (mirrors) ve Streamlit demosunu Hugging Face/Kaggle üzerinde yayınladım. Sınıflandırıcının (classifier) yerel eğitime gerek kalmadan incelenebilmesi ve denenebilmesi için Hub loading ve ONNX dışa aktarım (export) yollarını kurdum.',
        },
      ],
      impact:
        'Kompakt bir student modelin CT stroke classification görevinde ağır bir teacher modelini geride bırakabileceğini gösterdi; çıkarım (inference) darboğazlarını azaltırken sistemin tekrarlanabilir, incelenebilir, public demo olarak sunulabilir ve TEKNOFEST Sağlıkta Yapay Zeka Yarışması kabulüyle dış doğrulama almış bir yapıya gelmesini sağladı.',
    },
  },
];
