
import React from 'react';
import AnimalForm from '@/components/AnimalForm';
import { Animal } from '@/types';
import { useParams, useNavigate } from 'react-router-dom';
import { useData } from '@/data/context';

const AddAnimalPage: React.FC = () => {
  const { locationId } = useParams<{ locationId: string }>();
  const navigate = useNavigate();
  const { addAnimal } = useData();
  
  const handleSaveAnimal = (animalData: Partial<Animal>) => {
    // Add locationId to the animal data
    if (locationId) {
      const parsedLocationId = parseInt(locationId, 10);
      addAnimal({ ...animalData, locationId: parsedLocationId });
      navigate(`/location/${locationId}`);
    } else {
      // If no locationId is provided in the URL, use the first location as default
      addAnimal({ ...animalData, locationId: 1 });
      navigate('/');
    }
  };
  
  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-700">Add Animal</h1>
      <AnimalForm onSave={handleSaveAnimal} />
      <div className="mt-4 text-sm text-gray-500 text-center px-2">
        <p>This allows entry of each animal. Should interface to EID reader.</p>
        <p>Allows to add fields if they come in with more.</p>
        <p>Each save adds animal to previous screen and leaves blank for new animal entry.</p>
      </div>
    </div>
  );
};

export default AddAnimalPage;
