import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 
import {
  FaPlane,
  FaPlaneDeparture,
  FaPlaneArrival,
  FaRegCalendarAlt,
} from "react-icons/fa";

const FlightBookingCard = () => {
  const [tripType, setTripType] = useState("roundTrip"); 
  const [departureDate, setDepartureDate] = useState(null); 
  const [returnDate, setReturnDate] = useState(null); 
  const [isDepartureOpen, setIsDepartureOpen] = useState(false); 
  const [isReturnOpen, setIsReturnOpen] = useState(false); 

  const handleDepartureClick = () => setIsDepartureOpen(true); 
  const handleReturnClick = () => setIsReturnOpen(true); 

  return (
    <div className="bg-white p-4 rounded-lg drop-shadow-lg mb-shadow-md space-y-4 relative z-20">
      <div className="flex justify-between items-center">
        <h2 className="flex items-center text-2xl font-semibold">
          <FaPlane /> <span className="ml-2">Book Your Flight</span>
        </h2>
        <div className="flex bg-gray-100 rounded-full p-1">
          <button
            onClick={() => setTripType("roundTrip")}
            className={`px-4 py-2 rounded-full font-medium transition duration-300 ease-in-out ${
              tripType === "roundTrip"
                ? "bg-purple-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Round Trip
          </button>
          <button
            onClick={() => setTripType("oneWay")}
            className={`px-4 py-2 rounded-full font-medium ml-2 transition duration-300 ease-in-out ${
              tripType === "oneWay"
                ? "bg-purple-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            One Way
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="col-span-6 relative">
          <FaPlaneDeparture className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500" />
          <input
            type="text"
            placeholder="From"
            className="w-full pl-10 p-2 border border-gray-300 rounded-l-3xl"
          />
        </div>

        <div className="col-span-6 relative">
          <FaPlaneArrival className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500" />
          <input
            type="text"
            placeholder="To"
            className="w-full pl-10 p-2 border border-gray-300 rounded-r-3xl"
          />
        </div>

        <div className="col-span-6 relative">
          <FaRegCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500" />
          <input
            type="text"
            placeholder="Departure"
            onClick={handleDepartureClick}
            className="w-full pl-10 p-2 border border-gray-300 rounded-l-3xl"
            readOnly
            value={departureDate ? departureDate.toLocaleDateString() : ""}
          />
          {isDepartureOpen && (
            <div className="absolute z-50">
              <DatePicker
                selected={departureDate}
                onChange={(date) => {
                  setDepartureDate(date);
                  setIsDepartureOpen(false);
                }}
                onClickOutside={() => setIsDepartureOpen(false)} 
                inline 
              />
            </div>
          )}
        </div>

        {tripType === "roundTrip" && (
          <div className="col-span-6 relative z-50">
            <FaRegCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500" />
            <input
              type="text"
              placeholder="Return"
              onClick={handleReturnClick}
              className="w-full pl-10 p-2 border border-gray-300 rounded-r-3xl"
              readOnly
              value={returnDate ? returnDate.toLocaleDateString() : ""}
            />
            {isReturnOpen && (
              <div className="absolute z-50">
                <DatePicker
                  selected={returnDate}
                  onChange={(date) => {
                    setReturnDate(date);
                    setIsReturnOpen(false);
                  }}
                  onClickOutside={() => setIsReturnOpen(false)}
                  inline
                />
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex justify-start mt-4">
        <button className="px-6 py-2 bg-purple-500 hover:bg-purple-700 text-white rounded-lg font-medium">
          Show Flights
        </button>
      </div>
    </div>
  );
};

export default FlightBookingCard;
