# Trygg Vardag Skåne – portfolio

Konceptlandningssida för sällskap och ledsagning för äldre i Skåne. Next.js 16, SEO, Web3Forms, varm tillgänglig design.

## Live

https://trygg-vardag-skane.netlify.app

## Kontaktformulär (viktigt – 2 min setup)

**Netlify Forms fungerar inte med Next.js** på det här sättet (POST går till Next, inte Netlify). Därför använder vi **Web3Forms** (gratis, mejl till din inkorg).

### Steg 1 – hämta nyckel

1. Öppna **https://web3forms.com**
2. Ange **eleonora.nocentini@gmail.com**
3. Bekräfta mejlet från Web3Forms
4. Kopiera din **Access Key**

### Steg 2 – lägg in i Netlify

1. **https://app.netlify.com/projects/trygg-vardag-skane/configuration/env**
2. **Add a variable**
   - Key: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
   - Value: (klistra in access key)
   - Scopes: alla (Production)
3. **Save** → gå till **Deploys** → **Trigger deploy** → **Deploy site**

(Web3Forms gratis kräver **klient**-anrop — inte server. Nyckeln syns i sidans JS, det är normalt för Web3Forms.)

### Steg 3 – testa

Skicka formuläret på live-sidan → du ska hamna på `/tack` **och** få mejl inom någon minut (kolla skräppost).

---

**Fel sida för mejl?**  
`configuration/notifications` = deploy-meddelanden, **inte** kontaktformulär. Formulärmejl kommer från Web3Forms när nyckeln är satt.

## Versionshantering

| Branch / tag | Innehåll |
|--------------|----------|
| `main` | Historik (kundprojekt v1.x) |
| `portfolio` | Aktuell version (**v2.0.0**) |

## Utveckling

```bash
git checkout portfolio
cp .env.example .env.local
# Lägg WEB3FORMS_ACCESS_KEY i .env.local
npm install && npm run dev
```
