import React from 'react';
import s from '../dialogs.module.css';
import {NavLink} from 'react-router-dom';

export type DialogType ={
    name:string
    id:number
}
const Dialog = (props:DialogType) => {
    return (
            <div className={s.dialogItems}>
                <div className={s.dialog + " " + s.active}><NavLink to={'/dialogs/'+ props.id}>{props.name}</NavLink> </div>
            </div>

    );
};

export default Dialog;