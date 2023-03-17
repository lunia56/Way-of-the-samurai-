import styles from "./User.module.css";
import React from "react";
import styled from "styled-components";
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import {followUnFollowAPI, UserType} from '../../API/API';
import {follow} from '../../redux/users-reducer';
import User from './User';
import {Paginator} from '../common/Paginator/Paginator';
import Preloader from '../common/Preloader/Preloader';


type UsersPropsType = {
    users: Array<UserType>
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    followingInProgress: number[]
    isFetching:boolean
}

function Users({
                   users,
                   totalUserCount,
                   pageSize,
                   currentPage,
                   onPageChanged,
                   follow,
                   unFollow,
                   followingInProgress,
                   isFetching
               }: UsersPropsType) {
    const portionSize = 10

    return <>
        <Paginator totalItemsCount={totalUserCount} pageSize={pageSize} currentPage={currentPage}
                   onPageChanged={onPageChanged} portionSize={portionSize}/>
        {isFetching ? <Preloader/> :
            users.map((el: UserType) => <User key={el.id}
                                               user={el}
                                               follow={follow}
                                               unFollow={unFollow}
                                               followingInProgress={followingInProgress}/>
                ) }

    </>
}

export default Users;