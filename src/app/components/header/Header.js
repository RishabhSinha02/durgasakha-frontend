import Image from 'next/image';

export function Header({ background, title}) {
    return (
        <div className="h-96 md:h-[500px]">
            <div className="relative h-full">
                <Image 
                    src={background} 
                    alt="..." 
                    fill={true} 
                    style={{
                        objectFit: "cover",
                    }} />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-600 bg-opacity-40">
                    <h2 className="max-w-4xl text-4xl md:text-7xl font-bold text-white">{title}</h2>
                </div>
            </div>
        </div>
    )
}
