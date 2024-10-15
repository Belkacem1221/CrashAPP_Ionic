import { ref } from 'vue';
import { RouteService } from '@/services/RouteService';
import { authService } from '@/services/authService';

interface Trip {
  id: string;
  name: string;
  positionsCount: number;
  createdAt: string;
  ownerName?: string;
}

export const useTrip = () => {
  const trips = ref<Trip[]>([]);
  const sharedTrips = ref<Trip[]>([]);

  const fetchTrips = async () => {
    const userId = authService.getLoggedInUserId() || '';
    if (!userId){ 
        console.log("Not login")
        return
    };

    const response = await RouteService.getTripsByUserId(userId);
    trips.value = response.trips || [];
    sharedTrips.value = response.sharedTrips || [];
  };

  const deleteTrip = async (tripId: string) => {
    const userId = authService.getLoggedInUserId() || '';
    const response = await RouteService.deleteTrip(userId, tripId);
    
    if (response.message === "Trajet supprimé avec succès") {
      trips.value = trips.value.filter(trip => trip.id !== tripId);
      sharedTrips.value = sharedTrips.value.filter(trip => trip.id !== tripId);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  const viewTripDetails = (tripId: string) => {
    console.log(`Navigate to details of trip: ${tripId}`);
  };

  return {
    trips,
    sharedTrips,
    fetchTrips,
    deleteTrip,
    formatDate,
    viewTripDetails,
  };
};
