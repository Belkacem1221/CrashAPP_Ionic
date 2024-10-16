import { ref } from "vue";
import { authService } from "@/services/authService";
import { RouteService } from "@/services/RouteService";

type Trip = {
  pathName: string;
  positionsCount: number;
  createdAt: string;
  ownerName: string;
};

export function useTrip() {
  const trips = ref<Trip[]>([]);

  // Format the date to 'yyyy-MM-dd HH:mm:ss'
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleString('en-GB', { 
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).replace(',', ''); 
  };

  const fetchTrips = async () => {
      const userId = authService.getLoggedInUserId(); //recup id

      // recup trips du serv associer au l'id
      const response = await RouteService.getTripsByUserId(userId || '');
      //si trip add to const sinon empty array
      const fetchedTrips = response.trips || [];

      // Map pour extrait data de l'array
      trips.value = fetchedTrips.map((trip: any) => ({
        pathName: trip.pathName,
        positionsCount: trip.locations.length,  
        createdAt: trip.date,  
        ownerName: `${authService.getUserInfo().firstName} ${authService.getUserInfo().lastName}`  // Owner's name
      }));

  };

  return {
    formatDate,
    trips,  
    fetchTrips,  
  };
}
