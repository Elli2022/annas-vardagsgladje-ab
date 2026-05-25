import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#5f8168",
          borderRadius: "50%",
        }}
      >
        <div
          style={{
            width: 22,
            height: 22,
            borderRadius: "50%",
            background: "#f7f0e8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#d49aaa",
              boxShadow:
                "6px 0 0 #d49aaa, -6px 0 0 #d49aaa, 0 6px 0 #d49aaa, 0 -6px 0 #d49aaa",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
