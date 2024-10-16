import { ref } from 'vue';
import { getAddressFromCoordinates, getCurrentPosition, sendRouteToServer } from '@/services/GeolocationService'; // Assume these services exist
import { RouteService,  } from '@/services/RouteService';
import { Position } from '@capacitor/geolocation';
import { useAlert } from './useAlert';
import { authService } from '@/services/authService';

type Trip = {
    pathName: string;
    positionsCount: number;
    createdAt: string;
    ownerName: string;
  };

export function useGeolocation() {
    const { getTripsByUserId } = RouteService;
    const pathName = ref('');
    const userId = authService.getLoggedInUserId() || '';
    const { setOpen } = useAlert();
  
    const recordedPositions = ref<[Position, string][]>([]);
    const isTracking = ref(false);
    const trips = ref<Trip[]>([]); // Use the defined Trip type
    let trackingInterval: ReturnType<typeof setInterval> | null = null;
    // Start tracking
    const startTracking = () => {
        if (!trackingInterval) {
            trackingInterval = setInterval(async () => {
                const position: Position = await getCurrentPosition();
                const address = await getAddressFromCoordinates(position.coords.latitude, position.coords.longitude);
                recordedPositions.value.push([position, address]);
            }, 5000);
            isTracking.value = true;
        }
    };

    // Stop tracking
    const stopTracking = () => {
        if (trackingInterval) {
            clearInterval(trackingInterval);
            trackingInterval = null;
            isTracking.value = false;
        }
    };

    // Toggle tracking
    const toggleTracking = () => {
        if (isTracking.value) {
            stopTracking();
        } else {
            startTracking();
        }
    };

    // Send recorded route to the server
    const sendRoute = async () => {
        if (!pathName.value || !userId) {
            console.error('Path Name or User ID is missing');
            setOpen(true, 'Path Name or User ID is missing');
            return;
        }
    
        const createdAt = new Date().toISOString();
        const positionsCount = recordedPositions.value.length;

        try {
            await sendRouteToServer(
                pathName.value,
                userId,
                recordedPositions.value,
                positionsCount,
                createdAt
            );

            setOpen(true, 'Trip sent successfully!');
            pathName.value = '';  // Clear trip name after sending
            recordedPositions.value = [];  // Clear recorded positions
        } catch (error) {
            console.error('Failed to send trip', error);
        }
    };

    
    
      return {
        pathName,
        isTracking,
        recordedPositions,
        toggleTracking,
        sendRoute,
        trips,
      };
}
