import Image from 'next/image';
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

export function MemberProfile({ imageSrc, name, bio}) {
    return (
        <div className="flex flex-col items-center">
            <div className="relative w-[200px] h-[200px] group cursor-pointer">
                <Image 
                    src={imageSrc}
                    alt={name}
                    fill
                    className="rounded-full object-cover hover:bg-black hover:bg-opacity-40"	
                />
                <div className="absolute inset-0 rounded-full bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-center line-clamp-5 p-1">{bio}</span>
                    {/* Social Icons positioned on right border */}
                </div>
                
            </div>
            <h1 className="text-primary text-xl font-bold max-w-48 text-center max-h-16 line-clamp-2">{name}</h1>
        </div>
    )
}
