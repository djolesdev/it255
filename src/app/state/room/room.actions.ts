import { createAction, props } from "@ngrx/store";
import { Room } from "src/app/model/room.model";

export const addRoom = createAction(
    '[Room] Add Room',
    props<{room: Room}>()
)

export const deleteRoom = createAction(
    '[Rom] Delete Room',
    props<{id: number}>()
)

export const reserveRoom = createAction(
    '[Rom] Reserve Room',
    props<{id: number}>()
)
