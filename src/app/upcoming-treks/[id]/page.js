// src/app/upcoming-treks/[id]/page.js
'use client';

import { useParams } from 'next/navigation';

export default function TrekDetail() {
  const { id } = useParams(); // Get the dynamic ID from the URL

  return (
    <div>
      <h1>Content for {id}</h1>
      {/* Fetch and display content based on the ID */}
    </div>
  );
}
