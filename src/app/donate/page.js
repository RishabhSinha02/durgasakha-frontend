import { DonateForm } from "../components/donate/DonateForm";
import { EventCard } from "../components/donate/EventCard";

export default function Donate() {
    return (
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-full bg-white  p-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-primary text-4xl sm:text-5xl md:text-7xl font-bold max-w-3xl text-center mt-8">
              Make a Donation to help us  
            </h1>
          </div>
          <DonateForm />
        </div>
        <div className="flex flex-col items-center mb-10 gap-8 mt-8"> 
          <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
            <h1 className="text-3xl sm:text-3xl md:text-5xl text-primary font-bold md:text-right p-4 md:p-20 max-w-lg">
              Our Social Works</h1>
            <div className="border-l-8 border-secondary ml-4 md:ml-0 pl-2 sm:pl-4 md:pl-10 text-md sm:text-lg md:text-xl text-primary max-w-lg font-bold p-4 md:p-8">
              Durgasakha is followed by tourism and awareness of the gathering and gathering of the miscreants and putting together one step to humanity.
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
            <EventCard />
            <EventCard />
          </div>
        </div>
      </div>
    );
  }
  