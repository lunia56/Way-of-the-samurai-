import React from 'react';
import s from './dialogs.module.css'
import {NavLink} from 'react-router-dom';
import Dialog from './dialog/Dialog';
import Message from './message/Message';


function Dialogs(props: any) {
    return (
        <>
            <div className={s.dialogs}>

                <Dialog name={'Artem'} id={1}/>
                <Dialog name={'Mikhail'} id={2}/>
                <Dialog name={'Alex'} id={3}/>
                <Dialog name={'Nicolka'} id={4}/>
                <Dialog name={'Sofia'} id={5}/>

                <Message message={'hello'}/>
                <Message message={'My name is React'}/>
                <Message message={'I crash your brain!'}/>


            </div>

        </>
    )
}

export default Dialogs