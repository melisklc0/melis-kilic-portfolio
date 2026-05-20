import { useLang } from '../hooks/useLang';
import { translations } from '../data/translations';
import { profile } from '../data/profile';

export function Footer() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <footer className="border-t border-border bg-surface py-6">
      <div className="container-main flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-accent-dark flex items-center justify-center text-white text-2xs font-bold">M</div>
          <span className="text-xs font-medium text-text-secondary">{profile.name}</span>
        </div>
        <p className="text-2xs font-mono text-text-faint">{t.footer.built}</p>
        <div className="flex items-center gap-4">
          {[
            { href: profile.github, label: 'GitHub' },
            { href: profile.linkedin, label: 'LinkedIn' },
            { href: `mailto:${profile.email}`, label: 'Email' },
          ].map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
              className="text-2xs font-mono text-text-faint hover:text-accent transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
