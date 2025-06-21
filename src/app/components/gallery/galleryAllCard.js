import Image from 'next/image';
import Link from 'next/link';
const GalleryAllCard = ({title, imageUrl, type, slug}) => {
    return (
        <div>
            <div className="relative max-full overflow-hidden rounded-lg bg-white shadow-lg">
                {/* Background Image Section */}
                <div className="relative h-[300px]">
                    <div className='h-full w-full'>
                        <Image
                            src={imageUrl}
                            alt={'Social Work'}
                            className="object-cover h-full w-full"
                            width={600}
                            height={400}
                        />
                    </div>

                </div>

                {/* Content Section */}
                <div className="flex flex-row justify-between">
                    <div className="p-6">
                        <div className="text-sm font-bold">{title}</div>
                    </div>
                    <Link href={`/gallery/${type}/${slug}`}>
                        <div className="p-6">
                            <div className="text-sm font-bold text-primary">View More</div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default GalleryAllCard;