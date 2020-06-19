import axios from 'axios'

const serverUrl = () => {
    //   return process.env.SERVER_API_URL;
    return 'https://cards-maker-api.herokuapp.com'
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
