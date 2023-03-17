import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostsContainer} from './Posts/PostsContainer';
import {profileType} from '../../redux/profile-reducer';

type ProfilePropsType = {
    profile: profileType | null
    isOwner:boolean
    status: string
    updateUserStatus:(status: string)=>void
    savePhoto:()=>void
}

function Profile({profile,status,updateUserStatus,isOwner,savePhoto}: ProfilePropsType) {
    return (

        <div>
            <ProfileInfo profile={profile} status={status} updateUserStatus={updateUserStatus} isOwner={isOwner} savePhoto={savePhoto}/>
            <PostsContainer/>
        </div>);
}

export default Profile;