import {Room} from '../model/room.model'

export const ROOMS: Room[] = [
    {
        id: 1,
        beds: 2,
        balcony: false,
        smoking: true,
        about: 'Small room on sunny side',
        day_price: 10,
        reserved: false
    },
    {
        id: 2,
        beds: 1,
        balcony: true,
        smoking: true,
        about: 'Big room on sunny side',
        day_price: 20,
        reserved: false
    },
    {
        id: 3,
        beds: 3,
        balcony: true,
        smoking: false,
        about: 'Medium room on sunny side',
        day_price: 30,
        reserved: false
    }
]