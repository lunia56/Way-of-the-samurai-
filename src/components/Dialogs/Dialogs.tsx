import React from 'react';
import s from './dialogs.module.css'
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogPageType} from '../../redux/state';

type DialogsPropsType = {
    state: DialogPageType
}

function Dialogs(props: DialogsPropsType) {

    const dialogsElements = props.state.dialogsData.map(dialog => {
        return <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>
    })

    const messagesElements = props.state.messageData.map(m => {
        return <Message key={m.id} message={m.message}/>
    })
    return (
        <>
            <div className={s.dialogs}>
                <div>{dialogsElements}</div>
                <div>{messagesElements}</div>
            </div>

        </>
    )
}

export default Dialogs