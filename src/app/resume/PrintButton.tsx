"use client";

const PrintButton = () => {
    return (
        <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-md border border-[#1f3a5f] px-4 py-2 text-sm font-semibold text-[#1f3a5f] transition-colors duration-200 hover:bg-[#1f3a5f] hover:text-white"
        >
            <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2m-12 0v4h12v-4m-12 0h12"
                />
            </svg>
            Print / Save as PDF
        </button>
    );
};

export default PrintButton;
