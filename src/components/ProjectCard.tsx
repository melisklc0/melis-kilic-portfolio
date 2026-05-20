import { useLang } from '../hooks/useLang';
import { translations } from '../data/translations';
import type { Project } from '../data/projects';

function StatusBadge({ status }: { status: Project['status'] }) {
  const { lang } = useLang();
  const t = translations[lang];
  const map: Record<Project['status'], { label: string; cls: string }> = {
    public: { label: t.projects.status_public, cls: 'badge-green' },
    private: { label: t.projects.status_private, cls: 'badge-amber' },
    company: { label: t.projects.status_company, cls: 'badge-blue' },
    academic: { label: t.projects.status_academic, cls: 'badge-purple' },
  };
  const s = map[status];
  return <span className={s.cls}>{s.label}</span>;
}

function ProjectLinks({ project }: { project: Project }) {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <div className="flex gap-2 flex-wrap justify-start md:justify-end">
      {project.links.github && <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="rounded-full border border-accent/25 px-3 py-1 text-xs font-semibold text-accent hover:bg-accent-light">GitHub {'->'}</a>}
      {project.links.demo && <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="rounded-full border border-accent/25 px-3 py-1 text-xs font-semibold text-accent hover:bg-accent-light">Demo {'->'}</a>}
      {project.links.article && <a href={project.links.article} target="_blank" rel="noopener noreferrer" className="rounded-full border border-accent/25 px-3 py-1 text-xs font-semibold text-accent hover:bg-accent-light">{t.projects.article} {'->'}</a>}
      {project.links.private_note && <span className="rounded-full border border-border bg-surface px-3 py-1 text-2xs font-mono text-text-faint">{t.projects.private_note}</span>}
    </div>
  );
}

function ProjectType({ project }: { project: Project }) {
  const { lang } = useLang();
  const text = [
    project.status === 'academic' ? (lang === 'en' ? 'Applied ML research' : 'Uygulamali ML arastirma') : null,
    project.techStack.some((tech) => tech.toLowerCase().includes('langchain') || tech.toLowerCase().includes('openai')) ? 'LLM system' : null,
    project.techStack.some((tech) => tech.toLowerCase().includes('fastapi')) ? 'Backend' : null,
    project.techStack.some((tech) => tech.toLowerCase().includes('react')) ? 'Dashboard' : null,
  ].filter(Boolean)[0] ?? (lang === 'en' ? 'Engineering project' : 'Muhendislik projesi');

  return <span className="font-mono text-2xs uppercase tracking-[0.18em] text-coffee">{text}</span>;
}

