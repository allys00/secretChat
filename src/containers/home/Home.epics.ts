import { combineEpics, ofType } from 'redux-observable';
import { ActionsHome } from './Home.actions';
import { ignoreElements, map } from 'rxjs/operators';
import 'rxjs';



const enterRoom = (action$: any) => {
    return action$.pipe(
        ofType(ActionsHome.ASYNC_ENTER_ROOM),
        map(({ payload }: any) => alert(payload)),
        ignoreElements()
    )
}

export default combineEpics(enterRoom);