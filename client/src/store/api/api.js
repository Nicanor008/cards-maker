import { server } from './keys'

export const api = {
    cards: {
        create: (data) => server.post('/cards', data),
        // update: (data, id) => server.put(`${'api/v1/cards'}/${id.id}`, data),
        // retrieve: id => server.get(`${'api/v1/cards'}/${id}/`),
        list: () => server.get('/cards'),
        userCards: () => server.get('/cards/user/all'),
        singleCard: (id) => server.get(`/cards/${id}`),
        searchByName: (name) => server.get(`/cards/search/${name}`),
        searchByTag: (tag) => server.get(`/cards/tags/${tag}`),
        // delete: id => server.delete(`${'api/v1/cards'}/${id}`),
    },
    auth: {
        login: (data) => server.post('/auth/login', data),
        signup: (data) => server.post('/auth/register', data),
        forgotPassword: (email) => server.post(`/auth/password/${email}`)
    }
}
