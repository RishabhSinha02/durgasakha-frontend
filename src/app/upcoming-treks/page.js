"use client";
import { useEffect, useState } from "react";
import TrekCard from "../components/upcoming-treks/trekCard";
import Image from "next/image";

export default function UpcomingTreks() {
  const [treks, setTreks] = useState([]);

  useEffect(() => {
    fetch("/upcoming-treks.json")
      .then((res) => res.json())
      .then((data) => setTreks(data));
  }, []);

  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-8">
        {treks.length > 0
          ? (console.log(treks),
            treks.map((trek) => (
              <TrekCard
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
                price={trek.price}
              />
            )))
          : null}
      </div>

      {treks.length === 0 && (
        <div className="flex flex-col items-center justify-center mb-8 mt-8">
          <Image
            src="/treksoon.svg"
            alt="Upcoming Treks Banner"
            width={200}
            height={200}
            className="w-lg h-lg md:w-2xl md:h-2xl object-cover mb-8"
          />
          <h1 className="text-3xl font-bold text-primary mb-4 text-center">
            Adventure Coming Soon!
          </h1>
          <p className="text-lg text-gray-700 text-center">
            Get ready to embark on an interactive journey. Stay tuned for our
            upcoming text adventure experience!
          </p>
        </div>
      )}
    </div>
  );
}
