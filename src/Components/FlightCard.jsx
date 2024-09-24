import React, { useState } from "react";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import LoadingSpinner from "./LoadingSpinner";
import axios from "axios";
import { toast } from "react-toastify"; 

const FlightCard = ({ flight }) => {
  const [loading, setLoading] = useState(false);
  const {
    id,
    flightName,
    actualLandingTime,
    airlineCode,
    route,
    scheduleDate,
    scheduleTime,
    baggageClaim,
  } = flight;

  const formatDateTime = (dateTime) => {
    return new Date(dateTime).toLocaleString();
  };

  const calculateDuration = () => {
    const departureTime = new Date(scheduleDate + "T" + scheduleTime);
    const arrivalTime = new Date(actualLandingTime);
    if (arrivalTime <= departureTime) {
      return "0 minutes";
    }

    const durationMinutes = Math.abs(
      (arrivalTime - departureTime) / (1000 * 60)
    );

    if (durationMinutes < 60) {
      return `${durationMinutes} minute${durationMinutes !== 1 ? "s" : ""}`;
    } else {
      const hours = Math.floor(durationMinutes / 60);
      const minutes = durationMinutes % 60;
      return `${hours} hour${hours !== 1 ? "s" : ""} ${minutes} minute${
        minutes !== 1 ? "s" : ""
      }`;
    }
  };

  const handleFlightSave = async (flightId) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/flights/${flightId}`
      );

      const saveResponse = await axios.post(
        "http://localhost:5000/api/flights",
        { ...response.data, id: flightId }
      );
  
      console.log("Uçuş başarıyla kaydedildi:", saveResponse.data);
      toast.success("Rezervasyon başarılı!"); // Show toast on success
    } catch (error) {
      console.error(
        "Uçuş kaydedilemedi:",
        error.response ? error.response.data : error.message
      );
      toast.error("Rezervasyon yapılamadı!"); // Show toast on error
    } finally {
      setLoading(false); // Set loading to false when the API call is done
    }
  };

  return (
    <div className="bg-white p-6 h-64 rounded-lg drop-shadow-lg mb-6 relative">
      {loading && <LoadingSpinner />}
      <h2 className="text-2xl font-bold mb-4">
        {route.destinations[0]} - {flightName}
      </h2>

      <div className="flex items-center justify-between text-gray-600 mb-4">
        <div className="flex items-center">
          <FaPlaneDeparture className="text-gray-600 mr-1" />
          <div>
            <p className="font-semibold">Departure</p>
            <p>{formatDateTime(scheduleDate + "T" + scheduleTime)}</p>
          </div>
        </div>

        <div className="border-t-2 border-gray-300 flex-grow mx-4"></div>

        <div className="text-center flex items-center">
          <IoAirplane className="text-gray-600 mr-1" />
          <div>
            <p className="font-semibold">Duration</p>
            <p>{calculateDuration()}</p>
          </div>
        </div>

        <div className="border-t-2 border-gray-300 flex-grow mx-4"></div>

        <div className="flex items-center">
          <FaPlaneArrival className="text-gray-600 mr-1" />
          <div>
            <p className="font-semibold">Arrival</p>
            <p>{formatDateTime(actualLandingTime)}</p>
          </div>
        </div>
      </div>

      <p className="text-lg font-semibold text-purple-800 mb-6">
        Airline Code : {airlineCode}
      </p>

      <div className="text-gray-600 mb-4">
        <p className="font-semibold">Baggage Claim</p>
        <p>
          Belts:{" "}
          {baggageClaim?.belts
            ? baggageClaim.belts.join(", ")
            : "No belts available"}
        </p>
      </div>

      <button
        onClick={() => handleFlightSave(id)}
        className="absolute bottom-0 right-0 bg-purple-500 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-tl-2xl w-32 h-16"
      >
        Book Flight
      </button>
    </div>
  );
};

export default FlightCard;
