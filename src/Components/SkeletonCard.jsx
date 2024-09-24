import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="bg-white p-6 h-64 rounded-lg drop-shadow-lg mb-6 animate-pulse">
      <div className="h-8 bg-gray-300 rounded mb-4"></div>
      <div className="flex items-center justify-between text-gray-600 mb-4">
        <div className="flex items-center">
          <div className="w-6 h-6 bg-gray-300 rounded-full mr-1"></div>
          <div>
            <div className="h-4 bg-gray-300 rounded mb-1"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
          </div>
        </div>

        <div className="border-t-2 border-gray-300 flex-grow mx-4"></div>

        <div className="text-center flex items-center">
          <div className="w-6 h-6 bg-gray-300 rounded-full mr-1"></div>
          <div>
            <div className="h-4 bg-gray-300 rounded mb-1"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
          </div>
        </div>

        <div className="border-t-2 border-gray-300 flex-grow mx-4"></div>

        <div className="flex items-center">
          <div className="w-6 h-6 bg-gray-300 rounded-full mr-1"></div>
          <div>
            <div className="h-4 bg-gray-300 rounded mb-1"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>

      <div className="h-4 bg-gray-300 rounded mb-4"></div>
      <div className="h-4 bg-gray-300 rounded mb-4"></div>

      <button className="absolute bottom-0 right-0 bg-gray-300 w-32 h-16 rounded-tl-2xl animate-pulse"></button>
    </div>
  );
};

export default SkeletonCard;
