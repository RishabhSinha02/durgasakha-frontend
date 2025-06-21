"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const GalleryEvent = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('/events.json')
            .then(res => res.json())
            .then(data => setEvents(data));
    }, []);

    return (
        <div>
            {events.map((event, index) => (
                <div key={index}>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-6 items-center">
                            <div className="text-primary font-bold text-lg md:text-3xl sm:text-lg">{event.name}</div>
                            <div className="text-gray-600 font-semibold text-sm md:text-lg sm:text-sm">{new Date(event.start_date).toLocaleDateString()}</div>
                        </div>
                        <div>
                            <Link href={`/gallery/events/${event.slug}`}>
                                <button className="flex items-center text-sm md:text-lg sm:text-sm gap-2 border border-black hover:border-primary hover:text-primary px-2 py-2 md:px-4 md:py-2 sm:px-2 sm:py-2 rounded-full">View All
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4 md:size-5 sm:size-4">
                                        <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 my-8'>
                        {event.images.slice(0, 4).map((imgObj, innerIndex) => (
                            <div key={innerIndex} className="relative h-[150px] md:h-[300px] sm:h-[150px]">
                                <div className='h-full w-full'>
                                    <Image
                                        src={imgObj.image}
                                        alt={event.name}
                                        className="object-cover h-full w-full"
                                        width={600}
                                        height={400}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GalleryEvent;
