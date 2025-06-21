import { Button, Carousel } from "flowbite-react";
import Image from "next/image";
import styles from "./Carousel.module.css";
import Link from "next/link";

export function CustomCarousel() {
  const carouselData = [
    {
      imageSrc: "/hero.png",
      title: "Discover Your Next Adventure with Durgasakha",
      subtitle:
        "Durgasakha is a passionate community of trekkers and explorers dedicated to promoting responsible travel and cultural heritage.",
      button1: "Donate Now",
      button1_link: "/donate",
      button2: "View Treks",
      button2_link: "/upcoming-treks",
    },
    {
      imageSrc: "/events/18june2023-donation-event/image-10.jpeg",
      title: "Our Mission",
      subtitle:
        "We strive to create memorable trekking experiences while preserving nature and empowering local communities.",
      button1: "Know More",
      button1_link: "/about-us",
      button2: "Join Us",
      button2_link: "/contact-us",
    },
    {
      imageSrc: "/carousel3.jpg",
      title: "Our Values",
      subtitle:
        "Integrity, sustainability, and inclusivity guide every journey we organize and every story we share.",
      button1: "Explore Values",
      button1_link: "/about-us",
      button2: "Get Involved",
      button2_link: "/contact-us",
    },
    {
      imageSrc: "/carousel4.jpg",
      title: "Join Our Journey",
      subtitle:
        "Become part of a movement that celebrates adventure, learning, and positive impact through travel.",
      button1: "Join Us",
      button1_link: "/about-us",
      button2: "Upcoming Treks",
      button2_link: "/upcoming-treks",
    },
  ];

  return (
    <div className="h-96 md:h-[600px]">
      <Carousel slide={true} className={styles["carousel-no-rounded"]}>
        {carouselData.map((item, index) => (
          <div key={index} className="relative h-full">
            <Image
              src={item.imageSrc}
              alt="..."
              fill={true}
              style={{
                objectFit: "cover",
              }}
            />
            <div className="absolute inset-0 flex flex-col items-left justify-center pl-6 lg:pl-20">
              <h2 className="max-w-4xl text-4xl md:text-7xl font-bold text-white">
                {item.title}
              </h2>
              <p className="mt-3 text-sm md:text-lg text-white border-l-4 border-secondary pl-4 max-w-sm md:max-w-xl">
                {item.subtitle}
              </p>
              <div className="flex flex-row space-x-4 pl-8 mt-4">
                <Link href={item.button1_link}>
                  <Button className="rounded-full bg-secondary text-white">
                    {item.button1}
                  </Button>
                </Link>
                <Link href={item.button2_link}>
                  <Button className="rounded-full bg-white text-primary hover:text-white">
                    {item.button2}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
