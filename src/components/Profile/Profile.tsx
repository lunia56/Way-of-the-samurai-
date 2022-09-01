import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
 import PostsContainer from './Posts/Post/PostsContainer';
type ProfilePropsType = {

}

function Profile(props: ProfilePropsType) {
    return (

        <div>
            <ProfileInfo/>
            <PostsContainer/>
        </div>);
}

export default Profile;