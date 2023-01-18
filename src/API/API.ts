import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'API-KEY': '2d4dfcef-1677-495e-b268-58032de893b0'
    }
})
export const UserAPI = {
    getUser: (currentPage: number, pageSize: number) => {
        return instance.get<GetUserResponceType>(`/users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    }
}
export const  followUnFollowAPI = {
    follow: (id: number) => {
        return instance.post(`/follow/${id}`)
    },
    unFollow: (id: number) => {
        return instance.delete(`/follow/${id}`)
    }
}
export const AuthIPI ={
    me: () => {
        return instance.get<AuthResponceType<AuthResponceDataType>>(`/auth/me`)
    }
}
export const ProfileAPI = {
    getProfilePage: (userId: string) => {
        return instance.get(`/profile/${userId}`)
    },
}


//types
export type UserType = {
    id: number
    photos: { small: string | null, large: string | null }
    followed: boolean
    name: string | null
    uniqueUrlName: string | null
    status: string | null
    location: locationUserType
}
type locationUserType = { country: string, city: string }

// type UserType = {
//     id: number
//     name: string
//     status: string
//     photos: { small: string, large: string }
//     followed: boolean
// }
type  GetUserResponceType = {
    items: UserType[]
    totalCount: number
    error: string
}

type AuthResponceType<T> = {
    data: T
    resultCode: number
    messages: string []
}
type AuthResponceDataType = {
    id: number
    email: string
    login: string
}