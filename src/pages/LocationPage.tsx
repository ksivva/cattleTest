
import React from 'react';
import { useParams } from 'react-router-dom';
import LocationDetail from '@/components/LocationDetail';
import { useData } from '@/data/context';
import { Animal, Location } from '@/types';

const LocationPage: React.FC = () => {
  const { locationId } = useParams<{ locationId: string }>();
  const { locations, getAnimalsByLocation } = useData();
  const [location, setLocation] = React.useState<Location | null>(null);
  const [animals, setAnimals] = React.useState<Animal[]>([]);
  
  React.useEffect(() => {
    if (locationId) {
      const id = parseInt(locationId, 10);
      const foundLocation = locations.find(loc => loc.id === id) || null;
      const filteredAnimals = getAnimalsByLocation(id);
      
      setLocation(foundLocation);
      setAnimals(filteredAnimals);
    }
  }, [locationId, locations, getAnimalsByLocation]);
  
  if (!location) {
    return (
      <div className="container mx-auto p-4 max-w-md">
        <div className="p-4 text-center">
          <div className="animate-pulse">Loading location data...</div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-700">Location Details</h1>
      <LocationDetail
        location={location}
        animals={animals}
      />
      <div className="mt-4 text-sm text-gray-500 text-center px-2">
        <p>This provides a running list of each location and the individual EID's with the total counts picked up from them.</p>
        <p>The date and location will be the reference key. 04/05/2023-LOC4.</p>
        <p>Add animals starts here.</p>
      </div>
    </div>
  );
};

export default LocationPage;
