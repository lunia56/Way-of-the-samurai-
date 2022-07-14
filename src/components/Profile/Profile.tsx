import React from "react";
import classes from "./Profile.module.css"
import Posts from "./Posts/Posts"
// import "../img/picture"

function Profile() {
    return (

        <div>
            <img src="https://art-lemon.com/data/blog/etapy-testirovanya-sayta.jpg" alt="картинка" />

            <div> Ava+decription</div>
            <Posts />
        </div>);
}

export default Profile;