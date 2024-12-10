import { Button, Carousel } from "flowbite-react";
import Image from "next/image";
import styles from "./Carousel.module.css";
import { API_URL } from "@/app/config/api";
import Link from "next/link";

export async function CustomCarousel() {
  const carouselData = await fetch(`${API_URL}/api/core/carousel`).then((res) =>
    res.json()
  );

  return (
    <div className="h-96 md:h-[600px]">
      <Carousel slide={false} className={styles["carousel-no-rounded"]}>
        {carouselData.map((item, index) => (
          <div key={index} className="relative h-full">
            <Image
              src={item.image}
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
                {item.sub_title}
              </p>
              <div className="flex flex-row space-x-4 pl-8 mt-4">
                <Link href={item.button1_link}>
                  <Button className="rounded-full bg-secondary text-white">
                    {item.button1_text}
                  </Button>
                </Link>
                <Link href={item.button2_link}>
                  <Button className="rounded-full bg-white text-primary hover:text-white">
                    {item.button2_text}
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
