"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";

const ShareLocationPage = () => {
  const { data: session } = useSession(); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [locationUrl, setLocationUrl] = useState("");

  const handleShareLocation = () => {
    setLoading(true);
    setError("");

    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const mapsUrl = `https://maps.google.com/?q=${latitude},${longitude}`;
        const message = `📍 I'm sharing my live location. Please check here: ${mapsUrl}`;
        const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`;
        setLocationUrl(mapsUrl);
        window.open(whatsappURL, "_blank");
        setLoading(false);
      },
      () => {
        setError("Failed to get your location. Please try again.");
        setLoading(false);
      }
    );
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-10">
      <div className="max-w-xl w-full bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-700 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">📍 Share Your Location</h1>
          <p className="text-gray-400">
            Share your real-time GPS location through WhatsApp to ensure help reaches you quickly.
          </p>
        </div>

        <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
          <li>Real-time GPS tracking</li>
          <li>Shares location with anyone via WhatsApp</li>
          <li>Enables quicker response during emergencies</li>
        </ul>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          onClick={handleShareLocation}
          disabled={loading}
          className={`w-full py-3 px-6 rounded-full text-white font-bold transition ${
            loading
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {loading ? "Fetching location..." : "📤 Share Location via WhatsApp"}
        </button>

        {locationUrl && (
          <p className="text-sm text-gray-400 text-center">
            Location: <a href={locationUrl} className="text-blue-400 underline" target="_blank">{locationUrl}</a>
          </p>
        )}
      </div>
    </div>
  );
};

export default ShareLocationPage;
