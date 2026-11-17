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
          background: "#EFE4D2",
          color: "#2B1B13",
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
            border: "2px solid #2F9B45",
          }}
        >
          <div style={{ fontSize: 132, fontFamily: "serif", letterSpacing: 6 }}>
            {brand.name}
          </div>
          <div style={{ width: 96, height: 2, marginTop: 20, background: "#2F9B45" }} />
          <div
            style={{
              fontSize: 38,
              marginTop: 28,
              fontFamily: "serif",
              fontStyle: "italic",
              color: "#5B4637",
            }}
          >
            {brand.tagline}
          </div>
          <div
            style={{ fontSize: 22, marginTop: 44, letterSpacing: 6, color: "#1D6B30" }}
          >
            UNDANGAN PERNIKAHAN DIGITAL
          </div>
        </div>
      </div>
    ),
    size,
  );
}
