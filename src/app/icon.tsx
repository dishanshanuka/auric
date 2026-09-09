import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "#0b0b0c",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          fontFamily: "serif",
          fontWeight: 300,
          borderRadius: "50%",
          border: "1px solid rgba(255, 255, 255, 0.25)",
        }}
      >
        A
      </div>
    ),
    {
      ...size,
    }
  );
}