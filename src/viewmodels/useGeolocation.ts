// src/viewModels/useGeolocationViewModel.ts
import { ref } from 'vue';
import { getAddressFromCoordinates, getCurrentPosition } from '@/services/GeolocationService';
import { Position } from '@capacitor/geolocation';

export function useGeolocation() {
    const positions = ref<[Position, string][]>([]); 

    const fetchCurrentPosition = async () => {
        const position: Position = await getCurrentPosition();
        const address = await getAddressFromCoordinates(position.coords.latitude, position.coords.longitude);
        positions.value.push([position, address]);

    };

    return {
        positions,
        fetchCurrentPosition,
    };
}
