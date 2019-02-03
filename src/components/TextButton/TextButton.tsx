import React from 'react';
import { Link } from '@material-ui/core';
import classes from './TextButton.module.css';


interface TextButtonProps {
    text: string,
    onClick: any
}

const TextButton = ({ text, onClick }: TextButtonProps) => (
    <Link className={classes.textButton} onClick={onClick}> {text} </Link>
)

export default TextButton;