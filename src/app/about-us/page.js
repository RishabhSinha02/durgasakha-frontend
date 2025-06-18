import { MemberProfile } from "../components/member-profile/MemberProfile";

export default function AboutUs() {
  const members = [
    {
      name: "Subodh Pathare",
      imageSrc: "/about-us/members/subodh-pathare.jpeg",
      bio: "Subodh Pathare is an accomplished professional, adventurer, and humanitarian whose journey is marked by dedication, expertise, and exploration. A BE Electronics graduate from Mumbai University, he has made significant contributions to the biotechnology engineering industry, serving as a National Manager for commissioning and services in an MNC, ensuring the seamless supply of critical pharmaceuticals across India and beyond. His work has taken him internationally over 30 times, supporting the Monoclonal Antibody (MAB) and vaccine industry, playing a vital role in global health advancements. Beyond his professional excellence, Subodh is a passionate explorer, having completed 250 treks in Sahyadri, with over 110 different forts conquered. His thirst for adventure has led him to 10 Himalayan expeditions, including the Everest Base Camp, making him a true mountain enthusiast. As the former president of Durgasakha Charitable Trust, Subodh has also been deeply involved in humanitarian work, contributing to social causes and community welfare.",
    },
    {
      name: "Sunil Shivaji Jagtap",
      imageSrc: "/about-us/members/sunil-jagtap.jpg",
      bio: "Graphic Designing Manager",
    },
    {
      name: "Yuvraj Atmaram Yadav",
      imageSrc: "/about-us/members/yuvraj-yadav.jpg",
      bio: "SAP Basis Consultant at Fujitsu!!!",
    },
    {
      name: "Saurabh Rajendra Rasal",
      imageSrc: "/about-us/members/saurabh-rasal.png",
      bio: "Working with India's leading insurance company.",
    },
    {
      name: "Manoj Eknath Chavan",
      imageSrc: "/about-us/members/manoj-chavan.jpeg",
      bio: "Like to live in nature, love for fortresses, photography is life or soul & last but not least, Interest of social service",
    },
    {
      name: "Chetan Suman Ramesh Rajguru",
      imageSrc: "/about-us/members/chetan-rajguru.jpg",
      bio: "Currently working as a Wireless Network Engineer at Capgemini company, and have been associated with the organization for the past 15 years.",
    },
    {
      name: "Ajay Ashok Dalvi",
      imageSrc: "/about-us/members/ajay-dalvi.JPG",
      bio: "I am working in Point R Technologies Pvt.Ltd as an Engineer, living in Thane.",
    },
    {
      name: "Rakesh Prakash Jadhav",
      imageSrc: "/about-us/members/rakesh-jadhav.jpg",
      bio: "Working as a Store Incharge in Technova electrical works since 2019",
    },
  ];

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
            Sahyadri&apos;s forts, fostering environmental awareness, and uplifting
            rural communities through education. Our mission is built on three
            key pillars:
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
              years, we&apos;ve provided school kits to 2,500+ rural students and
              facilitated educational adoption programs for higher studies.
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
            <MemberProfile
              key={index}
              name={member.name}
              imageSrc={member.imageSrc}
              bio={member.bio}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
