"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const dummyStations = [
    {
        id: 1,
        name: "Central Police Station",
        phone: "+917987011984",
        distance: "0.8 km",
    },
    {
        id: 2,
        name: "West Side Police Station",
        phone: "+91785121202",
        distance: "1.5 km",
    },
    {
        id: 3,
        name: "North Zone Police Station",
        phone: "+917232249451",
        distance: "2.3 km",
    },
];

export default function NearbyPoliceStations() {
    const { data: session } = useSession(); // Ensure session is fetched
    const [location, setLocation] = useState(null);
    const [error, setError] = useState("");
    const [copiedPhone, setCopiedPhone] = useState(null); // Track the phone number that was copied

    useEffect(() => {
        if (!navigator.geolocation) {
            setError("Geolocation is not supported by your browser.");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            },
            () => {
                setError("Unable to fetch your location.");
            }
        );
    }, []);

    const handleCopy = (phone) => {
        navigator.clipboard.writeText(phone);
        setCopiedPhone(phone); // Store the phone number that was copied
        setTimeout(() => setCopiedPhone(null), 2000); // Reset after 2 seconds
    };

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-10">
            <div className="max-w-xl w-full bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-700 space-y-6">
                <h1 className="text-3xl font-bold text-center">🚓 Nearby Police Stations</h1>
                <p className="text-center text-gray-400">
                    We’ve found nearby police stations using your live GPS location.
                </p>

                {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                {!location && !error && (
                    <p className="text-center text-gray-400">Getting your location...</p>
                )}

                {location && (
                    <ul className="space-y-4">
                        {dummyStations.map((station) => (
                            <li
                                key={station.id}
                                className="bg-gray-800 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                            >
                                <div>
                                    <h2 className="text-lg font-semibold">{station.name}</h2>
                                    <p className="text-gray-400 text-sm">📍 {station.distance} away</p>
                                    <p className="text-gray-300 text-sm">📞 {station.phone}</p>
                                </div>
                                <button
                                    onClick={() => handleCopy(station.phone)}
                                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-bold"
                                >
                                    {copiedPhone === station.phone ? "Copied!" : "📋 Copy Number"}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
