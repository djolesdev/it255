import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { RoomComponent } from './components/room/room.component';
import { AddRoomFormComponent } from './components/add-room-form/add-room-form.component';

import { RoomService } from './services/room.service';

import { StoreModule } from '@ngrx/store';
import { roomReducer } from './state/room/room.reducer';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomComponent,
    AddRoomFormComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({rooms: roomReducer}),
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    RoomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
