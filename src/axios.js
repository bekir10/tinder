import axios from "axios"

const instance = axios.create({
    baseURL:"https://tinder-3.herokuapp.com"
})

export default instance