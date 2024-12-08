import Image from "next/image";
import { API_URL } from "../../config/api";
import { Header } from "../../components/header/Header";

export const revalidate = 120; // revalidate every 2 minutes

export const dynamicParams = true; // enable dynamic params

export async function fetchAllEvents() {
  let events = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const response = await fetch(`${API_URL}/api/event/all?page=${page}`);
    const data = await response.json();
    events = events.concat(data.results);
    hasMore = data.next !== null;
    page += 1;
  }
  
  return events;
}

export async function generateStaticParams() {
  const events = await fetchAllEvents();
  return events.map((event) => ({
    params: {
      id: event.id.toString(),
    },
  }));
}

export default async function EventDetail({ params }) {
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
                  <th className=" font-bold">Date</th>
                  <td className="px-4 py-2">
                    {`${event.start_date.split("T")[0]} - ${
                      event.end_date.split("T")[0]
                    }`}
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
                  <th className=" font-bold">Phone</th>
                  <td className="px-4 py-2">1234567890</td>
                </tr>
                <tr>
                  <th className=" font-bold">Email</th>
                  <td className="px-4 py-2">info@durgasakha.com</td>
                </tr>
                {new Date(event.start_date) > new Date() && (
                  <tr>
                    <td colSpan="2" className="px-4 pt-12 text-center">
                      <button className="bg-secondary text-white px-8 py-2 rounded-full font-bold">
                        Donate Now
                      </button>
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
          <p className="mt-1 text-sm md:text-sm text-justify max-w-7xl">
            {event.overview}
          </p>
        </div>

        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
            Highlights
          </h1>
          <p className="mt-1 text-sm md:text-sm text-justify max-w-7xl">
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
                {/* // TODO: Add Link */}
                <button className="bg-secondary text-white px-8 py-2 rounded-full font-bold">
                  See Photos
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 my-8">
              {event.gallery.map((item, index) => (
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

        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
            Join Us
          </h1>
          <p className="mt-1 text-sm md:text-sm text-justify max-w-7xl">
            {event.overview}
          </p>
        </div>
      </div>
    </>
  );
}
