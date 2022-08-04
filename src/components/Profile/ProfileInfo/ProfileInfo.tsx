import React from "react";
import s from "./ProfileInfo.module.css"
import image  from "../../../img/picture.jpg"

function ProfileInfo() {
    return (

        <div >
            <img src={image} alt={'картинка'} className={s.img}/>

            <div className={s.content}> Ava+decription</div>
        </div>);
}

export default ProfileInfo;