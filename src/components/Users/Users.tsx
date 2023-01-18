import styles from "./User.module.css";
import React from "react";
import styled from "styled-components";
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import {followUnFollowAPI, UserType} from '../../API/API';
import {follow} from '../../redux/users-reducer';


//использование стилей через styled component
const Span = styled.span`
  font-weight: bold;
`
type UserPropsType = {
    users: Array<UserType>
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    followingInProgress: number[]
}

function User({
                  users,
                  totalUserCount,
                  pageSize,
                  currentPage,
                  onPageChanged,
                  follow,
                  unFollow,
                  followingInProgress,
              }: UserPropsType) {

    let pageCount = Math.ceil(totalUserCount / pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(el => currentPage === el ? <Span>{el}</Span> :
                    <span onClick={() => onPageChanged(el)}>{el}</span>)}
            </div>

            {users.map((el: UserType) => <div key={el.id}>
                <span>
                    <div>

                        <NavLink to={"/profile/" + el.id}>
                            <img
                                src={el.photos.large ? el.photos.large : "https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png"}
                                className={styles.userPhoto}/>
                        </NavLink>

                    </div>
                    <div>{el.followed
                        ? <button
                            disabled={followingInProgress.some(id => id === el.id)}
                            onClick={() => unFollow(el.id)}>Unfollow</button>
                        : <button
                            disabled={followingInProgress.some(id => id === el.id)}
                            onClick={() => follow(el.id)}> Follow </button>}
                            </div></span>
                <span>
                            <span>
                            <div>{el.name}</div>
                            <div>{el.status}</div>
                            </span>
                            </span>
            </div>)}
        </div>);
}

export default User;