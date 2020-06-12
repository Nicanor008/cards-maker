import axios from 'axios'

const serverUrl = () => {
    //   return process.env.SERVER_API_URL;
    return 'http://127.0.0.1:4001'
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
