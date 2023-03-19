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
        return instance.get<ResponceType<AuthResponceDataType>>(`/auth/me`)
    },
    logIn:(loginData:loginDataType)=>{
        return instance.post<ResponceType<any>>(`/auth/login`,loginData)
    },
    logOut:()=>{
        return instance.delete<ResponceType<any>>(`/auth/login`)
    }
}
export const ProfileAPI = {
    getProfilePage: (userId: string) => {
        return instance.get(`/profile/${userId}`)
    },
    getProfileStatus:(userId:string)=>{
        return instance.get<string>(`/profile/status/${userId}`)
},
    updateProfileStatus:(status:string)=>{
        return instance.put<ResponceType<any>>(`/profile/status`,{status})
    },
    savePhoto(photoFile:any){
        const formData = new FormData();
        formData.append('image',photoFile)
        return instance.put(`profile/photo`, formData, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile:ProfileType){
        return instance.put(`profile/`,
            profile
        )
    }
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

type ResponceType<T> = {
    data: T
    resultCode: number
    messages: string []
}
export type loginDataType = {
    email:string
    password:string
    rememberMe:boolean
    captcha?:boolean
}
type AuthResponceDataType = {
    id: number
    email: string
    login: string
}
export type ProfileType={
    userId?: number | null | undefined,
    lookingForAJob?: boolean | undefined,
    lookingForAJobDescription?: string | undefined,
    fullName: string |undefined,
    contacts:object,
    github: string,
    vk: string,
    facebook: string,
    instagram:string,
    twitter: string,
    website:string,
    youtube: string,
    mainLink?: string | undefined,
    photos:PhotosType
    aboutMe:string
}
export type PhotosType={
    small: string | null,
    large: string | null
}