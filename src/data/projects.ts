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
      title: 'Embedded Workforce Analytics Platform',
      subtitle: 'Production · B2B SaaS analytics',
      badge: 'Production · Embedded BI',
      summary:
        'Psikometrik, yetkinlik ve HR assessment verisini SaaS ürününün içine gömülü güvenli dashboard deneyimine taşıyan multi-tenant workforce analytics platformu. 109 dbt modelden oluşan transformation layer, PostgreSQL row-level security ve özelleştirilmiş Apache Superset akışıyla production BI ihtiyaçlarını karşılayacak şekilde tasarlandı.',
      roleLine: 'Role: Data / Analytics Engineer · Focus: mart correctness, dynamic dimensions, RLS validation, embedded BI',
      focusTitle: 'Analytics doğruluğu, tenant isolation ve embedded BI kesişiminde hands-on çalıştım.',
      focusSummary:
        'Odağım dashboard sayılarının güvenilir kalmasıydı: benchmark mismatch problemlerini düzelttim, RLS davranışını dbt ile testlenen kontratlara çevirdim ve canonical dimension / competency mantığını hardcoded mapping yerine database-driven, tenant-aware konfigürasyonla çalışacak hale getirdim.',
      metrics: [
        { value: '109', label: 'dbt models' },
        { value: '56', label: 'mart tables' },
        { value: '13', label: 'AI precompute marts' },
        { value: '4', label: 'security layers' },
      ],
      contributions: [
        {
          module: 'Data correctness',
          title: 'Dashboard sayılarını testlenen data contractlara çevirme',
          description:
            'Workforce martlarında selection ve benchmark metrikleri arasındaki farkları düzelttim: null-score distortion, benchmark population mismatch ve average-of-averages kaynaklı sapmalar temizlendi. Aynı chart bug sınıfı tekrar kaçmasın diye reusable dbt parity testleri ekledim.',
        },
        {
          module: 'Dynamic dimensions',
          title: 'Behavioral ve competency martlarını database-driven hale getirme',
          description:
            'Canonical psychometric dimension, score fact ve competency-group modellerini doğru grain üzerinde yeniden kurguladım; N:1 ve N:N mapping kaynaklı skor bozulmalarını düzelttim. Leadership ve core competency filtrelerini hardcoded canonical dimensionlardan çıkarıp tenant-aware database configuration üzerinden dashboardlara taşıdım.',
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
          title: 'Türkçe embedded BI',
          description:
            'Superset için Türkçe localization akışını, upgrade’e daha dayanıklı frontend patch sürecini ve tr-TR filter search davranışını iyileştirdim.',
        },
      ],
      impact:
        'Analytics tarafının kırılgan chart logic’ten production-ready BI layer’a evrilmesine katkı sağladı: doğru grain’de çalışan dynamic marts, data-quality testleri, tenant-safe erişim ve lokalize edilmiş embedded dashboard deneyimi aynı hikayede birleşti.',
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
    id: 'multi-agent-ai-employee-coach',
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
        { value: '4', label: 'AI agents' },
        { value: '43', label: 'coaching modes' },
        { value: '49', label: 'POML prompts' },
        { value: '5', label: 'eval dimensions' },
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
      subtitle: 'Multi-agent coaching system',
      badge: 'AI Coach',
      summary:
        'Çalışan gelişim sohbetlerini LangGraph orchestration, modular POML prompts ve structured coaching taxonomy data ile farklı coaching agentlarına yönlendiren enterprise AI coaching platformu. Sistem, “sohbet iyi çalışıyor mu?” sorusunu subjektif bir yorum olmaktan çıkarıp simulated users, LLM-to-LLM conversations, OpenAI Evals export ve LLM-as-judge scoring ile scenario-driven evaluation workflow haline getiriyor.',
      roleLine: 'Role: LLM Systems & Prompt Engineer · Focus: orchestrator prompts, scenario evals, prompt library, agent UI',
      focusTitle: 'Coach davranışını testlenebilir yapan prompt ve orchestration katmanında çalıştım.',
      focusSummary:
        'Odağım AI coach’un nasıl davranacağını belirleyen katmandı: orchestrator POML prompts, role/mode/style routing, prompt library quality, simulated coachee scenarios ve generated coaching conversations için somut dimension’larla çalışan evaluation loop.',
      metrics: [
        { value: '4', label: 'AI agents' },
        { value: '43', label: 'coaching modes' },
        { value: '49', label: 'POML prompts' },
        { value: '5', label: 'eval dimensions' },
      ],
      contributions: [
        {
          module: 'orchestration',
          title: 'Agent routing için orchestrator promptları',
          description:
            'Conversation context üzerinden aktif coaching agent, mode, style ve relationship stage seçimini destekleyen orchestrator-layer POML assetleri hazırladım. Prompt loading ve multi-agent routing assetleri değişirken stack sessizce bozulmasın diye integration coverage ekledim.',
        },
        {
          module: 'evaluation',
          title: 'Coaching kalitesini LLM-as-judge eval ile ölçülebilir hale getirme',
          description:
            'Conversational AI değerlendirmesi için workflow kurmaya katkı verdim: dikkatli kullanıcı senaryoları LLM-to-LLM coaching session üretir, ardından çıktılar role/style alignment, technique use, coaching principles, safety ve conversational flow dimensionlarında referee-style LLM judge ile skorlanır.',
        },
        {
          module: 'prompt system',
          title: 'Modular POML prompt library genişletme',
          description:
            'Pattern-enhancement template’leri ekledim, prompt assetlerini daha tutarlı model davranışı için İngilizce standardize ettim ve Windows üzerinde UTF-8 POML compilation problemlerini düzelterek prompt iteration akışını güvenilir hale getirdim.',
        },
        {
          module: 'simulation data',
          title: 'Gerçekçi coaching testleri için scenario datasets',
          description:
            'Discovery context üzerinden structured coaching scenarios ekleyip genişlettim; böylece agent davranışı ad hoc chat örnekleri yerine gerçekçi employee development durumlarıyla test edilebilir hale geldi.',
        },
        {
          module: 'product surface',
          title: 'LangGraph coach için streaming UI entegrasyonu',
          description:
            'LangGraph coaching agentını CopilotKit/Next.js chat yüzeyine bağladım ve local stack’i Docker ile çalışabilir hale getirdim; multi-agent coaching session’ları demo, debug ve eval için daha erişilebilir oldu.',
        },
      ],
      impact:
        'Coach projesinin promising chatbot prototipinden maintainable AI product yönüne ilerlemesine katkı sağladı: modular prompts, testable orchestration, scenario-based simulation, measurable coaching quality ve interactive agent surfaces aynı sistemde birleşti.',
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
      title: 'KPI Advisor Platform',
      subtitle: 'Production-oriented · Quality-gated LLM service',
      badge: 'LLM KPI Advisor',
      summary:
        'An enterprise KPI advisor that turns role context into structured, reviewable KPI recommendations for HR and performance teams. Instead of treating KPI generation as a one-shot prompt, the system grounds outputs in a process-framework corpus, validates JSON with Pydantic, scores candidates with an LLM-as-judge loop, exports them for business review, and feeds approved examples back into a golden dataset.',
      roleLine:
        'Role: AI & Backend Engineer · Focus: golden dataset loop, eval-ready schema, anonymized data, deployment workflow',
      focusTitle: 'I helped turn KPI generation into a quality-gated AI workflow.',
      focusSummary:
        'I drove the practical quality loop around the service: building and anonymizing the position catalog, tightening prompts and KPI schemas for good-vs-bad KPI evaluation, exporting candidates to OpenAI Evals-compatible JSONL and Excel review flows, importing feedback into the golden dataset, and making the API/UI stack repeatable with Docker, environment config, and shared observability.',
      metrics: [
        { value: '100', label: 'position contexts' },
        { value: '2,680', label: 'framework metrics' },
        { value: '4', label: 'quality stages' },
        { value: '3', label: 'eval scores' },
      ],
      contributions: [
        {
          module: 'quality loop',
          title: 'Built a good-vs-bad KPI feedback flywheel',
          description:
            'Structured the offline workflow around candidate generation, LLM-as-judge scoring, Excel-based business review, and feedback import. Approved examples become golden dataset material, while NOK feedback becomes prompt and schema improvement input.',
        },
        {
          module: 'evaluation',
          title: 'Made KPI quality measurable instead of subjective',
          description:
            'Prepared OpenAI Evals-compatible JSONL exports and a model-graded evaluation path that scores generated KPIs on SMART alignment, role relevance, and clarity/applicability, with thresholding before human review.',
        },
        {
          module: 'prompt and schema',
          title: 'Tightened generation rules for reviewable KPI objects',
          description:
            'Refined the prompt and Pydantic-aligned schema so each KPI carries measurement logic, concrete data sources, leading/lagging type, benchmark or baseline guidance, frequency, performance area, and rationale.',
        },
        {
          module: 'data safety',
          title: 'Created an anonymized position catalog for realistic evals',
          description:
            'Introduced a 100-row position catalog and anonymized organizational fields so batch generation, demos, and review handoffs could preserve useful job context without exposing sensitive internal structure.',
        },
        {
          module: 'service operations',
          title: 'Packaged the advisor as an operable AI microservice',
          description:
            'Added Docker setup for the FastAPI API and Streamlit review UI, externalized ports and OpenAI settings, integrated Redis caching, and aligned logging/metrics with the shared observability approach used by AI services.',
        },
      ],
      impact:
        'Helped move KPI advisory work from manual, inconsistent spreadsheet drafting toward a repeatable AI workflow with grounded generation, measurable quality gates, human-in-the-loop review, safer demo data, and production-minded service operations.',
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
