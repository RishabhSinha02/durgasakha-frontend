export default function Itinerary({ itinerary }) {
    return (
        <div>
            {/* for simple itinerary title, subtitle, and description display */}
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4">

            </div>
            {itinerary.map((item, index) => (
                <div key={index}>
                    <div className="flex items-start gap-4">
                        <div className="flex flex-col items-center mt-1">
                            <div className="w-4 h-4 rounded-full bg-secondary"></div>
                            <div className="w-1 h-24 my-1 bg-secondary"></div>
                        </div>
                        <div className="">
                            <h3 className="font-bold text-left text-lg m:text-xl text-secondary">{item.title}</h3>
                            <div className="flex flex-col gap-0">
                                <p className="text-md md:text-lg font-medium text-gray-900">{item.subtitle}</p>
                                <p className="text-sm text-gray-600 text-left">{item.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}