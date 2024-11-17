import PastCard from "../components/pastCard/pastCard";

export default function PastTreks() {
  const treks = [
    {
        id: "Tringlewadi",
        type: "Trek",
        trekName: "Tringlewadi Fort Trek",
        date: "12 March 2024",
        organisedBy: "Rishabh Sinha",
        imageUrl: "/nature.jpg",
        instagramLink: "https://www.instagram.com/tringlewadi_trek",
        facebookLink: "https://www.facebook.com/tringlewadi_trek",
        youtubeLink: "https://www.youtube.com/tringlewadi_trek",
        twitterLink: "https://www.twitter.com/tringlewadi_trek"
    },
    {
        id: "Rajmachi",
        type: "Trek",
        trekName: "Rajmachi Night Trek",
        date: "22 April 2024",
        organisedBy: "Adventure Club",
        imageUrl: "/nature.jpg",
        instagramLink: "https://www.instagram.com/rajmachi_trek",
        facebookLink: "https://www.facebook.com/rajmachi_trek",
        youtubeLink: "https://www.youtube.com/rajmachi_trek",
        twitterLink: "https://www.twitter.com/rajmachi_trek"
    },
    {
        id: "Harishchandragad",
        type: "Trek",
        trekName: "Harishchandragad Fort Adventure",
        date: "5 May 2024",
        organisedBy: "Mountain Explorers",
        imageUrl: "/nature.jpg",
        instagramLink: "https://www.instagram.com/harishchandragad_trek",
        facebookLink: "https://www.facebook.com/harishchandragad_trek",
        youtubeLink: "https://www.youtube.com/harishchandragad_trek",
        twitterLink: "https://www.twitter.com/harishchandragad_trek"
    },
    {
        id: "Kalsubai",
        type: "Trek",
        trekName: "Kalsubai Sunrise Trek",
        date: "18 May 2024",
        organisedBy: "Summit Seekers",
        imageUrl: "/nature.jpg",
        instagramLink: "https://www.instagram.com/kalsubai_trek",
        facebookLink: "https://www.facebook.com/kalsubai_trek",
        youtubeLink: "https://www.youtube.com/kalsubai_trek",
        twitterLink: "https://www.twitter.com/kalsubai_trek"
    },
    {
        id: "Sandhan",
        type: "Trek",
        trekName: "Sandhan Valley Trek",
        date: "30 June 2024",
        organisedBy: "Trek Tribe",
        imageUrl: "/nature.jpg",
        instagramLink: "https://www.instagram.com/sandhan_valley_trek",
        facebookLink: "https://www.facebook.com/sandhan_valley_trek",
        youtubeLink: "https://www.youtube.com/sandhan_valley_trek",
        twitterLink: "https://www.twitter.com/sandhan_valley_trek"
    },
    {
        id: "Sinhagad",
        type: "Trek",
        trekName: "Sinhagad Fort Trek",
        date: "12 July 2024",
        organisedBy: "Hiking Enthusiasts",
        imageUrl: "/nature.jpg",
        instagramLink: "https://www.instagram.com/sinhagad_trek",
        facebookLink: "https://www.facebook.com/sinhagad_trek",
        youtubeLink: "https://www.youtube.com/sinhagad_trek",
        twitterLink: "https://www.twitter.com/sinhagad_trek"
    },
    {
        id: "Visapur",
        type: "Trek",
        trekName: "Visapur Monsoon Trek",
        date: "25 August 2024",
        organisedBy: "Adventure Hub",
        imageUrl: "/nature.jpg",
        instagramLink: "https://www.instagram.com/visapur_trek",
        facebookLink: "https://www.facebook.com/visapur_trek",
        youtubeLink: "https://www.youtube.com/visapur_trek",
        twitterLink: "https://www.twitter.com/visapur_trek"
    },
    {
        id: "Tikona",
        type: "Trek",
        trekName: "Tikona Fort Trek",
        date: "10 September 2024",
        organisedBy: "Nature Walkers",
        imageUrl: "/nature.jpg",
        instagramLink: "https://www.instagram.com/tikona_trek",
        facebookLink: "https://www.facebook.com/tikona_trek",
        youtubeLink: "https://www.youtube.com/tikona_trek",
        twitterLink: "https://www.twitter.com/tikona_trek"
    },
    {
        id: "Lohagad",
        type: "Trek",
        trekName: "Lohagad Winter Trek",
        date: "5 December 2024",
        organisedBy: "The Wanderers",
        imageUrl: "/nature.jpg",
        instagramLink: "https://www.instagram.com/lohagad_trek",
        facebookLink: "https://www.facebook.com/lohagad_trek",
        youtubeLink: "https://www.youtube.com/lohagad_trek",
        twitterLink: "https://www.twitter.com/lohagad_trek"
    }
];

  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
        {treks.map((trek) => (
          <PastCard
            key={trek.id}
            id={trek.id}
            trekName={trek.trekName}
            type={trek.type}
            date={trek.date}
            organisedBy={trek.organisedBy}
            imageUrl={trek.imageUrl}
            instagramLink={trek.instagramLink}
            facebookLink={trek.facebookLink}
            youtubeLink={trek.youtubeLink}
            twitterLink={trek.twitterLink}
          />
        ))}
      </div>
    </div>
  );
}