export function FeaturedProjectCard({ project }: { project: Project }) {
  const { lang } = useLang();
  const t = translations[lang];
  const c = project[lang];
  const metrics = [
    { value: project.techStack.length, label: lang === 'en' ? 'tools' : 'arac' },
    { value: c.highlights?.length ?? 0, label: lang === 'en' ? 'highlights' : 'odak' },
    { value: project.status === 'company' ? 'B2B' : project.status, label: lang === 'en' ? 'scope' : 'kapsam' },
  ];
  const process = lang === 'en'
    ? ['Context', 'Architecture', 'Validation', 'Outcome']
    : ['Baglam', 'Mimari', 'Dogrulama', 'Sonuc'];

  return (
    <article className="group relative overflow-hidden rounded-[1.45rem] border border-border bg-surface/95 shadow-card-md transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg">
      <div className="absolute inset-y-0 left-0 hidden w-1 bg-[linear-gradient(to_bottom,#0F3248,#2D607D,#A06448)] md:block" />
      <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
        <div className="relative overflow-hidden bg-accent-dark p-6 text-white md:p-8">
          <div className="tech-grid absolute inset-0 opacity-[0.18]" />
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-accent/40 blur-3xl" />
          <div className="relative">
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <StatusBadge status={project.status} />
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-2xs font-mono font-semibold uppercase tracking-[0.16em] text-white/80">
                {lang === 'en' ? 'Featured' : 'One cikan'}
              </span>
            </div>
            <ProjectType project={project} />
            <h3 className="mt-3 font-display text-3xl font-semibold leading-tight text-white md:text-4xl">{c.title}</h3>
            <p className="mt-4 text-sm leading-7 text-white/74 md:text-base">{c.summary}</p>

            <div className="mt-7 grid grid-cols-3 gap-2">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-xl border border-white/10 bg-white/10 p-3 text-center backdrop-blur">
                  <div className="font-display text-2xl font-semibold leading-none text-white">{m.value}</div>
                  <div className="mt-1 text-[0.62rem] font-mono uppercase tracking-[0.14em] text-white/55">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-7 space-y-3">
              {process.map((step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/10 font-mono text-[0.65rem] text-white/80">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-2xs uppercase tracking-[0.18em] text-white/64">{step}</span>
                  <span className="h-px flex-1 bg-white/12" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative p-6 md:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            {c.problem && (
              <div className="rounded-2xl border border-border bg-surface-2/80 p-4">
                <p className="mb-2 font-mono text-2xs uppercase tracking-[0.16em] text-coffee">{t.projects.problem}</p>
                <p className="text-sm leading-7 text-text-secondary">{c.problem}</p>
              </div>
            )}
            {c.contribution && (
              <div className="rounded-2xl border border-border bg-surface-2/80 p-4">
                <p className="mb-2 font-mono text-2xs uppercase tracking-[0.16em] text-coffee">{t.projects.contribution}</p>
                <p className="text-sm leading-7 text-text-secondary">{c.contribution}</p>
              </div>
            )}
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-[0.88fr_1.12fr]">
            {c.impact && (
              <div className="rounded-2xl border border-coffee/20 bg-coffee-soft/65 p-4">
                <p className="mb-2 font-mono text-2xs uppercase tracking-[0.16em] text-coffee">{t.projects.impact}</p>
                <p className="text-sm leading-7 text-text-secondary">{c.impact}</p>
              </div>
            )}
            {c.highlights && c.highlights.length > 0 && (
              <div className="rounded-2xl border border-border bg-surface p-4">
                <p className="mb-3 font-mono text-2xs uppercase tracking-[0.16em] text-text-muted">
                  {lang === 'en' ? 'Solution / technical approach' : 'Cozum / teknik yaklasim'}
                </p>
                <ul className="grid gap-2">
                  {c.highlights.slice(0, 5).map((h) => (
                    <li key={h} className="flex gap-2 text-sm leading-6 text-text-secondary">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="mt-5 flex flex-col gap-4 border-t border-border pt-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 font-mono text-2xs uppercase tracking-[0.16em] text-text-muted">
                {lang === 'en' ? 'Tech stack' : 'Teknoloji stack'}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span key={tech} className="chip">{tech}</span>
                ))}
              </div>
            </div>
            <ProjectLinks project={project} />
          </div>
        </div>
      </div>
    </article>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const { lang } = useLang();
  const t = translations[lang];
  const c = project[lang];

  return (
    <article className="relative flex min-h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/80 p-5 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-card-md">
      <div className="absolute inset-x-5 top-0 h-px bg-[linear-gradient(90deg,transparent,#2D607D,#A06448,transparent)]" />
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <StatusBadge status={project.status} />
          <div className="mt-3">
            <ProjectType project={project} />
          </div>
        </div>
        <span className="rounded-full bg-accent-light px-2.5 py-1 text-2xs font-mono uppercase text-accent-dark">{project.techStack[0]}</span>
      </div>

      <h3 className="mb-3 text-xl font-semibold leading-snug text-text-primary">{c.title}</h3>
      <p className="mb-4 flex-1 text-sm leading-7 text-text-muted">{c.summary}</p>

      {c.impact && (
        <div className="mb-5 rounded-xl border border-border bg-surface-2/80 px-3 py-2 text-sm leading-6 text-text-secondary">
          <span className="mb-1 block font-mono text-[0.62rem] uppercase tracking-[0.14em] text-coffee">{t.projects.impact}</span>
          {c.impact}
        </div>
      )}

      <div className="mt-auto border-t border-border pt-4">
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 5).map((tech) => (
            <span key={tech} className="chip">{tech}</span>
          ))}
        </div>
        <div className="flex items-center justify-between gap-3">
          <span className="text-2xs font-mono uppercase text-text-faint">{t.projects.highlights}</span>
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}
