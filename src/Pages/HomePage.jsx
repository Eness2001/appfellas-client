import React, { useState, useEffect } from "react";
import axios from "axios";
import FlightCard from "../Components/FlightCard";
import FlightBookingCard from "../Components/FlightBookingCard";
import FlightFilter from "../Components/FlightFilter";
import SkeletonCard from "../Components/SkeletonCard";
const HomePage = () => {
  const [flights, setFlights] = useState([]); // State to hold flight data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage errors

  const fetchFlights = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/flights");
      console.log(response.data.flights); // Log the response
      setFlights(response.data.flights); // Set flight data to state
    } catch (error) {
      setError("Uçuş bilgileri getirilemedi"); // Set error message
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    } finally {
      setLoading(false); // Set loading to false after request completes
    }
  };

  useEffect(() => {
    fetchFlights(); // Fetch flights on component mount
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-12 gap-4 h-[calc(100vh-6rem)] overflow-y-auto rounded-2xl bg-gray-200">
        <div className="col-span-9 p-4 h-full">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 p-1">
              <FlightBookingCard />
            </div>
            <div className="col-span-9 overflow-y-auto h-[calc(100vh-22rem)] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 bg-opacity-50">
              <div className="p-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <SkeletonCard key={index} /> // Render skeleton cards
                ))}
              </div>
            </div>
            <FlightFilter />
          </div>
        </div>

        <div className="col-span-3 p-4 h-full flex flex-col space-y-2"></div>
      </div>
    );
  }

  if (error) return <div>{error}</div>;

  return (
    <div className="grid grid-cols-12 gap-4 h-[calc(100vh-6rem)] overflow-y-auto rounded-2xl bg-gray-200">
      <div className="col-span-9 p-4 h-full">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 p-1">
            <FlightBookingCard />
          </div>
          <div className="col-span-9 overflow-y-auto h-[calc(100vh-22rem)] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 bg-opacity-50">
            <div className="p-1">
              {flights.map((flight, index) => (
                <FlightCard key={index} flight={flight} />
              ))}
            </div>
          </div>
          <FlightFilter />
        </div>
      </div>
      <div className="col-span-3 p-4 h-full flex flex-col space-y-2">
        <div className="relative">
          <img
            src="https://blog.osum.com/wp-content/uploads/elementor/thumbs/1714386433130x874849267375867600-feature-qnh4340cbovuiykm0h5uhj45z7t8v9a1pf8mhb867k.jpeg"
            alt="Car Rent"
            className="w-full min-h-60 object-cover rounded-lg"
          />
          <h2 className="absolute bottom-2 left-2 text-white font-bold text-lg">
            Car Rent
          </h2>
        </div>
        <div className="relative">
          <img
            src="https://electricityrates.com/wp-content/uploads/2023/06/energy-savings-tips-for-hotels-1024x535.jpeg"
            alt="Hotels"
            className="w-full min-h-60 object-cover rounded-lg"
          />
          <h2 className="absolute bottom-2 left-2 text-white font-bold text-lg">
            Hotels
          </h2>
        </div>
        <div className="relative">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2023/4/297084137/ZR/MH/GQ/9160165/international-tour-package-500x500.jpg"
            alt="Travel Package"
            className="w-full min-h-60 object-cover rounded-lg"
          />
          <h2 className="absolute bottom-2 left-2 text-white font-bold text-lg">
            Travel Package
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
