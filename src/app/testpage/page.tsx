"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    name: 'Sara',
    fullName: 'Tancredi',
    email: 'SaraTancredi@gmail.com',
    phoneNumber: '(+91) 9123728167',
    location: 'New Delhi'
  });

  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    // Handle save changes logic here
    console.log('Saved data:', formData);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white p-6">
        <h2 className="text-xl font-bold mb-4">User Profile</h2>
        <ul>
          <li className="mb-2 font-semibold text-orange-500">User info</li>
          <li className="mb-2">Favorites</li>
          <li className="mb-2">Watchlist</li>
          <li className="mb-2">Settings</li>
          <li className="mb-2">Notifications</li>
        </ul>
        <button className="text-red-500 mt-6">Log out</button>
      </div>

      {/* Profile Form */}
      <div className="flex-1 p-10">
        <div className="bg-white p-8 shadow-md rounded-lg">
          <div className="flex items-center mb-6">
            <Image
              src="../../../public/next.svg" // Use an appropriate profile image here
              alt="Profile Picture"
              width={80}
              height={80}
              className="rounded-full"
            />
            <div className="ml-4">
              <h3 className="text-2xl font-semibold">{formData.fullName}</h3>
              <p className="text-gray-500">{formData.location}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                placeholder="e.g. New York, USA"
              />
            </div>
          </div>
          <button
            onClick={handleSave}
            className="mt-6 bg-orange-500 text-white py-2 px-4 rounded-md"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
