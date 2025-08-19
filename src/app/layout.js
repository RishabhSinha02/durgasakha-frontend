// app/layout.js
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import CustomNavbar from "./components/navbar/CustomNavbar";
import CustomFooter from "./components/footer/CustomFooter";
import ScrollToTopButton from "./components/scrollToTop/scrollToTop";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL("https://www.durgasakha.org"),
  title: "Shree Durgasakha Charitable Trust",
  description:
    "Durgasakha is an NGO committed to preserving the forts of the Sahyadri region...",
  keywords: [
    "Durgasakha",
    "Shree Durgasakha Charitable Trust",
    "NGO",
    "Sahyadri forts",
    "cleanliness drives",
    "awareness campaigns",
    "trekking",
    "nature conservation",
    "rural education",
    "Maharashtra",
  ],
  openGraph: {
    title: "Shree Durgasakha Charitable Trust",
    description:
      "Durgasakha is an NGO committed to preserving the forts of the Sahyadri region...",
    images: "/carousel/carousel-2.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <CustomNavbar />
        {children}
        <CustomFooter />
        <div>
          <ScrollToTopButton />
        </div>

        {/* Hidden container for Google Translate (keep it hidden via CSS) */}
        <div id="google_translate_element" style={{ display: "none" }} />

        {/* Load Google Translate */}
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />

        {/* Init + stable helpers */}
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
/* ---- Stable Google Translate helpers ---- */
(function () {
  // A small namespace on window to coordinate readiness & actions
  window.__gt = window.__gt || {
    ready: false,
    queue: [],
    applyLang: function(lang, retries = 60) {
      // Persist language for reloads / future visits
      try { localStorage.setItem('lang', lang); } catch (e) {}
      document.documentElement.setAttribute('lang', lang || 'en');

      // Set googtrans cookies (Google checks these)
      var path = ';path=/';
      var domain = location.hostname.includes('.') ? ';domain=.' + location.hostname : '';
      var expires = ';expires=' + new Date(Date.now() + 365*24*60*60*1000).toUTCString();

      // Set both variants Google sometimes reads
      document.cookie = 'googtrans=/en/' + lang + path + domain + expires;
      document.cookie = 'googtrans=/auto/' + lang + path + domain + expires;

      // If the combo exists, trigger a change; otherwise retry a few times
      var select = document.querySelector('.goog-te-combo');
      if (select) {
        if (select.value !== lang) {
          select.value = lang;
          // Some installs need both modern and legacy events
          select.dispatchEvent(new Event('change'));
          var evt = document.createEvent('HTMLEvents');
          evt.initEvent('change', true, true);
          select.dispatchEvent(evt);
        } else {
          // Force re-translate on SPA updates
          select.dispatchEvent(new Event('change'));
        }
      } else if (retries > 0) {
        setTimeout(function(){ window.__gt.applyLang(lang, retries - 1); }, 250);
      }
    }
  };

  // Expose doGTranslate for manual calls (kept for compatibility)
  window.doGTranslate = function (langPair) {
    if (!langPair) return;
    var lang = langPair.split('|')[1];
    window.__gt.applyLang(lang);
  };

  // This is the callback Google calls after loading the widget script
  window.googleTranslateElementInit = function () {
    new google.translate.TranslateElement(
      {
        pageLanguage: 'en',
        includedLanguages: 'en,hi,mr',
        autoDisplay: false
      },
      'google_translate_element'
    );
    window.__gt.ready = true;
    document.dispatchEvent(new Event('googleTranslateReady'));

    // If user had a saved language, apply it once ready
    try {
      var saved = localStorage.getItem('lang') || 'en';
      if (saved && saved !== 'en') {
        // Defer a tick to let the combo mount
        setTimeout(function(){ window.__gt.applyLang(saved); }, 0);
      }
    } catch (e) {}
  };
})();
          `}
        </Script>
      </body>
    </html>
  );
}
