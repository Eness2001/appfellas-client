import React, { useState, useEffect } from "react";
import axios from "axios";
import FlightCard from "../Components/FlightCard";
import FlightBookingCard from "../Components/FlightBookingCard";
import FlightFilter from "../Components/FlightFilter";
import SkeletonCard from "../Components/SkeletonCard";

const HomePage = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFlights = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/flights");
      setFlights(response.data.flights);
    } catch (error) {
      setError("Uçuş bilgileri getirilemedi");
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-12 gap-4 h-[calc(100vh-6rem)] overflow-y-auto rounded-2xl bg-gray-200">
        <div className="col-span-12 p-4 h-full">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 p-1">
              <FlightBookingCard />
            </div>
            <div className="col-span-12 overflow-y-auto h-[calc(100vh-22rem)] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 bg-opacity-50">
              <div className="p-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <SkeletonCard key={index} />
                ))}
              </div>
            </div>
            <FlightFilter />
          </div>
        </div>
      </div>
    );
  }

  if (error) return <div>{error}</div>;

  return (
    <div className="grid grid-cols-12 gap-4 h-[calc(100vh-6rem)] overflow-y-auto rounded-2xl bg-gray-200">
      <div className="col-span-12 p-4 h-full">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 p-1">
            <FlightBookingCard />
          </div>
          <div className="col-span-12 overflow-y-auto h-[calc(100vh-22rem)] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 bg-opacity-50">
            <div className="p-1">
              {/* Sort section */}
              <div className="flex justify-between mb-4">
                <span className="font-semibold">Sort Flights:</span>
                <select className="border border-gray-300 rounded-lg p-2">
                  <option value="price">Price</option>
                  <option value="duration">Duration</option>
                  <option value="departure">Departure</option>
                </select>
              </div>

              {flights.map((flight, index) => (
                <FlightCard key={index} flight={flight} />
              ))}
            </div>
          </div>
          <FlightFilter />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
