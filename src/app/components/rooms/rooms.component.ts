import { Component, OnInit } from '@angular/core';
import { ROOMS } from '../mock-rooms';
import { Room } from '../Room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms: Room[] = ROOMS;


  constructor() { }

  ngOnInit(): void {
  }

}
