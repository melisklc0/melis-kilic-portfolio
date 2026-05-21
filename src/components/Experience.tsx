import { useLang } from '../hooks/useLang';
import { translations } from '../data/translations';
import { experience } from '../data/experience';
import type { Lang } from '../data/translations';

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
    <section id="experience" className="relative overflow-hidden border-t border-border bg-page py-20 md:py-24 scroll-mt-24">
      <div className="container-main">
        <div className="mb-12">
          <h2 className="section-title">{t.experience.heading}</h2>
        </div>

        <div className="relative space-y-8 before:absolute before:left-[1.35rem] before:top-3 before:hidden before:h-[calc(100%-1.5rem)] before:w-px before:bg-border md:before:block">
          {experience.map((entry) => (
            <article key={entry.id} className="relative grid gap-5 md:grid-cols-[3rem_190px_1fr] lg:grid-cols-[3rem_210px_1fr]">
              <TimelineMarker label={entry.company[0]} />
              <div className="space-y-2 md:pt-1">
                <span className="inline-flex rounded-full border border-border bg-surface/80 px-3 py-1 text-2xs font-mono text-text-muted shadow-card">
                  {entry.period}
                </span>
                <p className="text-sm font-semibold leading-5 text-accent md:max-w-[11rem] lg:max-w-none">{entry.company}</p>
              </div>

              <div className="rounded-2xl border border-border bg-surface/72 p-5 shadow-card backdrop-blur transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-card-md">
                <div className="mb-3">
                  <h3 className="text-xl font-semibold text-text-primary">{entry.role[l]}</h3>
                </div>

                <p className="mb-4 text-sm leading-6 text-text-secondary">{entry.description[l]}</p>

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
    </section>
  );
}
