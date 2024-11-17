import { MemberProfile } from "../components/member-profile/MemberProfile";

export default function AboutUs() {
  const members = [
    { name: "Om Khandu Avhad", imageSrc: "/image-4578.jpg", bio: "Computer engineer loves to swim and explore mountains" },
    { name: "Jane Doe", imageSrc: "/image-4578.jpg", bio: "Software developer with a passion for open source" },
    { name: "John Smith", imageSrc: "/image-4578.jpg", bio: "Full-stack developer and tech enthusiast" },
    { name: "Jane Smith", imageSrc: "/image-4578.jpg", bio: "UI/UX designer with a love for minimalism" },
    { name: "John Doe", imageSrc: "/image-4578.jpg", bio: "DevOps engineer and cloud specialist" },
    { name: "Jane Doe", imageSrc: "/image-4578.jpg", bio: "Data scientist and AI researcher" },
    { name: "John Smith", imageSrc: "/image-4578.jpg", bio: "Backend developer and database expert" },
    { name: "Jane Smith", imageSrc: "/image-4578.jpg", bio: "Frontend developer and JavaScript guru" },
    { name: "John Doe", imageSrc: "/image-4578.jpg", bio: "Mobile app developer and tech blogger" },
    { name: "Jane Doe", imageSrc: "/image-4578.jpg", bio: "Cybersecurity analyst and ethical hacker" },
    { name: "John Smith", imageSrc: "/image-4578.jpg", bio: "Game developer and VR enthusiast" },
    { name: "Jane Smith", imageSrc: "/image-4578.jpg", bio: "Project manager and agile coach" },
  ];

  return (
    <div>
      <div className="bg-white p-10 md:p-16 md:pb-24 md:pt-24 space-y-10">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-10">About Durgasakha</h1>
          <p className="mt-2 text-sm md:text-lg border-l-4 border-secondary pl-4 md:pl-8 text-justify max-w-7xl">
            The feet started roaring and began to wander from the footsteps of the helpless. Gifts of Forts, Sea Forts, Bhuikot, Mountains and Peaks started going on. 
            The neglect and the irony that tourists are making this invaluable historic record that they were wandering in the eyes and mind while enjoying it. 
            Often, despite being face down to the eyes, it does not tolerate. Such a condition was happening.
            “DURGASAKHA” was born from the same pain.
          </p>
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-10">Our Mission</h1>
          <p className="mt-2 text-sm md:text-lg border-l-4 border-secondary pl-4 md:pl-8 text-justify max-w-7xl">
            The feet started roaring and began to wander from the footsteps of the helpless.
            Gifts of Forts, Sea Forts, Bhuikot, Mountains and Peaks started going on. 
            The neglect and the irony that tourists are making this invaluable historic record that they were wandering in the eyes and mind while enjoying it. 
            Often, despite being face down to the eyes, it does not tolerate. Such a condition was happening.
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
            <MemberProfile key={index} name={member.name} imageSrc={member.imageSrc} bio={member.bio}/>
          ))}
        </div>
      </div>
    </div>
  );
}
  