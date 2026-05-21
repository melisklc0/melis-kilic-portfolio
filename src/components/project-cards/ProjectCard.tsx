import { useLang } from '../../hooks/useLang';
import { translations } from '../../data/translations';
import type { Project } from '../../data/projects';
import { ProjectLinks, ProjectType, StatusBadge } from './ProjectShared';

type ProjectCardProps = {
  project: Project;
  className?: string;
  variant?: 'default' | 'wide';
};

export function ProjectCard({ project, className = '', variant = 'default' }: ProjectCardProps) {
  const { lang } = useLang();
  const t = translations[lang];
  const c = project[lang];
  const summary = c.supportingSummary ?? c.summary;
  const impact = c.supportingImpact ?? c.impact;
  const hasVisibleLinks = project.links.github || project.links.demo || project.links.article;

  if (variant === 'wide') {
    return (
      <article className={`relative overflow-hidden rounded-2xl border border-border bg-surface/80 p-5 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-card-md lg:grid lg:grid-cols-[0.7fr_0.9fr_1.6fr] lg:gap-6 ${className}`}>
        <div className="absolute inset-x-5 top-0 h-[2px] bg-[linear-gradient(90deg,transparent,#2D607D,#A06448,transparent)]" />

        <div className="lg:flex lg:flex-col">
          <div className="mb-4 flex items-start justify-between gap-3">
            <StatusBadge status={project.status} />
            <span className="rounded-full bg-accent-light px-2.5 py-1 text-2xs font-mono uppercase text-accent-dark">{project.techStack[0]}</span>
          </div>

          <div className="mb-2">
            <ProjectType project={project} />
          </div>
          <h3 className="text-xl font-semibold leading-snug text-text-primary">{c.title}</h3>
          {c.subtitle && <p className="mt-3 font-mono text-2xs uppercase leading-5 tracking-[0.14em] text-text-faint">{c.subtitle}</p>}
        </div>

        <p className="mt-4 text-sm leading-7 text-text-muted lg:mt-0">{summary}</p>

        <div className="mt-5 border-t border-border pt-4 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
          {impact && (
            <div className="rounded-xl border border-border bg-surface-2/80 px-3 py-2 text-sm leading-6 text-text-secondary">
              <span className="mb-1 block font-mono text-[0.62rem] uppercase tracking-[0.14em] text-coffee">{t.projects.impact}</span>
              <div className="space-y-2">
                {impact.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 5).map((tech) => (
              <span key={tech} className="chip">{tech}</span>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between gap-3">
            <span className="text-2xs font-mono uppercase text-text-faint">{t.projects.highlights}</span>
            <ProjectLinks project={project} />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className={`relative flex min-h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/80 p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-card-md ${className}`}>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <StatusBadge status={project.status} />
        <ProjectType project={project} />
      </div>

      <h3 className="mb-3 text-xl font-semibold leading-snug text-text-primary">{c.title}</h3>
      <p className="mb-5 flex-1 text-sm leading-7 text-text-muted">{summary}</p>

      {impact && (
        <div className="mb-5 border-l-2 border-accent pl-4 text-sm leading-6 text-text-secondary">
          <div className="space-y-2">
            {impact.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      )}

      <div className="mt-auto border-t border-border pt-4">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 5).map((tech) => (
            <span key={tech} className="chip">{tech}</span>
          ))}
        </div>
        {hasVisibleLinks && (
          <div className="mt-4 flex items-center justify-end gap-3">
            <ProjectLinks project={project} />
          </div>
        )}
      </div>
    </article>
  );
}
