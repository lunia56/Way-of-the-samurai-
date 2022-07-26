import React from 'react';
import s from '../dialogs.module.css';
import {NavLink} from 'react-router-dom';

export type MessageType ={
    message:string

}
const Message = (props:MessageType) => {
    return (
        <div className={s.messages}>
            <div className={s.message}>{props.message}</div>
        </div>
    );
};

export default Message;