"use client";

import { useState, useEffect } from "react";
import { Spinner } from "flowbite-react";

import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import Image from "next/image";
import { API_URL } from "@/app/config/api";
import { useParams } from "next/navigation";

export default function GalleryEventPhotos() {
  const { id } = useParams();

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEventData() {
      try {
        const res = await fetch(`${API_URL}/api/event/${id}`);
        if (res.status === 200) {
          const eventData = await res.json();
          setEvent(eventData);
        }
      } catch (e) {
        console.log("Error fetching event data", e);
      } finally {
        setLoading(false);
      }
    }

    fetchEventData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <Spinner size="xl" color="warning" />
      </div>
    ); // Render loading state while fetching
  }

  if (!event) {
    return <div>No event data available</div>; // Handle case where no event data is available
  }

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
      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 my-8"
      >
        {event.gallery?.map((item, innerIndex) => (
          <a href={item.image} key={innerIndex}>
            <Image
              src={item.image}
              alt={"Social Work"}
              className="object-cover h-full w-full"
              width={600}
              height={400}
            />
          </a>
        ))}
      </LightGallery>
    </div>
  );
}
