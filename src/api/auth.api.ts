
import { SignUpProps } from "../pages/Signup";
import { httpClient } from "./http";

export const signUp = async (userData : SignUpProps) => {
    const response = await httpClient.post('/users/join', userData);
    return response.data;
}

export const resetRequest = async (userData : SignUpProps) => {
    const response = await httpClient.post('/users/reset', userData);
    return response.data;

}

export const resetPassword = async (userData : SignUpProps) => {
    const response = await httpClient.put('/users/reset', userData);
    return response.data;

}