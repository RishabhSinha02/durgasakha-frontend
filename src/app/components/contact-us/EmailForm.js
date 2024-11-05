
import { Button, TextInput, Textarea } from "flowbite-react";


export function EmailForm() {
  return (
    <form className="flex min-w-96 md:w-3/4 flex-col gap-6 bg-white p-8 rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <TextInput id="email" type="name" placeholder="Full Name" required />
            <TextInput id="name" type="email" placeholder="Email Address" required />
            <TextInput id="mobile" type="number" placeholder="Phone Number" required />
        </div>
        <div>
            <Textarea id="message" placeholder="Enter Message" required />
        </div>
        <Button type="submit">Submit</Button>
    </form>
  );
}
