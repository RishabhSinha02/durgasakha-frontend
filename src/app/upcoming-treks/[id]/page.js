import Itinerary from "@/app/components/upcoming-treks/itinerary";
import Image from "next/image";
import Link from "next/link";
import { API_URL } from "@/app/config/api";
import BankDetails from "@/app/components/donate/BankDetails";
import { formatDateTime } from "@/app/utils/format";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { id } = params;
  const res = await fetch(`${API_URL}/api/trek/${id}`);
  const trekObj = await res.json();

  return {
    title: `${trekObj.name} – ${formatDateTime(trekObj.start_date)} – Adventure starts at ₹${trekObj.price} | Durgasakha Treks`,
    description: trekObj.overview?.slice(0, 150),
    openGraph: {
      title: `${trekObj.name} – ${formatDateTime(trekObj.start_date)} – Adventure starts at ₹${trekObj.price} | Durgasakha Treks`,
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
    },
  };
}

export default async function TrekDetail({ params }) {
  const { id } = params;
  const trekObj = await fetch(`${API_URL}/api/trek/${id}`).then((res) =>
    res.json()
  );

  return (
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
                  <th className=" font-bold">Starts</th>
                  <td className="px-4 py-2">
                    {`${formatDateTime(trekObj.start_date)}`}
                  </td>
                </tr>
                <tr>
                  <th className=" font-bold">Ends</th>
                  <td className="px-4 py-2">
                    {`${formatDateTime(trekObj.end_date)}`}
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
                  <th className=" font-bold whitespace-nowrap">Trek Lead</th>
                  <td className="px-4 py-2">{trekObj.trek_lead}</td>
                </tr>
                <tr>
                  <th className=" font-bold">Trek Lag</th>
                  <td className="px-4 py-2">{trekObj.trek_lag}</td>
                </tr>
                <tr>
                  <th className=" font-bold">Contact</th>
                  <td className="px-4 py-2">{trekObj.contact_numbers}</td>
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
          <p className="mt-1 text-sm md:text-sm text-left max-w-7xl whitespace-pre-line">
            {trekObj.overview}
          </p>
        </div>

        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
            Highlights
          </h1>
          <p className="mt-1 text-sm md:text-sm text-left max-w-7xl whitespace-pre-line">
            {trekObj.highlights}
          </p>
        </div>

        <div>
          <div className="flex justify-between">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
              Photos
            </h1>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 my-8">
            {trekObj.images.slice(0, 4).map((item, index) => (
              <div
                key={index}
                className="relative h-[150px] md:h-[200px] sm:h-[150px]"
              >
                <div className="h-full w-full">
                  <Image
                    src={item.image}
                    alt={"Social Work"}
                    className="object-cover h-full w-full"
                    width={600}
                    height={400}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
            Itinerary
          </h1>
          <div className="mt-1 text-sm md:text-sm text-left max-w-7xl">
            <Itinerary itinerary={trekObj.itinerary} />
          </div>
        </div>

        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
            Things to Carry
          </h1>
          <p className="mt-1 text-sm md:text-sm text-left max-w-7xl whitespace-pre-line">
            {trekObj.things_to_carry}
          </p>
        </div>

        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
            What is Included
          </h1>
          <p className="mt-1 text-sm md:text-sm text-left max-w-7xl whitespace-pre-line">
            {trekObj.what_is_included}
          </p>
        </div>

        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6  whitespace-pre-line">
            What is Not Included
          </h1>
          <p className="mt-1 text-sm md:text-sm text-left max-w-7xl">
            {trekObj.what_is_not_included}
          </p>
        </div>

        <div id="payment-details">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
            Payment Details
          </h1>
          <div className="max-w-5xl flex flex-col items-center left-center mx-auto">
            <BankDetails />
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg font-semibold mb-4">
              After completing your payment, please fill out this form to confirm your booking:
            </p>
            <Link
              href={trekObj.booking_confirmation_form || "https://forms.gle/Bae128w5bLRceKHs5"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-6 py-2 rounded-full font-bold hover:bg-primary-dark transition"
            >
              Booking Confirmation Form
            </Link>
          </div>
        </div>

        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
            Join Us
          </h1>
          <p className="mt-1 text-sm md:text-sm text-left max-w-7xl">
            Be a Part of Something Meaningful. At Durgasakha, we believe in the
            power of community and the joy of shared experiences. Whether
            you&apos;re passionate about treks, cultural events, or social
            impact — there&apos;s a place for you here. Join us in creating
            memories, building connections, and making a difference — one event
            at a time.
          </p>
        </div>
      </div>
  );
}
