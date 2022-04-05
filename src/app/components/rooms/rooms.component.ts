import { Component, OnInit } from '@angular/core';
import { ROOMS } from '../mock-rooms';
import { Room } from '../Room';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms: Room[] = []

  constructor(private roomService: RoomService) {
    this.rooms = roomService.getRooms();
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

  reserveRoom(param: any) {
    const room = param.room
    const days = param.num_days
    const total_price = room.day_price * days

    // izmeniti vrednost property-a reserved na true za odabranu sobu!

    alert(`Cena rezervacije za sobu broj ${room.id} iznosi $${total_price}`)
  }

}
