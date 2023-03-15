import axios from "axios"

const instance = axios.create({
    baseURL: "https://backend.foodstudio.co.in"
})

export default instance