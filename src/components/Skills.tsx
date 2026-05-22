import { useLang } from '../hooks/useLang';
import { translations } from '../data/translations';
import { skillGroups, skillGroupTitles } from '../data/skills';
import type { Lang } from '../data/translations';

export function Skills() {
  const { lang } = useLang();
  const t = translations[lang];
  const chipClass = (featured?: boolean) => (featured ? 'chip chip-featured' : 'chip');

  return (
    <section id="skills" className="relative overflow-hidden border-t border-border bg-surface py-20 md:py-24">
      <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-[linear-gradient(90deg,transparent,rgba(220,236,242,0.5))] lg:block" />
      <div className="container-main">
        <div className="relative mb-10">
          <h2 className="section-title">{t.skills.heading}</h2>
        </div>

        <div className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <div key={group.id} className="rounded-2xl border border-border bg-surface/88 p-5 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-md">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold leading-snug text-text-primary">{skillGroupTitles[group.id][lang as Lang]}</h3>
                </div>
                <span className="font-mono text-2xs text-text-faint">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span key={item.name} className={chipClass(item.featured)}>{item.name}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
