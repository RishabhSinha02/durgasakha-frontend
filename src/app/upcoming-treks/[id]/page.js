// src/app/upcoming-treks/[id]/page.js
'use client';

import Itinerary from '@/app/components/upcoming-treks/itinerary';
import Image from 'next/image';
import { useParams } from 'next/navigation';

export default function TrekDetail() {
  const { id } = useParams(); // Get the dynamic ID from the URL

  const trekObj = {

    "id": 1,
    "images": [
      {
        "image": "/nature.jpg"
      },
      {
        "image": "/hero.png"
      }
    ],
    "itinerary": [
      {
        "title": "6am",
        "subtitle": "morning",
        "description": "utho"
      },
      {
        "title": "7pm",
        "subtitle": "reach",
        "description": "chalo"
      }
    ],
    "gallery": [],
    "name": "Irshalgad Trek",
    "venue": "Khopoli",
    "start_date": "2024-10-27T06:00:00+05:30",
    "end_date": "2024-10-27T18:00:00+05:30",
    "level": "Moderate",
    "price": "1200.00",
    "overview": "Embark on an epic journey through the majestic Himalayas with Durgasakha. Our Himalayan Trek is a once-in-a-lifetime adventure that promises breathtaking views, exhilarating experiences, and unforgettable memories. Traverse rugged mountain trails, explore ancient villages, and immerse yourself in the rich culture and natural beauty of this iconic region.",
    "highlights": "Embark on an epic journey through the majestic Himalayas with Durgasakha. Our Himalayan Trek is a once-in-a-lifetime adventure that promises breathtaking views, exhilarating experiences, and unforgettable memories. Traverse rugged mountain trails, explore ancient villages, and immerse yourself in the rich culture and natural beauty of this iconic region.",
    "things_to_carry": "Embark on an epic journey through the majestic Himalayas with Durgasakha. Our Himalayan Trek is a once-in-a-lifetime adventure that promises breathtaking views, exhilarating experiences, and unforgettable memories. Traverse rugged mountain trails, explore ancient villages, and immerse yourself in the rich culture and natural beauty of this iconic region.",
    "what_is_included": "Embark on an epic journey through the majestic Himalayas with Durgasakha. Our Himalayan Trek is a once-in-a-lifetime adventure that promises breathtaking views, exhilarating experiences, and unforgettable memories. Traverse rugged mountain trails, explore ancient villages, and immerse yourself in the rich culture and natural beauty of this iconic region.",
    "what_is_not_included": "Embark on an epic journey through the majestic Himalayas with Durgasakha. Our Himalayan Trek is a once-in-a-lifetime adventure that promises breathtaking views, exhilarating experiences, and unforgettable memories. Traverse rugged mountain trails, explore ancient villages, and immerse yourself in the rich culture and natural beauty of this iconic region.",
    "cover_image": "http://localhost:8000/media/trek/cover/legal.png",
    "facebook_post_link": null,
    "instagram_post_link": null,
    "twitter_post_link": null,
    "youtube_post_link": null,
    "created_at": "2024-10-23T01:34:19.296151+05:30",
    "updated_at": "2024-10-23T01:36:48.179981+05:30"
  }



  return (
    <div className="card lg:m-16 md:m-8 sm:m-4 m-4 lg:p-12 md:p-8 sm:p-4 p-4 flex flex-col gap-16 rounded-xl bg-white h-full border-gray-200 border">
      <div className="grid lg:grid-cols-8 md:grid-cols-1 grid-cols-1 gap-16">
        <div className="lg:h-[458px] md:h-[358px] h-[200px] lg:col-span-5 md:col-span-1 col-span-1" style={{ position: "relative" }}>
          <Image
            src={trekObj.images[1].image}
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className='lg:col-span-3 md:col-span-1 col-span-1'>
          <table className="table-auto text-left w-full">
            <tbody>
              <tr>
                <th className="font-bold">Venue</th>
                <td className="px-4 py-2">{id}</td>
              </tr>
              <tr>
                <th className=" font-bold">Date</th>
                <td className="px-4 py-2">
                  {`${trekObj.start_date.split('T')[0]} - ${trekObj.end_date.split('T')[0]}`}
                </td>
              </tr>
              <tr>
                <th className=" font-bold">Duration</th>
                <td className="px-4 py-2">
                  {`${Math.floor((new Date(trekObj.end_date) - new Date(trekObj.start_date)) / (1000 * 60 * 60 * 24))} days ${Math.floor(((new Date(trekObj.end_date) - new Date(trekObj.start_date)) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))} hours`}
                </td>
              </tr>
              <tr>
                <th className=" font-bold">Event Category</th>
                <td className="px-4 py-2">Trek</td>
              </tr>
              <tr>
                <th className=" font-bold">Organiser</th>
                <td className="px-4 py-2">Durga Sakha</td>
              </tr>
              <tr>
                <th className=" font-bold">Phone</th>
                <td className="px-4 py-2">1234567890</td>
              </tr>
              <tr>
                <th className=" font-bold">Email</th>
                <td className="px-4 py-2">info@durgasakha.com</td>
              </tr>
              <tr>
                <th className=" font-bold">Rate</th>
                <td className="px-4 py-2">Rs 1499</td>
              </tr>
              <tr>
                <td colSpan="2" className="px-4 pt-12 text-center">
                  <button className="bg-secondary text-white px-8 py-2 rounded-full font-bold">Book Now</button>
                </td>
              </tr>
            </tbody>
          </table>


        </div>
      </div>

      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">Overview</h1>
        <p className="mt-1 text-sm md:text-sm text-justify max-w-7xl">
          {trekObj.overview}
        </p>
      </div>


      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">Highlights</h1>
        <p className="mt-1 text-sm md:text-sm text-justify max-w-7xl">
          {trekObj.highlights}
        </p>
      </div>


      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">Itinerary</h1>
        <div className="mt-1 text-sm md:text-sm text-justify max-w-7xl">
          <Itinerary itinerary={trekObj.itinerary} />
        </div>
      </div>


      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">Payment Details</h1>
        <div className="grid grid-cols-1 md:grid-cols-6 mt-1 text-xs sm:text-sm md:text-lg text-left max-w-7xl">
          <div className='col-span-1 md:col-span-3'>

            <table className="w-full">
              <tbody>
                <tr className='h-10'>
                  <th className="">Bank Name</th>
                  <td className="px-4 py-2">XYZ Bank</td>
                </tr>
                <tr className='h-10'>
                  <th className="">Branch</th>
                  <td className="px-4 py-2">XYZ Andheri West Branch</td>
                </tr>
                <tr className='h-10'>
                  <th className="">Account Holder Name</th>
                  <td className="px-4 py-2">Rishabh Sinha</td>
                </tr>
                <tr className='h-10'>
                  <th className="">Account Number</th>
                  <td className="px-4 py-2">1234567890</td>
                </tr>
                <tr className='h-10'>
                  <th className="">IFSC Code</th>
                  <td className="px-4 py-2">XYZM0000123</td>
                </tr>
                <tr className='h-10'>
                  <td colSpan="2" className="py-2">
                    Send us a screenshot of the payment.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='flex flex-col text-center justify-center font-extrabold text-2xl text-gray-600'>OR</div>
          <div className='col-span-1 md:col-span-2 flex flex-col justify-center'>
            <div className='flex justify-center'>
              <Image src={'https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg'} alt=""
                height={200}
                width={200}
              />
            </div>
            <div className='flex justify-center text-primary text-lg font-bold'>UPI QR Code</div>
          </div>
        </div>
      </div>


      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">Things to Carry</h1>
        <p className="mt-1 text-sm md:text-sm text-justify max-w-7xl">
          {trekObj.things_to_carry}
        </p>
      </div>


      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">Join Us</h1>
        <p className="mt-1 text-sm md:text-sm text-justify max-w-7xl">
          {trekObj.overview}
        </p>
      </div>


    </div>

  );
}
