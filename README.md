# Trygg Vardag Skåne – portfolio

Konceptlandningssida för sällskap och ledsagning för äldre i Skåne. Next.js 16, SEO, Netlify Forms, varm tillgänglig design.

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
- **Netlify Forms** (kontaktformulär)
- Blomlogotyp (SVG), OG-bild och favicon

## Miljövariabler

```bash
cp .env.example .env.local
# NEXT_PUBLIC_SITE_URL=https://trygg-vardag-portfolio.netlify.app
```

## Formulär (Netlify)

1. Efter deploy: [Netlify → Forms](https://app.netlify.com/projects/trygg-vardag-portfolio/forms) – formuläret `contact` ska synas.
2. **Form notifications** → lägg till `eleonora.nocentini@gmail.com`.
3. Testa på live-sidan – du ska hamna på `/tack`, inte formsubmit.co.
