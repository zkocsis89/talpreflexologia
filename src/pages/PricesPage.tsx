import { Link } from 'react-router-dom';
import { PageIntro } from '../components/PageIntro';
import { treatments } from '../data/siteContent';
import { useLanguage } from '../context/LanguageContext';

export function PricesPage() {
  const { t } = useLanguage();
  const copy = t.prices;

  return (
    <main>
      <PageIntro eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
      <section className="mx-auto max-w-4xl px-5 py-14 md:px-8 md:py-20">
        <div className="space-y-4">
          {treatments.map((treatment, index) => {
            const translatedTreatment = copy.treatments[index];
            return (
              <article key={treatment.name} className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 className="font-display text-2xl text-forest">{translatedTreatment?.name ?? treatment.name}</h2>
                    <p className="mt-2 text-sm text-stone-500">{translatedTreatment?.duration ?? treatment.duration}</p>
                  </div>
                  <p className="whitespace-nowrap text-xl font-semibold text-forest">{treatment.price}</p>
                </div>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600">{translatedTreatment?.description ?? treatment.description}</p>
              </article>
            );
          })}
        </div>
        <div className="mt-8 rounded-2xl bg-sage/60 p-6 md:p-8">
          <h2 className="font-display text-2xl text-forest">{copy.goodToKnow}</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-6 text-stone-600">
            {copy.notes.map((note) => <li key={note}>{note}</li>)}
          </ul>
        </div>
        <div className="mt-10 text-center">
          <p className="text-stone-600">{copy.question}</p>
          <Link to="/kapcsolat" className="mt-4 inline-flex rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white hover:bg-forest/90">{copy.contactButton}</Link>
        </div>
      </section>
    </main>
  );
}
