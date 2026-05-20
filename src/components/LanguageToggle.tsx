import { useLang } from '../hooks/useLang';

export function LanguageToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center bg-surface-2 border border-border rounded-md overflow-hidden">
      {(['en','tr'] as const).map((l) => (
        <button key={l} onClick={() => setLang(l)}
          className={`px-2.5 py-1 text-2xs font-mono font-medium transition-all ${
            lang === l ? 'bg-accent text-white' : 'text-text-muted hover:text-text-primary'
          }`}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
