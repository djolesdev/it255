import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Room } from '../Room';
import { RoomComponent } from '../room/room.component';

@Component({
  selector: 'app-add-room-form',
  templateUrl: './add-room-form.component.html',
  styleUrls: ['./add-room-form.component.css']
})

export class AddRoomFormComponent implements OnInit {

  @Output() onAddRoom: EventEmitter<Room> = new EventEmitter()

  id: string = ''
  beds: string = ''
  balcony: string = ''
  smoking: string = ''
  about: string = ''
  day_price: string = ''

  constructor() { 

  }
  ngOnInit(): void {

  }
 
  isFormValid(): boolean {
    const idValid = parseInt(this.id) > 0
    const bedsValid = parseInt(this.beds) > 0
    const balconyValid = this.balcony === 'yes' || this.balcony === 'no'
    const smokingValid = this.smoking === 'yes' || this.smoking === 'no'
    const aboutValid = this.about.length > 6
    const priceValid = parseInt(this.day_price)> 0

    return priceValid && idValid && bedsValid && balconyValid && smokingValid && aboutValid
  }

   onSubmit(){

    if (!this.isFormValid()) {
      return alert("All inputs must be correctly filed!")
    }

    let balconyBool, smokingBool
    this.balcony === 'yes' ? balconyBool = true : balconyBool = false
    this.smoking === 'yes' ? smokingBool = true : smokingBool = false

    const newRoom = {
      id: parseInt(this.id),
      beds: parseInt(this.beds),
      balcony: balconyBool,
      smoking: smokingBool,
      about: this.about,
      day_price: parseInt(this.day_price),
      reserved: false,
    }

    this.id = ''
    this.beds = ''
    this.smoking = ''
    this.balcony = ''
    this.about = ''

    this.onAddRoom.emit(newRoom);
  }



}
