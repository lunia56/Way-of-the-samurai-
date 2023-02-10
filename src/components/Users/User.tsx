import styles from "./User.module.css";
import React from "react";
import {NavLink} from 'react-router-dom';
import {UserType} from '../../API/API';


type UserPropsType = {
    user: UserType
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    followingInProgress: number[]
}

function User({
                  user,
                  follow,
                  unFollow,
                  followingInProgress,
              }: UserPropsType) {


    return <>
                <span>
                    <div>

                        <NavLink to={"/profile/" + user.id}>
                            <img
                                src={user.photos.large ? user.photos.large : "https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png"}
                                className={styles.userPhoto}/>
                        </NavLink>

                    </div>
                    <div>{user.followed
                        ? <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => unFollow(user.id)}>Unfollow</button>
                        : <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => follow(user.id)}> Follow </button>}
                            </div></span>
        <span>
                            <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                            </span>
                            </span>
    </>
}

export default User;