"use client";

import { useEffect, useState } from "react";
import PastEventCard from "../components/upcoming-events/pastEventCard";

export default function PastEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => {
        const sortedData = data.sort(
          (a, b) => new Date(b.start_date) - new Date(a.start_date)
        );
        setEvents(sortedData);
      });
  }, []);

  return (
    <div>
      {events.length > 0 ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-8">
          {events.map((event) => (
            <PastEventCard
              key={event.id}
              id={event.slug} // Use slug as ID if navigating to /past-events/[slug]
              eventName={event.name}
              type={"Past Event"} // or event.type if you add it
              date={new Date(event.start_date).toDateString()}
              imageUrl={event.cover_image || "/default.png"}
              venue={event.venue}
            />
          ))}
        </div>
      ) : (
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            No past events to display yet!
          </h2>
          <p className="text-gray-600">
            Please check back later for updates on our exciting past events.
          </p>
        </div>
      )}
    </div>
  );
}
