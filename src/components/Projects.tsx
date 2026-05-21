import { useLang } from '../hooks/useLang';
import { translations } from '../data/translations';
import { projects } from '../data/projects';
import { FeaturedProjectCard, ProjectCard } from './project-cards';

export function Projects() {
  const { lang } = useLang();
  const t = translations[lang];

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative overflow-hidden border-t border-border bg-page py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[linear-gradient(to_bottom,rgba(15,50,72,0.06),transparent)]" />
      <div className="container-main">
        <div className="relative mb-12">
          <h2 className="section-title">{t.projects.heading}</h2>
        </div>

        <div className="relative mb-12 space-y-7">
          {featured.map((p) => <FeaturedProjectCard key={p.id} project={p} />)}
        </div>

        {rest.length > 0 && (
          <>
            <div className="mb-5 flex items-center gap-3">
              <span className="font-mono text-2xs uppercase tracking-[0.18em] text-text-faint">
                {lang === 'en' ? 'Supporting Systems' : 'Diger Sistemler'}
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((p, index) => (
                <ProjectCard
                  key={p.id}
                  project={p}
                  variant={rest.length === 4 && index === 0 ? 'wide' : 'default'}
                  className={rest.length === 4 && index === 0 ? 'sm:col-span-2 lg:col-span-3' : ''}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
