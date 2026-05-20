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
    id: 'embedded-workforce-analytics',
    featured: true,
    status: 'company',
    techStack: ['dbt Core', 'PostgreSQL RLS', 'Apache Superset', 'FastAPI', 'Docker', 'SQL', 'Python'],
    links: {
      private_note: 'Built at QKare; source code is private.',
    },
    en: {
      title: 'Embedded Workforce Analytics Platform',
      subtitle: 'Production · B2B SaaS analytics',
      badge: 'Production · Embedded BI',
      summary:
        'A multi-tenant workforce analytics platform that turns psychometric and HR assessment data into secure, role-isolated dashboards embedded inside a SaaS product. The stack combines a 100+ model dbt transformation layer, PostgreSQL row-level security, and customized Apache Superset delivery for production BI workflows.',
      roleLine: 'Role: Data Platform & Backend Contributor · Focus: dbt reliability, RLS validation, Superset embedding',
      focusTitle: 'I owned the reliability layer of an embedded analytics platform.',
      focusSummary:
        'My work connected data correctness, tenant-safe access, and production dashboard stability. I focused on making dashboard numbers trustworthy, making RLS behavior testable, and removing embedding issues before they affected users.',
      metrics: [
        { value: '100+', label: 'dbt models' },
        { value: 'RLS', label: 'tenant isolation' },
        { value: 'Superset', label: 'embedded BI' },
        { value: 'CI', label: 'data contracts' },
      ],
      contributions: [
        {
          module: 'Data correctness',
          title: 'Caught benchmark mismatches before production',
          description:
            'Improved dashboard trust by fixing selection-vs-benchmark mismatches caused by null scores, population drift, and average-of-averages logic. Added reusable dbt parity checks so the same class of bug is caught automatically.',
        },
        {
          module: 'Tenant-safe analytics',
          title: 'Turned RLS behavior into a testable contract',
          description:
            'Strengthened tenant-boundary validation by adding dbt tests that simulate dashboard read access. PostgreSQL RLS checks became part of the analytics pipeline instead of a manual dashboard-only verification step.',
        },
        {
          module: 'Embedded BI reliability',
          title: 'Stabilized production Superset embedding',
          description:
            'Resolved iframe blockers around CSRF, guest tokens, exports, and transaction-scoped session variables. This protected the embedded dashboard experience and kept per-query RLS enforcement aligned with user context.',
        },
        {
          module: 'platform extension',
          title: 'Behavioral & competency marts',
          description:
            'Refactored behavioral score pipelines for canonical psychometric dimensions and tenant-configurable leadership competency logic across staging, intermediate, and mart layers.',
        },
        {
          module: 'platform extension',
          title: 'Turkish embedded BI',
          description:
            'Delivered Turkish localization and upgrade-resilient frontend patching for Superset, including locale-aware filter search and automated translation build steps.',
        },
      ],
      impact:
        'Helped move analytics from fragile chart logic into a production-grade BI layer with repeatable data-quality checks, tenant-safe access, and a localized embedded dashboard experience.',
    },
    tr: {
      title: 'Embedded Workforce Analytics Platform',
      subtitle: 'Production · B2B SaaS analytics',
      badge: 'Production · Embedded BI',
      summary:
        'Psikometrik ve HR assessment verisini, SaaS ürününün içine gömülü güvenli dashboard deneyimine taşıyan multi-tenant workforce analytics platformu. 100+ dbt modelden oluşan transformation layer, PostgreSQL row-level security ve özelleştirilmiş Apache Superset akışıyla production BI ihtiyaçlarını karşılayacak şekilde tasarlandı.',
      roleLine: 'Role: Data Platform & Backend Contributor · Focus: dbt reliability, RLS validation, Superset embedding',
      focusTitle: 'Embedded analytics platformunun reliability katmanını üstlendim.',
      focusSummary:
        'Çalışmam data correctness, tenant-safe access ve production dashboard stability noktalarını birleştirdi. Dashboard sayılarının güvenilir kalmasına, RLS davranışının testlenebilir olmasına ve embedding problemlerinin kullanıcıya ulaşmadan çözülmesine odaklandım.',
      metrics: [
        { value: '100+', label: 'dbt model' },
        { value: 'RLS', label: 'tenant isolation' },
        { value: 'Superset', label: 'embedded BI' },
        { value: 'CI', label: 'data contracts' },
      ],
      contributions: [
        {
          module: 'Data correctness',
          title: 'Benchmark hatalarını production öncesi yakalama',
          description:
            'Dashboard güvenini artırmak için selection ve benchmark metrikleri arasındaki farkları düzelttim: null-score davranışı, population drift ve average-of-averages kaynaklı sapmalar temizlendi. Aynı hata sınıfı tekrar kaçmasın diye reusable dbt parity testleri ekledim.',
        },
        {
          module: 'Tenant-safe analytics',
          title: 'RLS davranışını testlenebilir kontrata çevirme',
          description:
            'Dashboard read role davranışını simüle eden dbt testleriyle tenant-boundary validation sürecini güçlendirdim. Böylece PostgreSQL RLS kontrolü manual dashboard doğrulamasından çıkıp analytics pipeline içinde testlenen bir güvenlik kontratına dönüştü.',
        },
        {
          module: 'Embedded BI reliability',
          title: 'Production Superset embedding stabilitesi',
          description:
            'Iframe tarafında CSRF, guest-token, export flow ve transaction-scoped session variable problemlerini çözdüm. Bu çalışma embedded dashboard deneyimini korudu ve per-query RLS enforcement davranışını user context ile hizalı tuttu.',
        },
        {
          module: 'platform extension',
          title: 'Behavioral & competency marts',
          description:
            'Davranışsal skor pipeline’larında canonical psychometric dimension mantığını ve tenant-configurable leadership competency kurgusunu staging, intermediate ve mart katmanlarında daha doğru hale getirdim.',
        },
        {
          module: 'platform extension',
          title: 'Türkçe embedded BI',
          description:
            'Superset için Türkçe localization akışını, upgrade’e daha dayanıklı frontend patch sürecini ve tr-TR filter search davranışını iyileştirdim.',
        },
      ],
      impact:
        'Analytics tarafının kırılgan chart logic’ten production-ready BI layer’a evrilmesine katkı sağladı: data-quality testleri, tenant-safe erişim ve lokalize edilmiş embedded dashboard deneyimi aynı hikayede birleşti.',
    },
  },
  {
    id: 'conversational-behavioral-analytics',
    featured: true,
    status: 'company',
    techStack: ['LangChain', 'LangGraph', 'FastAPI', 'WebSocket', 'PostgreSQL RLS', 'OpenAI', 'YAML'],
    links: {
      private_note: 'Built at QKare; source code is private.',
    },
    en: {
      title: 'Enterprise Conversational Behavioral Analytics Platform',
      subtitle: 'Production · LLM analytics over governed data',
      badge: 'Production · LLM Analytics',
      summary:
        'A conversational AI platform that lets HR and managers ask natural-language questions over pre-modeled workforce and psychometric analytics. The system combines a LangChain analysis engine, a LangGraph/FastAPI conversation layer, WebSocket streaming, JWT authentication, and PostgreSQL RLS-aligned querying.',
      roleLine: 'Role: AI Backend Contributor · Focus: auth, governed SQL, prompt configuration, observability',
      focusTitle: 'My focus — secure context propagation, prompts-as-config & observability',
      focusSummary:
        'My work sat in the production-hardening layer of the AI analytics stack: auth consistency, user context propagation, RLS-aware SQL execution, prompt/config maintainability, and operational logging. The goal was a safer, easier-to-debug bridge between LLM reasoning and governed analytics data.',
      metrics: [
        { value: 'HTTP + WS', label: 'auth paths' },
        { value: 'RLS', label: 'SQL access' },
        { value: 'YAML', label: 'prompt config' },
        { value: 'Logs', label: 'observability' },
      ],
      contributions: [
        {
          module: 'auth',
          title: 'JWT and WebSocket hardening',
          description:
            'Aligned REST and WebSocket token handling so streaming analysis requests follow the same trust model as HTTP endpoints, with improved Swagger support for secured local testing.',
        },
        {
          module: 'agent context',
          title: 'User context for governed tool calls',
          description:
            'Added request-scoped user context for agent tool execution and improved SQL paths to align identity and tenant constraints with PostgreSQL row-level security expectations.',
        },
        {
          module: 'prompts',
          title: 'YAML-driven prompt and config refactor',
          description:
            'Moved hardcoded prompt assembly toward YAML-backed configuration, centralized loading/caching, and plain-text operational output so prompt changes are easier to review and version.',
        },
        {
          module: 'operations',
          title: 'Structured logging and connector reliability',
          description:
            'Integrated shared structured logging around AI skill entry points and cleaned database connector behavior so health checks and system probes do not create misleading tenant-scoped noise.',
        },
        {
          module: 'gateway',
          title: 'Conversation API debugging',
          description:
            'Improved logging and context parsing around the chat/voice gateway boundary, including role routing diagnostics and safer employee identity extraction for downstream analysis context.',
        },
      ],
      impact:
        'Made a governed LLM analytics system more production-ready by tightening the paths where identity, SQL access, prompts, streaming, and logs meet.',
    },
    tr: {
      title: 'Enterprise Conversational Behavioral Analytics Platform',
      subtitle: 'Production · Governed data üzerinde LLM analytics',
      badge: 'Production · LLM Analytics',
      summary:
        'HR ve manager kullanıcılarının pre-modeled workforce ve psychometric analytics verisine doğal dille soru sorabildiği conversational AI platformu. Sistem; LangChain analysis engine, LangGraph/FastAPI conversation layer, WebSocket streaming, JWT authentication ve PostgreSQL RLS-aligned SQL execution parçalarını bir araya getiriyor.',
      roleLine: 'Role: AI Backend Contributor · Focus: auth, governed SQL, prompt configuration, observability',
      focusTitle: 'Odağım — secure context propagation, prompts-as-config ve observability',
      focusSummary:
        'AI analytics stack’in production-hardening katmanında çalıştım: auth tutarlılığı, user context propagation, RLS-aware SQL execution, prompt/config maintainability ve operational logging. Ana hedef, LLM reasoning ile governed analytics data arasında daha güvenli ve debug edilebilir bir köprü kurmaktı.',
      metrics: [
        { value: 'HTTP + WS', label: 'auth paths' },
        { value: 'RLS', label: 'SQL access' },
        { value: 'YAML', label: 'prompt config' },
        { value: 'Logs', label: 'observability' },
      ],
      contributions: [
        {
          module: 'auth',
          title: 'JWT ve WebSocket hardening',
          description:
            'REST ve WebSocket token handling akışlarını hizaladım; streaming analysis isteklerinin HTTP endpoint’lerle aynı trust model üzerinden çalışmasını sağladım. Secured local testing için Swagger tarafını da daha kullanılabilir hale getirdim.',
        },
        {
          module: 'agent context',
          title: 'Governed tool calls için user context',
          description:
            'Agent tool execution sırasında request-scoped user context taşıyan yapıyı ekledim ve SQL execution path’lerini tenant/identity kısıtlarıyla PostgreSQL RLS beklentilerine daha uyumlu hale getirdim.',
        },
        {
          module: 'prompts',
          title: 'YAML-driven prompt ve config refactor',
          description:
            'Hardcoded prompt assembly yerine YAML-backed configuration yaklaşımını güçlendirdim; loader/cache yapısını sadeleştirdim ve prompt/log output’larını operational olarak daha okunabilir hale getirdim.',
        },
        {
          module: 'operations',
          title: 'Structured logging ve connector reliability',
          description:
            'AI skill entry point’leri etrafında shared structured logging entegrasyonu yaptım; health check ve system probe davranışlarının gereksiz tenant log noise üretmemesi için database connector tarafını temizledim.',
        },
        {
          module: 'gateway',
          title: 'Conversation API debugging',
          description:
            'Chat/voice gateway sınırında role routing loglarını ve context parsing davranışını iyileştirdim; nested payload’lardan employee identity çıkarımı gibi production debug sürecini etkileyen edge case’lere dokundum.',
        },
      ],
      impact:
        'Identity, SQL access, prompt lifecycle, streaming ve logların birleştiği noktalarda sistemi daha production-ready hale getirdi; LLM analytics tarafının güvenilirliğini artırdı.',
    },
  },
  {
    id: 'ai-agent-api-gateway',
    featured: true,
    status: 'company',
    techStack: ['Python', 'FastAPI', 'Pydantic', 'Docker', 'Cookiecutter', 'Structured Logging', 'OpenTelemetry'],
    links: {
      private_note: 'Built at QKare; source code is private.',
    },
    en: {
      title: 'Enterprise AI Agent API Gateway',
      subtitle: 'Production · AI platform infrastructure',
      badge: 'Production · Platform',
      summary:
        'A FastAPI monorepo that standardizes how multiple LLM-backed microservices are exposed through one invoke surface. Instead of every agent reinventing auth, routing, logging, configuration, and container startup, the gateway provides shared platform mechanics and thin downstream agent handlers.',
      roleLine: 'Role: AI Platform Contributor · Focus: gateway factory, service scaffolding, structured operations',
      focusTitle: 'My focus — shared gateway mechanics for AI microservices',
      focusSummary:
        'I focused on the platform layer that makes AI services easier to expose, operate, and onboard. My work covered shared configuration, structured JSON logging, correlation IDs, a reusable FastAPI gateway factory, automated registration, and production-minded scaffolding for new agents.',
      metrics: [
        { value: '1', label: 'invoke surface' },
        { value: 'Factory', label: 'FastAPI apps' },
        { value: 'JSON', label: 'structured logs' },
        { value: 'Docker', label: 'agent scaffold' },
      ],
      contributions: [
        {
          module: 'core',
          title: 'Shared config and structured logging',
          description:
            'Introduced centralized environment-driven settings, structured JSON logs, request/correlation IDs, and dynamic service naming so agent services behave consistently across local and containerized runs.',
        },
        {
          module: 'gateway factory',
          title: 'Reusable FastAPI app factory',
          description:
            'Built a create_gateway_app-style factory and per-agent entrypoints so monorepo and standalone agent containers inherit the same middleware, system routes, and startup behavior.',
        },
        {
          module: 'agent onboarding',
          title: 'Automated registration and routing',
          description:
            'Reduced manual wiring for new agents by updating shared configuration and application routing through scaffolding/post-generation flows instead of scattered edits.',
        },
        {
          module: 'templates',
          title: 'Production-ready Docker scaffolding',
          description:
            'Hardened generated agent templates with multi-stage Docker builds, non-root runtime patterns, uv lockfile installs, and health checks aligned with the gateway entrypoint.',
        },
        {
          module: 'frontend integration',
          title: 'Environment-configurable CORS',
          description:
            'Moved browser origin configuration into core settings so local, staged, and embedded frontend consumers can call the gateway without hardcoded origin lists.',
        },
      ],
      impact:
        'Helped turn one-off AI service integrations into a reusable platform contract for deploying and operating LLM-backed microservices at QKare.',
    },
    tr: {
      title: 'Enterprise AI Agent API Gateway',
      subtitle: 'Production · AI platform infrastructure',
      badge: 'Production · Platform',
      summary:
        'Birden fazla LLM-backed microservice’i tek bir invoke surface üzerinden expose eden FastAPI monorepo. Her agent’ın auth, routing, logging, config ve container startup işlerini yeniden yazması yerine, gateway shared platform mechanics ve ince downstream agent handler’ları sağlıyor.',
      roleLine: 'Role: AI Platform Contributor · Focus: gateway factory, service scaffolding, structured operations',
      focusTitle: 'Odağım — AI microservice’ler için shared gateway mechanics',
      focusSummary:
        'AI servislerini expose etmeyi, operate etmeyi ve yeni agent onboarding sürecini kolaylaştıran platform katmanına odaklandım. Shared config, structured JSON logging, correlation ID’ler, reusable FastAPI gateway factory, automated registration ve production-minded agent scaffolding üzerinde çalıştım.',
      metrics: [
        { value: '1', label: 'invoke surface' },
        { value: 'Factory', label: 'FastAPI apps' },
        { value: 'JSON', label: 'structured logs' },
        { value: 'Docker', label: 'agent scaffold' },
      ],
      contributions: [
        {
          module: 'core',
          title: 'Shared config ve structured logging',
          description:
            'Centralized environment-driven settings, structured JSON logs, request/correlation ID ve dynamic service naming yapısını ekledim; agent servislerinin local ve containerized ortamlarda tutarlı davranmasını hedefledim.',
        },
        {
          module: 'gateway factory',
          title: 'Reusable FastAPI app factory',
          description:
            'create_gateway_app tarzı factory ve per-agent entrypoint yapısını kurdum; monorepo ve standalone agent container’larının aynı middleware, system route ve startup davranışını paylaşmasını sağladım.',
        },
        {
          module: 'agent onboarding',
          title: 'Automated registration ve routing',
          description:
            'Yeni agent eklerken scattered manual edit ihtiyacını azalttım; scaffolding/post-generation flow ile shared config ve application routing güncellemelerini daha güvenilir hale getirdim.',
        },
        {
          module: 'templates',
          title: 'Production-ready Docker scaffolding',
          description:
            'Generated agent template’lerini multi-stage Docker build, non-root runtime, uv lockfile install ve gateway entrypoint ile hizalı health check pattern’leriyle güçlendirdim.',
        },
        {
          module: 'frontend integration',
          title: 'Environment-configurable CORS',
          description:
            'Browser origin ayarlarını core settings içine taşıdım; local, staged ve embedded frontend consumer’ların gateway’e hardcoded origin list olmadan bağlanmasını kolaylaştırdım.',
        },
      ],
      impact:
        'QKare’de tekil AI service entegrasyonlarını, LLM-backed microservice’leri deploy ve operate etmek için tekrar kullanılabilir bir platform contract’a yaklaştırdı.',
    },
  },
  {
    id: 'kpi-recommendation-service',
    featured: true,
    status: 'company',
    techStack: ['FastAPI', 'OpenAI JSON Mode', 'Pydantic', 'Redis', 'Streamlit', 'Docker', 'pandas'],
    links: {
      private_note: 'Built at QKare; source code is private.',
    },
    en: {
      title: 'LLM-Powered KPI Recommendation Service',
      subtitle: 'Production-oriented · Structured LLM service',
      badge: 'Production-oriented · LLM Service',
      summary:
        'An LLM microservice that recommends role-specific KPIs with structured JSON output, framework-grounded retrieval, schema validation, and an offline quality loop. It is designed around repeatable quality control: generate candidates, evaluate them, export for human review, and feed accepted examples back into a golden dataset.',
      roleLine: 'Role: LLM Service Contributor · Focus: structured output, eval workflow, deployment readiness',
      focusTitle: 'My focus — eval-ready generation, datasets & deployment workflow',
      focusSummary:
        'My work helped move the KPI advisor from prompt-driven generation toward a more operable AI service. I worked on containerization, position catalog data, anonymization, environment-based configuration, stricter prompt/schema design, Excel review exports, and shared observability.',
      metrics: [
        { value: 'JSON', label: 'structured output' },
        { value: 'LLM', label: 'judge eval' },
        { value: 'Excel', label: 'human review' },
        { value: 'Redis', label: 'cache path' },
      ],
      contributions: [
        {
          module: 'service stack',
          title: 'Containerized API and review UI',
          description:
            'Added Docker setup for the FastAPI recommendation service and Streamlit review surface so the API, UI, and supporting services can run repeatably in local and deployment workflows.',
        },
        {
          module: 'data',
          title: 'Position catalog and anonymization',
          description:
            'Introduced a structured position catalog for batch KPI generation and anonymized realistic fields so demos and evaluation runs preserve useful job context without exposing sensitive organizational detail.',
        },
        {
          module: 'LLM output',
          title: 'Stricter prompt and schema design',
          description:
            'Tightened generation prompts and Pydantic-aligned response schemas so KPIs include reviewable fields such as benchmarks, indicator types, measurement logic, and clearer quality criteria.',
        },
        {
          module: 'quality loop',
          title: 'Human review export alignment',
          description:
            'Refactored the Excel export step for the updated evaluation schema, keeping the offline LLM-as-judge and reviewer workflow usable as the structured KPI format evolved.',
        },
        {
          module: 'operations',
          title: 'Environment config and observability',
          description:
            'Externalized ports and LLM settings for multi-environment deployment, then aligned logging/metrics with the shared observability approach used across QKare AI services.',
        },
      ],
      impact:
        'Made the KPI generation workflow more production-minded: structured outputs, safer data handling, reviewable artifacts, repeatable containers, and operational visibility around expensive LLM calls.',
    },
    tr: {
      title: 'LLM-Powered KPI Recommendation Service',
      subtitle: 'Production-oriented · Structured LLM service',
      badge: 'Production-oriented · LLM Service',
      summary:
        'Role-specific KPI önerileri üreten, structured JSON output, framework-grounded retrieval, schema validation ve offline quality loop üzerine kurulu LLM microservice. Akış sadece “KPI üret” değil; candidate üret, değerlendir, human review için export et ve kabul edilen örnekleri golden dataset’e geri besle mantığıyla tasarlandı.',
      roleLine: 'Role: LLM Service Contributor · Focus: structured output, eval workflow, deployment readiness',
      focusTitle: 'Odağım — eval-ready generation, datasets ve deployment workflow',
      focusSummary:
        'KPI advisor’ın prompt-driven bir prototipten daha operable bir AI service’e yaklaşmasına katkı verdim. Containerization, position catalog data, anonymization, environment-based configuration, daha sıkı prompt/schema tasarımı, Excel review export ve shared observability tarafında çalıştım.',
      metrics: [
        { value: 'JSON', label: 'structured output' },
        { value: 'LLM', label: 'judge eval' },
        { value: 'Excel', label: 'human review' },
        { value: 'Redis', label: 'cache path' },
      ],
      contributions: [
        {
          module: 'service stack',
          title: 'Containerized API ve review UI',
          description:
            'FastAPI recommendation service ve Streamlit review surface için Docker setup ekledim; API, UI ve destek servislerinin local/deployment workflow’larda tekrar üretilebilir şekilde ayağa kalkmasını hedefledim.',
        },
        {
          module: 'data',
          title: 'Position catalog ve anonymization',
          description:
            'Batch KPI generation için structured position catalog ekledim; realistic job context korunurken hassas organization detail paylaşılmasın diye catalog alanlarını demo/eval kullanımına daha güvenli hale getirdim.',
        },
        {
          module: 'LLM output',
          title: 'Daha sıkı prompt ve schema design',
          description:
            'Generation prompt’larını ve Pydantic-aligned response schema’yı sıkılaştırdım; KPI çıktılarının benchmark, indicator type, measurement logic ve review edilebilir kalite alanları taşımasını sağladım.',
        },
        {
          module: 'quality loop',
          title: 'Human review export alignment',
          description:
            'Updated evaluation schema ile uyumlu Excel export adımını refactor ettim; offline LLM-as-judge ve reviewer workflow’unun structured KPI formatı değişirken kullanılabilir kalmasını sağladım.',
        },
        {
          module: 'operations',
          title: 'Environment config ve observability',
          description:
            'Port ve LLM ayarlarını environment üzerinden yönetilebilir hale getirdim; logging/metrics tarafını QKare AI servislerinde kullanılan shared observability yaklaşımıyla hizaladım.',
        },
      ],
      impact:
        'KPI generation workflow’unu daha production-minded hale getirdi: structured output, daha güvenli data handling, review edilebilir artifact’ler, repeatable container akışı ve pahalı LLM çağrıları için operational visibility.',
    },
  },
];
