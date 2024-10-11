
export const authService = {
    async login(email: String, password: String){

        const response = await fetch("https://server-1-t93s.onrender.com/api/tp/login",{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });
        if (!response.ok) {
            const errorData = await response.json();    
            console.error("API Error:", errorData);
        }

        const data = await response.json();
        return data;
    },
    async submit(email: string, password: string, firstName: string, lastName: string) {

        const response = await fetch("https://server-1-t93s.onrender.com/api/tp/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password, firstName, lastName}) 
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error from server:', errorData); 
            throw new Error(errorData.message || 'Submit failed');
        }

        const data = await response.json();
        console.log('Success:', data);  

        return data;
    }
    

}