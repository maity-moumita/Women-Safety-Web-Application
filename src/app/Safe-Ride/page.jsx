"use client";

import { useState, useEffect } from "react";

export default function RideDetails() {
  const [rideDetails, setRideDetails] = useState({
    driverName: "",
    rideType: "",
    vehicleNumber: "",
    rideInfo: "",
  });
  const [numberPlateImage, setNumberPlateImage] = useState(null);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState("");
  const [shared, setShared] = useState(false); // New state to track if details were shared

  // Get user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        () => setError("Unable to fetch location")
      );
    } else {
      setError("Geolocation not supported by this browser");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRideDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNumberPlateImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    if (!rideDetails.driverName || !rideDetails.rideType || !rideDetails.vehicleNumber || !numberPlateImage) {
      setError("Please fill all fields and upload the number plate image.");
      return;
    }

    // Here, you should ideally upload the image to a server and get the URL. For simplicity, we'll just assume the image is uploaded.
    // Let's assume the uploaded image is hosted at "https://example.com/number-plate.jpg"
    const imageUrl = "https://example.com/number-plate.jpg"; // Replace with your actual image URL after uploading

    const message = `
🚗 Ride Details:
Driver: ${rideDetails.driverName}
Ride Type: ${rideDetails.rideType}
Vehicle Number Plate: ${rideDetails.vehicleNumber}
Ride Info: ${rideDetails.rideInfo}
Location: https://maps.google.com/?q=${location.latitude},${location.longitude}
Vehicle Number Plate Image: ${imageUrl}
    `;

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

    // Open WhatsApp with pre-filled message
    window.open(whatsappUrl, "_blank");

    // Update UI to show that the details were shared successfully
    setShared(true);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-10">
      <div className="max-w-xl w-full bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-700 space-y-6">
        <h1 className="text-3xl font-bold text-center">🚗 Ride Details</h1>
        <p className="text-center text-gray-400">Share your ride details with your emergency contacts.</p>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        {shared && <p className="text-green-500 text-sm text-center">🚨 Ride details shared successfully!</p>}

        {!shared && (
          <div className="space-y-4">
            <input
              type="text"
              name="driverName"
              value={rideDetails.driverName}
              onChange={handleChange}
              placeholder="Driver's Name"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700"
            />
            <input
              type="text"
              name="rideType"
              value={rideDetails.rideType}
              onChange={handleChange}
              placeholder="Ride Type (Uber/Rapido)"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700"
            />
            <input
              type="text"
              name="vehicleNumber"
              value={rideDetails.vehicleNumber}
              onChange={handleChange}
              placeholder="Vehicle Number Plate"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700"
            />
            <textarea
              name="rideInfo"
              value={rideDetails.rideInfo}
              onChange={handleChange}
              placeholder="Ride Details (Car Type, Color, etc.)"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700"
            ></textarea>

            <div className="space-y-2">
              <label className="block">Upload Vehicle Number Plate Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700"
              />
              {numberPlateImage && (
                <img src={numberPlateImage} alt="Number Plate" className="w-full mt-2" />
              )}
            </div>

            <button
              onClick={handleSubmit}
              className="w-full py-3 px-6 rounded-full font-bold transition bg-red-600 hover:bg-red-700"
            >
              📤 Share Ride Details
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// The image cannot be shared via wa.me it can only text if want to share images we've to share via using image using firebase or aws 