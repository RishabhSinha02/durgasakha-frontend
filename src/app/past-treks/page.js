import PastTrekCard from "../components/upcoming-treks/pastTrekCard";
import { API_URL } from "../config/api";
import { Header } from "../components/header/Header";

export default async function PastTreks() {
  let data = await fetch(`${API_URL}/api/trek/past`);
  const result = await data.json();
  const treks = Array.isArray(result.results) ? result.results : [];

  return (
    <>
      <div>
        <Header background="/header.png" title="Past Treks" />
      </div>
      <div className="p-4 pb-6 pt-6 md:p-16 md:pb-12 md:pt-12 sm:p-10 sm:pb-6 sm:pt-6 space-y-10">
        {treks.length === 0 ? (
          <div className="text-center text-gray-500 py-12">
            No upcoming treks found.
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-8">
            {treks.map((trek) => (
              <PastTrekCard
                key={trek.uuid}
                id={trek.uuid}
                name={trek.name}
                imageUrl={trek.cover_image}
                venue={trek.venue}
                level={trek.level}
                date={trek.start_date}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
