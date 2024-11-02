import localFont from "next/font/local";
import { Poppins } from 'next/font/google'
import "./globals.css";
import CustomNavbar from "./components/navbar/CustomNavbar";
import CustomFooter from "./components/footer/CustomFooter";

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
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata = {
  title: "Durgasakha",
  description: "Durgasakha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <CustomNavbar />
          {children}
        <CustomFooter />
      </body>
    </html>
  );
}
