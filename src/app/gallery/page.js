"use client";
import { useEffect, useState } from "react";
import GalleryAllCard from "../components/gallery/galleryAllCard";

export default function Gallery() {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const [eventsRes, treksRes] = await Promise.all([
        fetch("/events.json"),
        fetch("/treks.json"),
      ]);
      const [events, treks] = await Promise.all([
        eventsRes.json(),
        treksRes.json(),
      ]);
      // Combine and map to a common structure
      const eventCards = events.map((event) => ({
        title: event.name,
        imageUrl: event.cover_image,
        date: event.start_date,
        type: "events",
        slug: event.slug,
      }));
      const trekCards = treks.map((trek) => ({
        title: trek.name,
        imageUrl: trek.cover_image,
        date: trek.start_date,
        type: "treks",
        slug: trek.slug,
      }));
      const combinedData = [...eventCards, ...trekCards];
      const sortedData = combinedData.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setGalleryData(sortedData);
    }
    fetchData();
  }, []);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
      {galleryData.map((item, index) => (
        <GalleryAllCard
          key={index}
          title={item.title}
          imageUrl={item.imageUrl}
          type={item.type}
          slug={item.slug}
        />
      ))}
    </div>
  );
}
