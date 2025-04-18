
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Location } from '@/types';

interface LocationsListProps {
  locations: Location[];
  totalHead: number;
}

const LocationsList: React.FC<LocationsListProps> = ({ locations, totalHead }) => {
  const navigate = useNavigate();
  
  const handlePickupClick = () => {
    // In a real app, this might save data before navigating
    alert('Pickup initiated');
  };
  
  const handleLocationSelect = (locationId: number) => {
    navigate(`/location/${locationId}`);
  };
  
  return (
    <Card className="max-w-md mx-auto mobile-app">
      <CardHeader className="bg-blue-600 text-white border-b card-header-blue">
        <CardTitle className="text-center text-lg">Today's Pickups</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table className="mobile-table">
          <TableHeader>
            <TableRow>
              <TableHead>Dairy</TableHead>
              <TableHead className="text-right">Head</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {locations.map((location) => (
              <TableRow 
                key={location.id} 
                className="cursor-pointer hover:bg-gray-100 active:bg-gray-200"
                onClick={() => handleLocationSelect(location.id)}
              >
                <TableCell>{location.name}</TableCell>
                <TableCell className="text-right">{location.headCount}</TableCell>
              </TableRow>
            ))}
            <TableRow className="bg-blue-50">
              <TableCell className="font-bold">Total Head</TableCell>
              <TableCell className="text-right font-bold">{totalHead}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="p-4 bg-blue-700 flex justify-end">
          <Button 
            variant="default" 
            onClick={handlePickupClick}
            className="bg-blue-500 hover:bg-blue-400 mobile-button"
          >
            Pickup
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LocationsList;
