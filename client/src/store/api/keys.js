import axios from 'axios'
import Dotenv from 'dotenv'

Dotenv.config()

const serverUrl = () => {
    //   return process.env.SERVER_API_URL;
    // return 'http://localhost:4000'
    return 'https://cardsmaker.herokuapp.com'
}

const server = axios.create({
    baseURL: serverUrl(),
    headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token') && localStorage.getItem('token').replace(/['"]+/g, '')
    },
})

export { server }

export default serverUrl()
