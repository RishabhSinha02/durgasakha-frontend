import { Header } from "../components/header/Header";

export const metadata = {
  metadataBase: new URL("https://www.durgasakha.org"),
  title: "Donation | Shree Durgasakha Charitable Trust",
  description:
    "Durgasakha is an NGO committed to preserving the forts of the Sahyadri region through cleanliness drives and awareness campaigns. With over 150 treks and 1,500+ participants, it promotes a strong bond with nature, history, and responsible travel. The NGO also supports rural education in Shahapur, having distributed school kits to over 2,500 students in the past 15 years. Its educational adoption programs further help students pursue higher studies, combining environmental conservation          with social development.",
  keywords: [
    "Donation",
    "Durgasakha",
    "Shree Durgasakha Charitable Trust",
    "NGO",
    "donate",
    "support",
    "charity",
    "social development",
    "rural education",
    "environmental conservation",
  ],
  openGraph: {
    title: "Donation | Shree Durgasakha Charitable Trust",
    description:
      "Durgasakha is an NGO committed to preserving the forts of the Sahyadri region through cleanliness drives and awareness campaigns. With over 150 treks and 1,500+ participants, it promotes a strong bond with nature, history, and responsible travel. The NGO also supports rural education in Shahapur, having distributed school kits to over 2,500 students in the past 15 years. Its educational adoption programs further help students pursue higher studies, combining environmental conservation with social development.",
    images: "/donation-banner.jpeg",
  },
};

const Layout = ({ children }) => {
  return (
    <div>
      <Header background="/header.png" title="Donation" />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
