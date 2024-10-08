import { ref } from "vue";

const messageAlert = ref('');
const alertBtn = ["OK"];
const isOpen = ref(false);

export function useAlert(){
    const setOpen = (state: boolean, message = "") => {
      isOpen.value = state;
      messageAlert.value = message
    };

    return {
        isOpen,
        setOpen,
        alertBtn,
        messageAlert
    }
}