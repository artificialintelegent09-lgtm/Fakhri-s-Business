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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#F5F1E9",
          color: "#302D29",
          border: "24px solid #F5F1E9",
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
            border: "2px solid #B99D6C",
          }}
        >
          <div style={{ fontSize: 120, fontFamily: "serif", letterSpacing: 8 }}>
            {brand.name}
          </div>
          <div style={{ fontSize: 36, marginTop: 24, color: "#675A4D" }}>
            {brand.tagline}
          </div>
          <div
            style={{
              fontSize: 22,
              marginTop: 48,
              letterSpacing: 6,
              color: "#817365",
            }}
          >
            UNDANGAN PERNIKAHAN DIGITAL
          </div>
        </div>
      </div>
    ),
    size,
  );
}
