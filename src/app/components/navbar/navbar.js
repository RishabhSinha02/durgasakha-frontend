import Image from 'next/image';
import Link from 'next/link';
export default function Navbar({ page }) {
    return (
        <div className="flex justify-between px-4 items-center font-bold bg-white">
            <div>
                <Image
                    src="/navbar/durgasakha-logo-navbar.png"
                    alt="Site Logo"
                    width={167}
                    height={62}
                />
            </div>
            <div className='flex gap-12'>
                <div style={{ color: page === 1 ? '#D8423F' : 'black' }}>
                    <Link href='/'>Home</Link>
                </div>
                <div style={{ color: page === 2 ? '#D8423F' : 'black' }}>
                   <Link href='/about-us'> About Us </Link>
                </div>
                <div style={{ color: page === 3 ? '#D8423F' : 'black' }}>
                     <Link href='/'>Treks</Link>
                </div>
                <div style={{ color: page === 4 ? '#D8423F' : 'black' }}>
                     <Link href='/'>Events</Link>
                </div>
                <div style={{ color: page === 5 ? '#D8423F' : 'black' }}>
                     <Link href='/gallery'>Gallery</Link>
                </div>
                <div style={{ color: page === 6 ? '#D8423F' : 'black' }}>
                     <Link href='/contact-us'>Contact Us</Link>
                </div>
            </div>
            <div>
                <Link href='/donate'>
                <div className='p-2 px-4 rounded-3xl cursor-pointer text-white' style={{backgroundColor:'#7D4555'}}>
                    Donate Now
                </div>
                </Link>
            </div>
        </div>
    );
}
