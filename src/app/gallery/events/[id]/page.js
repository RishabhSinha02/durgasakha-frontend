"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import Image from "next/image";

const GalleryEventPhotos = () => {
  const { id } = useParams(); // slug like "18june2023-donation-event"
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => {
        const event = data.find((item) => item.slug === id);
        setEventData(event);
      });
  }, [id]);

  if (!eventData) return <p className="p-4">Loading event data...</p>;

  return (
    <div>
      {/* Event Info Header */}
      <div className="flex gap-6 items-center mt-6">
        <div className="text-primary font-bold text-lg md:text-3xl sm:text-lg">
          {eventData.name}
        </div>
        <div className="text-gray-600 font-semibold text-sm md:text-lg sm:text-sm">
          {new Date(eventData.start_date).toLocaleDateString()}
        </div>
      </div>

      {/* Image Gallery */}
      <LightGallery
        onInit={() => console.log("lightGallery has been initialized")}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8 my-8"
      >
        {eventData.images.map((imgObj, idx) => (
          <a href={imgObj.image} key={idx}>
            <Image
              src={imgObj.image}
              alt={`Event Image ${idx + 1}`}
              className="object-cover h-full w-full rounded-md"
              width={600}
              height={400}
            />
          </a>
        ))}
      </LightGallery>
    </div>
  );
};

export default GalleryEventPhotos;
