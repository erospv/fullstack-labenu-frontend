import axios from "axios"
import { SignupInputDTO } from "../types/interfaces"

const baseUrl: string = "http://ec2-54-94-189-227.sa-east-1.compute.amazonaws.com"  

export const signup = async (body: SignupInputDTO): Promise<string> => {
    try {
        const response = await axios.post(`${baseUrl}/user/signup`, body)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error.response)
        return error.response.data
    }
}