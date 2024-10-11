    import { authService } from "@/services/authService";
    import { useIonRouter } from "@ionic/vue";
    import { ref } from "vue";
    import { useAlert } from "./useAlert";

    export function useLogin() {
    const ionRouter = useIonRouter();
    const email = ref('');
    const password = ref('');

    const { setOpen } = useAlert();

    const handleLogin = async () => {
        if (!email.value || !password.value) {
            setOpen(true, "At least one field is empty");
        return;
        }

        try {
            const result = await authService.login(email.value, password.value);
            console.log("Response:", result);
            ionRouter.push('/geolocation'); 
        } catch (error) {
            console.log("incorrect")
            setOpen(true, "Invalid email or password"); 
        }
    };

    const navToSignUp = () => {
        ionRouter.push('/signUp');
    };

    return {
        email,
        password,
        handleLogin,
        navToSignUp,
    };
    }
