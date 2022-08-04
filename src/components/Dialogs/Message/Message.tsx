import React from 'react';
import s from './Message.module.css';

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