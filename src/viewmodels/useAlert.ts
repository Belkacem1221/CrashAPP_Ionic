import { ref } from "vue";

const messageAlert = ref('');
const alertBtn = ["OK"];
const isOpen = ref(false);
const alertClass = ref(''); 

export function useAlert() {
  const setOpen = (state: boolean, success: boolean) => {
    isOpen.value = state;
    
    if (state) { 
      messageAlert.value = success ? 'Operation was successful!' : 'Operation failed.';
      alertClass.value = success ? 'alert-success' : 'alert-failure'; 
    }
  };

  return {
    isOpen,
    setOpen,
    alertBtn,
    messageAlert,
    alertClass 
  }
}
