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
            <div className='flex gap-8 items-center'>
                <div className='flex gap-2 items-center cursor-pointer font-extrabold' style={{ color: '#D8423F' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                        <path fill-rule="evenodd" d="M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0V5.36l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z" clip-rule="evenodd" />
                    </svg>

                    मराठी
                </div>
                <Link href='/donate'>
                    <div className='p-2 px-4 rounded-3xl cursor-pointer text-white' style={{ backgroundColor: '#7D4555' }}>
                        Donate Now
                    </div>
                </Link>
            </div>
        </div>
    );
}
