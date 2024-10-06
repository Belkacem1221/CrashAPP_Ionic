import { useIonRouter } from "@ionic/vue";
import { ref } from "vue";

export function useSignUp(){
    const ionRouter = useIonRouter()

    const email = ref('')
    const password = ref('')
    const firstName = ref('')
    const lastName = ref('')

    const handleSignUp = () => {
        console.log("submit pressed")
        ionRouter.back()
    }

    return{
        email,
        password,
        firstName,
        lastName,
        handleSignUp
    }
}