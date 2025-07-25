// src/app/upcoming-treks/[id]/page.js
"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Itinerary from "@/app/components/upcoming-treks/itinerary";
import Link from "next/link";

export default function PastTrekDetailPage() {
  const { id } = useParams();
  const [trekObj, setTrekObj] = useState(null);

  useEffect(() => {
    fetch("/treks.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((trek) => trek.slug === id);
        setTrekObj(found);
      });
  }, [id]);

  if (!trekObj) return <div className="p-6">Loading...</div>;

  return (
    <div className="card lg:p-12 md:p-8 sm:p-4 p-4 flex flex-col gap-16 rounded-xl bg-white h-full border-gray-200 border">
      <div className="grid lg:grid-cols-8 md:grid-cols-1 grid-cols-1 gap-16">
        <div className="lg:h-[458px] md:h-[358px] h-[200px] lg:col-span-5 md:col-span-1 col-span-1 relative">
          <Image
            src={
              trekObj.images && trekObj.images[0]
                ? trekObj.images[0].image
                : trekObj.cover_image || "/default.png"
            }
            alt={trekObj.name}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="lg:col-span-3 md:col-span-1 col-span-1">
          <table className="table-auto text-left w-full">
            <tbody>
              <tr>
                <th className="font-bold">Venue</th>
                <td className="px-4 py-2">{trekObj.venue}</td>
              </tr>
              <tr>
                <th className="font-bold">Date</th>
                <td className="px-4 py-2">
                  {trekObj.start_date?.split("T")[0]}
                </td>
              </tr>
              {/* <tr>
                <th className="font-bold">Duration</th>
                <td className="px-4 py-2">{`${Math.floor(
                  (new Date(trekObj.end_date) - new Date(trekObj.start_date)) /
                    (1000 * 60 * 60 * 24)
                )} days`}</td>
              </tr> */}
              <tr>
                <th className="font-bold">Event Category</th>
                <td className="px-4 py-2">Trek</td>
              </tr>
              <tr>
                <th className="font-bold">Phone</th>
                <td className="px-4 py-2">+91 97735 37532</td>
              </tr>
              <tr>
                <th className="font-bold">Email</th>
                <td className="px-4 py-2">durgasakha@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Section title="Overview" content={trekObj.overview} />
      <Section title="Highlights" content={trekObj.highlights} />

      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
            Photos
          </h1>
          <div>
            <Link href={`/gallery/treks/${trekObj.slug}`}>
              <button className="flex items-center text-sm md:text-lg sm:text-sm gap-2 border border-black hover:border-primary hover:text-primary px-2 py-2 md:px-4 md:py-2 sm:px-2 sm:py-2 rounded-full">
                View All
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-4 md:size-5 sm:size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 my-8">
          {trekObj.images.slice(0, 4).map((imgObj, idx) => (
            <div
              key={idx}
              className="relative h-[150px] md:h-[200px] sm:h-[150px]"
            >
              <Image
                src={imgObj.image}
                alt={`Image ${idx + 1}`}
                className="object-cover h-full w-full rounded-lg"
                width={600}
                height={400}
              />
            </div>
          ))}
        </div>
      </div>

      {trekObj.itinerary && trekObj.itinerary.length > 0 && (
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
            Itinerary
          </h1>
          <div className="mt-1 text-sm md:text-sm text-justify max-w-7xl">
            <Itinerary itinerary={trekObj.itinerary} />
          </div>
        </div>
      )}

      {trekObj.things_to_carry && (
        <Section title="Things to Carry" content={trekObj.things_to_carry} />
      )}
      <Section
        title="Join Us"
        content="Be a Part of Something Meaningful. At Durga Sakha, we believe in the power of community and the joy of shared experiences. Whether you're passionate about treks, cultural events, or social impact — there's a place for you here. Join us in creating memories, building connections, and making a difference — one event at a time."
      />
    </div>
  );
}

function Section({ title, content }) {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
        {title}
      </h1>
      <p className="mt-1 text-sm md:text-sm text-justify max-w-7xl">
        {content}
      </p>
    </div>
  );
}
