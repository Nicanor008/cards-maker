import { server } from './keys'

export const api = {
    cards: {
        create: (data) => server.post('api/v1/cards', data),
        // update: (data, id) => server.put(`${'api/v1/cards'}/${id.id}`, data),
        // retrieve: id => server.get(`${'api/v1/cards'}/${id}/`),
        list: () => server.get('api/v1/cards'),
        // delete: id => server.delete(`${'api/v1/cards'}/${id}`),
    },
}
