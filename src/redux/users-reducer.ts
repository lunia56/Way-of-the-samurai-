import {v1} from 'uuid';
import {ActionType} from './store';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type FollowUserActionType = {
    type: 'FOLLOW'
    UserId: string
}
export type UnFollowUserActionType = {
    type: 'UNFOLLOW'
    UserId: string
}
export type SetUsersActionType = {
    type: 'SET-USERS'
    Users: Array<UserType>

}


export type InitialStateUsersType = {
    users: Array<UserType>
}
export type UserType = {
    id: string
    photoUrl:string
    followed: boolean
    fullName: string
    status: string
    location: locationUserType
}
type locationUserType = { country: string, city: string }
let initialState: InitialStateUsersType = {
    users: [
        // {
        //     id: v1(),
        //     photoUrl:"https://www.vokrug.tv/person/show/16435776961/",
        //     followed: false,
        //     fullName: 'Vasyl',
        //     status: 'i love to travel in the mountains',
        //     location: {country: 'belarus', city: 'Minsk'}
        // },
        // {
        //     id: v1(),
        //     photoUrl:"https://stuki-druki.com/authors/Glinnikov-Ilia.php",
        //     followed: true,
        //     fullName: 'Ilya',
        //     status: 'I am so pretty',
        //     location: {country: 'Russia', city: 'Saint Petersburg'}
        // },
        // {
        //     id: v1(),
        //     photoUrl:"https://www.kinopoisk.ru/name/1769503/",
        //     followed: true,
        //     fullName: 'Andrew',
        //     status: 'i like football!!!',
        //     location: {country: 'Ukraine', city: 'Kiev'}
        // },
        // {
        //     id: v1(),
        //     photoUrl:"https://тайна-вашего-имени.рф/kirill.html",
        //     followed: false,
        //     fullName: 'Kirill',
        //     status: 'i am looking for a job right now...',
        //     location: {country: 'Russia', city: 'Orenburg'}
        // }
    ]
}
export const usersReducer = (state: InitialStateUsersType = initialState, action: ActionType): InitialStateUsersType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(el => el.id === action.UserId ? {...el, followed: true} : el)}
        case UNFOLLOW:
            return {...state, users: state.users.map(el => el.id === action.UserId ? {...el, followed: false} : el)}
        case SET_USERS:
            return {...state, users: [...state.users, ...action.Users]}

        default:
            return state

    }
}

export const FollowAC = (UserId: string): FollowUserActionType => ({type: FOLLOW, UserId})

export const UnFollowAC = (UserId: string): UnFollowUserActionType => ({type: UNFOLLOW, UserId})
export const SetUsersAC = (Users: Array<UserType>): SetUsersActionType => ({type: SET_USERS, Users})