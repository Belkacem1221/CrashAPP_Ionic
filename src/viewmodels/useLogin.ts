import { authService } from "@/services/authService";
import { useIonRouter } from "@ionic/vue";
import { ref } from "vue";
import { useAlert } from "./useAlert";

export function useLogin(){
    const ionRouter = useIonRouter()
    const email = ref('')
    const password = ref('')

    const {setOpen} = useAlert()

    const handleSubmit = () => {
        if(!email.value || !password.value ){
            setOpen(true, "At least one field empty")
            console.log("fail login")
            return;
        } else {
            authService.login(email.value, password.value)
            //   .then(() => {
            //     ionRouter.push('/dashboard'); // Navigate on successful login
            //   })
            //   .catch((error) => {
            //     setOpen(true, 'Login failed, please try again'); // Show error alert
            //   });
          }
        
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