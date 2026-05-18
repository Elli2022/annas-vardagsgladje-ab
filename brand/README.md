# Annas VardagsGlädje AB – varumärkesfiler

Den här mappen innehåller logotypens original och standardiserade versioner enligt vanlig branschpraxis.

## Mappstruktur

| Fil / mapp | Användning |
|------------|------------|
| `source/logo-original.jpeg` | Originalfil från beställaren (behåll alltid) |
| `logo-primary.png` | Huvudlogga i fullfärg (PNG, transparent/ljus bakgrund) |
| `logo-primary.jpg` | Huvudlogga för dokument och mejl |
| `logo-web-256.png` | Webb (header, snabb laddning) |
| `logo-web-512.png` | Webb (större visning, retina) |
| `logo-icon-512.png` | App-ikon, sociala medier, kvadratisk profilbild |
| `logo-monochrome.png` | Enfärgad/gråskala (tryck, enkel användning) |
| `og-image.png` | Delningsbild (Open Graph, 1200×630) |
| `apple-touch-icon.png` | Ikon när sidan sparas på hemskärm (180×180) |
| `favicon/` | Favicon i flera storlekar (16–1024 px) |

## Riktlinjer

- Använd **inte** neonfärger runt logotypen – håll bakgrunden ljus och ren.
- Lämna luft runt loggan (minst ca 10 % av loggans höjd).
- Förvräng inte proportionerna – skala alltid lika bredd och höjd.
- På webben: använd `logo-web-256.png` i header och `logo-primary.png` där större version behövs.

## Webbplats

Sajten använder optimerad logga från `public/logo.png` (genererad från `logo-web-256.png`).

## Återskapa filer

Kör från projektroten om original byts ut:

```bash
./scripts/generate-brand-assets.sh
```
