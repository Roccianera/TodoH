
import axios from 'axios';
import useSignIn from 'react-auth-kit/hooks/useSignIn';

import Cookies from 'js-cookie';


export const login = async (username, password) => {

    try {
        const response = await axios.post(
            'http://localhost:8080/api/auth/login',
            {
                username,
                password,
            }
        );
        console.log(response);
   
        return response;
    } catch (error) {
        console.error(error);
    }
}



export const register = async (username,email, password) => {
    try {
        const response = await axios.post(
            'http://localhost:8080/api/auth/register',
            {
                username,
                email,
                password,
            }
        );
        console.log("Register")
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getUser = async () => {

    
    if (!Cookies.get('_auth')) {
        throw new Error("No token found");
    }



    try {
        const response = await axios.get(
            'http://localhost:8080/api/v1/users/me',
            {
                headers: {
                    Authorization: `Bearer ${Cookies.get('_auth')}`,
                },
            }
        );
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
  
}


export const getTasks = async () => {
    if (!Cookies.get('_auth')) {
        throw new Error("No token found");
    }

    try {
        const response = await axios.get(
            'http://localhost:8080/api/v1/tasks/',
            {
                headers: {
                    Authorization: `Bearer ${Cookies.get('_auth')}`,
                },
            }
        );
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
}