
export const authService = {
    login(email: String, password: String): void {
        console.log(`EMAIL: ${email}\nPassword: ${password}`)
    },
    submit(email:String, password:String, firstName:String, lastName:String): void {
        console.log(`Email: ${email}\Password: ${password}\nFirstName: ${firstName}\nLastName: ${lastName}\n`)
    }

}