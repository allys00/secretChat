import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';
import createHistory from 'history/createBrowserHistory';
import RootEpics from './RootEpics';
import home from '../containers/home/Home.reducer';

const epicMiddleware = createEpicMiddleware();

const history = createHistory();

const historyMiddleware = routerMiddleware(history);

const RootReducer = combineReducers({
    home
});


const devTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__
    && (window as any).__REDUX_DEVTOOLS_EXTENSION__();


const Store = applyMiddleware(epicMiddleware, historyMiddleware)
    (createStore)
    (RootReducer, devTools);


epicMiddleware.run(RootEpics);

export { history }

export default Store;
