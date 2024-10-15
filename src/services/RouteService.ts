export const RouteService = {
    async getTripsByUserId(userId: string) {
        const response = await fetch(`https://server-1-t93s.onrender.com/api/tp/get-trips/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Error fetching trips:", errorData);
        }

        return await response.json(); 
    },

    async deleteTrip(userId: string, tripId: string) {
        const response = await fetch(`https://server-1-t93s.onrender.com/api/tp/delete-trip`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId, tripId }) 
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Error deleting trip:", errorData);
        }

        return await response.json(); 
    },
};
