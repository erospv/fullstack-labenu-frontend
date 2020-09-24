import axios, { AxiosResponse } from "axios"
import { SignupInputDTO } from "../types/interfaces"

// const baseUrl: string = "http://localhost:3003"  

const api: any = axios.create({
  baseURL: 'http://east-2.compute.amazonaws.com',
});

export const signup = async (body: SignupInputDTO): Promise<any> => {
    try {
        const response = await api.post(`/user/signup`
          ,
          body,
        );
        return response.data
    } catch (error) {
        console.log(error.response)
    }
}

