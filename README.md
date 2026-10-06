# Baglamukhi Mataji Mandir

Responsive React and TypeScript website based on the Methodical Operators Framer design. The previous multi-page design has been replaced by a single page with offerings, devotional packages, visitor guidance, and an English/Hindi switch.

## Development

Use Node.js 22.12+ (or 20.19+) and npm:

```sh
npm ci
npm run dev
```

`npm run build` runs TypeScript checks and creates `dist/`. `npm run lint` runs ESLint. `npm run preview` serves the production build locally. Existing Docker/nginx configuration also serves the built site.

## Content and design

- `src/App.tsx`: page structure and interactions.
- `src/content.ts`: English and Hindi text.
- `src/index.css`: reference styling and responsive breakpoints.
- `src/assets/images/`: the four reference photographs and existing favicon.

The reference photographs are illustrative stock imagery, not verified photographs of this temple. Fonts currently load through Google Fonts. WhatsApp package links preserve the existing app's booking number, +91 8959040275, and open a prefilled enquiry without sending it automatically. The navbar speaker toggles a locally bundled, looping Om chant at 45% volume; it never autoplays. Audio source and CC0 license details are in `src/assets/audio/README.md`. Temple details require confirmation before public launch.
