import GalleryAllCard from "../components/gallery/galleryAllCard";
import { API_URL } from "../config/api";

export const revalidate = 120;

export default async function Gallery() {
  const data = await fetch(`${API_URL}/api/core/gallery`).then((res) =>
    res.json()
  );

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
      {data.results.map((item, index) => (
        <GalleryAllCard
          key={index}
          data={item}
        />
      ))}
    </div>
  );
}
