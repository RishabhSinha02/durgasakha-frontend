"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Button,
  Dropdown,
  Alert,
} from "flowbite-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { HiInformationCircle } from "react-icons/hi";

export default function CustomNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  // Track selected language
  const [language, setLanguage] = useState("en");

  // Initialize from localStorage/cookies after mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved) {
        setLanguage(saved);
        // If the GT script is already ready, apply immediately
        if (typeof window !== "undefined" && window.__gt?.ready && saved !== "en") {
          window.__gt.applyLang(saved);
        }
      }
    } catch (e) {}
  }, []);

  // When Google Translate becomes ready, apply saved language
  useEffect(() => {
    const onReady = () => {
      try {
        const saved = localStorage.getItem("lang") || "en";
        if (saved !== "en") window.__gt?.applyLang(saved);
      } catch (e) {}
    };
    document.addEventListener("googleTranslateReady", onReady);
    return () => document.removeEventListener("googleTranslateReady", onReady);
  }, []);

  // Re-apply translation after SPA route changes (Next.js App Router)
  useEffect(() => {
    if (language && language !== "en") {
      // Slight delay allows page content to mount before translating
      const t = setTimeout(() => {
        window.__gt?.applyLang(language);
      }, 0);
      return () => clearTimeout(t);
    }
    // When switching back to English, also explicitly apply "en"
    if (language === "en") {
      window.__gt?.applyLang("en");
    }
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleLanguageChange = (lang) => {
    if (!lang || lang === language) return;
    setLanguage(lang);
    if (typeof window !== "undefined") {
      try { localStorage.setItem("lang", lang); } catch (e) {}
      document.documentElement.setAttribute("lang", lang);
      // If GT ready, apply now; if not, it will apply on readiness event
      if (window.__gt?.ready) {
        window.__gt.applyLang(lang);
      }
    }
  };

  const isActive = (path) => (pathname === path ? "text-primary font-bold" : "");
  const isTrekActive = () =>
    ["/upcoming-treks", "/past-treks"].some((route) => pathname.startsWith(route));
  const isEventActive = () =>
    ["/upcoming-events", "/past-events"].some((route) => pathname.startsWith(route));
  const isGalleryActive = () => pathname.startsWith("/gallery");

  const handleDropdownClick = (name) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleMobileDropdownNav = (href) => (e) => {
    e.preventDefault();
    setOpenDropdown(null);
    closeMobileNavbar();
    setTimeout(() => router.push(href), 120);
  };

  const closeMobileNavbar = () => {
    setOpenDropdown(null);
    const toggleButton = document.querySelector('[data-collapse-toggle="navbar-collapse"]');
    const navbarCollapse = document.getElementById("navbar-collapse");
    if (toggleButton && window.innerWidth < 768) {
      if (navbarCollapse && !navbarCollapse.classList.contains("hidden")) {
        toggleButton.click();
      }
    }
  };

  useEffect(() => {
    closeMobileNavbar();
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.querySelector('[data-testid="flowbite-navbar"]');
      if (navbar && !navbar.contains(event.target) && window.innerWidth < 768) {
        closeMobileNavbar();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div>
      {showAlert && (
        <Alert
          color="failure"
          icon={HiInformationCircle}
          onDismiss={() => {
            alert("Website Under Development! Are you sure you want to dismiss this alert?");
            setShowAlert(false);
          }}
          rounded
        >
          <span className="font-bold">Website Under Development:</span> Please note that all
          content is placeholder and for testing purposes only.
        </Alert>
      )}

      <Navbar fluid rounded>
        {/* Brand / Logo */}
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

        {/* Right side (Donate + Language + Toggle) */}
        <div className="flex md:order-2 gap-4 items-center">
          <Button as={Link} href="/donate" className="rounded-full bg-secondary">
            Donate
          </Button>

          {/* 🌐 Language Dropdown (Flowbite) */}
          <Dropdown
            label={
              <span>
                🌐 Change Lang
              </span>
            }
            inline
          >
            <Dropdown.Item onClick={() => handleLanguageChange("en")}>
              English
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleLanguageChange("hi")}>
              हिन्दी
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleLanguageChange("mr")}>
              मराठी
            </Dropdown.Item>
          </Dropdown>

          <NavbarToggle data-collapse-toggle="navbar-collapse" />
        </div>

        {/* Collapsible nav items */}
        <NavbarCollapse id="navbar-collapse">
          <NavbarLink href="/" as={Link} className={isActive("/")} onClick={closeMobileNavbar}>
            Home
          </NavbarLink>
          <NavbarLink
            href="/about-us"
            as={Link}
            className={isActive("/about-us")}
            onClick={closeMobileNavbar}
          >
            About
          </NavbarLink>

          {/* Mobile Treks */}
          <div className="md:hidden">
            <button
              onClick={handleDropdownClick("treks")}
              className="flex items-center w-full py-2 text-base"
            >
              Treks
            </button>
            {openDropdown === "treks" && (
              <div className="pl-4">
                <Link href="/upcoming-treks" legacyBehavior>
                  <a className="block py-2" onClick={handleMobileDropdownNav("/upcoming-treks")}>
                    Upcoming Treks
                  </a>
                </Link>
                <Link href="/past-treks" legacyBehavior>
                  <a className="block py-2" onClick={handleMobileDropdownNav("/past-treks")}>
                    Past Treks
                  </a>
                </Link>
              </div>
            )}

            <button
              onClick={handleDropdownClick("events")}
              className="flex items-center w-full py-2 text-base"
            >
              Events
            </button>
            {openDropdown === "events" && (
              <div className="pl-4">
                <Link href="/upcoming-events" legacyBehavior>
                  <a className="block py-2" onClick={handleMobileDropdownNav("/upcoming-events")}>
                    Upcoming Events
                  </a>
                </Link>
                <Link href="/past-events" legacyBehavior>
                  <a className="block py-2" onClick={handleMobileDropdownNav("/past-events")}>
                    Past Events
                  </a>
                </Link>
              </div>
            )}
          </div>

          {/* Desktop Treks */}
          <div className="hidden md:block">
            <Dropdown
              label={<span className={isTrekActive() ? "text-primary font-bold" : ""}>Treks</span>}
              inline
            >
              <Dropdown.Item as={Link} href="/upcoming-treks" className={isActive("/upcoming-treks")}>
                Upcoming Treks
              </Dropdown.Item>
              <Dropdown.Item as={Link} href="/past-treks" className={isActive("/past-treks")}>
                Past Treks
              </Dropdown.Item>
            </Dropdown>
          </div>

          {/* Desktop Events */}
          <div className="hidden md:block">
            <Dropdown
              label={<span className={isEventActive() ? "text-primary font-bold" : ""}>Events</span>}
              inline
            >
              <Dropdown.Item
                as={Link}
                href="/upcoming-events"
                className={isActive("/upcoming-events")}
              >
                Upcoming Events
              </Dropdown.Item>
              <Dropdown.Item as={Link} href="/past-events" className={isActive("/past-events")}>
                Past Events
              </Dropdown.Item>
            </Dropdown>
          </div>

          <NavbarLink
            href="/gallery"
            as={Link}
            className={isGalleryActive() ? "text-primary font-bold" : ""}
            onClick={closeMobileNavbar}
          >
            Gallery
          </NavbarLink>
          <NavbarLink
            href="/contact-us"
            as={Link}
            className={isActive("/contact-us")}
            onClick={closeMobileNavbar}
          >
            Contact
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
}
