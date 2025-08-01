import React from "react";
import Image from "next/image";
import Link from "next/link";

const TrekCard = ({ trek }) => {
  return (
    <div className="relative max-full overflow-hidden rounded-lg bg-white shadow-lg">
      {/* Background Image Section */}
      <div className="relative h-[300px]">
        <div className="h-full w-full bg-black">
          <Image
            src={trek.cover_image}
            alt={trek.name}
            className="object-cover h-full w-full opacity-50"
            width={600}
            height={400}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent">
          <h3 className="p-6 text-md font-semibold text-white">{trek.level}</h3>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h2 className="text-3xl font-bold text-white">{trek.name}</h2>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="mb-6 flex justify-between">
          <div className="text-sm font-bold">
            {new Date(trek.start_date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </div>
          <div className="text-sm font-bold">{trek.venue}</div>
        </div>

        <p className="mb-6 text-sm text-gray-600">{trek.overview}</p>

        <div className="flex items-center justify-between">
          <Link
            href={`upcoming-treks/${trek.uuid}`}
            className="flex items-center gap-2 rounded-full bg-[#D84E4E] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-[#C23E3E]"
          >
            Join Now
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="stroke-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <div className="text-2xl font-bold">Rs. {trek.price}</div>
        </div>
      </div>
    </div>
  );
};

export default TrekCard;
