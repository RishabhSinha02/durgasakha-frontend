import { EmailForm } from "../components/contact-us/EmailForm";
import { ContactCard } from "../components/contact-us/ContactCard";
import { Map } from "../components/contact-us/Map";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

export default function ContactUs() {
  return (
    <div className="flex flex-col items-center border-red-600 pb-24">
      <Map />
      <EmailForm />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <ContactCard
          icon={<MdOutlineEmail size={50} />}
          title="Email Address"
          subtitle="durgasakha@gmail.com"
          callToActionText="Send Email"
          callToActionLink="mailto:durgasakha@gmail.com"
        />
        <ContactCard
          icon={<BsTelephone size={50} />}
          title="Phone Number"
          subtitle="+91 97735 37532"
          callToActionText="Call us now"
          callToActionLink="tel:+919773537532"
        />
        <ContactCard
          icon={<IoLocationOutline size={50} />}
          title="Location"
          subtitle="Durgasakha Charitable Trust Cosmos County CASA, B Wing, flat no 1C, Ovla GB Road, Thane (west) – 400615"
          callToActionText="Find us here"
          callToActionLink="mailto:durgasakha@gmail.com"
        />
      </div>
    </div>
  );
}
