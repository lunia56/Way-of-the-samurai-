import React from 'react';
import s from './dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {AddItemForm} from '../HelpComponent/AddItemForm';
import {DialogsPropsType} from './DialogsContainer';
import { Redirect} from 'react-router-dom';
import WithAuthRedirect from '../../HOC/withAuthRedirect';
import {AddMessageForm} from './AddMessageForm';




function Dialogs(props: DialogsPropsType) {


    const onSendMessageClick = (newText:string) => {
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
                    {/*<div><AddItemForm AddItem={onSendMessageClick} title={'Send'} placeholder={'Напишите сообщение...'}/></div>*/}
                    <div><AddMessageForm addMessage={onSendMessageClick}/></div>
                </div>
            </div>

        </>
    )
}

export default Dialogs


