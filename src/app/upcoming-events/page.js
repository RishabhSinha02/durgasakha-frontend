import Link from "next/link";
import Image from "next/image";
import UpcomingEventCard from "../components/upcoming-events/upcomingEventCard";

export default function UpcomingEvents() {
  const socialEvents = [
    { name: "Gala" },
    { name: "Soiree" },
    { name: "Carnival" },
    { name: "Fiesta" },
    { name: "Festival" },
    { name: "Mixer" },
    { name: "Summit" },
    { name: "Gathering" },
    { name: "Rally" }
  ];
  return (
    <div className="p-10 md:p-16 md:pb-12 md:pt-12 space-y-10">

      <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 gap-4">
        <div className="card border border-gray-200 rounded-xl bg-white">
          <h1 className="text-xl md:text-xl lg:text-2xl font-bold p-4 text-primary">Search</h1>
          <div>
            <div className="flex mb-8">
              <div className="relative w-full mx-4">
                <input type="search" id="location-search" className="w-full z-20 text-md border-0 p-4 text-gray-900 bg-gray-200 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Treks" />
                <button type="submit" className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white px-4 bg-secondary rounded-e-lg border">
                  <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-white lg:col-span-2 border md:col-span-1 sm:col-span-1 border-gray-200 rounded-xl">
          <div className="flex justify-between">
            <h1 className="text-xl md:text-xl lg:text-2xl font-bold p-4 text-primary"> Past Events</h1>
            <Link
              href={'/past-events'}
              className="flex items-center gap-2 rounded-full bg-secondary px-4 text-sm m-3 font-semibold text-white transition-all hover:bg-[#C23E3E]"
            >
              See More
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
          </div>
          <div className="px-4 mb-8">
            <div className="grid grid-cols-2">

              <div className="flex items-center gap-3">
                <div>
                  <Image src="/event.png" alt="event" width={80} height={80} className="rounded-full" />
                </div>
                <div>
                  <div className="text-xl font-bold text-primary">School Kit Distribution</div>
                  <div className="flex items-center gap-2"><div><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 0.5C4 0.223858 3.77614 0 3.5 0C3.22386 0 3 0.223858 3 0.5V1H2C0.895431 1 0 1.89543 0 3V4H16V3C16 1.89543 15.1046 1 14 1H13V0.5C13 0.223858 12.7761 0 12.5 0C12.2239 0 12 0.223858 12 0.5V1H4V0.5Z" fill="#7D4555" />
                    <path d="M16 14V5H0V14C0 15.1046 0.895431 16 2 16H14C15.1046 16 16 15.1046 16 14ZM8.5 8.5V10H10C10.2761 10 10.5 10.2239 10.5 10.5C10.5 10.7761 10.2761 11 10 11H8.5V12.5C8.5 12.7761 8.27614 13 8 13C7.72386 13 7.5 12.7761 7.5 12.5V11H6C5.72386 11 5.5 10.7761 5.5 10.5C5.5 10.2239 5.72386 10 6 10H7.5V8.5C7.5 8.22386 7.72386 8 8 8C8.27614 8 8.5 8.22386 8.5 8.5Z" fill="#7D4555" />
                  </svg>
                  </div>
                    <div>12 March 2024</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div>
                  <Image src="/event.png" alt="event" width={80} height={80} className="rounded-full" />
                </div>
                <div>
                  <div className="text-xl font-bold text-primary">School Kit Distribution</div>
                  <div className="flex items-center gap-2"><div><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 0.5C4 0.223858 3.77614 0 3.5 0C3.22386 0 3 0.223858 3 0.5V1H2C0.895431 1 0 1.89543 0 3V4H16V3C16 1.89543 15.1046 1 14 1H13V0.5C13 0.223858 12.7761 0 12.5 0C12.2239 0 12 0.223858 12 0.5V1H4V0.5Z" fill="#7D4555" />
                    <path d="M16 14V5H0V14C0 15.1046 0.895431 16 2 16H14C15.1046 16 16 15.1046 16 14ZM8.5 8.5V10H10C10.2761 10 10.5 10.2239 10.5 10.5C10.5 10.7761 10.2761 11 10 11H8.5V12.5C8.5 12.7761 8.27614 13 8 13C7.72386 13 7.5 12.7761 7.5 12.5V11H6C5.72386 11 5.5 10.7761 5.5 10.5C5.5 10.2239 5.72386 10 6 10H7.5V8.5C7.5 8.22386 7.72386 8 8 8C8.27614 8 8.5 8.22386 8.5 8.5Z" fill="#7D4555" />
                  </svg>
                  </div>
                    <div>12 March 2024</div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>


      <div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
          {socialEvents.map((event)=>(
            <div key={event.name}> {/* Move key here */}
            <UpcomingEventCard id={event.name} />
          </div>
          ))}
        </div>
      </div>






    </div>
  );
}
