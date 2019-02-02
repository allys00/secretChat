import { combineEpics } from 'redux-observable';
import HomeEpic from '../containers/home/Home.epics';

export default combineEpics(
    HomeEpic,
);