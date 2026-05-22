import { useLang } from '../../hooks/useLang';
import { translations } from '../../data/translations';
import type { Project } from '../../data/projects';
import { ProjectLinks, ProjectType, RoleFocus, StatusBadge } from './ProjectShared';

function FeaturedMetric({ value, label }: { value: string; label: string }) {
  return (
    <div className="min-h-[5.4rem] rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur">
      <div className="font-display text-2xl font-semibold leading-none text-white">{value}</div>
      <div className="mt-2 font-mono text-[0.7rem] font-medium uppercase leading-4 tracking-[0.08em] text-[#E7B08A]">{label}</div>
    </div>
  );
}

function RecognitionBanner({ recognition }: { recognition: NonNullable<Project['en']['recognition']> }) {
  return (
    <div className="mt-5 flex items-center gap-3 rounded-xl border border-white/18 bg-white/10 p-3 shadow-sm backdrop-blur">
      <div className="flex h-12 w-24 shrink-0 items-center justify-center rounded-lg bg-white px-3 text-center font-display text-base font-bold leading-none tracking-normal text-[#0F3248]">
        {recognition.brand}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold leading-snug text-white">
          <span className="text-[#E7B08A]">{recognition.brand}:</span> {recognition.title}
        </p>
        <p className="mt-1 font-mono text-[0.68rem] font-medium uppercase leading-4 tracking-[0.08em] text-[#E7B08A]">
          {recognition.detail}
        </p>
      </div>
    </div>
  );
}

export function FeaturedProjectCard({ project }: { project: Project }) {
  const { lang } = useLang();
  const c = project[lang];
  const primaryContributions = c.contributions?.slice(0, 3) ?? [];
  const platformExtensions = c.contributions?.slice(3) ?? [];
  const metrics = c.metrics ?? [
    { value: String(project.techStack.length), label: lang === 'en' ? 'tools' : 'arac' },
    { value: String(c.highlights?.length ?? 0), label: lang === 'en' ? 'highlights' : 'odak' },
    { value: project.status === 'company' ? 'B2B' : project.status, label: lang === 'en' ? 'scope' : 'kapsam' },
  ];

  return (
    <article 
      id={project.id} 
      onClick={() => { window.history.replaceState(null, '', `#${project.id}`); }}
      className="group relative cursor-pointer overflow-hidden rounded-[1.35rem] border border-border bg-surface/95 shadow-card-md transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg"
    >
      <div className="absolute inset-y-0 left-0 hidden w-1 bg-[linear-gradient(to_bottom,#0F3248,#2D607D,#A06448)] md:block" />
      <div className="grid md:grid-cols-[0.82fr_1.18fr] xl:grid-cols-[0.75fr_1.25fr]">
        <div className="relative overflow-hidden bg-accent-dark p-6 text-white md:p-7 xl:p-8">
          <div className="tech-grid absolute inset-0 opacity-[0.16]" />
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative">
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <StatusBadge status={project.status} />
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 font-mono text-xs font-medium text-white/88">
                {c.badge ?? (lang === 'en' ? 'Featured' : 'One cikan')}
              </span>
            </div>

            <ProjectType project={project} tone="dark" />
            {c.subtitle && <p className="mt-3 font-mono text-xs font-medium uppercase leading-5 tracking-[0.09em] text-white/82">{c.subtitle}</p>}
            <h3 className="mt-3 font-display text-3xl font-semibold leading-tight text-white xl:text-4xl">{c.title}</h3>
            {c.recognition && <RecognitionBanner recognition={c.recognition} />}
            <p className="mt-5 text-sm leading-7 text-white/76 md:text-base">{c.summary}</p>

            <div className="mt-7 grid grid-cols-2 gap-2">
              {metrics.slice(0, 4).map((m) => (
                <FeaturedMetric key={`${m.value}-${m.label}`} value={m.value} label={m.label} />
              ))}
            </div>

            <div className="mt-7">
              <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.09em] text-[#D79A73]">Core stack</p>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.slice(0, 8).map((tech) => (
                  <span key={tech} className="rounded-full border border-white/18 bg-white/10 px-2.5 py-1 font-mono text-xs font-medium leading-5 text-white/82">
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
              {c.roleLine && <RoleFocus value={c.roleLine} />}
              {c.focusTitle && <p className="font-display text-lg font-semibold leading-snug text-text-primary xl:text-xl">{c.focusTitle}</p>}
              {c.focusSummary && <p className="mt-2 text-sm leading-6 text-text-secondary xl:leading-7">{c.focusSummary}</p>}
            </div>
          )}

          {primaryContributions.length > 0 ? (
            <>
              <div className="mt-5 grid auto-rows-fr gap-3 lg:grid-cols-3">
                {primaryContributions.map((item) => (
                  <div key={`${item.module}-${item.title}`} className="h-full rounded-xl border border-border bg-surface-2/80 p-4">
                    <h4 className="text-base font-semibold capitalize leading-snug text-text-primary">{item.module}</h4>
                    <p className="mt-2 text-sm font-semibold leading-snug text-coffee">{item.title}</p>
                    <p className="mt-2 text-[0.82rem] leading-6 text-text-secondary">{item.description}</p>
                  </div>
                ))}
              </div>

              {platformExtensions.length > 0 && (
                <div className="mt-4 border-t border-border pt-4">
                  <p className="mb-3 font-mono text-2xs uppercase tracking-[0.16em] text-coffee">
                    {lang === 'en' ? 'Platform extensions' : 'Platform genisletmeleri'}
                  </p>
                  <div className="grid gap-3 md:grid-cols-2">
                    {platformExtensions.map((item) => (
                      <div key={`${item.module}-${item.title}`} className="border-l border-coffee/25 pl-3">
                        <h4 className="text-sm font-semibold leading-snug text-text-primary">{item.title}</h4>
                        <p className="mt-1 text-[0.8rem] leading-5 text-text-muted">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="mt-5 grid gap-5 lg:grid-cols-[0.88fr_1.12fr]">
              {c.impact && (
                <div className="rounded-2xl border border-coffee/20 bg-coffee-soft/65 p-4">
                  <p className="mb-2 font-mono text-2xs uppercase tracking-[0.16em] text-coffee">{translations[lang].projects.impact}</p>
                  <div className="space-y-2 text-sm leading-7 text-text-secondary">
                    {c.impact.split('\n\n').map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
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
