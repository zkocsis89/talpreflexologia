import { PageIntro } from '../components/PageIntro';
import { siteContent } from '../data/siteContent';
import { useLanguage } from '../context/LanguageContext';

export function ContactPage() {
  const { t } = useLanguage();
  const copy = t.contact;
  const phoneHref = `tel:${siteContent.phone.replace(/[^+\d]/g, '')}`;

  return (
    <main>
      <PageIntro eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
      <section className="mx-auto grid max-w-5xl gap-10 px-5 py-14 md:grid-cols-2 md:px-8 md:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-forest/70">{copy.detailsEyebrow}</p>
          <h2 className="mt-4 font-display text-3xl text-forest">{copy.detailsTitle}</h2>
          <p className="mt-4 leading-7 text-stone-600">{copy.detailsText}</p>
          <div className="mt-8 space-y-5">
            <div className="rounded-2xl border border-stone-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-stone-500">{copy.phone}</p>
              <a className="mt-2 inline-block text-lg font-semibold text-forest hover:underline" href={phoneHref}>{siteContent.phone}</a>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-stone-500">{copy.email}</p>
              <a className="mt-2 inline-block break-all text-lg font-semibold text-forest hover:underline" href={`mailto:${siteContent.email}`}>{siteContent.email}</a>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-stone-500">{copy.location}</p>
              <p className="mt-2 text-lg font-semibold text-forest">{siteContent.address}</p>
              <p className="mt-1 text-sm text-stone-500">{copy.addressNote}</p>
            </div>
          </div>
        </div>

        <div className="flex min-h-[360px] flex-col justify-between rounded-[2rem] bg-forest p-8 text-white md:p-10">
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl" aria-hidden="true">✳</span>
            <h2 className="mt-8 font-display text-3xl leading-snug">{copy.cardTitle}</h2>
            <p className="mt-4 leading-7 text-white/75">{copy.cardText}</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={phoneHref} className="rounded-full bg-cream px-5 py-3 text-sm font-semibold text-forest hover:bg-white">{copy.callButton}</a>
            <a href={`mailto:${siteContent.email}`} className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">{copy.emailButton}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
