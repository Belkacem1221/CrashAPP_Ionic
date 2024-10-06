import { authService } from "@/services/authService";
import { useIonRouter } from "@ionic/vue";
import { ref } from "vue";

export function useLogin(){
    const ionRouter = useIonRouter()
    const email = ref('')
    const password = ref('')

    const handleSubmit = () => {
        authService.login(email.value, password.value)
    }

    const navToSignUp = () => {
        ionRouter.push('/signUp')
    }
    return{
        email,
        password,
        handleSubmit,
        navToSignUp
    }
}