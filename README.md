# Talpreflexológia weboldal – React + TypeScript + Tailwind CSS

Egyszerű, statikus, háromoldalas, magyar és német nyelvű bemutatkozó weboldal.

- Bemutatkozás (`/`)
- Árak (`/arak`)
- Kapcsolat (`/kapcsolat`)
- Nyelvválasztó a fejlécben: magyar (HU) és német (DE)

## Indítás

Szükséges: telepített Node.js (LTS verzió ajánlott).

```bash
npm install
npm run dev
```

A terminál kiírja a helyi címet, általában `http://localhost:5173`.

Éles build készítése:

```bash
npm run build
```

A kész, feltölthető weboldal a `dist` mappába kerül.

## Hol mit tudsz módosítani?

- `src/data/siteContent.ts` – név, telefonszám, e-mail, cím, árak és galériafotók.
- `src/data/translations.ts` – a magyar és német szövegek egy helyen.
- `src/context/LanguageContext.tsx` – nyelvválasztás és a választás megjegyzése a böngészőben.
- `src/pages/HomePage.tsx` – a bemutatkozó oldal szerkezete.
- `src/pages/PricesPage.tsx` – az árak oldalának szerkezete.
- `src/pages/ContactPage.tsx` – a kapcsolat oldalának szerkezete.
- `src/components/Header.tsx` – felső menü és nyelvválasztó.
- `src/components/Footer.tsx` – lábléc.
- `tailwind.config.js` – saját színek és betűtípusok.
- `src/index.css` – minimális globális CSS.

A nyelvválasztás az egész oldalon érvényesül, és a böngésző megjegyzi a választott nyelvet. A weboldal útvonalai változatlanok maradnak.

## Fontos indulás előtt

A `siteContent.ts` fájlban lévő elérhetőségek és az árak példák, ezeket éles használat előtt cseréld le. A képek külső Unsplash URL-ekről töltődnek be; a `galleryImages` tömbben cserélhetők saját fotókra.

A német nyelvű oldalon az árak jelenleg ugyanazok a mintaárak, mint a magyar oldalon. Ha a német látogatóknak más pénznemet vagy árakat szeretnél megjeleníteni, ezt külön érdemes beállítani.

A szövegek általános mintaszövegek. A talpreflexológia egészségügyi hatásaira vonatkozó állításokat a véglegesítés előtt ellenőrizd, és ne ígérj garantált gyógyhatást.
