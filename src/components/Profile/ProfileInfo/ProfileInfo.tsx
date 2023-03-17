import React, {ChangeEvent} from "react";
import s from "./ProfileInfo.module.css"
import {profileType} from '../../../redux/profile-reducer';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import userPhoto from './../../../img/monkey.jpg'

type ProfileInfoType = {
    profile: profileType | null
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto:()=>void
}

function ProfileInfo({profile, status, updateUserStatus, isOwner,savePhoto}: ProfileInfoType) {

    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        if (e.target.files.length) {
            // @ts-ignore
            savePhoto(e.target.files[0])
        }
    }
    return (

        <div>
            {/*<img src={image} alt={'картинка'} className={s.img}/>*/}
            <img src={profile.photos.large || userPhoto} style={{maxWidth: 250, height: 250, borderRadius: 50}}/>

            {isOwner && <input type={'file'} accept={'image/*'} onChange={onMainPhotoSelected}/>}
            <div className={s.content}>
                <ProfileStatus status={status} updateUserStatus={updateUserStatus}/>
                <div>{profile.fullName}</div>
                <div>{profile.aboutMe}</div>
                <div>{profile.lookingForAJob}</div>
                <div>{profile.lookingForAJobDescription}</div>
            </div>
        </div>);


}

export default ProfileInfo;