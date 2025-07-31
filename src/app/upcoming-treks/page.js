import DifficultySelector from "../components/upcoming-treks/difficultySelector";
import TrekCard from "../components/upcoming-treks/trekCard";
import { API_URL } from "../config/api";
import { Header } from "../components/header/Header";

export default async function UpcomingTreks({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const difficulty = resolvedSearchParams?.difficulty || "All";

  let data;

  if (difficulty == "All") {
    data = await fetch(`${API_URL}/api/trek/upcoming`);
  } else {
    data = await fetch(`${API_URL}/api/trek/upcoming?level=${difficulty}`);
  }

  const result = await data.json();
  const treks = Array.isArray(result.results) ? result.results : [];

  return (
    <>
      <div>
        <Header background="/header.png" title="Upcoming Treks" />
      </div>
      <div className="p-4 md:p-16 md:pb-12 md:pt-12 space-y-10">
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 gap-4">
          <div className="card border border-gray-200 rounded-xl bg-white">
            <h1 className="text-xl md:text-xl lg:text-2xl font-bold p-4 text-primary">
              Search
            </h1>
            <div>
              <div className="flex mb-8">
                <div className="relative w-full mx-4">
                  <input
                    type="search"
                    id="location-search"
                    className="w-full z-20 text-md border-0 p-4 text-gray-900 bg-gray-200 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                    placeholder="Search Treks"
                  />
                  <button
                    type="submit"
                    className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white px-4 bg-secondary rounded-e-lg border"
                  >
                    <svg
                      className="w-8 h-8"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-white lg:col-span-2 border md:col-span-1 sm:col-span-1 border-gray-200 rounded-xl">
            <h1 className="text-xl md:text-xl lg:text-2xl font-bold p-4 text-primary">
              Categories
            </h1>
            <div className="px-4 mb-8">
              <DifficultySelector initialValue={difficulty} />
            </div>
          </div>
        </div>

        <div>
          {treks.length === 0 ? (
            <div className="text-center text-gray-500 py-12">
              No upcoming treks found.
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
              {treks.map((trek) => (
                <div key={trek.name}>
                  <TrekCard trek={trek} />
                </div>
              ))}
            </div>
          )}
        </div>

        <div></div>
      </div>
    </>
  );
}
