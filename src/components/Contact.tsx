import { useLang } from '../hooks/useLang';
import { translations } from '../data/translations';
import { profile } from '../data/profile';

const GH = () => <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>;
const LI = () => <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
const Mail = () => <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>;
const MapPin = () => <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.99-5.54 10.19-7.4 11.78a.92.92 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>;

export function Contact() {
  const { lang } = useLang();
  const t = translations[lang];
  const tc = t.contact;

  const contactItems = [
    { icon: null, label: tc.email_label, value: profile.email, href: `mailto:${profile.email}`, iconComp: <Mail /> },
    { icon: null, label: 'GitHub', value: 'github.com/melisklc0', href: profile.github, iconComp: <GH /> },
    { icon: null, label: 'LinkedIn', value: 'linkedin.com/in/melisklc0', href: profile.linkedin, iconComp: <LI /> },
    { icon: null, label: tc.location_label, value: profile.location, href: null, iconComp: <MapPin /> },
  ];

  return (
    <section id="contact" className="relative overflow-hidden border-t border-border bg-surface py-20 md:py-24">
      <div className="tech-grid absolute inset-y-0 left-0 hidden w-1/2 opacity-30 lg:block" />
      <div className="container-main">
        <div className="relative overflow-hidden rounded-[1.6rem] border border-border bg-page/90 shadow-card-lg">
          <div className="grid gap-0 lg:grid-cols-[1fr_430px]">
            <div className="p-6 md:p-10">
              <h2 className="section-title mb-4">{lang === 'en' ? 'Get in touch' : 'Iletisime gec'}</h2>
              <p className="mb-7 max-w-md text-base leading-8 text-text-secondary">{tc.body}</p>

              <a href={`mailto:${profile.email}`} className="btn-primary">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                {lang === 'en' ? 'Send Email' : 'E-posta gonder'}
              </a>
            </div>

            <div className="bg-accent-dark p-4 md:p-6">
              <div className="space-y-2 rounded-2xl border border-white/10 bg-white/[0.08] p-2">
                {contactItems.map((item) => (
                  item.href
                    ? <a key={item.label} href={item.href} target={item.href.startsWith('mailto') || item.href.startsWith('tel') ? undefined : '_blank'} rel="noopener noreferrer"
                        className="group flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-white/10">
                        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10 text-xs font-semibold text-white">
                          {item.iconComp ?? item.icon}
                        </div>
                        <div className="min-w-0">
                          <p className="text-2xs text-white/45">{item.label}</p>
                          <p className="truncate text-sm font-medium text-white transition-colors group-hover:text-accent-light">{item.value}</p>
                        </div>
                      </a>
                    : <div key={item.label} className="group flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-white/10">
                        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10 text-xs font-semibold text-white transition-colors group-hover:text-accent-light">
                          {item.iconComp ?? item.icon}
                        </div>
                        <div>
                          <p className="text-2xs text-white/45">{item.label}</p>
                          <p className="text-sm font-medium text-white/85 transition-colors group-hover:text-white">{item.value}</p>
                        </div>
                      </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
