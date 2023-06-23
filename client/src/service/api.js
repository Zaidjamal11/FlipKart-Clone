import axios from 'axios';

const URL ='https://localhost:8000';

export const authenticatesSignup = async () => {
    try {
       return await  axios.post(URL, data)

    } catch (error) {
        console.log("Error while calling the signup api ", error)
    }
}