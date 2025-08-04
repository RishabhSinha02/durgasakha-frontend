import { MemberProfile } from "../components/member-profile/MemberProfile";
import { API_URL } from "../config/api";

export const dynamic = "force-dynamic";

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
          <p className="mt-2 text-sm md:text-lg border-l-4 border-secondary pl-4 md:pl-8 text-justify max-w-8xl">
            Durgasakha is an NGO committed to preserving the forts of the
            Sahyadri region through cleanliness drives and awareness campaigns.
            With over 150 treks and 1,500+ participants, it promotes a strong
            bond with nature, history, and responsible travel. The NGO also
            supports rural education in Shahapur, having distributed school kits
            to over 2,500 students in the past 15 years. Its educational
            adoption programs further help students pursue higher studies,
            combining environmental conservation with social development.
          </p>
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-10">
            Our Mission
          </h1>
          <p className="mt-2 text-sm md:text-lg text-justify max-w-8xl">
            <strong>Durgasakha</strong> is dedicated to the preservation of
            Sahyadri&apos;s forts, fostering environmental awareness, and
            uplifting rural communities through education. Our mission is built
            on three key pillars:
          </p>

          <ul className="list-disc pl-4 md:pl-8 mt-4 space-y-3 text-sm md:text-lg text-justify max-w-8xl">
            <li>
              <strong>Fort Conservation & Cleanliness:</strong> We protect the
              Sahyadri region&apos;s heritage through awareness drives and
              cleanliness campaigns, keeping historic forts free from pollution.
            </li>
            <li>
              <strong>Adventure & Responsible Trekking:</strong> With 150+ treks
              and 1,500+ participants, we promote safe, sustainable hiking while
              deepening connections to nature and history.
            </li>
            <li>
              <strong>Educational Support & Empowerment:</strong> For over 15
              years, we&apos;ve provided school kits to 2,500+ rural students
              and facilitated educational adoption programs for higher studies.
            </li>
          </ul>

          <p className="mt-4 text-sm md:text-lg text-justify max-w-8xl">
            At Durgasakha, we believe in preserving the past, enriching the
            present, and empowering the future . Together, we create lasting
            impact through action, awareness, and shared responsibility.
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
