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
    const [showAlert, setShowAlert] = useState(false);
    const [isMarathi, setIsMarathi] = useState(false);

    // Detect current language from the googtrans cookie on mount
    useEffect(() => {
        const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]*)/);
        if (match && match[1].includes('/mr')) {
            setIsMarathi(true);
        }
    }, []);

    const switchLanguage = () => {
        const hostname = window.location.hostname;
        // Also compute root domain (strips leading "www." if present)
        // e.g. www.durgasakha.org → durgasakha.org
        const rootDomain = hostname.replace(/^www\./, '');

        if (isMarathi) {
            // Switching back to English: DELETE the cookie on every domain variant
            // Google Translate sets it on both www.durgasakha.org and .durgasakha.org
            const expiry = 'expires=Thu, 01 Jan 1970 00:00:00 UTC';
            document.cookie = `googtrans=; ${expiry}; path=/`;
            document.cookie = `googtrans=; ${expiry}; path=/; domain=${hostname}`;
            document.cookie = `googtrans=; ${expiry}; path=/; domain=.${hostname}`;
            document.cookie = `googtrans=; ${expiry}; path=/; domain=${rootDomain}`;
            document.cookie = `googtrans=; ${expiry}; path=/; domain=.${rootDomain}`;
        } else {
            // Switching to Marathi: set the cookie on all domain variants
            document.cookie = `googtrans=/en/mr; path=/`;
            document.cookie = `googtrans=/en/mr; path=/; domain=${hostname}`;
            document.cookie = `googtrans=/en/mr; path=/; domain=.${hostname}`;
            document.cookie = `googtrans=/en/mr; path=/; domain=${rootDomain}`;
            document.cookie = `googtrans=/en/mr; path=/; domain=.${rootDomain}`;
        }
        setIsMarathi(!isMarathi);
        window.location.reload();
    };

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
                <NavbarBrand as={Link} href="/" className="p-0">
                    <Image
                        src="/navbar/durgasakha-logo-navbar.png"
                        className="w-24 xs:w-28 xsm:w-32 sm:h-12 object-contain"
                        alt="Durgasakha"
                        width={200}
                        height={50}
                        priority
                    />
                </NavbarBrand>
                <div className="flex md:order-2 gap-2 xsm:gap-4 items-center">
                    <div
                        className='flex gap-1 xsm:gap-2 items-center cursor-pointer font-extrabold text-primary'
                        onClick={switchLanguage}
                        title={isMarathi ? 'Switch to English' : 'Switch to Marathi'}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 flex-shrink-0">
                            <path fillRule="evenodd" d="M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0V5.36l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z" clipRule="evenodd" />
                        </svg>
                        <span className="hidden xs:inline">{isMarathi ? 'English' : 'मराठी'}</span>
                    </div>
                    <Button as={Link} href="/donate" className="rounded-full bg-secondary">
                        Donate
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
                            className={`flex items-center justify-between w-full py-2 pl-3 pr-4 text-base border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-400 ${isTrekActive() ? 'text-primary font-bold' : ''}`}
                        >
                            <span>Treks</span>
                            <svg className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'treks' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        {openDropdown === 'treks' && (
                            <div className="bg-gray-50/50 dark:bg-gray-800/30 border-b border-gray-100 dark:border-gray-700">
                                <Link href="/upcoming-treks" legacyBehavior>
                                    <a
                                        className={`block py-2 pl-6 text-sm hover:text-primary ${isActive('/upcoming-treks') || 'text-gray-600 dark:text-gray-400'}`}
                                        onClick={handleMobileDropdownNav('/upcoming-treks')}
                                    >
                                        Upcoming Treks
                                    </a>
                                </Link>
                                <Link href="/past-treks" legacyBehavior>
                                    <a
                                        className={`block py-2 pl-6 text-sm border-t border-gray-50/50 dark:border-gray-800/50 hover:text-primary ${isActive('/past-treks') || 'text-gray-600 dark:text-gray-400'}`}
                                        onClick={handleMobileDropdownNav('/past-treks')}
                                    >
                                        Past Treks
                                    </a>
                                </Link>
                            </div>
                        )}

                        <button
                            onClick={handleDropdownClick('events')}
                            className={`flex items-center justify-between w-full py-2 pl-3 pr-4 text-base border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-400 ${isEventActive() ? 'text-primary font-bold' : ''}`}
                        >
                            <span>Events</span>
                            <svg className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'events' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        {openDropdown === 'events' && (
                            <div className="bg-gray-50/50 dark:bg-gray-800/30 border-b border-gray-100 dark:border-gray-700">
                                <Link href="/upcoming-events" legacyBehavior>
                                    <a
                                        className={`block py-2 pl-6 text-sm hover:text-primary ${isActive('/upcoming-events') || 'text-gray-600 dark:text-gray-400'}`}
                                        onClick={handleMobileDropdownNav('/upcoming-events')}
                                    >
                                        Upcoming Events
                                    </a>
                                </Link>
                                <Link href="/past-events" legacyBehavior>
                                    <a
                                        className={`block py-2 pl-6 text-sm border-t border-gray-50/50 dark:border-gray-800/50 hover:text-primary ${isActive('/past-events') || 'text-gray-600 dark:text-gray-400'}`}
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