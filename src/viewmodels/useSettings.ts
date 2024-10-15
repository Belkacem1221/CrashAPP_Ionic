import { ref } from 'vue';
import { UserService } from '@/services/UserService'; 
import { authService } from '@/services/authService';
import { useIonRouter } from "@ionic/vue";

export const useSettings = () => {
    const ionRouter = useIonRouter();
    const userId = authService.getLoggedInUserId() || ''; 
    const oldPassword = ref('');
    const newPassword = ref('');
    const userInfo = ref({ firstName: '', lastName: '', email: '' });

    const storedUserInfo = authService.getUserInfo();
    console.log('Stored User Info:', storedUserInfo); 
    if (storedUserInfo) {
        userInfo.value = storedUserInfo; 
    }

    const changePassword = async () => {
        await UserService.changePassword(userId, oldPassword.value, newPassword.value);
        oldPassword.value = ''; 
        newPassword.value = '';
    };


    const logout = () => {
        authService.logout(); 
        ionRouter.push('/login'); 
    };

    return {
        userInfo,
        oldPassword,
        newPassword,
        changePassword,
        logout, 
    };
};
