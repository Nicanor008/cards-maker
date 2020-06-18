import { server } from './keys'

export const api = {
    cards: {
        create: (data) => server.post('/cards', data),
        update: (data, id) => server.patch(`${'/cards'}/${id}`, data),
        list: () => server.get('/cards'),
        userCards: () => server.get('/cards/user/all'),
        singleCard: (id) => server.get(`/cards/${id}`),
        searchByName: (name) => server.get(`/cards/search/${name}`),
        searchByTag: (tag) => server.get(`/cards/tags/${tag}`),
        deleteCard: (id) => server.delete(`/cards/${id}`),
    },
    auth: {
        login: (data) => server.post('/auth/login', data),
        signup: (data) => server.post('/auth/register', data),
        forgotPassword: (email) => server.post(`/auth/password/${email}`),
        resetPassword: (data, email) => server.patch(`/auth/password/${email}`, data),
        verifyAccount: (email) => server.patch(`/auth/verify/${email}`)
    }
}
