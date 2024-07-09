import axios from "axios";
import { ApiUsers } from "@/config/Api";

const URL = ApiUsers.urlUsers

export const usersService = {
    getUsers: async () => {
        try {
            const response = await axios.get(`${URL}/personal` )
            return response
        } catch (error) {
            console.log(error)
        }
    }
}