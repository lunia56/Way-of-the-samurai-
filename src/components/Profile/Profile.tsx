import React from "react";
import classes from "./Profile.module.css"
import Posts from "./Posts/Posts"
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { ProfilePageType} from '../../redux/state';
// import "../img/picture"
type ProfilePropsType ={
    state:ProfilePageType
}
function Profile(props:ProfilePropsType) {
    return (

        <div>
            <ProfileInfo/>
            <Posts posts={props.state.posts}/>
        </div>);
}

export default Profile;