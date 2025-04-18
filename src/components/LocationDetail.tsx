
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Location, Animal } from '@/types';

interface LocationDetailProps {
  location: Location;
  animals: Animal[];
}

const LocationDetail: React.FC<LocationDetailProps> = ({ location, animals }) => {
  const navigate = useNavigate();
  const todayString = new Date().toLocaleDateString();
  const [selectedDate, setSelectedDate] = useState<string>(todayString);
  const [selectedDairy, setSelectedDairy] = useState<string>(location?.name || "");
  
  const handleBackClick = () => {
    navigate('/');
  };
  
  const handleAddAnimalClick = () => {
    navigate(`/location/${location.id}/add-animal`);
  };
  
  return (
    <Card className="max-w-md mx-auto mobile-app">
      <CardHeader className="bg-blue-600 text-white border-b card-header-blue">
        <CardTitle className="text-center text-lg">Date of Pickup (Today)</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-4">
          <div className="form-field">
            <Select value={selectedDate} onValueChange={setSelectedDate}>
              <SelectTrigger className="w-full mobile-input">
                <SelectValue placeholder="Select Date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={todayString}>{todayString}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="form-field">
            <Select value={selectedDairy} onValueChange={setSelectedDairy}>
              <SelectTrigger className="w-full mobile-input">
                <SelectValue placeholder="Select Dairy" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={location?.name || ""}>{location?.name || "Select"}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Table className="mobile-table">
            <TableHeader>
              <TableRow>
                <TableHead>Id#</TableHead>
                <TableHead>Animal ID</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {animals.map((animal, index) => (
                <TableRow key={animal.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{animal.eid}</TableCell>
                </TableRow>
              ))}
              <TableRow className="bg-blue-50">
                <TableCell className="font-bold">Total Head</TableCell>
                <TableCell className="font-bold">{animals.length}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          
          <div className="flex justify-between mt-4">
            <Button 
              variant="default" 
              onClick={handleBackClick}
              className="bg-blue-700 hover:bg-blue-600 mobile-button"
            >
              Back
            </Button>
            <Button 
              variant="default" 
              onClick={handleAddAnimalClick}
              className="bg-blue-700 hover:bg-blue-600 mobile-button"
            >
              Add Animal
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LocationDetail;
