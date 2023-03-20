import React, {ChangeEvent, FC, useState} from "react";
import {profileType} from '../../../redux/profile-reducer';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import userPhoto from './../../../img/monkey.jpg'
import {ProfileDataForm} from './ProfileDataForm';
import {ProfileData} from './ProfileData';

type ProfileInfoType = {
    profile: profileType | null
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: () => void
    saveProfile: (data: any, setError: any) => void
}


function ProfileInfo({profile, status, updateUserStatus, isOwner, savePhoto, saveProfile}: ProfileInfoType) {
    const [editMode, setEditMode] = useState(false)
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
    const onSubmit = async (data: any, setError: any, errors: any) => {
            await saveProfile(data, setError);
            setEditMode(false)

    };


    return (

        <div>
            <img src={profile.photos.large || userPhoto} style={{maxWidth: 250, height: 250, borderRadius: 50}}/>

            {isOwner && <input type={'file'} accept={'image/*'} onChange={onMainPhotoSelected}/>}

            {editMode ? <ProfileDataForm profile={profile} onSubmit={onSubmit}/> :
                <ProfileData profile={profile} goToEditMode={() => setEditMode(true)} isOwner={isOwner}/>}

            <ProfileStatus status={status} updateUserStatus={updateUserStatus}/>


        </div>);

}

export default ProfileInfo;



