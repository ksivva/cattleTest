
export interface Location {
  id: number;
  name: string;
  headCount: number;
}

export interface Animal {
  id: string;
  locationId: number;
  eid: string;
  visualTag?: string;
  gender?: string;
  damBreed?: string;
  sireBreed?: string;
  colostrum?: boolean;
  dateOfBirth?: Date;
  healthStatus?: string[];
}

export interface AppState {
  locations: Location[];
  animals: Animal[];
  selectedLocation: Location | null;
  selectedAnimal: Animal | null;
}
