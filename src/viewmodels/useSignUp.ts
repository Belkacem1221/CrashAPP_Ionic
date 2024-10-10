import { useIonRouter } from "@ionic/vue";
import { ref } from "vue";
import { useAlert } from "./useAlert";
import { authService } from "@/services/authService";

export function useSignUp(){
    const ionRouter = useIonRouter()

    const email = ref('')
    const password = ref('')
    const firstName = ref('')
    const lastName = ref('')

    const {setOpen} = useAlert()

    const handleSignUp = async () => {
        if(!email.value || !password.value || !firstName.value || !lastName.value ){
            setOpen(true, "At least one field empty")
            console.log("fail login")
            return;
        }
        
        const result = await authService.submit(email.value, password.value, firstName.value, lastName.value)
        ionRouter.back()
        console.log("SignUp successed", result)

    }

    return{
        email,
        password,
        firstName,
        lastName,
        handleSignUp
    }
}