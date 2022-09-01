import React from 'react';
import s from './dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { DialogPageType} from '../../redux/store';
import {AddItemForm} from '../HelpComponent/AddItemForm';

type DialogsPropsType = {
    addMessage: (newText: string) => void
    dialogsPage:DialogPageType
}

function Dialogs(props: DialogsPropsType) {


    const addMessage = (newText: string) => {
        props.addMessage(newText)
    }

    const dialogsElements = props.dialogsPage.dialogsData.map(dialog => {
        return <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>
    })
    const messagesElements = props.dialogsPage.messageData.map(m => {
        return <Message key={m.id} message={m.message}/>
    })
    return (
        <>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                    <div><AddItemForm AddItem={addMessage} title={'Send'} placeholder={'Напишите сообщение...'}/></div>
                </div>
            </div>

        </>
    )
}

export default Dialogs