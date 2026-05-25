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
          background: "linear-gradient(135deg, #f7f0e8 0%, #faf6f0 50%, #eef4ef 100%)",
          padding: 64,
        }}
      >
        <div
          style={{
            width: 140,
            height: 140,
            borderRadius: "50%",
            background: "#5f8168",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 36,
          }}
        >
          <div
            style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              background: "#f7f0e8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: "#e8c9a8",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: 20,
                height: 36,
                background: "#d49aaa",
                borderRadius: "50%",
                top: 8,
              }}
            />
            <div
              style={{
                position: "absolute",
                width: 20,
                height: 36,
                background: "#d49aaa",
                borderRadius: "50%",
                bottom: 8,
              }}
            />
            <div
              style={{
                position: "absolute",
                width: 36,
                height: 20,
                background: "#d49aaa",
                borderRadius: "50%",
                left: 8,
              }}
            />
            <div
              style={{
                position: "absolute",
                width: 36,
                height: 20,
                background: "#d49aaa",
                borderRadius: "50%",
                right: 8,
              }}
            />
          </div>
        </div>
        <div style={{ fontSize: 56, fontWeight: 600, color: "#2f3a34" }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 30, color: "#5a6a62", marginTop: 16 }}>
          Sällskap och ledsagning för äldre i Skåne
        </div>
      </div>
    ),
    { ...size },
  );
}
