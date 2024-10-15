// src/viewModels/useGeolocationViewModel.ts
import { ref, Ref } from 'vue';
import { getAddressFromCoordinates, getCurrentPosition, sendRouteToServer } from '@/services/GeolocationService';
import { Position } from '@capacitor/geolocation';
import { useAlert } from './useAlert';

export function useGeolocation() {
    const pathName = ref('');
    const userId = ref('');
    const { setOpen } = useAlert();

    const recordedPositions = ref<[Position, string][]>([]);
    const isTracking = ref(false); // Bool if track or no
    let trackingInterval: ReturnType<typeof setInterval> | null = null; //Timer

    // Start track every 5 seconds
    const startTracking = () => {
        //if null run
        if (!trackingInterval) {
            trackingInterval = setInterval(async () => {
                const position: Position = await getCurrentPosition();
                const address = await getAddressFromCoordinates(position.coords.latitude, position.coords.longitude);
                recordedPositions.value.push([position, address]);
            }, 5000);
            isTracking.value = true;
        }
    };

    // Stop track
    const stopTracking = () => {
        // if not null run and clear interval
        if (trackingInterval) {
            clearInterval(trackingInterval);
            trackingInterval = null;
            isTracking.value = false;
        }
    };

    // Toggle start and stop 
    const toggleTracking = () => {
        if (isTracking.value) {
            stopTracking();
        } else {
            startTracking();
        }
    };

    // Send recorded route to the server 
    const sendRoute = async () => {
        if (!pathName.value || !userId.value) {
            console.error('Path Name or User ID is missing');
            setOpen(true, false); 
            return;
        }
        try {
            await sendRouteToServer(pathName.value, userId.value, recordedPositions.value);
            setOpen(true, true); 
            //Clean page after send 
            pathName.value = ''
            userId.value = ''
            recordedPositions.value = []
            console.log('Route Sending success');
        } catch (error) {
            console.error("Route sending failed", error);
        }
    };

    return {
        pathName,
        userId,
        isTracking,
        recordedPositions,
        toggleTracking,
        sendRoute
    };
}
