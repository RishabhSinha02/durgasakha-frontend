import React from "react";

import Link from "next/link"
import BankDetails from "@/app/components/donate/BankDetails";

export const metadata = {
    metadataBase: new URL("https://www.durgasakha.org"),
    title: "Membership Registration | Shree Durgasakha Charitable Trust",
    description: "Become a member of Shree Durgasakha Charitable Trust and enjoy exclusive benefits while supporting our initiatives.",
    openGraph: {
        title: "Membership Registration | Shree Durgasakha Charitable Trust",
        description: "Become a member of Shree Durgasakha Charitable Trust and enjoy exclusive benefits while supporting our initiatives.",
        type: "website",
        url: "https://durgasakha.com/membership",
        images: "/carousel/carousel-2.jpeg",
    },
};

export default function MembershipPage() {
  return (
    <div>
      <section className="membership p-6 md:p-16 space-y-10 bg-white rounded-xl shadow-lg max-w-6xl mx-auto mt-10 mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Membership Registration Open!
        </h1>
        <p className="text-lg md:text-xl font-semibold mb-4">Dear Friends,</p>
        <p className="text-md md:text-lg mb-4">
          Registration for Shri Durgasakha Charitable Trust membership is now
          open! Become an official member by paying just{" "}
          <span className="font-bold text-secondary">₹200/-</span>.
        </p>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-primary mb-2">
            🎁 Member Benefits:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-md md:text-lg">
            <li>✔️ 10% discount on every trek</li>
            <li>✔️ Active participation in social work and fort exploration</li>
            <li>✔️ Opportunity to contribute to upcoming initiatives</li>
            <li>✔️ Chance to connect more strongly with the community</li>
          </ul>
        </div>
        <p className="text-md md:text-lg mb-4">
          <span className="font-bold">To pay the fee:</span> Scan the QR code
          below and fill out the registration form.
          <br />
          Once you become a member, you’ll be even more closely connected to the
          organization.
        </p>
        <div className="flex flex-col items-center gap-8 mb-6">
          <BankDetails />
          <div>
            <Link
              href="https://docs.google.com/forms/d/1wKaDM3UXtcJz6fnZdjOLOHYotSlqJRQhmx_gsh32N0k/edit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-primary text-white font-bold px-6 py-3 rounded-full shadow hover:bg-secondary transition">
                Fill Registration Form
              </button>
            </Link>
          </div>
        </div>
        <p className="text-md md:text-lg mb-2">
          ⛰️ Let’s experience the beautiful blend of trekking, history, and
          social service together!
        </p>
        <p className="text-md md:text-lg font-semibold">
          Best wishes,
          <br />
          Shri Durgasakha Charitable Trust
        </p>
      </section>
    </div>
  );
}
