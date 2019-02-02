import React, { ChangeEvent } from 'react';
import { TextField, IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import classes from './EnterRoom.module.css';


interface EnterRoomProps {
    roomCode: string,
    onChange: any,
    onEnterRoom: any
}

const EnterRoom = ({ roomCode, onChange, onEnterRoom }: EnterRoomProps) => (
    <div className={classes.enterRoomContent}>
        <TextField
            className={classes.inputStyle}
            id="outlined-name"
            label="Código da Sala"
            value={roomCode}
            onChange={onChange}
            variant="outlined"
        />
        <IconButton
            className={classes.iconStyle}
            color="primary"
            onClick={(onEnterRoom)}
            arial-label="Entrar">
            <SendIcon />
        </IconButton>
    </div>
)

export default EnterRoom;