import { Carousel } from "flowbite-react";
import Image from 'next/image';

export function CustomCarousel() {
  return (
    <div className="h-56 sm:h-96 xl:h-80 2xl:h-96">
      <Carousel slide={false}>
        <Image src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." width={1100} height={500}/>
        <Image src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." width={1100} height={500}/>
        <Image src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." width={1100} height={500}/>
        <Image src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." width={1100} height={500}/>
        <Image src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." width={1100} height={500}/>
      </Carousel>
    </div>
  );
}