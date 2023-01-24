import React from "react";
import s from "./ProfileInfo.module.css"
import image from "../../../img/picture.jpg"
import {profileType} from '../../../redux/profile-reducer';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

type ProfileInfoType = {
    profile: profileType | null
    status: null | string
    updateUserStatus:(status:null |string)=>void
}

function ProfileInfo(props: ProfileInfoType) {

    if (!props.profile) {
        return <Preloader/>
    }
    return (

        <div>
            {/*<img src={image} alt={'картинка'} className={s.img}/>*/}
            {props.profile.photos.large ? <img src={props.profile.photos.large}/> : ""}


            <div className={s.content}>
                <ProfileStatus status={props.status}  updateUserStatus={props.updateUserStatus}/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.lookingForAJob}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
            </div>
        </div>);


}

export default ProfileInfo;