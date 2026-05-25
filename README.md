# Trygg Vardag Skåne – portfolio

Konceptlandningssida för sällskap och ledsagning för äldre i Skåne. Next.js 16, SEO, FormSubmit, varm tillgänglig design.

## Live

https://trygg-vardag-portfolio.netlify.app

## Versionshantering

Projektet följer [Semantic Versioning](https://semver.org/) och [Keep a Changelog](https://keepachangelog.com/):

| Branch / tag | Innehåll |
|--------------|----------|
| `main` | Historik (kundprojekt v1.x) |
| `portfolio` | Aktuell portfolio-version (**v2.0.0**) |
| Git-taggar | `v0.1.0` … `v1.4.0` (kund), `v2.0.0` (portfolio) |
| [Releases](https://github.com/Elli2022/trygg-vardag-portfolio/releases) | Release notes per version |

```bash
git checkout portfolio
npm install && npm run dev
```

## Teknik

- Next.js App Router, TypeScript, Tailwind CSS v4
- SEO: sitemap, robots, metadata, JSON-LD (LocalBusiness + Service + WebSite)
- FormSubmit → konfigurerad portfolio-e-post
- Genererad logotyp (SVG), OG-bild och favicon

## Miljövariabler

```bash
cp .env.example .env.local
# NEXT_PUBLIC_SITE_URL=https://trygg-vardag-portfolio.netlify.app
```

## Formulär

Skicka en testförfrågan och bekräfta FormSubmit-länken i inkorgen första gången.
