import { Card } from "flowbite-react";
import Image from "next/image";

export function EventCard() {
  return (
    <Card
      className="max-w-sm"
      renderImage={() => <Image width={500} height={600} src="/event.png" alt="image 1" />}
    >
      <h5 className="text-2xl font-bold tracking-tight dark:text-white text-primary">
      School Kit Distribution - 2019
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Where Adventure Meets Purpose! We are thrilled to have you here. At Durgasakha, we are more than just a travel company. We are a
      </p>
    </Card>
  );
}
