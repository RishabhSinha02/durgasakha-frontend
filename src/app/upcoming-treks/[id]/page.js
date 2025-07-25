// src/app/upcoming-treks/[id]/page.js
"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Itinerary from "@/app/components/upcoming-treks/itinerary";

export default function TrekDetailPage() {
  const { id } = useParams();
  const [trekObj, setTrekObj] = useState(null);

  useEffect(() => {
    fetch("/upcoming-treks.json")
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

      {trekObj.images && trekObj.images.length > 0 && (
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
            Photos
          </h1>
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
      )}

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

      {/* UPI ID for payment make it click to copy */}
      <div className="flex flex-col items-start mt-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
          Payment Details
        </h1>
        <p className="text-sm md:text-base text-gray-600 mb-4">
          Please use the following UPI ID for payment:
        </p>
        <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <p className="text-xs sm:text-sm font-medium text-gray-600 mb-0.5 sm:mb-1">
                UPI ID
              </p>
              <p className="text-base sm:text-lg font-semibold text-gray-900 break-all">
                {trekObj.upi_id}
              </p>
            </div>
            <button
              onClick={() => copyToClipboard(trekObj.upi_id)}
              className="ml-2 sm:ml-4 p-1 sm:p-2 text-gray-500 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
              title="Copy to clipboard"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <Section
        title="Join Us"
        content={`Be a Part of Something Meaningful.\nAt Durgasakha, we believe in the power of community and the joy of shared experiences. Whether you're passionate about treks, cultural events, or social impact — there's a place for you here.\n\nJoin us in creating memories, building connections, and making a difference — one event at a time.`}
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
