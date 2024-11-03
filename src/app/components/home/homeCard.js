export default function HomeCard({
    title,
    subtitle,
    organisers,
    date,
    image,
    facebook,
    instagram,
    twitter,
    linkedin
  }) {
    return (
      <div className="trek-card bg-white shadow-md rounded-lg overflow-hidden">
        <div className="relative flex justify-center items-center">
          <img src={image} className="h-[286px] w-full object-cover" alt={`${title} cover`} />
        </div>
        <div className="trek-details p-4 flex flex-col gap-1 md:p-6">
          <p className="lg:text-[20px] md:text-base font-semibold text-gray-600">
            {subtitle}
          </p>
          <h2 className="lg:text-[35px] sm:text-xl font-bold text-primary mb-2">
            {title}
          </h2>
          <div className="flex justify-between mt-2 text-sm md:text-base text-justify">
            <div className="flex items-center gap-1 text-[12px]">
              <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* SVG Path for Icon */}
              </svg>
              <span className="text-gray-600"> Organized by</span>
              <span className="text-primary underline"> {organisers}</span>
            </div>
            <div className="flex items-center gap-1 text-[12px]">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* SVG Path for Calendar Icon */}
              </svg>
              <span className="text-gray-600">{date}</span>
            </div>
          </div>
          <div className="flex gap-4 mt-4 text-gray-600">
            {facebook && (
              <a href={facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* SVG Path for Facebook Icon */}
                </svg>
              </a>
            )}
            {instagram && (
              <a href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* SVG Path for Instagram Icon */}
                </svg>
              </a>
            )}
            {twitter && (
              <a href={twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* SVG Path for Twitter Icon */}
                </svg>
              </a>
            )}
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* SVG Path for LinkedIn Icon */}
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
  