import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Room } from '../../model/room.model';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})

export class RoomComponent implements OnInit {

  isVisible: boolean = false;

  @Input() room!: Room;
  
  @Output() onDeleteRoom: EventEmitter<Room> = new EventEmitter();
  @Output() onReserveRoom: EventEmitter<any> =  new EventEmitter();
  
  num_days: string = ''

  constructor() {

  }

  ngOnInit(): void {

  }
  
  onDelete(room: Room) {
    this.onDeleteRoom.emit(room)
  }

  onReserve(room: Room) {
    if (this.num_days === '') {
      return alert("Please enter number of days")
    }
    const temp = {
      room,
      num_days: this.num_days
    }
    this.onReserveRoom.emit(temp)
  }

}
