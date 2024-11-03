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
                <div className="absolute inset-0 rounded-full bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-center line-clamp-5 p-1">{bio}</span>
                    {/* Social Icons positioned on right border */}
                    <div className="absolute w-full h-full">
                        {/* Top Right icon */}
                        <div className="absolute top-0 -right-0">
                            <BsInstagram className="w-8 h-8 text-primary hover:scale-110 transition-transform bg-opacity-0"/>
                        </div>
                        
                        {/* Right Top-Middle icon */}
                        <div className="absolute top-12 -right-7">
                            <BsFacebook className="w-8 h-8 text-primary hover:scale-110 transition-transform" />
                        </div>
                        
                        {/* Right Bottom-Middle icon */}
                        <div className="absolute top-24 -right-8">
                            <BsLinkedin className="w-8 h-8 text-primary hover:scale-110 transition-transform" />
                        </div>

                        {/* Bottom Right icon */}
                        <div className="absolute bottom-4 -right-2">
                            <BsTwitter className="w-8 h-8 text-primary hover:scale-110 transition-transform" />
                        </div>
                    </div>
                </div>
                
            </div>
            <h1 className="text-primary text-xl font-bold max-w-48 text-center max-h-16 line-clamp-2">{name}</h1>
        </div>
    )
}
