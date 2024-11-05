import { Card } from "flowbite-react";
import Link from "next/link";

export function ContactCard({ icon, title, subtitle, callToActionText, callToActionLink }) {
  return (
    <Card className="max-w-sm flex flex-col text-center items-center place-items-center">
        <div className="flex justify-center text-primary">
            {icon}
        </div>
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
        <p className="text-gray-500">{subtitle}</p>
        <Link href={callToActionLink} className="text-secondary font-bold">{callToActionText} -&gt;</Link>
    </Card>
  );
}
