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
        'HR ve manager kullanıcılarının workforce ve psychometric analytics verisine secure API’ler, streaming agent’lar ve voice/chat orchestration üzerinden doğal dille soru sorabildiği governed conversational analytics platformu. LangChain analysis skill’leri, LangGraph gateway, dbt-backed PostgreSQL mart’lar, tenant-safe RLS ve Langfuse/OpenTelemetry observability birlikte çalışarak SQL yazmadan güvenilir insight alınmasını sağlar.',
      supportingImpact:
        'Analyzer’ın izole analysis modülleri gibi çalışmasından çıkıp platform-style bir AI servisine dönüşmesine katkı verdim. Çalışma; shared domain contract’ları netleştirdi, prompt davranışını YAML config üzerinden daha reviewable hale getirdi ve LLM reasoning ile tenant-safe analytics data arasındaki yolu güçlendirdi.\n\nSonuç daha production-minded bir analyzer katmanı oldu: REST ve streaming flow’larda tutarlı auth, governed tool call’lar için request-scoped user context, Langfuse-aware operational visibility ve eksik analytics metadata karşısında daha dayanıklı çalışma.',
      summary:
        'Workforce ve psychometric mart’ları secure API’ler, streaming agent’lar ve voice/chat orchestration ile natural-language insight’a çeviren governed conversational analytics platformu. Mimari; analytics modeling, LLM interpretation ve real-time delivery katmanlarını ayırırken tenant boundary’leri RLS-aware execution ile korur.',
      roleLine: 'Role: AI & Backend Engineer · Focus: architecture refactor, governed SQL, prompts-as-config, observability',
      focusTitle: 'Analyzer’ı maintainable ve production-minded bir AI platformuna taşımaya katkı verdim.',
      focusSummary:
        'Odağım prototip sonrası bir LLM analytics sistemini güvenilir yapan katmandı: net domain contract’ları, review edilebilir prompt configuration, tenant-aware execution context ve agent-driven analysis run sırasında ne olduğunu anlamayı kolaylaştıran Langfuse/OpenTelemetry signal’ları.',
      metrics: [
        { value: '18', label: 'YAML configs' },
        { value: '8+', label: 'analysis skills' },
        { value: '4', label: 'security layers' },
        { value: '2', label: 'service layers' },
      ],
      contributions: [
        {
          module: 'Architecture',
          title: 'Shared analytics domain modelini netleştirme',
          description:
            'Competency, risk, impact, pattern ve nine-box analysis modüllerinde tekrar eden enum ve result-shape tanımlarını ortak contract’lara taşıdım. Aynı domain kavramının farklı yerlerde farklı anlamlara kayması riskini azalttım.',
        },
        {
          module: 'Prompt System',
          title: 'Prompt davranışını daha reviewable hale getirme',
          description:
            'Core prompt structure ve result-chat rule’larını dağınık Python string’lerinden çıkarıp YAML-backed configuration’a taşıdım. Prompt değişiklikleri servis koduna gömülü olmaktan çıkıp Git üzerinde görülebilen, review edilebilen product configuration’a yaklaştı.',
        },
        {
          module: 'Governed Data Access',
          title: 'Agent tool call’larını tenant-safe data access ile hizalama',
          description:
            'Agent tool’larının analytics mart’ları sorgularken platformun tenant ve identity kısıtlarıyla uyumlu kalması için request-scoped user context ve RLS-aware SQL execution tarafında çalıştım.',
        },
        {
          module: 'Operations',
          title: 'Analysis run’ları LLM observability ile trace edilebilir kılma',
          description:
            'Skill entry point, database access ve operational probe çevresindeki structured logging ve tracing context akışını iyileştirdim; platform observability path’inde Langfuse/OpenTelemetry sinyalini güçlendirdim. Böylece gerçek user analysis activity’si health check ve startup noise’dan daha net ayrılabilir hale geldi.',
        },
        {
          module: 'Gateway Reliability',
          title: 'Chat ve voice orchestration boundary’sini stabilize etme',
          description:
            'Conversational gateway ile analysis engine arasındaki handoff’u güçlendirdim; auth tutarlılığı, role-routing diagnostics ve downstream analysis context için employee identity parsing edge case’lerine dokundum.',
        },
      ],
      impact:
        'Analyzer Platform daha güvenilir, değiştirilebilir ve operate edilebilir hale geldi: domain logic daha az tekrar ediyor, prompt davranışı daha görünür ilerliyor, governed SQL path’leri netleşiyor ve Langfuse/OpenTelemetry observability sayesinde mühendisler gerçek analysis request’lerinin sistem içinde nasıl aktığını daha iyi izleyebiliyor.',
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
      subtitle: 'Multi-agent coaching system',
      badge: 'AI Coach',
      summary:
        'Çalışan gelişim sohbetlerini LangGraph orchestration, modular POML prompts ve structured coaching taxonomy data ile farklı coaching agentlarına yönlendiren enterprise AI coaching platformu. Sistem, “sohbet iyi çalışıyor mu?” sorusunu subjektif bir yorum olmaktan çıkarıp simulated users, LLM-to-LLM conversations, OpenAI Evals export ve LLM-as-judge scoring ile scenario-driven evaluation workflow haline getiriyor.',
      roleLine: 'Role: LLM Systems & Prompt Engineer · Focus: orchestrator prompts, scenario evals, prompt library, agent UI',
      focusTitle: 'Coach davranışını testlenebilir yapan prompt ve orchestration katmanında çalıştım.',
      focusSummary:
        'Odağım AI coach’un nasıl davranacağını belirleyen katmandı: orchestrator POML prompts, role/mode/style routing, prompt library quality, simulated coachee scenarios ve generated coaching conversations için somut dimension’larla çalışan evaluation loop.',
      metrics: [
        { value: '49', label: 'POML prompts' },
        { value: '43', label: 'coaching modes' },
        { value: '5', label: 'eval dimensions' },
        { value: '4', label: 'AI agents' },
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
      subtitle: 'AI microservice’ler için monorepo platformu',
      badge: 'Platform',
      summary:
        'LLM-backed microservice’lerin tek tek auth, payload contract, observability, Docker setup ve CI wiring yazmasını engelleyen FastAPI monorepo platformu. Var olan AI agent’lar shared gateway pattern’e bağlanabilirken domain logic ayrı servislerde kalır.',
      roleLine:
        'Role: AI Platform Contributor · Focus: monorepo architecture, gateway factory, agent scaffolding, observability contracts',
      focusTitle: 'One-off AI service wiring’i reusable gateway pattern’e çevirmeye katkı verdim.',
      focusSummary:
        'Odağım yeni AI agent’ları expose etmeyi ve operate etmeyi kolaylaştıran platform mechanics tarafıydı: shared configuration, structured request logging, correlation ID’ler, reusable FastAPI app factory, automated agent registration, environment-driven CORS ve deployment-ready agent shell üreten cookiecutter template’ler.',
      metrics: [
        { value: '4', label: 'agent defaults' },
        { value: '2', label: 'run modes' },
        { value: '1', label: 'gateway contract' },
        { value: '1', label: 'pipeline generator' },
      ],
      contributions: [
        {
          module: 'Gateway Architecture',
          title: 'Agent servisleri için reusable FastAPI app factory',
          description:
            'create_gateway_app tarzı factory ve per-agent app entrypoint yapısını kurdum; monorepo gateway ve standalone agent container’larının aynı middleware, system route, health behavior ve startup convention’larını paylaşmasını sağladım.',
        },
        {
          module: 'Agent Onboarding',
          title: 'Shared config ve routing’e automated registration',
          description:
            'Yeni agent eklerken scattered manual edit ihtiyacını azalttım; post-generation flow’lar core configuration ve application routing’i güncelleyerek agent handler’ların aynı invoke surface’e daha az hata riskiyle bağlanmasını sağladı.',
        },
        {
          module: 'Scaffolding',
          title: 'Production-ready agent template standardı',
          description:
            'Cookiecutter-generated agent’ları multi-stage Docker build, non-root runtime, uv lockfile install, compose file ve gateway entrypoint ile hizalı health check pattern’leriyle güçlendirdim.',
        },
        {
          module: 'Operations',
          title: 'Shared configuration ve observability convention’ları',
          description:
            'Environment-driven core settings, structured JSON logging, request/correlation ID, dynamic service naming ve OpenTelemetry-oriented hook’lar ekledim; agent call’larının local ve containerized ortamlarda debug edilmesini kolaylaştırdım.',
        },
        {
          module: 'Integration Contract',
          title: 'Agent’ları thin gateway boundary etrafında standardize etme',
          description:
            'Agent’ları lightweight HTTP integration shell olarak konumlandırdım: shared request envelope validate edilir, operational context eklenir ve iş domain logic’i tekrar yazılmadan downstream LLM-backed servise delege edilir.',
        },
      ],
      impact:
        'Monorepo, AI servisleri için ortak bir operating model sağladı: tek invoke contract, shared auth ve observability beklentileri, repeatable Docker/CI scaffolding ve mevcut agent’ları frontend/platform consumer’lara bağlamak için daha temiz bir yol.',
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
      subtitle: 'Jira work-item automation POC',
      badge: 'Agentic Workflow',
      supportingSummary:
        'Meeting transcript, ses girdisi ve dağınık collaboration context’i structured Jira work item ve sprint aksiyonlarına çeviren AI assistant POC.',
      supportingImpact:
        'Transcript processing akışlarını kurdum, voice model path’lerini ayarladım ve Jira MCP baseline’ına ek tool’lar yazarak sprint automation tarafını güçlendirdim.',
      summary:
        'Meeting transcript, ses girdisi ve dağınık collaboration context’i structured Jira work item ve sprint aksiyonlarına çeviren proof-of-concept AI assistant.',
      impact:
        'Meeting-transcript processing akışlarını kurdum, voice model path’lerini ayarladım ve Jira MCP entegrasyonunu ek tool’lar ile typed request/response modelleriyle genişlettim. Bu çalışma task capture fikrini validated tool call’lar, sprint lifecycle desteği ve daha temiz local/service operasyonlarıyla güvenilir workflow automation yönüne taşıdı.',
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
      title: 'CV Validation Platform',
      subtitle: 'LLM validation and safety chain',
      badge: 'LLM Safety',
      supportingSummary:
        'Downstream search veya matching akışlarından önce document-ingest boundary’sini korumaya odaklanan LLM-powered resume validation ve safety pipeline.',
      supportingImpact:
        'Non-CV, abusive, off-topic ve prompt-injection tarzı upload’ları ağır AI processing öncesinde filtreleyerek resume ingestion akışını daha güvenli hale getirdi.',
      summary:
        'Downstream search veya matching akışlarından önce document-ingest boundary’sini korumaya odaklanan LLM-powered resume validation pipeline.',
      impact:
        'CV validation chain ve security guard layer kurarak resume ingestion akışını daha güvenli hale getirdim. PDF file-type check ekleme, LLM response’larını typed object’lere taşıma ve token israfını azaltma işlemleri sayesinde non-CV, abusive, off-topic ve prompt-injection tarzı upload’lar ağır AI processing öncesinde filtrelendi.',
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
      subtitle: 'Position-based KPI recommendation AI',
      badge: 'Production - B2B SaaS',
      summary:
        'HR ve performance ekipleri için pozisyona göre structured KPI önerileri üreten, APQC/PCF metrics ve curated golden dataset ile güçlenen bir KPI Advisor servisi. Kısa bir position description ya da temel role field’ları gibi az context ile bile kullanılabilir KPI candidate’ları üretir; measurement logic, benchmark, frequency, indicator type ve rationale taşıyan reviewable JSON çıktılar döndürür.',
      roleLine:
        'Role: AI & Backend Engineer · Focus: KPI recommendation quality, prompt rules, eval workflow, service readiness',
      focusTitle: 'KPI yazımını grounded bir öneri akışına çevirmeye katkı verdim.',
      focusSummary:
        'Buradaki ana iş dataset üretmek değil, az position context ile bile güvenilir KPI önerileri çıkarabilen bir akış kurmaktı. Recommendation layer, prompt/schema kuralları, APQC/PCF grounding, golden-dataset-backed review loop, LLM-as-judge scoring ve FastAPI/Streamlit servis yolunda çalıştım.',
      metrics: [
        { value: '2,680', label: 'APQC metrics' },
        { value: '1,631', label: 'PCF nodes' },
        { value: '9', label: 'prompt rules' },
        { value: '4', label: 'pipeline steps' },
      ],
      contributions: [
        {
          module: 'Problem',
          title: 'Pozisyona özel KPI önerilerini standardize etmek zordu',
          description:
            'Farklı roller için ölçülebilir KPI önerileri gerekiyordu; manuel spreadsheet hazırlığı yavaş, tutarsız ve review etmesi zor bir süreçti. Servisin role context’i korurken önerileri tanınan bir process framework ile ground etmesi gerekiyordu.',
        },
        {
          module: 'Katkım',
          title: 'Recommendation output’u kullanılabilir KPI objeleri etrafında tasarlama',
          description:
            'Promptları ve response schema’yı sıkılaştırdım; model yalnızca KPI ismi değil, measurement logic, data-source guidance, leading/lagging type, baseline veya benchmark, frequency, performance area ve rationale içeren öneriler üretir hale geldi.',
        },
        {
          module: 'Çözüm',
          title: 'Generation, grounding ve review adımlarını tek döngüde bağlama',
          description:
            'Anonymized position context hazırladım, generation akışını APQC/PCF retrieval ile hizaladım, sonuçları business review için export ettim ve SMART alignment, role relevance, clarity için LLM-as-judge kontrolleri ekledim.',
        },
        {
          module: 'Quality loop',
          title: 'Recommendation quality’i ölçülebilir hale getirme',
          description:
            'OpenAI Evals-compatible JSONL path’leri ve score-based review çıktıları kurdum; KPI candidate’ları opaque LLM response olarak kalmadan karşılaştırılabilir, filtrelenebilir ve iyileştirilebilir hale geldi.',
        },
        {
          module: 'Service',
          title: 'Advisor’ı operable AI microservice olarak paketleme',
          description:
            'FastAPI API, Streamlit review UI, Docker setup, environment-based OpenAI config, Redis cache path ve AI servislerinde kullanılan shared logging/metrics beklentilerini destekledim.',
        },
      ],
      impact:
        'KPI tasarımını manuel spreadsheet hazırlığından repeatable AI recommendation service yönüne taşıdı: process-framework metrics ile grounded, prompt/schema kurallarıyla constrained, eval’lerle ölçülebilir ve business review öncesi denetlenebilir.',
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
      subtitle: 'CT image classification with KD',
      badge: 'Open source capstone',
      recognition: {
        brand: 'TEKNOFEST',
        title: 'Sağlıkta Yapay Zeka Yarışması',
        detail: 'Accepted',
      },
      summary:
        'Beyin BT görüntülerini Stroke / No-Stroke olarak sınıflandıran ve TEKNOFEST Sağlıkta Yapay Zeka Yarışması’na kabul alan open-source medical imaging sistemi. Projenin ana sorusu şuydu: hafif bir student model, ağır bir teacher modeli geride bırakabilir mi? Knowledge distillation ile EfficientNet-B0, InceptionV3 teacher baseline’ını aşarken inference maliyetini düşürdü; soft-voting ensemble ise kararlılığı 98.2% accuracy/F1 seviyesine taşıdı.',
      roleLine:
        'Role: ML Engineer & Researcher · Focus: data pipeline, CNN baselines, knowledge distillation, public demo',
      focusTitle: 'Teacher-student deep learning ile lightweight clinical decision-support prototype kurdum.',
      focusSummary:
        'Medikal görüntülemede hız ve doğruluk birlikte kritik olduğu için ana hedef, ağır InceptionV3 teacher modelin dark knowledge bilgisini daha verimli EfficientNet-B0 student modele aktarmaktı. Sistemi YAML-driven data pipeline, uv-based environment setup, 3-fold CNN/KD evaluation, ensemble testing, yayınlanmış model/data artifact’ları ve canlı Streamlit demo ile modernize ettim.',
      metrics: [
        { value: '98.2%', label: 'peak accuracy' },
        { value: '49.5K', label: 'CT images' },
        { value: '7', label: 'model families' },
        { value: '3', label: 'CV folds' },
      ],
      contributions: [
        {
          module: 'Problem',
          title: 'Fast CT inference için model maliyetini düşürmek gerekiyordu',
          description:
            'Stroke screening zaman hassas bir problem; ağır CNN teacher modelleri inference cost ve hardware bottleneck yaratabiliyor. Proje, daha küçük bir student modelin diagnostic signal’ı koruyup koruyamayacağını test etti.',
        },
        {
          module: 'Data pipeline',
          title: 'Projeyi modular MLOps pipeline olarak yeniden yapılandırma',
          description:
            'Workflow’u local research scriptlerinden çıkarıp YAML configuration, uv dependency management, fold-based preprocessing, class balancing, augmentation ve dataset pull/push adımlarıyla repeatable experiment yapısına taşıdım.',
        },
        {
          module: 'Modeling',
          title: 'InceptionV3 bilgisini EfficientNet student modellere distill etme',
          description:
            'Birden fazla torchvision backbone’u karşılaştırdım, InceptionV3’ü teacher baseline olarak konumlandırdım ve dark knowledge bilgisini 98.0% F1 seviyesine ulaşan EfficientNet student modellere aktardım.',
        },
        {
          module: 'Evaluation',
          title: 'Soft-voting ile prediction stability’i artırma',
          description:
            'Fold-level metrics, loss curve, confusion matrix ve error report çıktılarıyla modelleri ölçtüm; distilled modelleri soft voting ile birleştirerek internal validation protocol üzerinde 98.2% accuracy/F1 elde ettim.',
        },
        {
          module: 'Publishing',
          title: 'Sistemi çalışan public demo olarak yayınlama',
          description:
            'Modeli, dataset mirror’larını ve Streamlit demo’yu Hugging Face/Kaggle üzerinde yayınladım; Hub loading ve ONNX export path’leriyle classifier local training gerektirmeden incelenebilir ve denenebilir hale geldi.',
        },
      ],
      impact:
        'Compact student modelin CT stroke classification için ağır teacher baseline’ı aşabileceğini gösterdi; inference constraint’lerini azaltırken sistemi reproducible, inspectable, public demo’ya uygun ve TEKNOFEST Sağlıkta Yapay Zeka kabulüyle dış doğrulama almış hale getirdi.',
    },
  },
];
