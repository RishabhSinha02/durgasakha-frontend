import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PastTrekCard = ({
    id, trekName, location, type, date, organisedBy, imageUrl, instagramLink, facebookLink, youtubeLink, twitterLink
}) => {
    return (
        <div className="relative max-full overflow-hidden rounded-lg bg-white shadow-lg">
            {/* Background Image Section */}
            <div className="relative h-[300px]">
                <div className='h-full w-full bg-black'>
                    <Image
                        src={imageUrl}
                        alt={type}
                        className="object-cover h-full w-full opacity-50"
                        width={600}
                        height={400}
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent">
                    <h3 className="p-6 text-md font-semibold text-white">{location}</h3>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="text-3xl font-bold text-white">{trekName}</h2>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
                <div className='flex flex-col gap-4'>
                    <div className="flex gap-2 items-center">
                        <div className='text-primary'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                            </svg>
                        </div>
                        <div className="text-sm">{date}
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <Link
                        href={`/past-treks/${id}`}
                        className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-[#C23E3E]"
                    >
                        See Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PastTrekCard;