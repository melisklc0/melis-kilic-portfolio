// src/data/skills.ts
// Edit skill groups and items here.
// Items are language-neutral (tool names). Category titles are in translations.ts.

export interface SkillGroup {
  id: string;
  icon: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'llm_engineering',
    icon: 'AI',
    items: [
      'LLM Applications',
      'AI Agents',
      'RAG Systems',
      'LangChain / LCEL',
      'Prompt Engineering',
      'OpenAI API',
      'Vector Databases',
    ],
  },
  {
    id: 'backend_apis',
    icon: 'API',
    items: [
      'Python',
      'FastAPI',
      'REST APIs',
      'Pydantic',
      'Async Processing',
      'PostgreSQL',
      'TypeScript',
    ],
  },
  {
    id: 'data_analytics',
    icon: 'SQL',
    items: [
      'Data Analytics',
      'SQL',
      'Data Pipelines',
      'ETL',
      'Business Intelligence',
      'Pandas',
      'Superset',
    ],
  },
  {
    id: 'ml_deep_learning',
    icon: 'ML',
    items: [
      'Deep Learning',
      'Medical Image Classification',
      'Knowledge Distillation',
      'PyTorch',
      'Scikit-learn',
      'Transformers',
      'Model Evaluation',
    ],
  },
  {
    id: 'mlops',
    icon: 'OPS',
    items: [
      'Observability',
      'LLM Tracing',
      'Langfuse',
      'Logging & Monitoring',
      'MLOps',
      'Docker',
      'GitLab CI/CD',
    ],
  },
  {
    id: 'frontend_basics',
    icon: 'UI',
    items: [
      'React',
      'TypeScript',
      'Vite',
      'Dashboard UI',
      'Charts',
      'Responsive Layouts',
    ],
  },
];

// Skill group titles by language
export const skillGroupTitles: Record<string, { en: string; tr: string }> = {
  llm_engineering: { en: 'AI & LLM Engineering', tr: 'Yapay Zeka & LLM Muhendisligi' },
  backend_apis: { en: 'Backend & APIs', tr: 'Backend & API' },
  data_analytics: { en: 'Data & Analytics', tr: 'Veri & Analitik' },
  ml_deep_learning: { en: 'Machine Learning / Deep Learning', tr: 'Makine Ogrenmesi / Derin Ogrenme' },
  mlops: { en: 'DevOps / MLOps', tr: 'DevOps / MLOps' },
  frontend_basics: { en: 'Frontend Basics', tr: 'Frontend Temelleri' },
};
