import axios from "axios";



const api = axios.create({
    baseURL: 'http://localhost:4444',
    headers: {
        // "Content-Type": 'application.json'
        "Content-Type": 'application/json'
    }
})


// For login backend
export const login = (

    data: {
        email: string,
        password: string
    }

) => {
    console.log("email: ", data)
    return api.post("/api/user/login", data)
}


export const register = (
    data: {
        name: string,
        email: string,
        password: string
    }
) => {
    return api.post("/api/user/register", data)
}

export const getBooks = async () => {
    return api.get("api/book/all")
}


export const createBook = async (

) => {
    return api.post("api/book/create")
}