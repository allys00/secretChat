import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ReducerState } from '../../models/reducerState';
import { changeRoomCode, enterRoom } from './Home.actions';
import { Home as HomeInterface } from './Home.reducer';
import Input from '../../components/input/Input';
import classes from './Home.module.css';
import { Link } from 'react-router-dom';

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
                <Input
                    label="Digite um código"
                    value={roomCode}
                    onChange={({ target }: any) => changeRoomCode(target.value)}
                    onEnterRoom={() => enterRoom(roomCode)}
                    onKeyPress={this.onKeyPress}
                />
                <Link to="/room">
                    <p> Criar nova sala </p>
                </Link>
            </div>
        );
    }
}

const mapStateToProps = ({ home }: ReducerState) => ({ home })

export default connect(
    mapStateToProps, { changeRoomCode, enterRoom }
)(Home);