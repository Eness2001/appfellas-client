import React from "react";

const FlightFilter = () => {
  return (
    <div className="col-span-3 p-4 overflow-y-auto h-[calc(100vh-22rem)] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 bg-opacity-50">

      <h2 className="text-lg font-bold mb-4">Sort By:</h2>
      <select className="w-full p-2 border border-gray-300 rounded mb-6">
        <option value="lowest-price">Lowest Price</option>
        <option value="highest-price">Highest Price</option>
        <option value="arrival-time">Arrival Time</option>
      </select>


      <h2 className="text-lg font-bold mb-4">Arrival Time</h2>
      <div className="mb-6">
        <label className="flex items-center mb-2">
          <input
            type="radio"
            name="arrival-time"
            value="morning"
            className="mr-2"
          />
          5:00 AM - 11:59 AM
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="arrival-time"
            value="afternoon"
            className="mr-2"
          />
          12:00 PM - 5:59 PM
        </label>
      </div>


      <h2 className="text-lg font-bold mb-4">Stops</h2>
      <div className="mb-6">
        <label className="flex items-center mb-2 justify-between">
          <div>
            <input type="radio" name="stops" value="nonstop" className="mr-2" />
            <span>Nonstop</span>
          </div>
          <span>$230</span>
        </label>
        <label className="flex items-center mb-2 justify-between">
          <div>
            <input
              type="radio"
              name="stops"
              value="one-stop"
              className="mr-2"
            />
            <span>1 Stop</span>
          </div>
          <span>$230</span>
        </label>
        <label className="flex items-center justify-between">
          <div>
            <input
              type="radio"
              name="stops"
              value="two-plus-stops"
              className="mr-2"
            />
            <span>2+ Stops</span>
          </div>
          <span>$230</span>
        </label>
      </div>

      <h2 className="text-lg font-bold mb-4">Airlines Included</h2>
      <div>
        {[
          "Airline 1",
          "Airline 2",
          "Airline 3",
          "Airline 4",
          "Airline 5",
          "Airline 6",
          "Airline 7",
          "Airline 8",
          "Airline 9",
          "Airline 10",
        ].map((airline, index) => (
          <label key={index} className="flex items-center mb-2 justify-between">
            <div>
              <input type="radio" name="airlines" value={airline} />
              <span className="ml-2">{airline}</span>
            </div>
            <span>$230</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FlightFilter;
