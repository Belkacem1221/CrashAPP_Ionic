import { useIonRouter } from '@ionic/vue';

export function useMenu() {
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

  const navToAppVersion = () => {
    ionRouter.push('/appVersion'); 
  };

  return {
    navToAddTrip,
    navToTrip,
    navToSettings,
    navToAppVersion
};
}
