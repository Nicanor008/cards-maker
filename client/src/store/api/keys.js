import axios from 'axios'

const serverUrl = () => {
    //   return process.env.SERVER_API_URL;
    return 'http://127.0.0.1:4001'
}

const server = axios.create({
    baseURL: serverUrl(),
    headers: {
        'Content-Type': 'application/json',
        'Authorization':
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZGE1YWMwMDQ5ZDExMjgyZTY1YjNkNSIsImVtYWlsIjoibmljQGdtYWlsLmNvbSIsImlhdCI6MTU5MTM2ODQyOX0.1V6L6A7RnkGysfD-RkRRs0Y9qqIOs48ZrHh6NXY-OPI'
    },
})

export { server }

export default serverUrl()
