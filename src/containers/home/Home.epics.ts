import { combineEpics, ofType } from 'redux-observable';
import { ActionsHome } from './Home.actions';
import { ignoreElements, map } from 'rxjs/operators';
import 'rxjs';
import { history } from '../../configs/Store';



const enterRoom = (action$: any) => {
    return action$.pipe(
        ofType(ActionsHome.ASYNC_ENTER_ROOM),
        map(({ payload }: any) => history.push({
            pathname: `/room/${payload}`,
        })),
        ignoreElements()
    )
}

export default combineEpics(enterRoom);