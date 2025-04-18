
import { useState, useEffect } from 'react';
import { Animal, Location } from '../types';
import { mockAnimals, mockLocations } from '../data/mockData';

export function useAnimalData() {
  const [animals, setAnimals] = useState<Animal[]>(mockAnimals);
  const [locations, setLocations] = useState<Location[]>(mockLocations);
  
  const addAnimal = (animal: Partial<Animal>) => {
    if (!animal.locationId || !animal.eid) {
      console.error("Animal must have a locationId and EID");
      return;
    }
    
    const newAnimal: Animal = {
      id: Date.now().toString(), // Generate a unique ID
      eid: animal.eid,
      locationId: animal.locationId,
      visualTag: animal.visualTag,
      gender: animal.gender,
      damBreed: animal.damBreed,
      sireBreed: animal.sireBreed,
      colostrum: animal.colostrum,
      dateOfBirth: animal.dateOfBirth,
      healthStatus: animal.healthStatus,
    };
    
    setAnimals(prevAnimals => [...prevAnimals, newAnimal]);
    
    // Update the head count for this location
    updateLocationHeadCount(animal.locationId);
  };
  
  const updateLocationHeadCount = (locationId: number) => {
    setLocations(prevLocations => 
      prevLocations.map(location => 
        location.id === locationId 
          ? { ...location, headCount: location.headCount + 1 } 
          : location
      )
    );
  };
  
  const getAnimalsByLocation = (locationId: number): Animal[] => {
    return animals.filter(animal => animal.locationId === locationId);
  };
  
  return {
    animals,
    locations,
    addAnimal,
    getAnimalsByLocation,
  };
}
