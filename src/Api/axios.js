import axios from "axios";

const ApiBaseUI = axios.create({
    // baseURL: 'http://api.part1.ir',
    baseURL: 'https://api.elitezone.me',
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json'
    },
})

export default ApiBaseUI