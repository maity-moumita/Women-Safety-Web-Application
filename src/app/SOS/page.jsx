"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function SOSPage() {
  const { data: session } = useSession();
  const [locationUrl, setLocationUrl] = useState("");
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fallbackMessage, setFallbackMessage] = useState("");

  // New contact form states
  const [formData, setFormData] = useState({ name: "", phone: "", relation: "" });

  useEffect(() => {
    if (!navigator.geolocation) {
      setFallbackMessage("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const mapsUrl = `https://maps.google.com/?q=${latitude},${longitude}`;
        setLocationUrl(mapsUrl);
        setFallbackMessage("");
      },
      () => {
        setFallbackMessage("Unable to access your location. Please ensure GPS is enabled.");
      }
    );
  }, []);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await fetch("/api/emergency-contact");
      if (!res.ok) throw new Error("Failed to fetch contacts.");
      const data = await res.json();
      setContacts(data);
    } catch (err) {
      setError("Failed to load emergency contacts.");
    }
  };

  const handleSOS = () => {
    if (!contacts.length) {
      setError("No emergency contacts found.");
      return;
    }

    const message = locationUrl
      ? `🚨 Emergency! I need help. Here's my location: ${locationUrl}`
      : `🚨 Emergency! I need help. I couldn't access my GPS location. Please call me ASAP.`;

    contacts.forEach((contact) => {
      const whatsappUrl = `https://wa.me/${contact.phone}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
    });
  };

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddContact = async () => {
    if (!formData.name || !formData.phone || !formData.relation) {
      setError("Please fill all fields.");
      return;
    }

    try {
      const res = await fetch("/api/emergency-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to add contact.");

      setFormData({ name: "", phone: "", relation: "" });
      setError("");
      fetchContacts();
    } catch (err) {
      setError("Failed to add contact.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/emergency-contact/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete contact.");
      fetchContacts();
    } catch (err) {
      setError("Failed to delete contact.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-10">
      <div className="max-w-xl w-full bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-700 space-y-6">
        <h1 className="text-3xl font-bold text-center">🚨 SOS Alert</h1>
        <p className="text-center text-gray-400">Send your location to all your emergency contacts.</p>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        {fallbackMessage && <p className="text-yellow-400 text-sm text-center">{fallbackMessage}</p>}

        <button
          onClick={handleSOS}
          disabled={loading || !contacts.length}
          className="w-full py-3 px-6 rounded-full font-bold transition bg-red-600 hover:bg-red-700"
        >
          📤 Send SOS Alert
        </button>

        {/* Contact List */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">📇 Your Emergency Contacts</h2>
          {contacts.length === 0 ? (
            <p className="text-gray-400">No contacts added yet.</p>
          ) : (
            <ul className="space-y-2">
              {contacts.map((contact) => (
                <li
                  key={contact._id}
                  className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-xl"
                >
                  <div>
                    <p className="font-semibold">{contact.name}</p>
                    <p className="text-sm text-gray-400">{contact.relation} • {contact.phone}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(contact._id)}
                    className="text-sm text-red-400 hover:text-red-600"
                  >
                    ❌
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Add Contact Form */}
        <div className="space-y-3 mt-6">
          <h2 className="text-xl font-semibold">➕ Add New Contact</h2>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700"
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone (+91...)"
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700"
          />
          <input
            type="text"
            name="relation"
            value={formData.relation}
            onChange={handleInputChange}
            placeholder="Relation (e.g. Mom, Friend)"
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700"
          />
          <button
            onClick={handleAddContact}
            className="w-full py-2 px-4 rounded-full bg-green-600 hover:bg-green-700 font-bold"
          >
            Add Contact
          </button>
        </div>
      </div>
    </div>
  );
}
