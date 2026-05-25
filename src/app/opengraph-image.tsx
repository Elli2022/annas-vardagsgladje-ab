import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} – sällskap och ledsagning för äldre i Skåne`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#ebebeb",
          padding: 48,
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "#6d8b72",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: 48,
            fontWeight: 700,
            marginBottom: 32,
          }}
        >
          TV
        </div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 600,
            color: "#2f3a34",
            textAlign: "center",
            maxWidth: 900,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#5a6a62",
            marginTop: 16,
            textAlign: "center",
          }}
        >
          Sällskap och ledsagning för äldre i Skåne
        </div>
      </div>
    ),
    { ...size },
  );
}
