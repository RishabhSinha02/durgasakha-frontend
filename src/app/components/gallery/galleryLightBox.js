// app/gallery-event/[id]/GalleryLightbox.tsx

"use client";

import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import Image from "next/image";

export default function GalleryLightbox({ gallery }) {
  return (
    <LightGallery
      speed={500}
      plugins={[lgThumbnail, lgZoom]}
      elementClassNames="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 my-8"
    >
      {gallery?.map((item, index) => (
        <a href={item.image} key={index}>
          <Image
            src={item.image}
            alt="Gallery Image"
            className="object-cover h-full w-full"
            width={600}
            height={400}
          />
        </a>
      ))}
    </LightGallery>
  );
}
