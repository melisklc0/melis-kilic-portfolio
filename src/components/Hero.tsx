import { useLang } from '../hooks/useLang';
import { translations } from '../data/translations';
import { profile } from '../data/profile';
import heroArt from '../assets/hero.png';

export function Hero() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section className="paper-noise relative min-h-[88vh] overflow-hidden border-b border-border bg-transparent">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_64%_64%_at_12%_16%,rgba(220,236,242,0.64),transparent_56%),radial-gradient(ellipse_45%_48%_at_92%_12%,rgba(160,100,72,0.14),transparent_52%)]" />
      <div className="pointer-events-none absolute left-[6%] top-28 hidden h-72 w-72 rounded-full border border-accent/10 md:block" />
      <div className="pointer-events-none absolute right-[8%] top-24 hidden h-[28rem] w-[28rem] rounded-full border border-coffee/10 lg:block" />
      <div className="container-main">
        <div className="relative grid min-h-[calc(100vh-4rem)] items-center gap-12 pt-20 pb-16 md:pt-24 md:pb-20 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-14">
          <div className="fade-up lg:mt-16 xl:mt-20">
            <h1 className="mb-4 max-w-4xl font-display text-5xl font-semibold leading-[0.98] text-text-primary md:text-7xl lg:text-8xl">
              {profile.name}
            </h1>

            <p className="mb-5 text-sm font-mono font-semibold uppercase tracking-[0.2em] text-accent-dark">{t.hero.role}</p>
            <p className="mb-7 max-w-2xl text-base leading-8 text-text-secondary md:text-xl md:leading-9">
              {t.hero.tagline}
            </p>

            <div className="mb-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-primary">
                <span>{t.hero.cta_projects}</span>
                <span aria-hidden="true">-&gt;</span>
              </a>
              <a href="#contact" className="btn-ghost">
                {lang === 'en' ? 'Get in touch' : 'Iletisime gec'}
              </a>
              <a href={profile.cv_url} download="melis-kilic-cv.pdf" className="btn-link">
                {t.hero.cta_cv}
              </a>
            </div>
          </div>

          <div className="fade-up delay-200">
            <div className="relative mx-auto flex max-w-[300px] justify-center">
              <div className="tech-grid absolute -inset-6 rounded-full opacity-[0.10]" />
              <div className="absolute -left-5 top-12 hidden h-14 w-14 rounded-full border border-accent/10 md:block" />
              <div className="absolute -right-5 bottom-12 hidden h-16 w-16 rounded-full border border-coffee/12 md:block" />
              <div className="absolute -bottom-5 right-10 h-20 w-20 rounded-full bg-accent-light/42 blur-2xl" />

              <div className="relative rounded-full border border-border bg-surface/70 p-2.5 shadow-card-lg backdrop-blur">
                <span className="absolute left-10 top-1 h-px w-10 rotate-[-16deg] bg-coffee/45" />
                <span className="absolute bottom-2 right-10 h-px w-10 rotate-[-16deg] bg-accent/35" />
                <span className="absolute -right-4 top-1/2 hidden h-px w-8 bg-border md:block" />
                <span className="absolute -right-5 top-[calc(50%-0.25rem)] hidden h-2 w-2 rounded-full bg-accent shadow-[0_0_0_5px_rgba(45,96,125,0.12)] md:block" />
                <span className="absolute -left-3 top-16 hidden h-2 w-2 rounded-full bg-coffee shadow-[0_0_0_5px_rgba(160,100,72,0.12)] md:block" />

                <div className="relative h-[260px] w-[260px] overflow-hidden rounded-full border border-border bg-surface md:h-[286px] md:w-[286px]">
                  <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),transparent_38%,rgba(15,50,72,0.04)_100%)]" />
                  <img
                    src={heroArt}
                    alt={profile.name}
                    className="h-full w-full object-cover object-[50%_28%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
