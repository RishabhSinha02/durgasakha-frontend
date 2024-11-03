import { MemberProfile } from "../components/member-profile/MemberProfile";

export default function AboutUs() {
  const members = [
    { name: "Om Khandu Avhad", imageSrc: "/image-4578.jpg", bio: "Computer engineer loves to swim and explore mountains" },
    { name: "Jane Doe", imageSrc: "/user.png", bio: "Software developer with a passion for open source" },
    { name: "John Smith", imageSrc: "/user.png", bio: "Full-stack developer and tech enthusiast" },
    { name: "Jane Smith", imageSrc: "/user.png", bio: "UI/UX designer with a love for minimalism" },
    { name: "John Doe", imageSrc: "/user.png", bio: "DevOps engineer and cloud specialist" },
    { name: "Jane Doe", imageSrc: "/user.png", bio: "Data scientist and AI researcher" },
    { name: "John Smith", imageSrc: "/user.png", bio: "Backend developer and database expert" },
    { name: "Jane Smith", imageSrc: "/user.png", bio: "Frontend developer and JavaScript guru" },
    { name: "John Doe", imageSrc: "/user.png", bio: "Mobile app developer and tech blogger" },
    { name: "Jane Doe", imageSrc: "/user.png", bio: "Cybersecurity analyst and ethical hacker" },
    { name: "John Smith", imageSrc: "/user.png", bio: "Game developer and VR enthusiast" },
    { name: "Jane Smith", imageSrc: "/user.png", bio: "Project manager and agile coach" },
  ];

  return (
    <div>
      <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mt-16 mb-16 pl-8 sm:pl-16 md:pl-28">
        Our Team
      </h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-16 mb-24">
        {members.map((member, index) => (
          <MemberProfile key={index} name={member.name} imageSrc={member.imageSrc} bio={member.bio}/>
        ))}
      </div>
    </div>
  );
}
  