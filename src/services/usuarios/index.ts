import axios from "axios";
import { ApiUsers } from "@/config/Api";

const URL = ApiUsers.urlUsers

export const usersService = {
    getUsers: async () => {
        try {
            const response = await axios.get(`${URL}/personal?sector=2222` )
            return response.data
        } catch (error) {
            console.log(error)
        }
    },
    getOneUser: async (id: string) => {
        try {
            const response = await axios.get(`${URL}/personal/${id}`)
            return response.data
        } catch (error) {
            console.log(error)
        }
    },

    getUserForStatus: async (status: string) => {
        try {
            const response = await axios.get(`${URL}/personal?sector=2222&status=${status}`)
            return response.data
        } catch (error) {
            console.log(error)
        }
    },
    getUserForSector: async (sector: number) => {
        try {
            const response = await axios.get(`${URL}/personal?sector=${sector}`)
            return response.data
        } catch (error) {
            console.log(error)
        }
    },

    getUserForName: async (name: string) => {
        try {
            const response = await axios.get(`${URL}/personal?name=${name}`)
            return response.data
        } catch (error) {
            console.log(error)
        }
    },

    getUserForSectorAndStatus: async (sector: number, status: string) => {
        try {
            const response = await axios.get(`${URL}/personal?sector=${sector}&status=${status}`)
            return response.data
        } catch (error) {
            console.log(error)
        }
    },

    getUsersForSectorStatusAndName: async (sector: number, status: string, name: string) => {
        try {
            const response = await axios.get(`${URL}/personal?sector=${sector}&status=${status}&name=${name}`)
            return response.data
        } catch (error) {
            console.log(error)
        }
    },

    postUser: async (data: {}) => {
        try {
            const response = await axios.post(`${URL}/personal`, data)
            return response.data
        } catch (error) {
            console.log(error)
        }
    },

    deleteUser: async(id: string) => {
        try {
            const response = await axios.delete(`${URL}/personal/${id}`)
            return response
        } catch (error) {
            console.log(error)
        }
    }
}

