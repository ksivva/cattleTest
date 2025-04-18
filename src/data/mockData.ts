
import { Location, Animal } from '../types';

export const mockLocations: Location[] = [
  { id: 1, name: 'Dairy Location 1', headCount: 3 },
  { id: 2, name: 'Dairy Location 2', headCount: 7 },
  { id: 3, name: 'Dairy Location 3', headCount: 2 },
  { id: 4, name: 'Dairy Location 4', headCount: 6 },
  { id: 5, name: 'Dairy Location 5', headCount: 3 },
  { id: 6, name: 'Dairy Location 6', headCount: 4 },
  { id: 7, name: 'Dairy Location 7', headCount: 7 },
  { id: 8, name: 'Dairy Location 8', headCount: 10 },
];

export const mockAnimals: Animal[] = [
  { id: '1', locationId: 1, eid: '840111222333245' },
  { id: '2', locationId: 1, eid: '840111222333245' },
  { id: '3', locationId: 1, eid: '840111222333245' },
  { id: '4', locationId: 2, eid: '840111222333245' },
  { id: '5', locationId: 2, eid: '840111222333245' },
  { id: '6', locationId: 2, eid: '840111222333245' },
  { id: '7', locationId: 2, eid: '840111222333245' },
];

export const getLocationHeadCount = (locationId: number, animals: Animal[]): number => {
  return animals.filter(animal => animal.locationId === locationId).length;
};

export const getTotalHeadCount = (animals: Animal[]): number => {
  return animals.length;
};
