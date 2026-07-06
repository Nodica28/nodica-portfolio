import { ImageResponse } from "next/og";

export const alt = "Justine Nicdao — Full-Stack Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    background: "#0b0e17",
                    padding: "72px 80px",
                    color: "#f4f6f9",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        fontSize: 26,
                        letterSpacing: 6,
                        color: "#8aa1f7",
                    }}
                >
                    FULL-STACK SOFTWARE ENGINEER
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                        style={{
                            display: "flex",
                            fontSize: 104,
                            fontWeight: 700,
                        }}
                    >
                        Justine Nicdao
                    </div>
                    <div
                        style={{
                            display: "flex",
                            fontSize: 40,
                            color: "#c3c7d1",
                            marginTop: 12,
                        }}
                    >
                        I design, build, and ship — end to end.
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: 26,
                        color: "#9aa3b8",
                    }}
                >
                    <div style={{ display: "flex" }}>
                        nodica-portfolio.vercel.app
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div
                            style={{
                                width: 12,
                                height: 12,
                                borderRadius: 6,
                                background: "#8aa1f7",
                                marginRight: 12,
                            }}
                        />
                        Open to senior &amp; freelance roles
                    </div>
                </div>
            </div>
        ),
        { ...size }
    );
}
