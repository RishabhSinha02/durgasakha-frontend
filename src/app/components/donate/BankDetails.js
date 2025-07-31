"use client";

import React from "react";
import Image from "next/image";

export function BankDetails() {
  const bankDetails = [
    { label: "Bank Name", value: "Saraswat Bank" },
    { label: "Account Name", value: "Shree Durgsakha Charitable Trust" },
    { label: "Account Number", value: "403209100000076" },
    { label: "IFSC Code", value: "SRCB0000403" },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // You can add a toast notification here if needed
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-4 sm:mt-8 items-center justify-center">
      <div className="max-w-md sm:max-w-2xl mx-auto w-full">
        <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-lg border">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <div className="bg-primary rounded-full p-2 sm:p-3 mr-2 sm:mr-4">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
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
            <h2 className="text-lg sm:text-2xl font-bold text-gray-800">
              Bank Transfer Details
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {bankDetails.map((detail, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-center">
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm font-medium text-gray-600 mb-0.5 sm:mb-1">
                      {detail.label}
                    </p>
                    <p className="text-base sm:text-lg font-semibold text-gray-900 break-all">
                      {detail.value}
                    </p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(detail.value)}
                    className="ml-2 sm:ml-4 p-1 sm:p-2 text-gray-500 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                    title="Copy to clipboard"
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/qr-code-payment.jpeg"
          alt="QR Code for Payment"
          width={400}
          height={400}
          priority
        />
      </div>
    </div>
  );
}

export default BankDetails;
