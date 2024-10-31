import localFont from "next/font/local";
import "./globals.css";
import CustomNavbar from "./components/navbar/navbar";
import CustomFooter from "./components/footer/footer";

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

export const metadata = {
  title: "Durgasakha",
  description: "Durgasakha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CustomNavbar />
          {children}
        <CustomFooter />
      </body>
    </html>
  );
}
