import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { Room } from '../Room';

@Component({
  selector: 'app-add-room-form',
  templateUrl: './add-room-form.component.html',
  styleUrls: ['./add-room-form.component.css']
})

export class AddRoomFormComponent implements OnInit {

  @Output() onAddRoom: EventEmitter<Room>;

  id: string;
  beds: string;
  balcony: string;
  smoking: string;
  
  constructor() { 
    this.onAddRoom = new EventEmitter()
    this.id = ''
    this.beds = ''
    this.balcony = ''
    this.smoking = ''
  }

  ngOnInit(): void {

  }


   onSubmit(){
     
    let balconyBool, smokingBool
    this.balcony === 'yes' ? balconyBool = true : balconyBool = false
    this.smoking === 'yes' ? smokingBool = true : smokingBool = false

    const newRoom = {
      id: parseInt(this.id),
      beds: parseInt(this.beds),
      balcony: balconyBool,
      smoking: smokingBool,
      reserved: false,
    }

    this.id = ''
    this.beds = ''
    this.smoking = ''
    this.balcony = ''

    this.onAddRoom.emit(newRoom);
  }



}
