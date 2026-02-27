import { API_URL } from "@/app/config/api";
import Image from "next/image";
import Link from "next/link";
import { formatDateTime } from "@/app/utils/format";
import { Header } from "../../components/header/Header";
import EventBankDetails from "@/app/components/donate/EventBankDetails";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { id } = params;
  const res = await fetch(`${API_URL}/api/event/${id}`);
  const event = await res.json();

  return {
    title: `${event.name} – ${formatDateTime(event.start_date)} | Shree Durgsakha Charitable Trust`,
    description: event.overview?.slice(0, 150),
    openGraph: {
      title: `${event.name} – ${formatDateTime(event.start_date)} | Shree Durgsakha Charitable Trust`,
      description: event.overview,
      images: event.cover_image,
    },
  };
}

export default async function PastTrekDetailPage({ params }) {
  const { id } = await params;
  const event = await fetch(`${API_URL}/api/event/${id}`).then((res) =>
    res.json()
  );
  return (
    <>
      <div>
        <Header background={event.cover_image} title={event.name} />
      </div>
      <div className="card lg:m-16 md:m-8 sm:m-4 m-4 lg:p-12 md:p-8 sm:p-4 p-4 flex flex-col gap-16 rounded-xl bg-white h-full border-gray-200 border">
        <div className="grid lg:grid-cols-8 md:grid-cols-1 grid-cols-1 gap-16">
          <div
            className="lg:h-[458px] md:h-[358px] h-[200px] lg:col-span-5 md:col-span-1 col-span-1"
            style={{ position: "relative" }}
          >
            <Image
              src={event.event_image}
              alt={event.name}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="lg:col-span-3 md:col-span-1 col-span-1">
            <table className="table-auto text-left w-full">
              <tbody>
                <tr>
                  <th className="font-bold">Venue</th>
                  <td className="px-4 py-2">{event.name}</td>
                </tr>
                <tr>
                  <th className=" font-bold">Starts</th>
                  <td className="px-4 py-2">
                    {`${formatDateTime(event.start_date)}`}
                  </td>
                </tr>
                <tr>
                  <th className=" font-bold">Ends</th>
                  <td className="px-4 py-2">
                    {`${formatDateTime(event.end_date)}`}
                  </td>
                </tr>
                <tr>
                  <th className=" font-bold">Duration</th>
                  <td className="px-4 py-2">
                    {`${Math.floor(
                      (new Date(event.end_date) - new Date(event.start_date)) /
                        (1000 * 60 * 60 * 24)
                    )} days ${Math.floor(
                      ((new Date(event.end_date) - new Date(event.start_date)) %
                        (1000 * 60 * 60 * 24)) /
                        (1000 * 60 * 60)
                    )} hours`}
                  </td>
                </tr>
                <tr>
                  <th className=" font-bold whitespace-nowrap">Event Coordinator</th>
                  <td className="px-4 py-2">{event.event_coordinator}</td>
                </tr>
                <tr>
                  <th className=" font-bold">Contact</th>
                  <td className="px-4 py-2">{event.contact_numbers}</td>
                </tr>
                <tr>
                  <th className=" font-bold">Email</th>
                  <td className="px-4 py-2">durgasakha@gmail.com</td>
                </tr>
                <tr>
                  <th className=" font-bold">Fees</th>
                  <td className="px-4 py-2">Rs. 600.00</td>
                </tr>
                {new Date(event.start_date) > new Date() && (
                  <tr>
                    <td colSpan="2" className="px-4 pt-12 text-center">
                      <Link href="/donate">
                        <button className="bg-secondary text-white px-8 py-2 rounded-full font-bold" >
                          Donate
                        </button>
                      </Link>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
            Overview
          </h1>
          <p className="mt-1 text-sm md:text-sm text-left max-w-7xl whitespace-pre-line">
            {event.overview}
          </p>
        </div>

        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
            Highlights
          </h1>
          <p className="mt-1 text-sm md:text-sm text-left max-w-7xl whitespace-pre-line">
            {event.highlights}
          </p>
        </div>

        {new Date(event.start_date) < new Date() && (
          <div>
            <div className="flex justify-between">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
                Photos
              </h1>
              <div>
                <Link href={`/gallery/events/${event.uuid}`}>
                  <button className="bg-secondary text-white px-8 py-2 rounded-full font-bold">
                    See Photos
                  </button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 my-8">
              {event.gallery.slice(0, 4).map((item, index) => (
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
        )}

        <div id="payment-details">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
            Payment Details
          </h1>
          <p className="text-lg font-semibold mb-4">
            Fees: Rs. 600.00
          </p>
          <div className="max-w-5xl flex flex-col items-center left-center mx-auto">
            <EventBankDetails />
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg font-semibold mb-4">
              After completing your payment, please fill out this form to confirm your booking:
            </p>
            <Link
              href={event.booking_confirmation_form_link || "https://forms.gle/VXt4zmVgKfG9kxqYA"}
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
          <p className="mt-1 text-sm md:text-sm text-left max-w-7xl whitespace-pre-line">
            Be a Part of Something Meaningful. At Durgasakha, we believe in the
            power of community and the joy of shared experiences. Whether
            you&apos;re passionate about treks, cultural events, or social
            impact — there&apos;s a place for you here. Join us in creating
            memories, building connections, and making a difference — one event
            at a time.
          </p>
        </div>
      </div>
    </>
  );
}
