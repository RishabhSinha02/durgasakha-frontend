import { CustomCarousel } from "./components/carousel/Carousel";

export default function Home() {
  return (
    <div className="home">
      <CustomCarousel />
      <div className="welcome p-6 md:p-16 space-y-10 grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        {/* Welcome Image Section */}
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

        {/* Welcome Content Section */}
        <div className="welcome-content flex flex-col gap-6 md:gap-10">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 md:mb-10">
            Welcome to Durgasakha
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {/* Feature Items */}
            {[
              "Adventure with Purpose",
              "Expert Guidance",
              "Personalized Experience",
              "Positive Impact",
            ].map((text, index) => (
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

          {/* Description Text */}
          <p className="mt-2 text-sm md:text-lg border-l-4 border-secondary pl-4 md:pl-8 text-justify max-w-7xl">
            Where Adventure Meets Purpose! We're thrilled to have you here. At
            Durgasakha, we're more than just a travel company. We're a community
            of adventurers committed to exploring the world responsibly and
            making a positive impact along the way.
          </p>
        </div>
      </div>
    </div>
  );
}
