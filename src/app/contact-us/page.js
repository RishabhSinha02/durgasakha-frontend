import { EmailForm } from "../components/contact-us/EmailForm";
import { ContactCard } from "../components/contact-us/ContactCard";
import { Map } from "../components/contact-us/Map";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

export default function ContactUs() {
    return (
      <div className="flex flex-col items-center gap-12 border-red-600 pb-10">
        <Map />
        <EmailForm />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <ContactCard 
            icon={<MdOutlineEmail size={50}/>} 
            title="Email Address" 
            subtitle="info@durgasakha.com" 
            callToActionText="Send Email"
            callToActionLink="mailto:info@durgasakha.com"
          />
          <ContactCard
            icon={<BsTelephone size={50}/>} 
            title="Phone Number" 
            subtitle="+91 1234567890" 
            callToActionText="Call us now"
            callToActionLink="tel:+911234567890"
          />
          <ContactCard 
            icon={<IoLocationOutline size={50}/>} 
            title="Location" 
            subtitle="Durgasakha Charitable Trust Cosmos County CASA, B Wing, flat no 1C, Ovla GB Road, Thane (west) – 400615"
            callToActionText="Find us here"
            callToActionLink="mailto:info@durgasakha.com"
          />
        </div>
    </div>
  );
}
  