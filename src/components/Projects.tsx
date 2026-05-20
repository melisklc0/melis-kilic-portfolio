import { useLang } from '../hooks/useLang';
import { translations } from '../data/translations';
import { projects } from '../data/projects';
import { FeaturedProjectCard, ProjectCard } from './ProjectCard';

export function Projects() {
  const { lang } = useLang();
  const t = translations[lang];

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative overflow-hidden border-t border-border bg-page py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[linear-gradient(to_bottom,rgba(15,50,72,0.06),transparent)]" />
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="relative mb-12 grid gap-6 md:grid-cols-[0.72fr_1fr] md:items-end">
          <div>
            <p className="section-eyebrow">{t.projects.label}</p>
            <h2 className="section-title">{t.projects.heading}</h2>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <p className="max-w-xl text-sm leading-7 text-text-secondary md:text-right">
              {lang === 'en'
                ? 'Production systems with architecture, scale, technical focus, and real delivery context.'
                : 'Production sistemler: mimari, ölçek, teknik odak ve gerçek ürün bağlamıyla.'}
            </p>
            <span className="metric-chip">
              {projects.length} {lang === 'en' ? 'projects' : 'proje'} / {featured.length} {lang === 'en' ? 'featured' : 'one cikan'}
            </span>
          </div>
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
              {rest.map((p) => <ProjectCard key={p.id} project={p} />)}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
