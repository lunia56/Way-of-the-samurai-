import React from 'react';
import classes from './Profile.module.css'
import Posts from './Posts/Posts'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionType, ProfilePageType, store} from '../../redux/state';
// import "../img/picture"
type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
}

function Profile(props: ProfilePropsType) {
    return (

        <div>
            <ProfileInfo/>
            <Posts posts={props.profilePage.posts}
                   newPostText={props.profilePage.newPostText}
                   dispatch={store.dispatch.bind(store)}
            />
        </div>);
}

export default Profile;