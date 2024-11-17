import GalleryAllCard from '../components/gallery/galleryAllCard';

const GalleryData = [
    {
        "title": "Everest Mountain",
        "imageUrl": "/event.png"
    },
    {
        "title": "Kilimanjaro Expedition",
        "imageUrl": "/event.png"
    },
    {
        "title": "Amazon Jungle Trek",
        "imageUrl": "/event.png"
    },
    {
        "title": "Sahara Desert Adventure",
        "imageUrl": "/event.png"
    },
    {
        "title": "Rocky Mountain Hike",
        "imageUrl": "/event.png"
    },
    {
        "title": "Grand Canyon Exploration",
        "imageUrl": "/event.png"
    },
    {
        "title": "Great Wall of China Tour",
        "imageUrl": "/event.png"
    },
    {
        "title": "Patagonia Wilderness Journey",
        "imageUrl": "/event.png"
    },
    {
        "title": "Swiss Alps Ski Trip",
        "imageUrl": "/event.png"
    },
    {
        "title": "New Zealand Hiking Tour",
        "imageUrl": "/event.png"
    },
    {
        "title": "Machu Picchu Exploration",
        "imageUrl": "/event.png"
    },
    {
        "title": "Andes Mountain Expedition",
        "imageUrl": "/event.png"
    },
    {
        "title": "Iceland Volcano Tour",
        "imageUrl": "/event.png"
    },
    {
        "title": "African Safari Adventure",
        "imageUrl": "/event.png"
    },
    {
        "title": "Himalayas Base Camp Trek",
        "imageUrl": "/event.png"
    }
];


export default function Gallery() {
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8'>
      {GalleryData.map((item, index) => (
                <GalleryAllCard 
                    key={index} 
                    title={item.title} 
                    imageUrl={item.imageUrl} 
                />
            ))}
    </div>
  );
}
