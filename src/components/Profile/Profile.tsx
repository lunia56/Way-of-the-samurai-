import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
 import {PostsContainer} from './Posts/PostsContainer';
import {profileType} from '../../redux/profile-reducer';

type ProfilePropsType = {
    profile:profileType|null
}

function Profile(props: ProfilePropsType) {
    return (

        <div>
            <ProfileInfo profile={props.profile}/>
            <PostsContainer/>
        </div>);
}

export default Profile;