import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Room } from '../Room';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})

export class RoomComponent implements OnInit {

  @Input() room!: Room;
  
  @Output() onDeleteRoom: EventEmitter<Room>;

  constructor() {
    this.onDeleteRoom = new EventEmitter();
   }

  ngOnInit(): void {

  }

  onDelete(room: Room) {
    this.onDeleteRoom.emit(room)
  }

}
