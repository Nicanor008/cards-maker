import axios from 'axios'
import Dotenv from 'dotenv'

Dotenv.config()

const serverUrl = () => {
    //   return process.env.SERVER_API_URL;
    return 'http://localhost:4001'
}

const server = axios.create({
    baseURL: serverUrl(),
    headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    },
})

export { server }

export default serverUrl()
