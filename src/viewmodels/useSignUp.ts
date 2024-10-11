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
        try{
            const result = await authService.submit(email.value, password.value, firstName.value, lastName.value)
            ionRouter.back()
            console.log("SignUp successed", result)
        }catch(error){
            setOpen(true, (error as Error).message)
        }


    }

    return{
        email,
        password,
        firstName,
        lastName,
        handleSignUp
    }
}