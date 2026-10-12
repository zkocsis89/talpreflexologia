import { Link } from 'react-router-dom';
import { siteContent } from '../data/siteContent';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-forest text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-9 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-display text-xl">{siteContent.shortName}</p>
          <p className="mt-1 text-sm text-white/70">{t.tagline}</p>
        </div>
        <nav className="flex flex-wrap gap-5 text-sm text-white/80" aria-label={t.footer.navLabel}>
          <Link className="hover:text-white" to="/">{t.nav.home}</Link>
          <Link className="hover:text-white" to="/arak">{t.nav.prices}</Link>
          <Link className="hover:text-white" to="/kapcsolat">{t.nav.contact}</Link>
        </nav>
        <p className="text-xs text-white/60">© {new Date().getFullYear()} {siteContent.shortName}</p>
      </div>
    </footer>
  );
}
