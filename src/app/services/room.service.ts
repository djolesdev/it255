import { Injectable } from '@angular/core';

import { ROOMS } from '../components/mock-rooms';
import { Room } from '../components/Room';


@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor() { }

  getRooms(): Room[] {
    return ROOMS;
  }

}
