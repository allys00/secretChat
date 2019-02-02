import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import RootEpics from './RootEpics';
import home from '../containers/home/Home.reducer';

const epicMiddleware = createEpicMiddleware();


const RootReducer = combineReducers({
    home
});


const devTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();


const Store = applyMiddleware(epicMiddleware)(createStore)(RootReducer, devTools);


epicMiddleware.run(RootEpics);




export default Store;
