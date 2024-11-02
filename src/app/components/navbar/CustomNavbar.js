import Link from 'next/link';
import Image from 'next/image';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Button } from "flowbite-react";

export default function CustomNavbar() {
    return (
        <Navbar fluid rounded>
            <NavbarBrand as={Link} href="/">
                <Image 
                    src="/navbar/durgasakha-logo-navbar.png" 
                    className="mr-3 w-28 sm:h-12" 
                    alt="Durgasakha" 
                    width={80}
                    height={50}
                    />
            </NavbarBrand> 
            <div className="flex md:order-2 gap-4">
                <div className='flex gap-2 items-center cursor-pointer font-extrabold' style={{ color: '#D8423F' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                        <path fillRule="evenodd" d="M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0V5.36l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z" clipRule="evenodd" />
                    </svg>
                    मराठी
                </div>
                <Button className="rounded-full">Donate Now</Button>
                <NavbarToggle />
            </div>
            <NavbarCollapse>
                <NavbarLink href="#" active>
                    Home
                </NavbarLink>
                <NavbarLink as={Link} href="#">
                    About
                </NavbarLink>
                <NavbarLink href="#">Treks</NavbarLink>
                <NavbarLink href="#">Events</NavbarLink>
                <NavbarLink href="#">Gallery</NavbarLink>
                <NavbarLink href="#">Contact</NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}
