import { useIonRouter } from '@ionic/vue';

export function useMenu() {
  const ionRouter = useIonRouter();

  const navToLogin = () => {
    ionRouter.push('/login'); 
  };

  const navToSignUp = () => {
    ionRouter.push('/SignUp'); 
  };

  return {
    navToLogin,
    navToSignUp
};
}
