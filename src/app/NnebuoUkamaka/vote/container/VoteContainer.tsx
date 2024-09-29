import React from "react";
import Image from "next/image";
const VoteContainer = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-lg font-bold mb-4">Vote</h2>
        <p className="text-sm text-gray-600 mb-6">
          <span className="text-blue-600 font-semibold">10 FAO</span> will be deducted when voting is generated (Amount: 9 FAO)
        </p>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Category</label>
          <select className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed" disabled>
            <option>Birthday AD</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Vote Title</label>
          <input
            type="text"
            placeholder="Title"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Image</label>
          <div className="border border-gray-300 rounded-md p-6 w-full h-36 flex justify-center items-center bg-gray-100">
            <span className="text-gray-400">
              <Image
              src="/images/cameraIcon.png"
              alt="Image"
              width={20}
              height={20}
              />
            </span>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Description</label>
          <textarea
            placeholder="Please write down a description of the event"
            className="w-full p-3 border border-gray-300 rounded-md"
            rows={3}
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Start</label>
          <input
            type="date"
            defaultValue="2024-09-06"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <button className="w-full bg-blue-600 text-white p-3 rounded-md font-semibold">
            Create Vote
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoteContainer;
