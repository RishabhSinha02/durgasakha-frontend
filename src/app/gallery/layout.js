import { Header } from "../components/header/Header";
import GalleryTab from "../components/gallery/galleryTap";

const Layout = ({ children }) => {
  return (
    <div>
      <Header background="/header.png" title="Gallery" />
      <div className="flex justify-center relative -top-8">
        <GalleryTab />
      </div>
      <main className="p-10 pb-6 pt-6 md:p-16 md:pb-12 md:pt-12 sm:p-10 sm:pb-6 sm:pt-6 space-y-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;
