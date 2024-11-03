import { CustomCarousel } from "./components/carousel/Carousel";
import HomeCard from "./components/home/homeCard";

export default function Home() {
  const features = [
    "Adventure with Purpose",
    "Expert Guidance",
    "Personalized Experience",
    "Positive Impact",
  ];
  return (
    <div className="home">

      <CustomCarousel />

      <section className="welcome p-6 md:p-16 space-y-10 grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        <div className="welcome-image">
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex justify-center items-center">
            <div className="absolute top-0 left-2 md:left-4 w-36 h-28 md:w-48 md:h-36 lg:w-56 lg:h-48 overflow-hidden">
              <img
                src="nature.jpg"
                alt="Top Left"
                className="object-cover w-full h-full rounded-md shadow-lg"
              />
            </div>
            <div className="relative w-48 h-64 md:w-64 md:h-80 lg:w-72 lg:h-96 z-10 overflow-hidden">
              <img
                src="nature.jpg"
                alt="Center"
                className="object-cover w-full h-full rounded-md shadow-lg"
              />
            </div>
            <div className="absolute bottom-0 right-2 md:right-4 w-36 h-28 md:w-48 md:h-36 lg:w-56 lg:h-48 overflow-hidden">
              <img
                src="nature.jpg"
                alt="Bottom Right"
                className="object-cover w-full h-full rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="welcome-content flex flex-col gap-6 md:gap-10">
          <h1 className="text-2xl md:text-4xl lg:text-[60px] font-bold text-primary mb-6 md:mb-10 leading-none md:leading-none">
            Welcome to Durgasakha
          </h1>


          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {features.map((text, index) => (
              <div
                key={index}
                className="flex gap-2 items-center text-primary font-bold"
              >
                <div>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="30" cy="30" r="23" fill="#7D4555" />
                    <path
                      d="M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30ZM45.1137 18.6363C44.0154 17.5379 42.2346 17.5379 41.1362 18.6363C41.1097 18.6628 41.0848 18.6909 41.0616 18.7204L28.0402 35.3128L20.1895 27.4621C19.0912 26.3637 17.3104 26.3637 16.2121 27.4621C15.1137 28.5604 15.1137 30.3412 16.2121 31.4396L26.1362 41.3637C27.2346 42.4621 29.0154 42.4621 30.1137 41.3637C30.1382 41.3393 30.1613 41.3135 30.1829 41.2865L45.1536 22.573C46.2119 21.4718 46.1986 19.7211 45.1137 18.6363Z"
                      fill="#D6D6D6"
                    />
                  </svg>
                </div>
                <div className="text text-lg md:text-xl">{text}</div>
              </div>
            ))}
          </div>
          <p className="mt-2 text-sm md:text-lg border-l-4 border-secondary pl-4 md:pl-8 text-justify max-w-7xl">
            Where Adventure Meets Purpose! We're thrilled to have you here. At
            Durgasakha, we're more than just a travel company. We're a community
            of adventurers committed to exploring the world responsibly and
            making a positive impact along the way.
          </p>
          <button className="self-start border border-1 bg-white text-primary font-bold px-4 py-2 rounded-3xl">
            Learn More
          </button>
        </div>
      </section>

      <section className="upcoming-treks p-6 md:p-16 space-y-10 bg-black">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-10">
          Upcoming Treks
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
        <HomeCard title="Tringlewadi Trek" subtitle="Mountain Trek"  organisers="Rishabh Sinha" date="12 March 2024"  image="nature.jpg" />
        <HomeCard title="Tringlewadi Trek" subtitle="Mountain Trek"  organisers="Rishabh Sinha" date="12 March 2024"  image="nature.jpg" />
        <HomeCard title="Tringlewadi Trek" subtitle="Mountain Trek"  organisers="Rishabh Sinha" date="12 March 2024"  image="nature.jpg" />
          
        </div>
        <div className="text-white flex justify-end">
          <button className="flex items-center gap-2 border border-white px-4 py-2 rounded-full">View All
            <svg width="16" height="16" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7204 10.7779C21.0932 10.2388 21.0932 9.36466 20.7204 8.82551L14.9931 0.54203C14.6204 0.00287783 14.016 0.0028778 13.6432 0.54203C13.2704 1.08118 13.2704 1.95531 13.6432 2.49446L17.741 8.42115L0.954546 8.42115C0.427367 8.42115 3.53701e-07 9.03925 3.27835e-07 9.80173C3.0197e-07 10.5642 0.427367 11.1823 0.954546 11.1823L17.741 11.1823L13.6432 17.109C13.2704 17.6481 13.2704 18.5223 13.6432 19.0614C14.016 19.6006 14.6204 19.6006 14.9931 19.0614L20.7204 10.7779Z" fill="white" />
            </svg>
          </button>
        </div>
      </section>

      <section className="upcoming-treks p-6 md:p-16 space-y-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 md:mb-10">
          Upcoming Events
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
        <HomeCard title="Vidya School" subtitle="School Kit Distribution"  organisers="Rishabh Sinha" date="12 March 2024"  image="nature.jpg" />
        <HomeCard title="Vidya School" subtitle="School Kit Distribution"  organisers="Rishabh Sinha" date="12 March 2024"  image="nature.jpg" />
        <HomeCard title="Vidya School" subtitle="School Kit Distribution"  organisers="Rishabh Sinha" date="12 March 2024"  image="nature.jpg" />
          
        </div>
        <div className="flex justify-end">
          <button className="flex items-center gap-2 border border-black px-4 py-2 rounded-full">View All
          <svg width="16" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.7204 11.6143C21.0932 11.0751 21.0932 10.201 20.7204 9.66185L14.9931 1.37836C14.6204 0.839212 14.016 0.839212 13.6432 1.37836C13.2704 1.91751 13.2704 2.79165 13.6432 3.3308L17.741 9.25748L0.954546 9.25748C0.427367 9.25748 3.53701e-07 9.87559 3.27835e-07 10.6381C3.0197e-07 11.4005 0.427367 12.0186 0.954546 12.0186L17.741 12.0186L13.6432 17.9453C13.2704 18.4845 13.2704 19.3586 13.6432 19.8978C14.016 20.4369 14.6204 20.4369 14.9931 19.8978L20.7204 11.6143Z" fill="black"/>
</svg>

          </button>
        </div>
      </section>
    </div>
  );
}
