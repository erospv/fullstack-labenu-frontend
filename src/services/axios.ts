import axios, { AxiosError, AxiosResponse } from "axios"
import { SignupInputDTO } from "../types/interfaces"

const baseUrl: string = "http://ec2-54-94-189-227.sa-east-1.compute.amazonaws.com"  

export const signup = async (body: SignupInputDTO): Promise<AxiosResponse> => {
    try {
        const response = await axios.post(`${baseUrl}/user/signup`, body)
        return response.data
    } catch (error) {
        return error
    }
}

