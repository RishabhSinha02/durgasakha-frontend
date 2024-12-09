"use client";
import { useParams } from "next/navigation";

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

const GalleryTrekPhotos = () => {
  const { id } = useParams();

  const [trek, setTrek] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTrekData() {
      try {
        const res = await fetch(`${API_URL}/api/trek/${id}`);
        if (res.status === 200) {
          const trekData = await res.json();
          setTrek(trekData);
        }
      } catch (e) {
        console.log("Error fetching trek data", e);
      } finally {
        setLoading(false);
      }
    }

    fetchTrekData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <Spinner size="xl" color="warning" />
      </div>
    ); // Render loading state while fetching
  }

  if (!trek) {
    return <div>No trek data available</div>; // Handle case where no trek data is available
  }

  return (
    <div>
      <div className="flex gap-6 items-center">
        <div className="text-primary font-bold text-lg md:text-3xl sm:text-lg">
          {trek.name}
        </div>
        <div className="text-gray-600 font-semibold text-sm md:text-lg sm:text-sm">
          {new Date(trek.start_date).toLocaleDateString("en-GB", {
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
        {trek.gallery.map((item, innerIndex) => (
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
};

export default GalleryTrekPhotos;
