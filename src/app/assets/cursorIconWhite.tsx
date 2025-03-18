// Create a custom Cursor icon component that behaves like react-icons
export const CursorIconWhite = (props: { size?: number; color?: string }) => {
    const { size = 24, color = "currentColor" } = props;
    return (
        <svg
            height={size}
            width={size}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color }}
        >
            <title>Cursor</title>
            <path
                d="M11.925 24l10.425-6-10.425-6L1.5 18l10.425 6z"
                fill="url(#lobe-icons-cursorundefined-fill-3)"
            ></path>
            <path
                d="M22.35 18V6L11.925 0v12l10.425 6z"
                fill="url(#lobe-icons-cursorundefined-fill-4)"
            ></path>
            <path
                d="M11.925 0L1.5 6v12l10.425-6V0z"
                fill="url(#lobe-icons-cursorundefined-fill-5)"
            ></path>
            <path d="M22.35 6L11.925 24V12L22.35 6z" fill="#555"></path>
            <path d="M22.35 6l-10.425 6L1.5 6h20.85z" fill="#FFFFFF"></path>
            <defs>
                <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="lobe-icons-cursorundefined-fill-3"
                    x1="11.925"
                    x2="11.925"
                    y1="12"
                    y2="24"
                >
                    <stop
                        offset=".16"
                        stopColor="#FFFFFF"
                        stopOpacity=".39"
                    ></stop>
                    <stop
                        offset=".658"
                        stopColor="#FFFFFF"
                        stopOpacity=".8"
                    ></stop>
                </linearGradient>
                <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="lobe-icons-cursorundefined-fill-4"
                    x1="22.35"
                    x2="11.925"
                    y1="6.037"
                    y2="12.15"
                >
                    <stop
                        offset=".182"
                        stopColor="#FFFFFF"
                        stopOpacity=".31"
                    ></stop>
                    <stop
                        offset=".715"
                        stopColor="#FFFFFF"
                        stopOpacity="0"
                    ></stop>
                </linearGradient>
                <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="lobe-icons-cursorundefined-fill-5"
                    x1="11.925"
                    x2="1.5"
                    y1="0"
                    y2="18"
                >
                    <stop stopColor="#FFFFFF" stopOpacity=".6"></stop>
                    <stop
                        offset=".667"
                        stopColor="#FFFFFF"
                        stopOpacity=".22"
                    ></stop>
                </linearGradient>
            </defs>
        </svg>
    );
};
