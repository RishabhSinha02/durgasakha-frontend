'use client'

import { DonateForm } from "../components/donate/DonateForm";
import { EventCard } from "../components/donate/EventCard";

export default function Donate() {
  const bankDetails = [
    { label: "Bank Name", value: "Saraswat Bank" },
    { label: "Account Name", value: "Shri Durgsakha Charitable Trust" },
    { label: "Account Number", value: "403209100000076" },
    { label: "IFSC Code", value: "SRCB0000403" },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // You can add a toast notification here if needed
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col w-full bg-white p-6 sm:p-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-primary text-4xl sm:text-5xl md:text-7xl font-bold max-w-3xl text-center mt-8">
            Make a Donation to help us
          </h1>
        </div>
        {/* <DonateForm /> */}
        {/* Enhanced Bank Details Section */}
        <div className="mt-12 max-w-2xl mx-auto w-full">
          <div className="bg-white rounded-2xl p-8 shadow-lg border">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-primary rounded-full p-3 mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                Bank Transfer Details
              </h2>
            </div>

            <div className="space-y-4">
              {bankDetails.map((detail, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-600 mb-1">
                        {detail.label}
                      </p>
                      <p className="text-lg font-semibold text-gray-900">
                        {detail.value}
                      </p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(detail.value)}
                      className="ml-4 p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="Copy to clipboard"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mb-10 gap-8 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
          <h1 className="text-3xl sm:text-3xl md:text-5xl text-primary font-bold md:text-right p-4 md:p-20 max-w-lg">
            Our Social Works
          </h1>
          <div className="border-l-8 border-secondary ml-4 md:ml-0 pl-4 sm:pl-6 md:pl-10 text-md sm:text-lg md:text-xl text-primary max-w-lg font-bold p-4 md:p-8">
            Durgasakha is followed by tourism and awareness of the gathering and
            gathering of the miscreants and putting together one step to
            humanity.
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
          <EventCard />
          <EventCard />
        </div>
      </div>
    </div>
  );
}
