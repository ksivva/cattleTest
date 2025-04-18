
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Animal } from '@/types';

interface AnimalFormProps {
  animal?: Animal;
  onSave: (animal: Partial<Animal>) => void;
}

const AnimalForm: React.FC<AnimalFormProps> = ({ animal, onSave }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState<Partial<Animal>>({
    eid: animal?.eid || '',
    visualTag: animal?.visualTag || '',
    gender: animal?.gender || '',
    damBreed: animal?.damBreed || '',
    sireBreed: animal?.sireBreed || '',
    colostrum: animal?.colostrum || false
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };
  
  const handleEidButtonClick = () => {
    // In a real app, this would interface with an EID reader
    alert('EID reader interface would be triggered here');
    // For demo, we'll set a mock EID
    setFormData(prev => ({ ...prev, eid: '840111222333245' }));
  };
  
  const handleBackClick = () => {
    navigate(-1);
  };
  
  const handleSaveClick = () => {
    onSave(formData);
    // Reset form after saving
    setFormData({
      eid: '',
      visualTag: '',
      gender: '',
      damBreed: '',
      sireBreed: '',
      colostrum: false
    });
  };
  
  return (
    <Card className="max-w-md mx-auto mobile-app">
      <CardHeader className="bg-blue-600 text-white border-b card-header-blue">
        <CardTitle className="text-center text-lg">Animal Info</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-4">
          <div className="flex gap-2 form-field">
            <div className="w-3/4">
              <Label htmlFor="eid">Animal EID</Label>
              <Input 
                id="eid"
                name="eid"
                value={formData.eid}
                onChange={handleInputChange}
                placeholder="Enter EID"
                className="mobile-input"
              />
            </div>
            <div className="w-1/4">
              <Label htmlFor="eid-button">EID</Label>
              <Button 
                id="eid-button" 
                className="w-full mobile-button"
                onClick={handleEidButtonClick}
              >
                EID
              </Button>
            </div>
          </div>
          
          <div className="form-field">
            <Label htmlFor="visualTag">Visual Tag</Label>
            <Input
              id="visualTag"
              name="visualTag"
              value={formData.visualTag}
              onChange={handleInputChange}
              placeholder="Enter visual tag"
              className="mobile-input"
            />
          </div>
          
          <div className="form-field">
            <Label htmlFor="gender">Gender</Label>
            <Select 
              value={formData.gender} 
              onValueChange={(value) => handleSelectChange('gender', value)}
            >
              <SelectTrigger className="mobile-input">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="form-field">
            <Label htmlFor="damBreed">Dam Breed</Label>
            <Select 
              value={formData.damBreed} 
              onValueChange={(value) => handleSelectChange('damBreed', value)}
            >
              <SelectTrigger className="mobile-input">
                <SelectValue placeholder="Select dam breed" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="holstein">Holstein</SelectItem>
                <SelectItem value="jersey">Jersey</SelectItem>
                <SelectItem value="angus">Angus</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="form-field">
            <Label htmlFor="sireBreed">Sire Breed</Label>
            <Select 
              value={formData.sireBreed} 
              onValueChange={(value) => handleSelectChange('sireBreed', value)}
            >
              <SelectTrigger className="mobile-input">
                <SelectValue placeholder="Select sire breed" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="holstein">Holstein</SelectItem>
                <SelectItem value="jersey">Jersey</SelectItem>
                <SelectItem value="angus">Angus</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center gap-2 form-field">
            <Label htmlFor="colostrum" className="flex-grow">Colostrum?</Label>
            <Checkbox
              id="colostrum"
              checked={formData.colostrum}
              onCheckedChange={(checked) => 
                handleCheckboxChange('colostrum', checked === true)
              }
            />
            <div className="border border-gray-300 px-2 py-1 rounded">X</div>
          </div>
          
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
              onClick={handleSaveClick}
              className="bg-blue-700 hover:bg-blue-600 mobile-button"
            >
              Save
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnimalForm;
