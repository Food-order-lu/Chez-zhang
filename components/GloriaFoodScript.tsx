"use client";

import Script from "next/script";

export default function GloriaFoodScript() {
    return (
        <Script
            src="https://www.fbgcdn.com/embedder/js/ewm2.js"
            strategy="lazyOnload"
            defer
            async
        />
    );
}
