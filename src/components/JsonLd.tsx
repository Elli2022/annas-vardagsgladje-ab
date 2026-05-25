import { siteConfig } from "@/lib/site-config";

export function JsonLd() {
  const organizationId = `${siteConfig.url}/#organization`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": organizationId,
        name: siteConfig.name,
        description: siteConfig.longDescription,
        url: siteConfig.url,
        image: `${siteConfig.url}/opengraph-image`,
        logo: `${siteConfig.url}/logo.svg`,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.addressLocality,
          addressRegion: siteConfig.addressRegion,
          addressCountry: siteConfig.addressCountry,
        },
        areaServed: siteConfig.areaServed.map((area) => ({
          "@type": "AdministrativeArea",
          name: area,
        })),
        knowsAbout: siteConfig.keywords.slice(0, 6),
        priceRange: "$$",
        inLanguage: siteConfig.locale,
      },
      ...siteConfig.services.map((service) => ({
        "@type": "Service",
        "@id": `${siteConfig.url}/#service-${service.replace(/\s+/g, "-").toLowerCase()}`,
        name: service,
        provider: { "@id": organizationId },
        areaServed: siteConfig.areaServed.map((area) => ({
          "@type": "AdministrativeArea",
          name: area,
        })),
        description: `${service} i Malmö och Skåne – ${siteConfig.name}`,
      })),
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: siteConfig.locale,
        publisher: { "@id": organizationId },
      },
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/#webpage`,
        url: siteConfig.url,
        name: `Sällskap och ledsagning för äldre i Skåne | ${siteConfig.name}`,
        description: siteConfig.longDescription,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": organizationId },
        inLanguage: siteConfig.locale,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
