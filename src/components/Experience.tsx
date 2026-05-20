import { useLang } from '../hooks/useLang';
import { translations } from '../data/translations';
import { experience, education } from '../data/experience';
import type { Lang } from '../data/translations';
import { profile } from '../data/profile';

function TimelineMarker({ label }: { label: string }) {
  return (
    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent-light font-mono text-sm font-semibold text-accent-dark shadow-sm">
      {label}
    </div>
  );
}

export function Experience() {
  const { lang } = useLang();
  const t = translations[lang];
  const l = lang as Lang;

  return (
    <section id="experience" className="relative overflow-hidden border-t border-border bg-page py-20 md:py-24">
      <div className="container-main">
        <div className="mb-12">
          <p className="section-eyebrow">{t.experience.label}</p>
          <h2 className="section-title">{t.experience.heading}</h2>
        </div>

        <div className="relative space-y-8 before:absolute before:left-[1.35rem] before:top-3 before:hidden before:h-[calc(100%-1.5rem)] before:w-px before:bg-border md:before:block">
          {experience.map((entry) => (
            <article key={entry.id} className="relative grid gap-5 md:grid-cols-[3rem_180px_1fr]">
              <TimelineMarker label={entry.company[0]} />
              <div>
                <span className="inline-flex rounded-full border border-border bg-surface/80 px-3 py-1 text-2xs font-mono text-text-muted shadow-card">
                  {entry.period}
                </span>
              </div>

              <div className="rounded-2xl border border-border bg-surface/72 p-5 shadow-card backdrop-blur md:p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-text-primary">{entry.role[l]}</h3>
                  <p className="text-sm font-medium text-accent">{entry.company}</p>
                </div>

                <p className="mb-4 text-sm leading-7 text-text-secondary">{entry.description[l]}</p>

                {entry.responsibilities[l].length > 0 && (
                  <ul className="mb-5 grid gap-2 md:grid-cols-2">
                    {entry.responsibilities[l].map((r) => (
                      <li key={r} className="flex gap-2 text-sm leading-6 text-text-secondary">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-coffee" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-1.5 border-t border-border pt-4">
                  {entry.techStack.map((tech) => (
                    <span key={tech} className="chip">{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div id="education" className="container-main mt-20 md:mt-24">
        <div className="mb-12">
          <p className="section-eyebrow">{t.education.label}</p>
          <h2 className="section-title">{t.education.heading}</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {education.map((entry) => (
            <article key={entry.id} className="rounded-2xl border border-border bg-surface/72 p-5 shadow-card">
              <div className="mb-5 flex items-start justify-between gap-4">
                <TimelineMarker label={entry.company.slice(0, 2).toUpperCase()} />
                <span className="rounded-full border border-border bg-surface-2 px-3 py-1 text-2xs font-mono text-text-muted">
                  {entry.period}
                </span>
              </div>
              <h3 className="text-lg font-semibold leading-snug text-text-primary">{entry.role[l]}</h3>
              <p className="mt-1 text-sm text-accent">{entry.company}</p>
              <p className="my-5 text-sm leading-7 text-text-secondary">{entry.description[l]}</p>

              <div className="flex flex-wrap gap-1.5 border-t border-border pt-4">
                {entry.techStack.map((tech) => (
                  <span key={tech} className="chip">{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-accent-dark p-6 text-white shadow-card-lg">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-2 font-mono text-2xs uppercase tracking-[0.18em] text-white/55">{t.cv.label}</p>
              <h3 className="text-lg font-semibold text-white">{t.cv.heading}</h3>
              <p className="mt-1 text-sm text-white/68">{t.cv.body}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <a href={profile.cv_url} download="melis-kilic-cv.pdf" className="btn bg-white text-accent-dark text-xs py-2 px-4 hover:bg-accent-light">{t.cv.download}</a>
              <a href={profile.cv_url} target="_blank" rel="noopener noreferrer" className="btn border border-white/20 text-white text-xs py-2 px-4 hover:bg-white/10">{t.cv.view}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
