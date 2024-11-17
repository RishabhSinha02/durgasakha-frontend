"use client";
import { useParams } from "next/navigation";

import Image from 'next/image';

const GalleryTrekPhotos = () => {
    const repeatArray = [1, 2, 3, 4];
    const { id } = useParams();
    return (
        <div>
            <div className="flex gap-6 items-center">
                <div className="text-primary font-bold text-lg md:text-3xl sm:text-lg">{id}</div>
                <div className="text-gray-600 font-semibold text-sm md:text-lg sm:text-sm">20 Aug 2024</div>
            </div>



            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 my-8'>
                        {repeatArray.map((innerItem, innerIndex) => (
                            <div key={innerIndex} className="relative h-[150px] md:h-[300px] sm:h-[150px]">
                                <div className='h-full w-full'>
                                    <Image
                                        src="/nature.jpg"
                                        alt={'Social Work'}
                                        className="object-cover h-full w-full"
                                        width={600}
                                        height={400}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>


        </div>
        
    );
};

export default GalleryTrekPhotos;