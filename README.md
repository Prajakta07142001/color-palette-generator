# Color Palette Generator

A web application that helps UI/UX designers generate beautiful and accessible color palettes, copy HEX values, preview colors in light and dark themes, and verify WCAG contrast standards for better design accessibility.

## Features

- Generate 5 harmonious random colors
- Click any color to copy its HEX code
- Lock individual colors and regenerate the rest
- Light mode / dark mode UI preview
- WCAG contrast ratio checker (AA / AAA)
- Copy all HEX codes at once

## Tech stack

- Next.js (App Router)
- React
- Tailwind CSS

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Deployment

Deploy directly to [Vercel](https://vercel.com/new) — no backend or environment variables required.

## Folder structure

```
app
 ├── page.tsx
 ├── layout.tsx
 ├── globals.css
 ├── components
 │     ├── ColorCard.tsx
 │     ├── PalettePreview.tsx
 │     ├── ContrastChecker.tsx
 │     └── Footer.tsx
 └── utils
       ├── generateColor.ts
       └── contrastRatio.ts
```

## Author

Prajakta Vinayak Ranbhare
your-email@gmail.com

Built for Digital Heroes — https://digitalheroesco.com
