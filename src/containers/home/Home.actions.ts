export enum ActionsHome {
    CHANGE_ROOM_CODE = 'CHANGE_ROOM_CODE',
    ASYNC_ENTER_ROOM = 'ASYNC_ENTER_ROOM',
}

export const changeRoomCode = (code: string) => ({
    type: ActionsHome.CHANGE_ROOM_CODE,
    payload: code
});

export const enterRoom = (code: string) => ({
    type: ActionsHome.ASYNC_ENTER_ROOM,
    payload: code
});