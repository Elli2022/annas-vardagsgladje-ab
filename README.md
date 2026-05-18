# Annas VardagsGlädje AB – webbplats

Landningssida för [Annas VardagsGlädje AB](https://annas-vardagsgladje-ab.netlify.app) – tryggt sällskap och ledsagning i Skåne.

## Live

- **Produktion:** https://annas-vardagsgladje-ab.netlify.app
- **GitHub:** https://github.com/Elli2022/annas-vardagsgladje-ab

## Versionshantering (branschpraxis)

Projektet följer **Semantic Versioning** (`MAJOR.MINOR.PATCH`):

| Version | Innehåll |
|---------|----------|
| [v1.3.0](https://github.com/Elli2022/annas-vardagsgladje-ab/releases/tag/v1.3.0) | Matchad logga, rund favicon, release-flöde |
| [v1.2.0](https://github.com/Elli2022/annas-vardagsgladje-ab/releases/tag/v1.2.0) | Varumärkesmapp (`brand/`) |
| [v1.1.0](https://github.com/Elli2022/annas-vardagsgladje-ab/releases/tag/v1.1.0) | Utökad struktur + aktiviteter |
| [v1.0.0](https://github.com/Elli2022/annas-vardagsgladje-ab/releases/tag/v1.0.0) | Första landningssidan |
| [v0.1.0](https://github.com/Elli2022/annas-vardagsgladje-ab/releases/tag/v0.1.0) | Projektstart (Next.js) |

- **Taggar:** `git tag -l` visar alla versioner
- **Releases:** under [Releases](https://github.com/Elli2022/annas-vardagsgladje-ab/releases) på GitHub
- **Ändringslogg:** se [CHANGELOG.md](./CHANGELOG.md)

### Ny version (för utvecklare)

```bash
# 1. Gör ändringar och committa
git add .
git commit -m "Beskrivning av ändringen"

# 2. Uppdatera CHANGELOG.md och package.json version

# 3. Tagga och pusha
git tag -a v1.4.0 -m "v1.4.0: kort beskrivning"
git push origin main --tags

# 4. Skapa GitHub Release
gh release create v1.4.0 --title "v1.4.0" --notes "Beskrivning"
```

## Varumärke

Loggor och favicons finns i [`brand/`](./brand/). Se [`brand/README.md`](./brand/README.md).

Återskapa filer efter byte av originallogga:

```bash
./scripts/generate-brand-assets.sh
```

## Utveckling lokalt

```bash
npm install
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000).

## Deploy

Sidan deployas automatiskt till Netlify vid push till `main`, eller manuellt:

```bash
npx netlify-cli deploy --prod
```

## Kontakt (företaget)

- Telefon: 072-442 00 41
- E-post: anna.vardagsgladje@gmail.com
