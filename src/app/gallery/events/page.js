import Image from 'next/image';
const GalleryEvent = ()  => {
    const repeatArray = [1, 2, 3];
    const repeatSection = [1, 2, 3];

    return (
        <div>
            {repeatSection.map((item, index) => (
                <div key={index}>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-6 items-center">
                            <div className="text-primary font-bold text-3xl">Tringlewadi Trek</div>
                            <div className="text-gray-600 font-semibold text-lg">20 Aug 2024</div>
                        </div>
                        <div>
                            <button className="flex items-center gap-2 border border-black px-4 py-2 rounded-full">View All
                                <svg width="16" height="16" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M20.7204 10.7779C21.0932 10.2388 21.0932 9.36466 20.7204 8.82551L14.9931 0.54203C14.6204 0.00287783 14.016 0.0028778 13.6432 0.54203C13.2704 1.08118 13.2704 1.95531 13.6432 2.49446L17.741 8.42115L0.954546 8.42115C0.427367 8.42115 3.53701e-07 9.03925 3.27835e-07 9.80173C3.0197e-07 10.5642 0.427367 11.1823 0.954546 11.1823L17.741 11.1823L13.6432 17.109C13.2704 17.6481 13.2704 18.5223 13.6432 19.0614C14.016 19.6006 14.6204 19.6006 14.9931 19.0614L20.7204 10.7779Z" fill="black" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 my-8 gap-8'>
                        {repeatArray.map((innerItem, innerIndex) => (
                            <div key={innerIndex} className="relative h-[300px]">
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
            ))}
        </div>
    );
};

export default GalleryEvent;