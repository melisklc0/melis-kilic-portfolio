import { useLang } from '../../hooks/useLang';
import { translations } from '../../data/translations';
import type { Project } from '../../data/projects';

export function StatusBadge({ status }: { status: Project['status'] }) {
  const { lang } = useLang();
  const t = translations[lang];
  const map: Record<Project['status'], { label: string; cls: string }> = {
    public: { label: t.projects.status_public, cls: 'badge-green' },
    private: { label: t.projects.status_private, cls: 'badge-amber' },
    company: { label: 'QKare', cls: 'badge-blue' },
    academic: { label: t.projects.status_academic, cls: 'badge-purple' },
  };
  const s = map[status];
  return <span className={s.cls}>{s.label}</span>;
}

export function ProjectLinks({ project }: { project: Project }) {
  const { lang } = useLang();
  const t = translations[lang];
  const hasVisibleLinks = project.links.github || project.links.demo || project.links.article;

  if (!hasVisibleLinks) {
    return null;
  }

  return (
    <div className="flex flex-wrap justify-start gap-2 md:justify-end">
      {project.links.github && (
        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="rounded-full border border-accent/25 px-3 py-1 text-xs font-semibold text-accent hover:bg-accent-light">
          GitHub {'->'}
        </a>
      )}
      {project.links.demo && (
        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="rounded-full border border-accent/25 px-3 py-1 text-xs font-semibold text-accent hover:bg-accent-light">
          Demo {'->'}
        </a>
      )}
      {project.links.article && (
        <a href={project.links.article} target="_blank" rel="noopener noreferrer" className="rounded-full border border-accent/25 px-3 py-1 text-xs font-semibold text-accent hover:bg-accent-light">
          {t.projects.article} {'->'}
        </a>
      )}
      {project.links.private_note && (
        <span className="rounded-full border border-border bg-surface px-3 py-1 text-2xs font-mono text-text-faint">
          {lang === 'en' ? project.links.private_note : "QKare'de gelistirildi; kaynak kod private."}
        </span>
      )}
    </div>
  );
}

export function ProjectType({ project, tone = 'light' }: { project: Project; tone?: 'light' | 'dark' }) {
  const { lang } = useLang();
  const text = [
    project.status === 'academic' ? (lang === 'en' ? 'Applied ML research' : 'Uygulamali ML arastirma') : null,
    project.techStack.some((tech) => tech.toLowerCase().includes('langchain') || tech.toLowerCase().includes('openai')) ? 'LLM system' : null,
    project.techStack.some((tech) => tech.toLowerCase().includes('dbt') || tech.toLowerCase().includes('superset')) ? 'Data platform' : null,
    project.techStack.some((tech) => tech.toLowerCase().includes('fastapi')) ? 'Backend platform' : null,
  ].filter(Boolean)[0] ?? (lang === 'en' ? 'Engineering project' : 'Muhendislik projesi');

  const cls = tone === 'dark' ? 'text-[#D79A73]' : 'text-coffee';

  return <span className={`font-mono text-xs font-medium uppercase tracking-[0.09em] ${cls}`}>{text}</span>;
}

export function RoleFocus({ value }: { value: string }) {
  const [rolePart, focusPart] = value.split(/\s+.\s+Focus:\s+/);
  const role = rolePart.replace(/^Role:\s*/, '');
  const focus = focusPart ?? '';

  return (
    <div className="mb-4 flex flex-wrap gap-x-5 gap-y-2 border-b border-coffee/20 pb-4 text-sm leading-5">
      <p className="text-text-primary">
        <span className="mr-2 font-mono text-[0.68rem] font-medium uppercase tracking-[0.1em] text-coffee">Role</span>
        <span className="font-semibold">{role}</span>
      </p>
      {focus && (
        <p className="text-text-primary">
          <span className="mr-2 font-mono text-[0.68rem] font-medium uppercase tracking-[0.1em] text-coffee">Focus</span>
          <span className="font-semibold">{focus}</span>
        </p>
      )}
    </div>
  );
}
