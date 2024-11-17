"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname

const GalleryTab = () => {
    // Use the usePathname hook to get the current path
    const currentPath = usePathname();

    return (
        <div className="card flex justify-between gap-8 font-bold text-gray-500 w-96 px-12 py-4 rounded-full bg-white">
            <Link href="/gallery">
                <div className={`${currentPath === '/gallery' ? "text-primary underline" : ""} cursor-pointer`}>
                    All
                </div>
            </Link>
            <Link href="/gallery/treks">
                <div className={`${currentPath === '/gallery/treks' ? "text-primary underline" : ""} cursor-pointer`}>
                    Treks
                </div>
            </Link>
            <Link href="/gallery/events">
                <div className={`${currentPath === '/gallery/events' ? "text-primary underline" : ""} cursor-pointer`}>
                    Events
                </div>
            </Link>
        </div>
    );
};

export default GalleryTab;
