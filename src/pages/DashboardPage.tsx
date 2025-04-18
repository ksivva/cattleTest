
import React from 'react';
import LocationsList from '@/components/LocationsList';
import { useData } from '@/data/context';

const DashboardPage: React.FC = () => {
  const { locations, animals } = useData();
  const totalHead = animals.length;
  
  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-700">Livestock Management</h1>
      <LocationsList
        locations={locations}
        totalHead={totalHead}
      />
      <div className="mt-4 text-sm text-gray-500 text-center px-2">
        <p>This provides a running list of all locations and the head counts picked up from them.</p>
        <p>The date is "Today" but can reference previous days.</p>
      </div>
    </div>
  );
};

export default DashboardPage;
