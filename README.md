# Baglamukhi Mataji Packages

Responsive React and TypeScript package-booking website for Maa Baglamukhi Mandir, Nalkheda. The UI follows the supplied temple reference with its maroon, red and yellow palette, utility contact bar, navigation, announcement ticker, devotional packages, callout, footer and floating WhatsApp action.

## Development

Use Node.js 22.12+ (or 20.19+) and npm:

```sh
npm ci
npm run dev
```

`npm run build` runs TypeScript checks and creates `dist/`. `npm run lint` runs ESLint. The existing Docker and nginx configuration serves the production build.

## Main files

- `src/App.tsx`: page content, mobile navigation and Om audio controls.
- `src/index.css`: complete responsive visual system.
- `src/assets/images/`: local temple logo and favicon.
- `src/assets/audio/`: locally bundled CC0 Om chant and its source details.

The Om chant starts only after a visitor presses the navbar control. WhatsApp links open a prefilled booking enquiry and never send it automatically.
