import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { siteContent } from '../data/siteContent';
import { useLanguage } from '../context/LanguageContext';
import type { Language } from '../data/translations';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm transition-colors hover:text-forest ${isActive ? 'font-semibold text-forest' : 'text-stone-600'}`;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const closeMenu = () => setMenuOpen(false);

  const languageSelector = (
    <div className="flex items-center gap-2 text-sm" aria-label={t.languageLabel}>
      <span className="text-stone-500">{t.languageLabel}:</span>
      {(['hu', 'de'] as Language[]).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLanguage(option)}
          aria-pressed={language === option}
          className={`rounded-full px-3 py-1.5 font-semibold transition ${language === option ? 'bg-forest text-white' : 'text-stone-600 hover:bg-sage/60'}`}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );

  return (
    <header className="sticky top-0 z-20 border-b border-stone-200/70 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3" aria-label={t.nav.home}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage text-lg text-forest" aria-hidden="true">✳</span>
          <span>
            <span className="block font-display text-lg leading-tight text-forest">{siteContent.shortName}</span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-stone-500">{language === 'hu' ? 'figyelem · nyugalom · harmónia' : 'Aufmerksamkeit · Ruhe · Harmonie'}</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          <nav className="flex items-center gap-6" aria-label={t.nav.home}>
            <NavLink to="/" end className={navLinkClass}>{t.nav.home}</NavLink>
            <NavLink to="/arak" className={navLinkClass}>{t.nav.prices}</NavLink>
            <NavLink to="/kapcsolat" className={navLinkClass}>{t.nav.contact}</NavLink>
          </nav>
          {languageSelector}
        </div>

        <button
          type="button"
          className="rounded-lg border border-stone-300 px-3 py-2 text-sm text-forest md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? t.nav.closeLabel : t.nav.open}
        >
          {menuOpen ? t.nav.close : t.nav.menu}
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-5 border-t border-stone-200 px-5 py-5 md:hidden">
          <nav className="flex flex-col gap-4" aria-label={t.nav.home}>
            <NavLink to="/" end onClick={closeMenu} className={navLinkClass}>{t.nav.home}</NavLink>
            <NavLink to="/arak" onClick={closeMenu} className={navLinkClass}>{t.nav.prices}</NavLink>
            <NavLink to="/kapcsolat" onClick={closeMenu} className={navLinkClass}>{t.nav.contact}</NavLink>
          </nav>
          {languageSelector}
        </div>
      )}
    </header>
  );
}
