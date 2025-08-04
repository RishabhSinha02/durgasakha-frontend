import Itinerary from "@/app/components/upcoming-treks/itinerary";
import Image from "next/image";
import { API_URL } from "@/app/config/api";
import BankDetails from "@/app/components/donate/BankDetails";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { id } = params;
  const res = await fetch(`${API_URL}/api/trek/${id}`);
  const trekObj = await res.json();

  return {
    title: `${trekObj.name} – Adventure starts at ₹${trekObj.price} | Durgasakha Treks`,
    description: trekObj.overview?.slice(0, 150),
    openGraph: {
      title: `${trekObj.name} – Adventure starts at ₹${trekObj.price} | Durgasakha Treks`,
      description: trekObj.overview,
      images: trekObj.cover_image,
      url: `https://durgasakha.com/upcoming-treks/${id}`,
      type: "website",
    },
    other: {
      "product:price:amount": trekObj.price,
      "product:price:currency": "INR",
      "product:availability": "in_stock",
      "product:brand": "Durgasakha",
      "product:category": "Trekking",
    }
  };
}

export default async function TrekDetail({ params }) {
  const { id } = params;
  const trekObj = await fetch(`${API_URL}/api/trek/${id}`).then((res) =>
    res.json()
  );

  return (
    <>
      <div className="card lg:m-16 md:m-8 sm:m-4 m-4 lg:p-12 md:p-8 sm:p-4 p-4 flex flex-col gap-16 rounded-xl bg-white h-full border-gray-200 border">
        <div className="grid lg:grid-cols-8 md:grid-cols-1 grid-cols-1 gap-16">
          <div
            className="lg:h-[458px] md:h-[358px] h-[200px] lg:col-span-5 md:col-span-1 col-span-1"
            style={{ position: "relative" }}
          >
            <Image
              src={trekObj.cover_image}
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="lg:col-span-3 md:col-span-1 col-span-1">
            <table className="table-auto text-left w-full">
              <tbody>
                <tr>
                  <th className="font-bold">Name</th>
                  <td className="px-4 py-2">{trekObj.name}</td>
                </tr>
                <tr>
                  <th className="font-bold">Venue</th>
                  <td className="px-4 py-2">{trekObj.venue}</td>
                </tr>
                <tr>
                  <th className=" font-bold">Date</th>
                  <td className="px-4 py-2">
                    {`${trekObj.start_date.split("T")[0]} - ${
                      trekObj.end_date.split("T")[0]
                    }`}
                  </td>
                </tr>
                <tr>
                  <th className=" font-bold">Duration</th>
                  <td className="px-4 py-2">
                    {`${Math.floor(
                      (new Date(trekObj.end_date) -
                        new Date(trekObj.start_date)) /
                        (1000 * 60 * 60 * 24)
                    )} days ${Math.floor(
                      ((new Date(trekObj.end_date) -
                        new Date(trekObj.start_date)) %
                        (1000 * 60 * 60 * 24)) /
                        (1000 * 60 * 60)
                    )} hours`}
                  </td>
                </tr>
                <tr>
                  <th className=" font-bold">Level</th>
                  <td className="px-4 py-2">{trekObj.level}</td>
                </tr>
                <tr>
                  <th className=" font-bold">Phone</th>
                  <td className="px-4 py-2">+91 97735 37532</td>
                </tr>
                <tr>
                  <th className=" font-bold">Email</th>
                  <td className="px-4 py-2">durgasakha@gmail.com</td>
                </tr>
                <tr>
                  <th className=" font-bold">Price</th>
                  <td className="px-4 py-2">Rs. {trekObj.price}</td>
                </tr>
                <tr>
                  <td colSpan="2" className="px-4 pt-12 text-center">
                    <a href="#payment-details">
                      <button className="bg-secondary text-white px-8 py-2 rounded-full font-bold">
                        Book Now
                      </button>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
            Overview
          </h1>
          <p className="mt-1 text-sm md:text-sm text-justify max-w-7xl">
            {trekObj.overview}
          </p>
        </div>

        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
            Highlights
          </h1>
          <p className="mt-1 text-sm md:text-sm text-justify max-w-7xl">
            {trekObj.highlights}
          </p>
        </div>

        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
            Itinerary
          </h1>
          <div className="mt-1 text-sm md:text-sm text-justify max-w-7xl">
            <Itinerary itinerary={trekObj.itinerary} />
          </div>
        </div>

        <div id="payment-details">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
            Payment Details
          </h1>
          <div className="max-w-5xl flex flex-col items-center justify-center mx-auto">
            <BankDetails  />
          </div>
        </div>

        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
            Things to Carry
          </h1>
          <p className="mt-1 text-sm md:text-sm text-justify max-w-7xl">
            {trekObj.things_to_carry}
          </p>
        </div>

        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
            Join Us
          </h1>
          <p className="mt-1 text-sm md:text-sm text-justify max-w-7xl">
            Be a Part of Something Meaningful. At Durgasakha, we believe in the
            power of community and the joy of shared experiences. Whether you&apos;re
            passionate about treks, cultural events, or social impact — there&apos;s
            a place for you here. Join us in creating memories, building
            connections, and making a difference — one event at a time.
          </p>
        </div>
      </div>
    </>
  );
}
