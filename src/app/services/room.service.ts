import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Room } from '../model/room.model';
import { selectAllRooms } from '../state/room/room.selectors';
import { AppState } from '../state/app.state';
import { addRoom, deleteRoom, reserveRoom} from '../state/room/room.actions';

@Injectable({
  providedIn: 'root',
})
export class RoomService{

  allRooms = this.store.select(selectAllRooms)

  constructor(private store: Store<AppState>) {
    
  }

  getRooms(): Observable<Room[]> {
    return this.allRooms
  }

  addRoom(room: Room) {
    this.store.dispatch(addRoom({room}))
  }

  deleteRoom(id: number) {
    this.store.dispatch(deleteRoom({id}))
  }

  reserveRoom(id: number) {
    this.store.dispatch(reserveRoom({id}))
  }
  
}
