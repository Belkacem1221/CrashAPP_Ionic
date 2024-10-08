import { useIonRouter } from "@ionic/vue";
import { ref } from "vue";
import { useAlert } from "./useAlert";

export function useSignUp(){
    const ionRouter = useIonRouter()

    const email = ref('')
    const password = ref('')
    const firstName = ref('')
    const lastName = ref('')

    const {setOpen} = useAlert()

    const handleSignUp = () => {
        if(!email.value || !password.value || !firstName.value || !lastName.value ){
            setOpen(true, "At least one field empty")
            console.log("fail login")
            return;
        }
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