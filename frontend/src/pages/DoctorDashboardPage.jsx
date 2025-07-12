import React from 'react';
import { useNavigate } from 'react-router';

const mockDevices = [
  {
    id: 'D-1001',
    name: 'Fresenius 4008S',
    hospital: 'City Hospital',
    location: 'Ward 3, Floor 2',
    status: 'Active',
  },
  {
    id: 'D-1002',
    name: 'Baxter AK 98',
    hospital: 'Metro Medical Center',
    location: 'Ward 1, Floor 1',
    status: 'Active',
  },
  {
    id: 'D-1003',
    name: 'Nipro Surdial',
    hospital: 'Green Valley Hospital',
    location: 'Ward 2, Floor 3',
    status: 'Inactive',
  },
];

const DoctorDashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-gray-50 py-10 px-2 sm:px-4">
      <div className="w-full max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Devices</h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockDevices.map((device) => (
            <div
              key={device.id}
              className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 cursor-pointer hover:shadow-xl transition"
              onClick={() => navigate(`/device/${device.id}`)}
            >
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold text-gray-800">{device.name}</h2>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${device.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-500'}`}>{device.status}</span>
              </div>
              <div className="text-gray-600 text-sm mb-1">Device ID: <span className="font-mono">{device.id}</span></div>
              <div className="text-gray-600 text-sm mb-1">Hospital: {device.hospital}</div>
              <div className="text-gray-600 text-sm">Location: {device.location}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboardPage;