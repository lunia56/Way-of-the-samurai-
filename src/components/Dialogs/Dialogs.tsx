import React from 'react';
import s from './dialogs.module.css'
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {ActionType, AddMessageActionCreator, ChangeMessageTextActionCreator, DialogPageType} from '../../redux/state';
import {AddItemForm} from '../HelpComponent/AddItemForm';

type DialogsPropsType = {
    state: DialogPageType
    dispatch: (action: ActionType) => void
}

function Dialogs(props: DialogsPropsType) {

    const dialogsElements = props.state.dialogsData.map(dialog => {
        return <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>
    })

    const messagesElements = props.state.messageData.map(m => {
        return <Message key={m.id} message={m.message}/>
    })
    const addMessage = (newText: string) => {
        props.dispatch(AddMessageActionCreator())
        props.dispatch(ChangeMessageTextActionCreator(newText))
    }
    return (
        <>
            <div className={s.dialogs}>
                <div>{dialogsElements}</div>
                <div>{messagesElements}
                    <AddItemForm AddItem={addMessage}/>
                </div>
            </div>

        </>
    )
}

export default Dialogs