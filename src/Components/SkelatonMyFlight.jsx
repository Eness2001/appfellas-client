import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="grid grid-cols-12 mb-4 bg-white border rounded-lg shadow-md p-4 animate-pulse">
      <div className="col-span-1 flex items-center justify-center">
        <div className="bg-gray-300 h-12 w-12 rounded-full" />
      </div>
      <div className="col-span-5">
        <div className="mb-4">
          <div className="bg-gray-300 h-6 w-3/4 rounded-md" />
        </div>
        <div className="flex justify-between pr-32">
          <div className="flex flex-col">
            <div className="bg-gray-300 h-4 w-1/2 rounded-md mb-2" />
            <div className="bg-gray-300 h-4 w-3/4 rounded-md" />
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-300 h-4 w-16 rounded-md mb-1" />
            <div className="bg-gray-300 h-4 w-24 rounded-md" />
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-300 h-4 w-32 rounded-md mb-1" />
            <div className="bg-gray-300 h-4 w-20 rounded-md" />
          </div>
        </div>
      </div>
      <div className="col-span-6 grid grid-cols-5 gap-2">
        <div className="border p-2 flex flex-col items-center justify-center rounded-lg">
          <div className="bg-gray-300 h-4 w-16 rounded-md mb-1" />
          <div className="bg-gray-300 h-6 w-20 rounded-md" />
        </div>
        <div className="border p-2 flex flex-col items-center justify-center rounded-lg">
          <div className="bg-gray-300 h-4 w-16 rounded-md mb-1" />
          <div className="bg-gray-300 h-6 w-20 rounded-md" />
        </div>
        <div className="border p-2 flex flex-col items-center justify-center rounded-lg">
          <div className="bg-gray-300 h-4 w-16 rounded-md mb-1" />
          <div className="bg-gray-300 h-6 w-20 rounded-md" />
        </div>
        <div className="border p-2 flex flex-col items-center justify-center text-gray-400 rounded-lg">
          <div className="bg-gray-300 h-4 w-16 rounded-md mb-1" />
          <div className="bg-gray-300 h-6 w-20 rounded-md" />
        </div>
        <div className="border p-2 flex flex-col items-center justify-center text-gray-400 rounded-lg">
          <div className="bg-gray-300 h-4 w-16 rounded-md mb-1" />
          <div className="bg-gray-300 h-6 w-20 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
