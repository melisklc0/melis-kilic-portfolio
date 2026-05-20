import { useLang } from '../hooks/useLang';
import { translations } from '../data/translations';
import type { Project } from '../data/projects';

function StatusBadge({ status }: { status: Project['status'] }) {
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

function ProjectLinks({ project }: { project: Project }) {
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
          {lang === 'en' ? project.links.private_note : 'QKare’de geliştirildi; kaynak kod private.'}
        </span>
      )}
    </div>
  );
}

function ProjectType({ project }: { project: Project }) {
  const { lang } = useLang();
  const text = [
    project.status === 'academic' ? (lang === 'en' ? 'Applied ML research' : 'Uygulamali ML arastirma') : null,
    project.techStack.some((tech) => tech.toLowerCase().includes('langchain') || tech.toLowerCase().includes('openai')) ? 'LLM system' : null,
    project.techStack.some((tech) => tech.toLowerCase().includes('dbt') || tech.toLowerCase().includes('superset')) ? 'Data platform' : null,
    project.techStack.some((tech) => tech.toLowerCase().includes('fastapi')) ? 'Backend platform' : null,
  ].filter(Boolean)[0] ?? (lang === 'en' ? 'Engineering project' : 'Muhendislik projesi');

  return <span className="font-mono text-2xs uppercase tracking-[0.18em] text-coffee">{text}</span>;
}

function FeaturedMetric({ value, label }: { value: string; label: string }) {
  return (
    <div className="min-h-[5.4rem] rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur">
      <div className="font-display text-2xl font-semibold leading-none text-white">{value}</div>
      <div className="mt-2 text-[0.62rem] font-mono uppercase leading-4 tracking-[0.14em] text-white/60">{label}</div>
    </div>
  );
}

export function FeaturedProjectCard({ project }: { project: Project }) {
  const { lang } = useLang();
  const c = project[lang];
  const metrics = c.metrics ?? [
    { value: String(project.techStack.length), label: lang === 'en' ? 'tools' : 'arac' },
    { value: String(c.highlights?.length ?? 0), label: lang === 'en' ? 'highlights' : 'odak' },
    { value: project.status === 'company' ? 'B2B' : project.status, label: lang === 'en' ? 'scope' : 'kapsam' },
  ];

  return (
    <article className="group relative overflow-hidden rounded-[1.35rem] border border-border bg-surface/95 shadow-card-md transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg">
      <div className="absolute inset-y-0 left-0 hidden w-1 bg-[linear-gradient(to_bottom,#0F3248,#2D607D,#A06448)] md:block" />
      <div className="grid md:grid-cols-[0.82fr_1.18fr] xl:grid-cols-[0.75fr_1.25fr]">
        <div className="relative overflow-hidden bg-accent-dark p-6 text-white md:p-7 xl:p-8">
          <div className="tech-grid absolute inset-0 opacity-[0.16]" />
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative">
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <StatusBadge status={project.status} />
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-2xs font-mono font-semibold uppercase tracking-[0.16em] text-white/80">
                {c.badge ?? (lang === 'en' ? 'Featured' : 'One cikan')}
              </span>
            </div>

            <ProjectType project={project} />
            {c.subtitle && <p className="mt-3 font-mono text-2xs uppercase leading-5 tracking-[0.16em] text-white/58">{c.subtitle}</p>}
            <h3 className="mt-3 font-display text-3xl font-semibold leading-tight text-white xl:text-4xl">{c.title}</h3>
            <p className="mt-5 text-sm leading-7 text-white/76 md:text-base">{c.summary}</p>

            <div className="mt-7 grid grid-cols-2 gap-2">
              {metrics.slice(0, 4).map((m) => (
                <FeaturedMetric key={`${m.value}-${m.label}`} value={m.value} label={m.label} />
              ))}
            </div>

            <div className="mt-7">
              <p className="mb-3 font-mono text-2xs uppercase tracking-[0.16em] text-white/50">
                {lang === 'en' ? 'Core stack' : 'Core stack'}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.slice(0, 8).map((tech) => (
                  <span key={tech} className="rounded-full border border-white/12 bg-white/10 px-2.5 py-1 text-2xs font-mono text-white/70">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative p-6 md:p-7 xl:p-8">
          {(c.focusTitle || c.focusSummary) && (
            <div className="rounded-2xl border border-coffee/20 bg-coffee-soft/65 p-4 xl:p-5">
              {c.focusTitle && <p className="font-display text-lg font-semibold leading-snug text-text-primary xl:text-xl">{c.focusTitle}</p>}
              {c.focusSummary && <p className="mt-2 text-sm leading-6 text-text-secondary xl:leading-7">{c.focusSummary}</p>}
            </div>
          )}

          {c.contributions && c.contributions.length > 0 ? (
            <div className="mt-5 grid auto-rows-fr gap-3 lg:grid-cols-2 xl:grid-cols-3">
              {c.contributions.map((item) => (
                <div
                  key={`${item.module}-${item.title}`}
                  className="h-full rounded-xl border border-border bg-surface-2/80 p-3.5"
                >
                  <p className="mb-2 font-mono text-2xs uppercase tracking-[0.16em] text-coffee">{item.module}</p>
                  <h4 className="text-sm font-semibold leading-snug text-text-primary">{item.title}</h4>
                  <p className="mt-2 text-[0.82rem] leading-6 text-text-secondary">{item.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-5 grid gap-5 lg:grid-cols-[0.88fr_1.12fr]">
              {c.impact && (
                <div className="rounded-2xl border border-coffee/20 bg-coffee-soft/65 p-4">
                  <p className="mb-2 font-mono text-2xs uppercase tracking-[0.16em] text-coffee">{translations[lang].projects.impact}</p>
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
          )}

          {(project.links.github || project.links.demo || project.links.article) && (
            <div className="mt-5 flex justify-end">
              <ProjectLinks project={project} />
            </div>
          )}
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
      {c.subtitle && <p className="mb-3 font-mono text-2xs uppercase leading-5 tracking-[0.14em] text-text-faint">{c.subtitle}</p>}
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
