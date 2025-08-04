import PastEventCard from "../components/upcoming-events/pastEventCard";
import { API_URL } from "../config/api";

export const dynamic = "force-dynamic";

export default async function PastEvents() {
  let data = await fetch(`${API_URL}/api/event/past`);
  let events = await data.json();

  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
        {events.results.map((event) => (
          <div key={event.uuid}>
            <PastEventCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
}
