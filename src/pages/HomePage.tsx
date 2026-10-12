import { Link } from 'react-router-dom';
import { galleryImages, siteContent } from '../data/siteContent';
import { useLanguage } from '../context/LanguageContext';

export function HomePage() {
  const { t } = useLanguage();
  const copy = t.home;

  return (
    <main>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:gap-16 md:px-8 md:py-20">
        <div className="order-2 md:order-1">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-forest/70">{copy.eyebrow}</p>
          <h1 className="mt-5 font-display text-4xl leading-tight text-forest sm:text-5xl md:text-6xl">
            {copy.titleFirst}<br />{copy.titleSecond} <span className="italic">{copy.titleEmphasis}</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-8 text-stone-600">{copy.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/kapcsolat" className="rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white transition hover:bg-forest/90">{copy.contactButton}</Link>
            <Link to="/arak" className="rounded-full border border-forest/25 px-6 py-3 text-sm font-semibold text-forest transition hover:bg-sage/60">{copy.pricesButton}</Link>
          </div>
          <p className="mt-6 text-sm text-stone-500">{t.tagline || siteContent.tagline}</p>
        </div>
        <div className="order-1 md:order-2">
          <img className="h-[360px] w-full rounded-[45%_45%_1.5rem_1.5rem] object-cover shadow-sm md:h-[520px]" src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=90" alt={copy.heroImageAlt} />
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-forest/70">{copy.aboutEyebrow}</p>
            <h2 className="mt-4 font-display text-3xl leading-snug text-forest md:text-4xl">{copy.aboutTitle}</h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-stone-600">
            <p>{copy.aboutP1}</p>
            <p>{copy.aboutP2}</p>
            <p className="text-sm text-stone-500">{copy.disclaimer}</p>
            <Link to="/kapcsolat" className="inline-flex items-center gap-2 font-semibold text-forest hover:underline">{copy.aboutLink} <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-forest/70">{copy.galleryEyebrow}</p>
            <h2 className="mt-3 font-display text-3xl text-forest md:text-4xl">{copy.galleryTitle}</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-stone-600">{copy.galleryDescription}</p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {galleryImages.map((image, index) => (
            <figure key={image.src} className="overflow-hidden rounded-2xl bg-sand">
              <img className="h-64 w-full object-cover transition duration-500 hover:scale-105" src={image.src} alt={t.imageAlt[index] ?? image.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-sage/60 px-5 py-16 text-center md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-forest/70">{copy.closingEyebrow}</p>
        <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl leading-snug text-forest md:text-4xl">{copy.closingTitle}</h2>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-stone-600">{copy.closingText}</p>
        <Link to="/kapcsolat" className="mt-7 inline-flex rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white transition hover:bg-forest/90">{copy.contact}</Link>
      </section>
    </main>
  );
}
