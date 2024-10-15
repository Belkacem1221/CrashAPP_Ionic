export const UserService = {
    async changePassword(userId: string, oldPassword: string, newPassword: string) {
            const response = await fetch("https://server-1-t93s.onrender.com/api/tp/change-password", {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userId, oldPassword, newPassword })
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("API Error:", errorData);
            }

            const data = await response.json();
            console.log('Password updated successfully:', data.message);
            return data;
    },

    async updateUser(userId: string, firstName: string, lastName: string) {
            const response = await fetch("https://server-1-t93s.onrender.com/api/tp/update-user", {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userId, firstName, lastName })
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error from server:', errorData);
            }

            const data = await response.json();
            console.log('User updated successfully:', data);
            return data;

    }
};
