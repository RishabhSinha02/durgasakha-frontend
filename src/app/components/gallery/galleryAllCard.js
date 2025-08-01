import Image from "next/image";
import Link from "next/link";

export default function GalleryAllCard({ data }) {
  return (
    <div>
      <Link href={`/gallery/${data.type}s/${data.uuid}`}>
        <div className="relative max-full overflow-hidden rounded-lg bg-white shadow-lg">
          {/* Background Image Section */}
          <div className="relative h-[300px]">
            <div className="h-full w-full">
              <Image
                src={data.gallery[0].image}
                alt={"Social Work"}
                className="object-cover h-full w-full"
                width={600}
                height={400}
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-row justify-between p-6">
            <div className="text-md font-bold">{data.name}</div>
            <div className="text-sm text-gray-600">
              {new Date(data.start_date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
