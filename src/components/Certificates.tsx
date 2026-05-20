import { certificates } from '../data/certificates';
import { useLang } from '../hooks/useLang';
import type { Lang } from '../data/translations';

export function Certificates() {
  const { lang } = useLang();
  const l = lang as Lang;

  return (
    <section id="certificates" className="border-t border-border bg-surface py-20 md:py-24">
      <div className="container-main">
        <div className="mb-10">
          <h2 className="section-title">{lang === 'en' ? 'Certificates' : 'Sertifikalar'}</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {certificates.map((certificate) => (
            <article key={certificate.id} className="grid grid-cols-[3.5rem_1fr_auto] items-start gap-4 border-t border-border py-5">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-accent-light font-mono font-semibold text-accent-dark">
                  {certificate.issuer[0]}
                </div>
              <div>
                <h3 className="text-lg font-semibold leading-snug text-text-primary">{certificate.title[l]}</h3>
                <p className="mt-2 text-sm text-accent">{certificate.issuer}</p>
              </div>
              <span className="rounded-full border border-border bg-surface-2 px-3 py-1 text-2xs font-mono text-text-muted">
                {certificate.date}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
