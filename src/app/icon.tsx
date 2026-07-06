import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Indigo "N" monogram favicon, matching the rebrand accent + Nodica wordmark.
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
                    background: "#2f54c8",
                    color: "#ffffff",
                    fontSize: 22,
                    fontWeight: 700,
                    borderRadius: 7,
                }}
            >
                N
            </div>
        ),
        { ...size }
    );
}
