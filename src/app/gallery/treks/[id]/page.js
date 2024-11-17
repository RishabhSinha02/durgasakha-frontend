"use client";
import { useParams } from "next/navigation";


import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import Image from 'next/image';

const GalleryTrekPhotos = () => {
    const repeatArray = [1, 2, 3, 4 ,5, 6,7,4, 8, 8,8];
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    const { id } = useParams();
    return (
        <div>
            <div className="flex gap-6 items-center">
                <div className="text-primary font-bold text-lg md:text-3xl sm:text-lg">{id}</div>
                <div className="text-gray-600 font-semibold text-sm md:text-lg sm:text-sm">20 Aug 2024</div>
            </div>
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                elementClassNames="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 my-8"
            >
                {repeatArray.map((innerItem, innerIndex) => (
                <a href="/nature.jpg" key={innerIndex}>
                    <Image
                        src="/nature.jpg"
                        alt={'Social Work'}
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