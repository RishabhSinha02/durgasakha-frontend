"use client";
import { useEffect, useState } from "react";
import PastTrekCard from "../components/upcoming-treks/pastTrekCard";

export default function PastTreks() {
  const [treks, setTreks] = useState([]);

  useEffect(() => {
    fetch("/treks.json")
      .then((res) => res.json())
      .then((data) => {
        const sortedData = data.sort(
          (a, b) => new Date(b.start_date) - new Date(a.start_date)
        );
        setTreks(sortedData);
      });
  }, []);

  return (
    <div>
      {treks.length > 0 ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-8">
          {treks.map((trek) => (
            <PastTrekCard
              key={trek.id}
              id={trek.slug}
              trekName={trek.name}
              location={trek.venue}
              type={"Past Trek"}
              date={new Date(trek.start_date).toDateString()}
              imageUrl={trek.cover_image || "/default.png"}
              organisedBy={trek.organised_by}
              instagramLink={trek.instagramLink}
              facebookLink={trek.facebookLink}
              youtubeLink={trek.youtubeLink}
              twitterLink={trek.twitterLink}
            />
          ))}
        </div>
      ) : (
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            No past treks to display yet!
          </h2>
          <p className="text-gray-600">
            Please check back later for updates on our exciting past treks.
          </p>
        </div>
      )}
    </div>
  );
}
