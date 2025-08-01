import { DonateForm } from "../components/donate/DonateForm";

import PastEventCard from "../components/upcoming-events/pastEventCard";
import Link from "next/link";
import { API_URL } from "../config/api";
import BankDetails from "../components/donate/BankDetails";

export default async function Donate() {
  const data = await fetch(`${API_URL}/api/event/past`).then((res) =>
    res.json()
  );
  const events = Array.isArray(data.results) ? data.results : [];

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col w-full bg-white p-4 sm:p-6 md:p-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-primary text-2xl sm:text-4xl md:text-5xl font-bold max-w-3xl text-center mt-4 sm:mt-8">
            Make a Donation to help us
          </h1>
        </div>
        <div className="flex flex-col items-center mb-6 sm:mb-10 gap-6 sm:gap-8 mt-4 sm:mt-8 p-2 sm:p-4 md:p-0">
          {/* Bank details and QR */}
          <BankDetails />
        </div>
        <div className="flex flex-col items-center mt-8">
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 sm:p-6 max-w-2xl text-center">
            <p className="text-base sm:text-lg text-primary font-semibold mb-4">
              After making your donation, please fill out the form below. This
              helps us acknowledge your contribution properly and stay connected
              with you.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeYeRClEC0kHvIe71jy7RJJmEpGJuAAug6dIwfRmADrAr_New/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="bg-primary hover:bg-secondary text-white font-bold py-2 px-6 rounded-full shadow transition-colors text-base sm:text-lg"
                type="button"
              >
                Fill Donor Form
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mb-6 sm:mb-10 gap-6 sm:gap-8 mt-4 sm:mt-8 p-2 sm:p-4 md:p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
          <h1 className="text-xl sm:text-3xl md:text-5xl text-primary font-bold md:text-right p-2 sm:p-4 md:p-20 max-w-xs sm:max-w-lg">
            Our Social Works
          </h1>
          <div className="border-l-4 sm:border-l-8 border-secondary ml-2 sm:ml-4 md:ml-0 pl-2 sm:pl-6 md:pl-10 text-sm sm:text-md md:text-xl text-primary max-w-xs sm:max-w-lg font-bold p-2 sm:p-4 md:p-8">
            Durgasakha is followed by tourism and awareness of the gathering and
            gathering of the miscreants and putting together one step to
            humanity.
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {events.map((event) => (
            <PastEventCard key={event.uuid} event={event} />
          ))}
        </div>
        <div className="flex justify-center w-full">
          <Link href="/past-events" scroll={true}>
            <button className="flex items-center gap-1 sm:gap-2 border border-black hover:border-primary hover:text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base">
              View All
              <svg
                width="16"
                height="16"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.7204 11.6143C21.0932 11.0751 21.0932 10.201 20.7204 9.66185L14.9931 1.37836C14.6204 0.839212 14.016 0.839212 13.6432 1.37836C13.2704 1.91751 13.2704 2.79165 13.6432 3.3308L17.741 9.25748L0.954546 9.25748C0.427367 9.25748 3.53701e-07 9.87559 3.27835e-07 10.6381C3.0197e-07 11.4005 0.427367 12.0186 0.954546 12.0186L17.741 12.0186L13.6432 17.9453C13.2704 18.4845 13.2704 19.3586 13.6432 19.8978C14.016 20.4369 14.6204 20.4369 14.9931 19.8978L20.7204 11.6143Z"
                  fill="black"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
