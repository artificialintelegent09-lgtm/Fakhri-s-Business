import { ImageResponse } from "next/og";
import { brand } from "@/data/content";

export const alt = `${brand.name} — ${brand.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: 28,
          background: "#FFF2CC",
          color: "#35252A",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #D94B55",
          }}
        >
          <div style={{ fontSize: 132, fontFamily: "serif", letterSpacing: 6 }}>
            {brand.name}
          </div>
          <div style={{ width: 96, height: 2, marginTop: 20, background: "#D94B55" }} />
          <div
            style={{
              fontSize: 38,
              marginTop: 28,
              fontFamily: "serif",
              fontStyle: "italic",
              color: "#6B5359",
            }}
          >
            {brand.tagline}
          </div>
          <div
            style={{ fontSize: 22, marginTop: 44, letterSpacing: 6, color: "#A8323D" }}
          >
            UNDANGAN PERNIKAHAN DIGITAL
          </div>
        </div>
      </div>
    ),
    size,
  );
}
