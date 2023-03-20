import React, {FC} from 'react';
import s from './ProfileInfo.module.css';
import {profileType} from '../../../redux/profile-reducer';

type ProfileDataPropsType = {
    profile:profileType
    goToEditMode:()=>void
    isOwner:boolean

}
export const Contact: FC<{ contactTitle: string, contactValue: string | null }> = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b>: <a href={contactValue?contactValue:''}>{contactValue}</a></div>
}

export const ProfileData:FC<ProfileDataPropsType> = ({profile,goToEditMode,isOwner}) => {
    return <div className={s.content}>
        {isOwner&&<div><button onClick={goToEditMode}>edit</button></div>}
            <div><b>Full Name: </b>{profile.fullName}</div>
            <div><b>About me: </b>{profile.aboutMe}</div>
            <div><b>Looking for a job</b>: {profile.lookingForAJob ? 'Yes' : 'No'}</div>
            <div><b>My professional Skills</b>: {profile.lookingForAJobDescription}</div>
            <div><b>Contacts </b>{Object.keys(profile.contacts).map(e => <Contact key={e} contactTitle={e}
                                                                                  contactValue={profile.contacts[e as keyof typeof profile.contacts]}/>)}
            </div>

        </div>

};

