"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Button, Dropdown } from "flowbite-react";
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { HiEye, HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";

export default function CustomNavbar() {
    const pathname = usePathname();
    const [openDropdown, setOpenDropdown] = useState(null);
    const [showAlert, setShowAlert] = useState(true);

    const isActive = (path) => {
        return pathname === path ? 'text-primary font-bold' : '';
    };

    const isTrekActive = () => {
        const trekRoutes = ['/upcoming-treks', '/past-treks'];
        return trekRoutes.some(route => pathname.startsWith(route));
    };

    const isEventActive = () => {
        const eventRoutes = ['/upcoming-events', '/past-events'];
        return eventRoutes.some(route => pathname.startsWith(route));
    };

    const isGalleryActive = () => {
        return pathname.startsWith('/gallery');
    };

    const handleDropdownClick = (name) => (e) => {
        e.preventDefault();
        e.stopPropagation();
        setOpenDropdown(openDropdown === name ? null : name);
    };

    return (
        <div>
            {showAlert && <Alert
                color="failure"
                icon={HiInformationCircle}
                onDismiss={() => {
                    alert('Website Under Development! Are you sure you want to dismiss this alert?');
                    setShowAlert(false);
                }}
                rounded
            >
                <span className="font-bold">Website Under Development:</span> Please note that all content is placeholder and for testing purposes only.
            </Alert>}
            <Navbar fluid rounded>
                <NavbarBrand as={Link} href="/">
                    <Image
                        src="/navbar/durgasakha-logo-navbar.png"
                        className="mr-3 w-28 sm:h-12"
                        alt="Durgasakha"
                        width={80}
                        height={50}
                        priority
                    />
                </NavbarBrand>
                <div className="flex md:order-2 gap-4">
                    <div className='flex gap-2 items-center cursor-pointer font-extrabold text-primary'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0V5.36l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z" clipRule="evenodd" />
                        </svg>
                        मराठी
                    </div>
                    <Button as={Link} href="/donate" className="rounded-full bg-secondary">
                        Donate Now
                    </Button>
                    <NavbarToggle />
                </div>
                <NavbarCollapse>
                    <NavbarLink
                        href="/"
                        as={Link}
                        className={isActive('/')}
                    >
                        Home
                    </NavbarLink>
                    <NavbarLink
                        href="/about-us"
                        as={Link}
                        className={isActive('/about-us')}
                    >
                        About
                    </NavbarLink>

                    {/* Mobile Navigation */}
                    <div className="md:hidden">
                        <button
                            onClick={handleDropdownClick('treks')}
                            className="flex items-center w-full py-2 text-base"
                        >
                            Treks
                        </button>
                        {openDropdown === 'treks' && (
                            <div className="pl-4">
                                <Link href="/upcoming-treks" className="block py-2">
                                    Upcoming Treks
                                </Link>
                                <Link href="/past-treks" className="block py-2">
                                    Past Treks
                                </Link>
                            </div>
                        )}

                        <button
                            onClick={handleDropdownClick('events')}
                            className="flex items-center w-full py-2 text-base"
                        >
                            Events
                        </button>
                        {openDropdown === 'events' && (
                            <div className="pl-4">
                                <Link href="/upcoming-events" className="block py-2">
                                    Upcoming Events
                                </Link>
                                <Link href="/past-events" className="block py-2">
                                    Past Events
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <Dropdown
                            label={
                                <span className={isTrekActive() ? 'text-primary font-bold' : ''}>
                                    Treks
                                </span>
                            }
                            inline
                        >
                            <Dropdown.Item
                                as={Link}
                                href="/upcoming-treks"
                                className={isActive('/upcoming-treks')}
                            >
                                Upcoming Treks
                            </Dropdown.Item>
                            <Dropdown.Item
                                as={Link}
                                href="/past-treks"
                                className={isActive('/past-treks')}
                            >
                                Past Treks
                            </Dropdown.Item>
                        </Dropdown>
                    </div>

                    <div className="hidden md:block">
                        <Dropdown
                            label={
                                <span className={isEventActive() ? 'text-primary font-bold' : ''}>
                                    Events
                                </span>
                            }
                            inline
                        >
                            <Dropdown.Item
                                as={Link}
                                href="/upcoming-events"
                                className={isActive('/upcoming-events')}
                            >
                                Upcoming Events
                            </Dropdown.Item>
                            <Dropdown.Item
                                as={Link}
                                href="/past-events"
                                className={isActive('/past-events')}
                            >
                                Past Events
                            </Dropdown.Item>
                        </Dropdown>
                    </div>

                    <NavbarLink
                        href="/gallery"
                        as={Link}
                        className={isGalleryActive() ? 'text-primary font-bold' : ''}
                    >
                        Gallery
                    </NavbarLink>
                    <NavbarLink
                        href="/contact-us"
                        as={Link}
                        className={isActive('/contact-us')}
                    >
                        Contact
                    </NavbarLink>
                </NavbarCollapse>
            </Navbar>
        </div>
    );
}