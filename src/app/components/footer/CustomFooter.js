import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsPhone,
} from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { CiMail, CiLocationOn } from "react-icons/ci";
import styles from "./Footer.module.css";
import Link from "next/link";

export default function CustomFooter() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between gap-4 sm:flex sm:justify-between md:grid-cols-1 items-center">
          <div className="flex flex-col gap-8">
            <FooterBrand
              as={Link}
              href="/"
              src="/footer/durgasakha-logo-footer.png"
              alt="Durgasakha"
              className={styles["footer-logo"]}
            />
            <p className="max-w-96 text-secondary font-bold">
              Discover the story behind Durgasakha - a passionate team dedicated
              to blending adventure with altruism. Learn about our mission to
              promote responsible travel and support communities in need.
            </p>
            <div className="flex flex-col">
              <span className="flex items-center gap-2 ">
                <IoCallOutline size={20} />
                <Link href="tel:+91 9773537532"> +91 97735 37532</Link>
              </span>
              <span className="flex items-center gap-2">
                <CiMail size={20} />
                <Link href="mailto:durgasakha@gmail.com">
                  durgasakha@gmail.com
                </Link>
              </span>
              <span className="flex items-center gap-2">
                <CiLocationOn className="text-[20px] shrink-0" />
                <Link href="location">
                  Durgasakha Charitable Trust Cosmos County CASA, B Wing, flat
                  no 1C, Ovla GB Road, Thane (west) – 400615
                </Link>
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="Important Links" className="text-primary" />
              <FooterLinkGroup col>
                <FooterLink as={Link} href="/" className={styles["nav-links"]}>
                  Home
                </FooterLink>
                <FooterLink
                  as={Link}
                  href="/about-us"
                  className={styles["nav-links"]}
                >
                  About
                </FooterLink>
                <FooterLink
                  as={Link}
                  href="/upcoming-treks"
                  className={styles["nav-links"]}
                >
                  Upcoming Treks
                </FooterLink>
                <FooterLink
                  as={Link}
                  href="/upcoming-events"
                  className={styles["nav-links"]}
                >
                  Upcoming Events
                </FooterLink>
                <FooterLink
                  as={Link}
                  href="/gallery"
                  className={styles["nav-links"]}
                >
                  Gallery
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Follow us" className="text-primary" />
              <FooterLinkGroup col>
                <FooterLink
                  as={Link}
                  href="https://www.instagram.com/shree_durgasakha_trust/"
                  className={styles["nav-links"]}
                >
                  Instagram
                </FooterLink>
                <FooterLink
                  as={Link}
                  href="https://www.facebook.com/share/1AbTBJrGjd/?mibextid=wwXIfr"
                  className={styles["nav-links"]}
                >
                  Facebook
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Reach us" className="text-primary" />
              <FooterLinkGroup col>
                <FooterLink
                  as={Link}
                  href="/contact-us"
                  className={styles["nav-links"]}
                >
                  Contact us
                </FooterLink>
                <FooterLink
                  as={Link}
                  href="/donate"
                  className={styles["nav-links"]}
                >
                  Donate
                </FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright
            as={Link}
            href="#"
            by="Durgasakha"
            year={2025}
            className="text-secondary"
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon
              as={Link}
              href="https://www.instagram.com/shree_durgasakha_trust/"
              icon={BsInstagram}
              className="text-primary"
            />
            <FooterIcon
              as={Link}
              href="https://www.facebook.com/share/1AbTBJrGjd/?mibextid=wwXIfr"
              icon={BsFacebook}
              className="text-primary"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}