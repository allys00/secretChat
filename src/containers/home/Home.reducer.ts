import { ActionsHome } from "./Home.actions";

const INITIAL_STATE: Home = {
    roomCode: ''
}

export default (state = INITIAL_STATE, { type, payload }: { type: string, payload: any }): Home => {
    switch (type) {

        case ActionsHome.CHANGE_ROOM_CODE:
            return { ...state, roomCode: payload }

        default:
            return state
    }
};

export interface Home {
    roomCode?: string
}