import React from 'react';
import s from "./DialogItem.module.css"
import {NavLink} from 'react-router-dom';
import image from "../../../img/yasher.jpg"
export type DialogType ={
    id:string
    name:string
}
const DialogItem = (props:DialogType) => {
    return (
            <div className={s.dialogItems}>
                <div className={s.dialog + " " + s.active}>
                    <NavLink to={'/dialogs/'+ props.id}
                             className={( isActive) => (isActive ? s.active : s.dialogItems)}>
                        <span><img src={image} className={s.img}/>     </span>
                        <span>{props.name}</span>
                    </NavLink>
                </div>
            </div>

    );
};

export default DialogItem;