'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import Image from 'next/image';

const GalleryTrekPhotos = () => {
  const { id } = useParams();
  const [trekData, setTrekData] = useState(null);

  useEffect(() => {
    fetch('/treks.json')
      .then((res) => res.json())
      .then((data) => {
        const trek = data.find((item) => item.slug === id);
        setTrekData(trek);
      });
  }, [id]);

  if (!trekData) return <p className="p-4">Loading trek gallery...</p>;

  return (
    <div>
      {/* Trek Info Header */}
      <div className="flex gap-6 items-center mt-6">
        <div className="text-primary font-bold text-lg md:text-3xl sm:text-lg">
          {trekData.name}
        </div>
        <div className="text-gray-600 font-semibold text-sm md:text-lg sm:text-sm">
          {new Date(trekData.start_date).toLocaleDateString()}
        </div>
      </div>

      {/* Trek Image Gallery */}
      <LightGallery
        onInit={() => console.log('lightGallery initialized')}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8 my-8"
      >
        {trekData.images.map((imgObj, idx) => (
          <a href={imgObj.image} key={idx}>
            <Image
              src={imgObj.image}
              alt={`Trek Image ${idx + 1}`}
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

export default GalleryTrekPhotos;