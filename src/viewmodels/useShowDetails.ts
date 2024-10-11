import { ref } from "vue";
import { useGeolocation } from "./useGeolocation";

export function useShowDetails(){
    const {positions} = useGeolocation()
    const showDetails = ref(positions.value.map(() => false))
    const detailsText = ref(positions.value.map(() => 'Show Details'));

    const toggleDetails = (index: number) => {

        showDetails.value[index] = !showDetails.value[index]

        detailsText.value[index] = showDetails.value[index] ? 'Hide Details' : 'Show Details';
    }


    return{
        showDetails,
        detailsText,
        toggleDetails
    }
    
}