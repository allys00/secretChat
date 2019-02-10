import React from 'react';
import { TextField, IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import classes from './Input.module.css';


interface EnterRoomProps {
    value: string,
    onChange: any,
    onEnterRoom: any,
    onKeyPress: any,
    label?: any,
    placeholder?: any,
    className?: string,
}

const EnterRoom = ({
    value,
    onChange,
    onEnterRoom,
    onKeyPress,
    label,
    className,
    placeholder }: EnterRoomProps) => (
        <div className={`${classes.enterRoomContent}  ${className}`}>
            <TextField
                className={classes.inputStyle}
                id="outlined-name"
                label={label}
                value={value}
                onChange={onChange}
                onKeyPress={onKeyPress}
                variant="outlined"
                placeholder={placeholder}
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