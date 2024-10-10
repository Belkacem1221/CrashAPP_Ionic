import { Geolocation } from '@capacitor/geolocation';

export const getCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    return coordinates; 
};

export const getAddressFromCoordinates = async (latitude: number, longitude: number) => {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
      const data = await response.json();
      
      return data.display_name
      
}