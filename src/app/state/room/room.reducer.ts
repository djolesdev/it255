import { Room } from 'src/app/model/room.model';
import { ROOMS } from '../../components/mock-rooms';
import { addRoom , deleteRoom, reserveRoom} from './room.actions';
import { createReducer, on } from '@ngrx/store';

export interface RoomState {
  rooms: Room[];
}

export const initialState: RoomState = {
  rooms: ROOMS,
};

export const roomReducer = createReducer(
  initialState,
  on(addRoom, (state, { room }) => ({
    ...state,
    rooms: [...state.rooms, room],
  })),
  on(deleteRoom, (state, { id }) => ({
    ...state,
    rooms: state.rooms.filter((room) => room.id !== id),
  })),
  on(reserveRoom, (state, {id}) => {
    return {
      ...state,
      rooms: state.rooms.map(item => {
        if (item.id === id) return {...item,reserved: true}
        return item
      })
    }
  })
);
