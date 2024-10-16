import { Geolocation, Position } from '@capacitor/geolocation';

export const getCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    return coordinates; 
};

export const getAddressFromCoordinates = async (latitude: number, longitude: number) => {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
      const data = await response.json();
      
      return data.display_name
}

export const sendRouteToServer = async (
    pathName: string, 
    userId: string, 
    recordedPositions: [Position, string][],
    positionsCount: number,  
    createdAt: string        
  ) => {
    const response = await fetch('https://server-1-t93s.onrender.com/api/tp/add-trip', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pathName,
        userId,
        positionsCount,      
        createdAt,          
        locations: recordedPositions.map(pos => ({
          latitude: pos[0].coords.latitude,
          longitude: pos[0].coords.longitude,
          timestamp: pos[0].timestamp,
          address: pos[1],
        })),
      }),
    });
  
    const data = await response.json();
    return data;
  };
  