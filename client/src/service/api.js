import axios from 'axios';

const URL ='http://localhost:8000';

export const authenticateSignup = async (user) => {
    try {
        return await axios.post(`${URL}/signup`, user)
    } catch (error) {
        console.log('Error while calling Signup API: ', error);
    }
}