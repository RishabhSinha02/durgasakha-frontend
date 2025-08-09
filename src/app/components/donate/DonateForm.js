"use client";

import { Button, TextInput, Label, Textarea  } from "flowbite-react";
import { FaRupeeSign } from "react-icons/fa";
import { useEffect, useState } from "react";

export function DonateForm() {

    const [amount, setAmount] = useState(500);

    return (
        <form className="flex max-full flex-col gap-4 pt-8 sm:p-12 md:p-16 lg:p-24">
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="amount" value="Donation Amount" className="text-primary text-2xl sm:text-3xl font-bold"/>
                </div>
                <TextInput id="amount" type="number" className="max-w-md" icon={FaRupeeSign} required value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>
            <div className="flex flex-row">
                <Button.Group className="gap-4">
                    <Button onClick={() => setAmount(500)} className={`${amount == 500 ? 'bg-secondary text-white' : 'bg-white text-black hover:text-white'} rounded-full border-gray-400`}>₹500</Button>
                    <Button onClick={() => setAmount(1000)} className={`${amount == 1000 ? 'bg-secondary text-white' : 'bg-white text-black hover:text-white'} rounded-full border-gray-400`}>₹1000</Button>
                    <Button onClick={() => setAmount(5000)} className={`${amount == 5000 ? 'bg-secondary text-white' : 'bg-white text-black hover:text-white'} rounded-full border-gray-400`}>₹5000</Button>
                    <Button onClick={() => setAmount(10000)} className={`${amount == 10000 ? 'bg-secondary text-white' : 'bg-white text-black hover:text-white'} rounded-full border-gray-400`}>₹10000</Button>
                </Button.Group>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="message" value="Note" className="text-primary text-2xl sm:text-3xl font-bold"/>
                </div>
                <Textarea id="message" placeholder="Enter Message" required className="h-32" />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="name" value="Donor Details" className="text-primary text-2xl sm:text-3xl font-bold"/>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 justify-between">
                    <TextInput id="name" type="name" placeholder="Full Name" className="w-full" required />
                    <TextInput id="email" type="email" placeholder="Email Address" className="w-full" required />
                </div>
            </div>
            <div className="flex flex-col items-center w-full mt-8">
                <Button type="submit" className="rounded-full max-w-sm">Donate</Button>
            </div>
        </form>
    )
}