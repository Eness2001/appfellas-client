import React, { useState, useEffect } from "react";
import { FaPlaneDeparture, FaArrowDown } from "react-icons/fa";
import SkelatonMyFlight from "../Components/SkelatonMyFlight";
import axios from "axios";

const MyFlights = () => {
  const [bookedFlights, setBookedFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/user-flights"
        );
        await setBookedFlights(response.data);
        console.log(bookedFlights);
      } catch (error) {
        console.error("Error fetching flights:", error);
        setError("Failed to fetch flights."); 
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, [bookedFlights]);

  if (loading) {
    return (
      <div className="grid grid-cols-12 gap-4 h-[calc(100vh-6rem)] overflow-y-auto rounded-2xl bg-gray-200">
        <div className="col-span-12 p-4 h-full">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 overflow-y-auto h-[calc(100vh-22rem)] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 bg-opacity-50">
              <div className="p-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <SkelatonMyFlight key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 p-4 h-full flex flex-col space-y-2"></div>
      </div>
    );
  }

  if (error) return <div>{error}</div>;

  return (
    <div className="grid grid-cols-12 p-6">
      <div className="col-span-12 max-h-[85vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 bg-opacity-50">
        {bookedFlights.length === 0 ? (
          <p className="text-center text-gray-500">No flights booked yet.</p>
        ) : (
          bookedFlights.map((flight) => (
            <div
              key={flight._id}
              className="grid grid-cols-12 mb-4 bg-white border rounded-lg shadow-md p-4"
            >
              <div className="col-span-1 flex items-center justify-center">
                <FaPlaneDeparture className="text-3xl text-purple-600" />
              </div>
              <div className="col-span-5">
                <div className="mb-4 pl-2">
                  <h1 className="text-2xl font-bold">{flight.flightName}</h1>
                </div>

                <div className="flex justify-between pr-32">
                  <div className="flex flex-col">
                    <span className="font-semibold p-2">
                      {flight.aircraftType.iataSub}
                    </span>
                    <button className="text-purple-600 font-medium hover:bg-purple-200 rounded-xl p-2 flex items-center">
                      <span>Flight Details</span>
                      <FaArrowDown className="ml-2" />
                    </button>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-gray-700">Non-stop</span>
                    {flight.isOperationalFlight ? (
                      <p>Operative</p>
                    ) : (
                      <p>Non - Operative</p>
                    )}
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-gray-700">
                      {flight.route.destinations[0]}
                    </span>
                    <span className="text-gray-700">
                      {flight.publicFlightState.flightStates[0]}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-6 grid grid-cols-5 gap-2">
                <div className="border p-2 flex flex-col items-center justify-center rounded-lg">
                  <p className="font-semibold">Main</p>
                  <p className="text-lg">230 $</p>
                </div>
                <div className="border p-2 flex flex-col items-center justify-center rounded-lg">
                  <p className="font-semibold">Comfort</p>
                  <p className="text-lg">230 $</p>
                </div>
                <div className="border p-2 flex flex-col items-center justify-center rounded-lg">
                  <p className="font-semibold">Delta One</p>
                  <p className="text-lg">230 $</p>
                </div>
                <div className="border p-2 flex flex-col items-center justify-center text-gray-400 rounded-lg">
                  Empty
                </div>
                <div className="border p-2 flex flex-col items-center justify-center text-gray-400 rounded-lg">
                  Empty
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyFlights;
