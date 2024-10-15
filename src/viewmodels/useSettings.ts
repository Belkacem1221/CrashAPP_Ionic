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

    const changePassword = async () => {
            await UserService.changePassword(userId, oldPassword.value, newPassword.value);
            oldPassword.value = ''; 
            newPassword.value = '';

    };

    const updateUser = async (firstName: string, lastName: string) => {
            await UserService.updateUser(userId, firstName, lastName);
            userInfo.value = { ...userInfo.value, firstName, lastName };

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
        updateUser,
        logout, 
    };
};
