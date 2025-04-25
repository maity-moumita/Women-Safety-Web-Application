"use client";

import { useRouter } from "next/navigation";

const Feature = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white font-sans p-6 flex flex-col items-center justify-center space-y-10">
      
      {/* Header */}
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-2">🆘 Emergency Features</h1>
        <p className="text-gray-400 text-lg">
          Your safety, our priority. These powerful tools are built to help you in critical moments.
        </p>
      </header>

      {/* Share Your Location */}
      <section className="w-full max-w-xl bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-700">
        <h2 className="text-2xl font-semibold mb-2">📍 Share Your Location</h2>
        <p className="text-gray-300 mb-4">
          Share your real-time GPS location directly with nearby authorities to ensure fast help during emergencies.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-400 mb-4 space-y-1">
          <li>Real-time GPS tracking</li>
          <li>Shares location with authorized emergency services</li>
          <li>Enables quicker response and accurate location targeting</li>
          <li>Ideal for critical situations where speaking isn’t possible</li>
        </ul>
        <button
          onClick={() => router.push("/Share-Location")}
          className="bg-green-600 hover:bg-green-700 transition text-white font-bold py-2 px-4 rounded-full w-full"
        >
          Share Location
        </button>
      </section>

      {/* Emergency Quick Connect */}
      <section className="w-full max-w-xl bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-700">
        <h2 className="text-2xl font-semibold mb-2">📞 Emergency Quick Connect</h2>
        <p className="text-gray-300 mb-4">
          Instantly connect to the nearest police station with a single tap.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-400 mb-4 space-y-1">
          <li>One-touch activation</li>
          <li>Uses GPS to reach local authorities</li>
          <li>Can be triggered discreetly</li>
        </ul>
        <button
          onClick={() => router.push("/Quick-Connect")}
          className="bg-red-600 hover:bg-red-700 transition text-white font-bold py-2 px-4 rounded-full w-full"
        >
          Call Now
        </button>
      </section>

      {/* Emergency Contacts (With SOS Route) */}
      <section className="w-full max-w-xl bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-700">
        <h2 className="text-2xl font-semibold mb-2">👨‍👩‍👧 Emergency Contacts</h2>
        <p className="text-gray-300 mb-4">
          Notify your trusted circle in seconds. Instantly alert them with a message and your live location when you need help.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-400 mb-4 space-y-1">
          <li>Send alerts to multiple contacts</li>
          <li>Shares live GPS location via SMS or WhatsApp</li>
          <li>Customizable emergency message</li>
        </ul>
        <button
          onClick={() => router.push("/SOS")}
          className="bg-yellow-500 hover:bg-yellow-600 transition text-black font-bold py-2 px-4 rounded-full w-full"
        >
          Send Alert
        </button>
      </section>

      {/* SafeRide Alert */}
      <section className="w-full max-w-xl bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-700">
        <h2 className="text-2xl font-semibold mb-2">🛵 SafeRide Alert</h2>
        <p className="text-gray-300 mb-4">
          Share your trip and travel updates with your emergency contacts in real time.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-400 mb-4 space-y-1">
          <li>Live trip updates and route tracking</li>
          <li>Real-time notifications to contacts</li>
          <li>Helps ensure timely intervention if anything seems wrong</li>
        </ul>
        <button
          onClick={() => router.push("/Safe-Ride")}
          className="bg-blue-500 hover:bg-blue-600 transition text-white font-bold py-2 px-4 rounded-full w-full"
        >
          Share Ride Info
        </button>
      </section>
    </div>
  );
};

export default Feature;
