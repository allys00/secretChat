import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ReducerState } from '../../models/reducerState';
import { changeRoomCode, enterRoom } from './Home.actions';
import { Home as HomeInterface } from './Home.reducer';
import EnterRoom from './EnterRoom/EnterRoom';
import classes from './Home.module.css';
import TextButton from '../../components/TextButton/TextButton';

class Home extends Component<any> {

    onKeyPress = (e: any) => {
        const { enterRoom, home } = this.props;
        if (e.key === 'Enter') {
            enterRoom(home.roomCode);
        }
    }

    render() {
        const { home, changeRoomCode, enterRoom } = this.props;
        const { roomCode = '' } = home as HomeInterface;
        return (
            <div className={classes.homeContainer}>
                <EnterRoom
                    roomCode={roomCode}
                    onChange={({ target }: any) => changeRoomCode(target.value)}
                    onEnterRoom={() => enterRoom(roomCode)}
                    onKeyPress={this.onKeyPress}
                />
                <TextButton text="Criar nova sala" onClick={() => alert('create a new room')}/>
            </div>
        );
    }
}

const mapStateToProps = ({ home }: ReducerState) => ({ home })

export default connect(
    mapStateToProps, { changeRoomCode, enterRoom }
)(Home);