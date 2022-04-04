import { Component, OnInit } from '@angular/core';
import { ROOMS } from '../mock-rooms';
import { Room } from '../Room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms: Room[];


  constructor() {
    this.rooms = ROOMS;
   }

  ngOnInit(): void {
  }

  deleteRoom(room: Room) {
    this.rooms = this.rooms.filter(temp => {
      return temp.id !== room.id
    })
  }

  addRoom(room: Room) {
    this.rooms.push(room)
  }

}
