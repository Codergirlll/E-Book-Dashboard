import axios from "axios";



const api = axios.create({
    baseURL: 'http://localhost:4444',
    headers: {
        "Content-Type": 'application.json'
    }
})


// For login backend
export const login = (
    data: {
        email: string,
        password: string
    }

) => {

    return api.post("/api/user/login", data)
}