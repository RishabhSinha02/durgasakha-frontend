import Link from "next/link";
import Image from "next/image";
import UpcomingEventCard from "../components/upcoming-events/upcomingEventCard";
import { API_URL } from "../config/api";
import { Header } from "../components/header/Header";

export const dynamic = "force-dynamic";

export default async function UpcomingEvents() {
  let data = await fetch(`${API_URL}/api/event/upcoming`);
  let events = await data.json();

  return (
    <>
      <div>
        <Header background="/header.png" title="Upcoming Events" />
      </div>
      <div className="p-4 md:p-16 md:pb-12 md:pt-12 space-y-10">
        <div>
          {events.results.length === 0 ? (
            <div className="text-center text-gray-500 py-12">
              No upcoming events.
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
              {events.results.map((event) => (
                <div key={event.uuid}>
                  {" "}
                  <UpcomingEventCard event={event} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
