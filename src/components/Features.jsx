"use client";

import Card from "./Card";

// React-Icons
import { MdGpsFixed } from "react-icons/md";
import { MdLocalPolice } from "react-icons/md";
import { MdContactEmergency } from "react-icons/md";
import { IoCarSport } from "react-icons/io5";

const Features = () => {
    return (
        <>
            <h1 className="uppercase m-4 text-3xl bg-gradient-to-r from-[#771931] to-[#00466f] rounded p-2 text-white max-w-sm text-center mx-auto">
                Features
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 items-center justify-items-center gap-0">
                <Card icon={<MdGpsFixed className="text-5xl" />}
                    title="Share Your Location"
                    description="Share your real-time GPS location with authorities for quick assistance and enhanced safety." />
                <Card icon={<MdLocalPolice className="text-5xl" />}
                    title="Emergency Quick Connect"
                    description="One-touch emergency call to instantly connect with the nearest police station for immediate assistance." />
                <Card icon={<MdContactEmergency className="text-5xl" />}
                    title="Emergency Contacts"
                    description="Quickly send an emergency alert to your trusted contacts, keeping them informed and ensuring swift help arrives." />
                <Card icon={<IoCarSport className="text-5xl" />}
                    title="SafeRide Alert"
                    description="Share your Rapido trip details and location with emergency contacts, ensuring they are informed throughout your journey."/>
            </div>
        </>
    )
}

export default Features 