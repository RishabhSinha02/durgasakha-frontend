"use client";
import { useEffect } from "react";

export default function GoogleTranslate() {
    useEffect(() => {
        // Define the init callback before loading the script
        window.googleTranslateElementInit = function () {
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: "en",
                    includedLanguages: "mr,en",
                    autoDisplay: false,
                },
                "google_translate_element"
            );
        };

        // Only load the script once
        if (!document.getElementById("google-translate-script")) {
            const script = document.createElement("script");
            script.id = "google-translate-script";
            script.src =
                "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            script.async = true;
            document.body.appendChild(script);
        }

        // Forcefully hide the Google Translate top banner whenever it appears
        const hideBanner = () => {
            // Hide the banner iframe
            const banner = document.querySelector(".goog-te-banner-frame");
            if (banner) {
                banner.style.display = "none";
                banner.style.visibility = "hidden";
            }
            // Remove the body top offset Google Translate injects
            if (document.body.style.top && document.body.style.top !== "0px") {
                document.body.style.top = "0px";
            }
        };

        // Run immediately and watch for DOM changes
        hideBanner();
        const observer = new MutationObserver(hideBanner);
        observer.observe(document.body, { childList: true, subtree: true, attributes: true });

        return () => observer.disconnect();
    }, []);

    return (
        // Hidden container — the widget lives here but is not shown
        <div id="google_translate_element" style={{ display: "none" }} />
    );
}
