import { API_URL } from "@/app/config/api";
import GalleryLightbox from "../../../components/gallery/galleryLightBox"; // client component

export const dynamic = "force-dynamic"; // Force dynamic rendering for this page

export default async function GalleryEventPhotos({ params }) {
  const { id } = await params; // Extracting id from params
  const res = await fetch(`${API_URL}/api/event/${params.id}`);

  if (!res.ok) {
    return <div>Failed to load event</div>;
  }

  const event = await res.json();

  return (
    <div>
      <div className="flex gap-6 items-center">
        <div className="text-primary font-bold text-lg md:text-3xl sm:text-lg">
          {event.name}
        </div>
        <div className="text-gray-600 font-semibold text-sm md:text-lg sm:text-sm">
          {new Date(event.start_date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </div>
      </div>

      {/* Client component receives data from server */}
      <GalleryLightbox gallery={event.gallery} />
    </div>
  );
}
