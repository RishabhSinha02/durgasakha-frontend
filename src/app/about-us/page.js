import { MemberProfile } from "../components/member-profile/MemberProfile";
import { API_URL } from "../config/api";

export const revalidate = 120;

export default async function AboutUs() {
  let data = await fetch(`${API_URL}/api/core/members`);
  let members = await data.json();

  return (
    <div>
      <div className="bg-white p-10 md:p-16 md:pb-24 md:pt-24 space-y-10">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-10">
            About Durgasakha
          </h1>
          <p className="mt-2 text-sm md:text-lg border-l-4 border-secondary pl-4 md:pl-8 text-justify max-w-7xl">
            The feet started roaring and began to wander from the footsteps of
            the helpless. Gifts of Forts, Sea Forts, Bhuikot, Mountains and
            Peaks started going on. The neglect and the irony that tourists are
            making this invaluable historic record that they were wandering in
            the eyes and mind while enjoying it. Often, despite being face down
            to the eyes, it does not tolerate. Such a condition was happening.
            “DURGASAKHA” was born from the same pain.
          </p>
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-10">
            Our Mission
          </h1>
          <p className="mt-2 text-sm md:text-lg border-l-4 border-secondary pl-4 md:pl-8 text-justify max-w-7xl">
            The feet started roaring and began to wander from the footsteps of
            the helpless. Gifts of Forts, Sea Forts, Bhuikot, Mountains and
            Peaks started going on. The neglect and the irony that tourists are
            making this invaluable historic record that they were wandering in
            the eyes and mind while enjoying it. Often, despite being face down
            to the eyes, it does not tolerate. Such a condition was happening.
            “DURGASAKHA” was born from the same pain.
          </p>
        </div>
      </div>
      <div className="p-10 md:pb-20 md:pt-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary sm:pl-8 pb-8 sm:pb-12">
          Our Team
        </h1>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {members.map((member, index) => (
            <MemberProfile key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}
