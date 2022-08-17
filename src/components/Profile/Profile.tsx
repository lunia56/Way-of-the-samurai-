import React from 'react';
import classes from './Profile.module.css'
import Posts from './Posts/Posts'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';
// import "../img/picture"
type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void

}

function Profile(props: ProfilePropsType) {
    return (

        <div>
            <ProfileInfo/>
            <Posts posts={props.profilePage.posts}
                   addPost={props.addPost}
                   newPostText={props.profilePage.newPostText}
                   updateNewPostText={props.updateNewPostText}
            />
        </div>);
}

export default Profile;