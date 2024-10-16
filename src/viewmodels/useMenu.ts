import { useIonRouter } from '@ionic/vue';
import { useAlert } from './useAlert';

export function useMenu() {
  const {setOpen} = useAlert()
  const ionRouter = useIonRouter();


  const navToTrip = () => {
    ionRouter.push('/geolocation'); 
  };

  const navToAddTrip = () => {
    ionRouter.push('/addTrip'); 
  }; 
  
  const navToSettings = () => {
    ionRouter.push('/settings'); 
  };

  const appVersionAlert = () => {
    setOpen(true, "Version 1.01")
  };

  return {
    navToAddTrip,
    navToTrip,
    navToSettings,
    appVersionAlert
};
}
