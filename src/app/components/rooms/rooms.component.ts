import { Component, OnInit } from '@angular/core';
import { Room } from '../../model/room.model';
import { RoomService } from 'src/app/services/room.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms: Observable<Room[]>;

  constructor(private roomService: RoomService) {
    this.rooms = this.roomService.getRooms()
   }

  ngOnInit(): void {
    
  }

  deleteRoom(id: number) {
    this.roomService.deleteRoom(id)
  }

  addRoom(room: Room) {
    this.roomService.addRoom(room)
  }

  reserveRoom(param: any) {

    // Dodati ovu metodu u reducer i actions

    const room = param.room
    const days = param.num_days
    const total_price = room.day_price * days

    this.roomService.reserveRoom(room.id)

    // izmeniti vrednost property-a reserved na true za odabranu sobu!

    alert(`Cena rezervacije za sobu broj ${room.id} iznosi $${total_price}`)
  }

}
