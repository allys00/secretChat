import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ReducerState } from '../../models/reducerState';
import { changeRoomCode, enterRoom } from './Home.actions';
import { Home as HomeInterface } from './Home.reducer';
import EnterRoom from './EnterRoom/EnterRoom';
import classes from './Home.module.css';

class Home extends Component<any> {

    render() {
        const { home, changeRoomCode, enterRoom } = this.props;
        const { roomCode = '' } = home as HomeInterface;
        return (
            <div className={classes.homeContainer}>
                <EnterRoom
                    roomCode={roomCode}
                    onChange={({ target }: any) => changeRoomCode(target.value)}
                    onEnterRoom={() => enterRoom(roomCode)}
                />
            </div>
        );
    }
}

const mapStateToProps = ({ home }: ReducerState) => ({ home })

export default connect(
    mapStateToProps, { changeRoomCode, enterRoom }
)(Home);