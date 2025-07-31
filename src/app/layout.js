import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import CustomNavbar from "./components/navbar/CustomNavbar";
import CustomFooter from "./components/footer/CustomFooter";
import ScrollToTopButton from "./components/scrollToTop/scrollToTop";

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
  title: "Shree Durgasakha Charitable Trust",
  description:
    "Durgasakha is an NGO committed to preserving the forts of the Sahyadri region through cleanliness drives and awareness campaigns. With over 150 treks and 1,500+ participants, it promotes a strong bond with nature, history, and responsible travel. The NGO also supports rural education in Shahapur, having distributed school kits to over 2,500 students in the past 15 years. Its educational adoption programs further help students pursue higher studies, combining environmental conservation with social development.",
  openGraph: {
    title: "Shree Durgasakha Charitable Trust",
    description:
      "Durgasakha is an NGO committed to preserving the forts of the Sahyadri region through cleanliness drives and awareness campaigns. With over 150 treks and 1,500+ participants, it promotes a strong bond with nature, history, and responsible travel. The NGO also supports rural education in Shahapur, having distributed school kits to over 2,500 students in the past 15 years. Its educational adoption programs further help students pursue higher studies, combining environmental conservation with social development.",
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
      </body>
    </html>
  );
}
