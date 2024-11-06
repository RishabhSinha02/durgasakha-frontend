import { Button, Carousel } from "flowbite-react";
import Image from 'next/image';
import styles from "./Carousel.module.css"

export function CustomCarousel() {

  const carouselData = [
    {
      imageSrc : "/hero.png",
      title : "Discover Your Next Adventure with Durgasakha",
      subtitle : "We're a travel company driven by a mission to explore responsibly and make a difference. Join us in our journey to travel with heart and leave a positive impact.",
    },
    {
      imageSrc: "/nature.jpg",
      title: "Hello World",
      subtitle: "hello world",
    },
    {
      imageSrc: "https://flowbite.com/docs/images/carousel/carousel-2.svg",
      title: "Hello World",
      subtitle: "hello world",
    },
    {
      imageSrc: "https://flowbite.com/docs/images/carousel/carousel-2.svg",
      title: "Hello World",
      subtitle: "hello world",
    },
  ]

  return (
    <div className="h-96 md:h-[600px]">
      <Carousel slide={false} className={styles['carousel-no-rounded']}>
        {carouselData.map((item, index)=>(
          <div key={index} className="relative h-full">
            <Image src={item.imageSrc} alt="..." fill={true} style={{
              objectFit: "cover",
            }} />
            <div className="absolute inset-0 flex flex-col items-left justify-center pl-6 lg:pl-20">
              <h2 className="max-w-4xl text-4xl md:text-7xl font-bold text-white">{item.title}</h2>
              <p className="mt-3 text-sm md:text-lg text-white border-l-4 border-secondary pl-4 max-w-sm md:max-w-xl">{item.subtitle}</p>
              <div className="flex flex-row space-x-4 pl-8 mt-4">
                <Button className="rounded-full bg-secondary text-white">Book Now</Button>
                <Button className="rounded-full bg-white text-primary hover:text-white">View Treks</Button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}