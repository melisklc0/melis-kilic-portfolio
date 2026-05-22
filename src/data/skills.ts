// src/data/skills.ts
// Edit skill groups and items here.
// Items are language-neutral tool, framework, platform, and library names.

export interface SkillGroup {
  id: string;
  icon: string;
  items: SkillItem[];
}

export interface SkillItem {
  name: string;
  featured?: boolean;
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'ai_agent_systems',
    icon: 'AI',
    items: [
      { name: 'LangGraph', featured: true },
      { name: 'LangChain', featured: true },
      { name: 'RAG', featured: true },
      { name: 'Agentic AI' },
      { name: 'OpenAI API' },
      { name: 'Prompt Engineering' },
      { name: 'MCP' },
      { name: 'Structured Outputs' },
    ],
  },
  {
    id: 'data_engineering',
    icon: 'SQL',
    items: [
      { name: 'dbt Core', featured: true },
      { name: 'PostgreSQL', featured: true },
      { name: 'Apache Superset', featured: true },
      { name: 'SQL' },
      { name: 'Data Marts' },
      { name: 'FDW' },
      { name: 'ETL / ELT' },
      { name: 'Data Modeling' },
      { name: 'pandas' },
      { name: 'Native RLS' },
    ],
  },
  {
    id: 'backend_api_engineering',
    icon: 'API',
    items: [
      { name: 'Python', featured: true },
      { name: 'FastAPI', featured: true },
      { name: 'Pydantic', featured: true },
      { name: 'REST APIs' },
      { name: 'WebSocket' },
      { name: 'JWT' },
      { name: 'httpx' },
      { name: 'Redis' },
    ],
  },
  {
    id: 'llm_evaluation_trust',
    icon: 'EVAL',
    items: [
      { name: 'LLM-as-Judge', featured: true },
      { name: 'OpenAI Evals', featured: true },
      { name: 'Langfuse', featured: true },
      { name: 'JSONL Evals' },
      { name: 'Eval Datasets' },
      { name: 'Scenario Testing' },
    ],
  },
  {
    id: 'infrastructure_quality',
    icon: 'INFRA',
    items: [
      { name: 'Docker', featured: true },
      { name: 'uv', featured: true },
      { name: 'pytest', featured: true },
      { name: 'Ruff', featured: true },
      { name: 'mypy', featured: true },
      { name: 'Git' },
      { name: 'pre-commit' },
      { name: 'GitLab CI/CD' },
      { name: 'Argo Workflows' },
    ],
  },
  {
    id: 'machine_learning_vision',
    icon: 'ML',
    items: [
      { name: 'PyTorch', featured: true },
      { name: 'Knowledge Distillation', featured: true },
      { name: 'ONNX', featured: true },
      { name: 'Torchvision' },
      { name: 'Hugging Face' },
      { name: 'CNNs' },
      { name: 'Medical Imaging' },
      { name: 'Streamlit' },
    ],
  },
];

// Skill group titles by language
export const skillGroupTitles: Record<string, { en: string; tr: string }> = {
  ai_agent_systems: { en: 'AI Systems & Agents', tr: 'AI Sistemleri & Ajanlar' },
  llm_evaluation_trust: { en: 'LLM Evaluation & Trust', tr: 'LLM Degerlendirme & Guven' },
  backend_api_engineering: { en: 'Backend & API Engineering', tr: 'Backend & API Muhendisligi' },
  data_engineering: { en: 'Data Engineering', tr: 'Veri Muhendisligi' },
  infrastructure_quality: { en: 'Infrastructure & Quality', tr: 'Infrastructure & Quality' },
  machine_learning_vision: { en: 'Machine Learning & Vision', tr: 'Makine Ogrenmesi & Goru' },
};
