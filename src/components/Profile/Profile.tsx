import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostsContainer} from './Posts/PostsContainer';
import {profileType} from '../../redux/profile-reducer';

type ProfilePropsType = {
    profile: profileType | null
    status: string
    updateUserStatus:(status: string)=>void
}

function Profile({profile,status,updateUserStatus}: ProfilePropsType) {
    return (

        <div>
            <ProfileInfo profile={profile} status={status} updateUserStatus={updateUserStatus}/>
            <PostsContainer/>
        </div>);
}

export default Profile;