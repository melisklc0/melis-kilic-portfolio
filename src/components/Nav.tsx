import { useEffect, useState } from 'react';
import { LanguageToggle } from './LanguageToggle';
import { useLang } from '../hooks/useLang';
import { translations } from '../data/translations';
import { profile } from '../data/profile';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang } = useLang();
  const t = translations[lang];
  const logoUrl = `${import.meta.env.BASE_URL}favicon.svg?v=6`;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = [
    { href: '#about',      label: t.nav.about },
    { href: '#skills',     label: t.nav.skills },
    { href: '#projects',   label: t.nav.projects },
    { href: '#experience', label: t.nav.experience },
    { href: '#certificates', label: lang === 'en' ? 'Certificates' : 'Sertifikalar' },
    { href: '#contact',    label: t.nav.contact },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      scrolled ? 'bg-surface/78 backdrop-blur-xl border-b border-border shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container-main h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <img src={logoUrl} alt="Melis Kılıç logo" className="h-8 w-8 rounded-lg shadow-sm" />
          <span className="font-display text-base font-semibold text-text-primary group-hover:text-accent transition-colors">{profile.name}</span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="px-3 py-1.5 text-xs font-medium text-text-muted hover:text-accent hover:bg-surface/80 rounded-full transition-all">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <button className="lg:hidden p-1.5 text-text-muted hover:text-text-primary" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden bg-surface border-b border-border px-5 py-3 flex flex-col gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="px-3 py-2 text-sm text-text-secondary hover:text-text-primary rounded-md"
              onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
