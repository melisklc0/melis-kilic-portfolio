import { useLang } from '../hooks/useLang';
import { translations } from '../data/translations';
import { education } from '../data/experience';
import type { Lang } from '../data/translations';

function TimelineMarker({ label }: { label: string }) {
  return (
    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent-light font-mono text-sm font-semibold text-accent-dark shadow-sm">
      {label}
    </div>
  );
}

export function Education() {
  const { lang } = useLang();
  const t = translations[lang];
  const l = lang as Lang;

  return (
    <section id="education" className="relative overflow-hidden border-t border-border bg-page py-20 md:py-24 scroll-mt-24">
      <div className="container-main">
        <div className="mb-12">
          <h2 className="section-title">{t.education.heading}</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {education.map((entry) => (
            <article key={entry.id} className="rounded-2xl border border-border bg-surface/72 p-5 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-card-md">
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
      </div>
    </section>
  );
}
