import {Room} from './Room'

export const ROOMS: Room[] = [
    {
        id: 1,
        beds: 2,
        balcony: false,
        smoking: true,
        about: 'Small room on sunny side',
        reserved: false
    },
    {
        id: 2,
        beds: 1,
        balcony: true,
        smoking: true,
        about: 'Big room on sunny side',
        reserved: false
    },
    {
        id: 3,
        beds: 3,
        balcony: true,
        smoking: false,
        about: 'Medium room on sunny side',
        reserved: false
    }
]