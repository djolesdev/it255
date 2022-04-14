import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { RoomState } from "./room.reducer";

export const selectRooms = (state: AppState) => state.rooms;
export const selectAllRooms = createSelector(
    selectRooms,
    (state: RoomState) => state.rooms
);