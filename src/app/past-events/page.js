import PastEventCard from "../components/upcoming-events/pastEventCard";


export default function PastEvents() {
  const events = [
    {
        id: "FestivalFiesta",
        type: "Festival",
        eventName: "Diwali Fiesta",
        date: "7 November 2024",
        organisedBy: "City Cultural Committee",
        imageUrl: "/event.png",
        instagramLink: "https://www.instagram.com/diwali_fiesta",
        facebookLink: "https://www.facebook.com/diwali_fiesta",
        youtubeLink: "https://www.youtube.com/diwali_fiesta",
        twitterLink: "https://www.twitter.com/diwali_fiesta"
    },
    {
        id: "MusicMania",
        type: "Concert",
        eventName: "Summer Music Fest",
        date: "21 June 2024",
        organisedBy: "Live Nation",
        imageUrl: "/event.png",
        instagramLink: "https://www.instagram.com/summer_music_fest",
        facebookLink: "https://www.facebook.com/summer_music_fest",
        youtubeLink: "https://www.youtube.com/summer_music_fest",
        twitterLink: "https://www.twitter.com/summer_music_fest"
    },
    {
        id: "ArtExhibit",
        type: "Exhibition",
        eventName: "Modern Art Showcase",
        date: "12 April 2024",
        organisedBy: "Art Gallery Association",
        imageUrl: "/event.png",
        instagramLink: "https://www.instagram.com/modern_art_showcase",
        facebookLink: "https://www.facebook.com/modern_art_showcase",
        youtubeLink: "https://www.youtube.com/modern_art_showcase",
        twitterLink: "https://www.twitter.com/modern_art_showcase"
    },
    {
        id: "TechSummit",
        type: "Conference",
        eventName: "Tech Innovators Summit",
        date: "3 September 2024",
        organisedBy: "Tech Leaders Network",
        imageUrl: "/event.png",
        instagramLink: "https://www.instagram.com/tech_innovators_summit",
        facebookLink: "https://www.facebook.com/tech_innovators_summit",
        youtubeLink: "https://www.youtube.com/tech_innovators_summit",
        twitterLink: "https://www.twitter.com/tech_innovators_summit"
    },
    {
        id: "FoodCarnival",
        type: "Fair",
        eventName: "Gourmet Food Carnival",
        date: "15 May 2024",
        organisedBy: "City Foodies Club",
        imageUrl: "/event.png",
        instagramLink: "https://www.instagram.com/gourmet_food_carnival",
        facebookLink: "https://www.facebook.com/gourmet_food_carnival",
        youtubeLink: "https://www.youtube.com/gourmet_food_carnival",
        twitterLink: "https://www.twitter.com/gourmet_food_carnival"
    },
    {
        id: "SportsGala",
        type: "Sports Event",
        eventName: "Annual Sports Gala",
        date: "20 July 2024",
        organisedBy: "Sports Association",
        imageUrl: "/event.png",
        instagramLink: "https://www.instagram.com/annual_sports_gala",
        facebookLink: "https://www.facebook.com/annual_sports_gala",
        youtubeLink: "https://www.youtube.com/annual_sports_gala",
        twitterLink: "https://www.twitter.com/annual_sports_gala"
    },
    {
        id: "BookFair",
        type: "Fair",
        eventName: "International Book Fair",
        date: "1 October 2024",
        organisedBy: "Readers' Club",
        imageUrl: "/event.png",
        instagramLink: "https://www.instagram.com/international_book_fair",
        facebookLink: "https://www.facebook.com/international_book_fair",
        youtubeLink: "https://www.youtube.com/international_book_fair",
        twitterLink: "https://www.twitter.com/international_book_fair"
    },
    {
        id: "CharityRun",
        type: "Marathon",
        eventName: "City Charity Run",
        date: "14 February 2024",
        organisedBy: "Helping Hands Foundation",
        imageUrl: "/event.png",
        instagramLink: "https://www.instagram.com/city_charity_run",
        facebookLink: "https://www.facebook.com/city_charity_run",
        youtubeLink: "https://www.youtube.com/city_charity_run",
        twitterLink: "https://www.twitter.com/city_charity_run"
    },
    {
        id: "YogaRetreat",
        type: "Retreat",
        eventName: "Mountain Yoga Retreat",
        date: "25 August 2024",
        organisedBy: "Peaceful Minds",
        imageUrl: "/event.png",
        instagramLink: "https://www.instagram.com/mountain_yoga_retreat",
        facebookLink: "https://www.facebook.com/mountain_yoga_retreat",
        youtubeLink: "https://www.youtube.com/mountain_yoga_retreat",
        twitterLink: "https://www.twitter.com/mountain_yoga_retreat"
    }
];


  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
        {events.map((events) => (
          <PastEventCard
            key={events.id}
            id={events.id}
            eventsName={events.eventsName}
            type={events.type}
            date={events.date}
            organisedBy={events.organisedBy}
            imageUrl={events.imageUrl}
            instagramLink={events.instagramLink}
            facebookLink={events.facebookLink}
            youtubeLink={events.youtubeLink}
            twitterLink={events.twitterLink}
          />
        ))}
      </div>
    </div>
  );
}
