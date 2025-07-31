import Image from "next/image";
import Link from "next/link";

export default function HomeCardTrek({ trek }) {
  return (
    <Link href={`/upcoming-treks/${trek.id}`}>
      <div className="trek-card bg-white shadow-md rounded-lg overflow-hidden">
        <div className="relative flex justify-center items-center">
          <Image
            src={trek.images[0].image}
            className="h-[286px] w-full object-cover"
            alt={`${trek.name} cover`}
            width={500}
            height={286}
          />
        </div>
        <div className="trek-details p-4 flex flex-col gap-1 md:p-6">
          <p className="lg:text-[20px] md:text-base font-semibold text-gray-600">
            {trek.venue}
          </p>
          <h2 className="lg:text-[35px] sm:text-xl font-bold text-primary mb-2">
            {trek.name}
          </h2>
          <div className="flex justify-between mt-2 text-sm md:text-base text-justify">
            <div className="text-2xl font-bold">Rs. {trek.price}</div>
            <div className="flex items-center gap-1 text-md">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.55893 1.03516C4.55893 0.759014 4.33507 0.535156 4.05893 0.535156C3.78279 0.535156 3.55893 0.759014 3.55893 1.03516V1.53516H2.55893C1.45436 1.53516 0.558929 2.43059 0.558929 3.53516V4.53516H16.5589V3.53516C16.5589 2.43059 15.6635 1.53516 14.5589 1.53516H13.5589V1.03516C13.5589 0.759014 13.3351 0.535156 13.0589 0.535156C12.7828 0.535156 12.5589 0.759014 12.5589 1.03516V1.53516H4.55893V1.03516Z"
                  fill="#D8423F"
                />
                <path
                  d="M16.5589 14.5352V5.53516H0.558929V14.5352C0.558929 15.6397 1.45436 16.5352 2.55893 16.5352H14.5589C15.6635 16.5352 16.5589 15.6397 16.5589 14.5352ZM9.05893 9.03516V10.5352H10.5589C10.8351 10.5352 11.0589 10.759 11.0589 11.0352C11.0589 11.3113 10.8351 11.5352 10.5589 11.5352H9.05893V13.0352C9.05893 13.3113 8.83507 13.5352 8.55893 13.5352C8.28279 13.5352 8.05893 13.3113 8.05893 13.0352V11.5352H6.55893C6.28279 11.5352 6.05893 11.3113 6.05893 11.0352C6.05893 10.759 6.28279 10.5352 6.55893 10.5352H8.05893V9.03516C8.05893 8.75901 8.28279 8.53516 8.55893 8.53516C8.83507 8.53516 9.05893 8.75901 9.05893 9.03516Z"
                  fill="#D8423F"
                />
              </svg>
              <span className="text-md text-gray-600">
                {new Date(trek.start_date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
