import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostsContainer} from './Posts/PostsContainer';
import {profileType} from '../../redux/profile-reducer';

type ProfilePropsType = {
    profile: profileType | null
    status: null | string
    updateUserStatus:(status:null |string)=>void
}

function Profile(props: ProfilePropsType) {
    return (

        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
            <PostsContainer/>
        </div>);
}

export default Profile;