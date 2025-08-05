"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Button, Dropdown } from "flowbite-react";
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { HiEye, HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";

export default function CustomNavbar() {
    const pathname = usePathname();
    const router = useRouter();
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

    const handleDropdownItemClick = () => {
        // Close dropdown first
        setOpenDropdown(null);
        // Then close the navbar
        closeMobileNavbar();
    };

    // For mobile dropdown items: close dropdown, close navbar, then navigate
    const handleMobileDropdownNav = (href) => (e) => {
        e.preventDefault();
        setOpenDropdown(null);
        closeMobileNavbar();
        // Use a small delay to ensure navbar closes before navigation
        setTimeout(() => {
            router.push(href);
        }, 120);
    };

    const closeMobileNavbar = () => {
        // Close any open dropdowns first
        setOpenDropdown(null);
        
        // Find and click the navbar toggle button to close the mobile menu
        const toggleButton = document.querySelector('[data-collapse-toggle="navbar-collapse"]');
        const navbarCollapse = document.getElementById('navbar-collapse');
        if (toggleButton && window.innerWidth < 768) {
            // Check if navbar is currently open
            if (navbarCollapse && !navbarCollapse.classList.contains('hidden')) {
                toggleButton.click();
            }
        }
    };

    // Close navbar when pathname changes (navigation occurs)
    useEffect(() => {
        closeMobileNavbar();
    }, [pathname]);

    // Close navbar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            const navbar = document.querySelector('[data-testid="flowbite-navbar"]');
            if (navbar && !navbar.contains(event.target) && window.innerWidth < 768) {
                closeMobileNavbar();
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

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
                    <Button as={Link} href="/donate" className="rounded-full bg-secondary">
                        Donate Now
                    </Button>
                    <NavbarToggle data-collapse-toggle="navbar-collapse" />
                </div>
                <NavbarCollapse id="navbar-collapse">
                    <NavbarLink
                        href="/"
                        as={Link}
                        className={isActive('/')}
                        onClick={closeMobileNavbar}
                    >
                        Home
                    </NavbarLink>
                    <NavbarLink
                        href="/about-us"
                        as={Link}
                        className={isActive('/about-us')}
                        onClick={closeMobileNavbar}
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
                                <Link href="/upcoming-treks" legacyBehavior>
                                    <a
                                        className="block py-2"
                                        onClick={handleMobileDropdownNav('/upcoming-treks')}
                                    >
                                        Upcoming Treks
                                    </a>
                                </Link>
                                <Link href="/past-treks" legacyBehavior>
                                    <a
                                        className="block py-2"
                                        onClick={handleMobileDropdownNav('/past-treks')}
                                    >
                                        Past Treks
                                    </a>
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
                                <Link href="/upcoming-events" legacyBehavior>
                                    <a
                                        className="block py-2"
                                        onClick={handleMobileDropdownNav('/upcoming-events')}
                                    >
                                        Upcoming Events
                                    </a>
                                </Link>
                                <Link href="/past-events" legacyBehavior>
                                    <a
                                        className="block py-2"
                                        onClick={handleMobileDropdownNav('/past-events')}
                                    >
                                        Past Events
                                    </a>
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
                        onClick={closeMobileNavbar}
                    >
                        Gallery
                    </NavbarLink>
                    <NavbarLink
                        href="/contact-us"
                        as={Link}
                        className={isActive('/contact-us')}
                        onClick={closeMobileNavbar}
                    >
                        Contact
                    </NavbarLink>
                </NavbarCollapse>
            </Navbar>
        </div>
    );
}