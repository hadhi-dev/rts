import React,{useEffect} from 'react';
import { config } from '../config';

const Dashboard = (props) => {


  const dummyData = [
    { name: 'Client 1', status: 'Active', open: 2, close: 1, total: 250 },
    { name: 'Client 2', status: 'Inactive', open: 2, close: 1, total: 350 },
    { name: 'Client 3', status: 'Active', open: 2, close: 1, total: 500 },
    { name: 'Client 4', status: 'Active', open: 2, close: 1, total: 600 },
    { name: 'Client 5', status: 'Inactive', open: 2, close: 1, total: 200 },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-md py-4 text-center text-white">
        <img
          src={`${config.IMAGE_URL}branding/logo1.png`}
          alt="Company Logo"
          className="w-auto h-16 mx-auto"
        />
        <h1 className="text-3xl font-semibold">Dashboard</h1>
      </div>
      <div className="container mx-auto mt-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dummyData.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 shadow-md transform transition-transform hover:scale-105"
            >
              <h2 className="text-lg font-semibold">{client.name}</h2>
              <p>Status: {client.status}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Client Revenue</h2>
        
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Income Revenue</h2>
        
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
