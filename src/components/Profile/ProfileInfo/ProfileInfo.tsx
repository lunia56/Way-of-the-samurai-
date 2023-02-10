import React from "react";
import s from "./ProfileInfo.module.css"
import {profileType} from '../../../redux/profile-reducer';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

type ProfileInfoType = {
    profile: profileType | null
    status:  string
    updateUserStatus:(status:string)=>void
}

function ProfileInfo({profile,status,updateUserStatus}: ProfileInfoType) {

    if (!profile) {
        return <Preloader/>
    }
    return (

        <div>
            {/*<img src={image} alt={'картинка'} className={s.img}/>*/}
            {profile.photos.large ? <img src={profile.photos.large}/> : ""}


            <div className={s.content}>
                <ProfileStatus status={status}  updateUserStatus={updateUserStatus}/>
                <div>{profile.fullName}</div>
                <div>{profile.aboutMe}</div>
                <div>{profile.lookingForAJob}</div>
                <div>{profile.lookingForAJobDescription}</div>
            </div>
        </div>);


}

export default ProfileInfo;