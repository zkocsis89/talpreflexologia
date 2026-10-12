type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="bg-sage/50 px-5 py-16 text-center md:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-forest/70">{eyebrow}</p>
      <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-tight text-forest md:text-5xl">{title}</h1>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-stone-600">{description}</p>
    </section>
  );
}
