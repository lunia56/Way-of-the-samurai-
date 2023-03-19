import React, {FC} from 'react';
import {profileType} from '../../../redux/profile-reducer';
import {useForm} from 'react-hook-form';
import {Redirect} from 'react-router-dom';
import styles from '../../Login/Login.module.css';
import {Contact} from './ProfileData';


type ProfileDataFormType = {
    profile: profileType
    onSubmit:(data:any)=>void
}
type Inputs = {
    fullName: string
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription:string
    github: string,
    vk: string,
    facebook: string,
    instagram:string,
    twitter: string,
    website:string,
    youtube: string,
    mainLink?: string | undefined,
}
export const ProfileDataForm: FC<ProfileDataFormType> = ({profile,onSubmit}) => {
    const {
        register,
        handleSubmit,
        reset,
        setError,
        clearErrors,
        formState: {errors, isValid}
    } = useForm<Inputs>({defaultValues: {
            fullName:profile.fullName?profile.fullName:'',
            aboutMe:profile.aboutMe?profile.aboutMe:'',
            lookingForAJob:profile.lookingForAJob?profile.lookingForAJob:false,
            lookingForAJobDescription:profile.lookingForAJobDescription?profile.lookingForAJobDescription:''
        },mode: 'onBlur'
        })

    const onSubmitHandler = (data: any) => {
        onSubmit(data)
        reset()
    }

    return (
        <div>


            {/*<div><b>Full Name: </b>{profile.fullName}</div>*/}
            {/*<div><b>About me: </b>{profile.aboutMe}</div>*/}
            {/*<div><b>Looking for a job</b>: {profile.lookingForAJob ? 'Yes' : 'No'}</div>*/}
            {/*/!*<div><b>My professional Skills</b>: {profile.lookingForAJobDescription}</div>*!/*/}
            {/*<div><b>Contacts </b>{Object.keys(profile.contacts).map(e => <Contact key={e} contactTitle={e}*/}
            {/*                                                                      contactValue={profile.contacts[e as keyof typeof profile.contacts]}/>)}*/}
            {/*</div>*/}
            <div><h1>Profile Form</h1></div>
            <form onSubmit={handleSubmit(onSubmitHandler)}>

                <div><input type="text"
                            placeholder={'Full Name'}
                            {...register("fullName", {
                                minLength: {
                                    value: 3,
                                    message: `Минимальная длина 3 символа`
                                }
                            })}/></div>

                <div style={{color: 'red'}}>{errors?.fullName && <p>{errors.fullName.message}</p>}</div>

                <div><input type="text"
                            placeholder={'About me'}
                            {...register("aboutMe",
                                {
                                    minLength: {
                                        value: 5,
                                        message: 'Минимальная длина 5 символов'

                                    }
                                })}/></div>

                <div style={{color: 'red'}}>{errors?.aboutMe && <p className={styles.errorMessage}>
                    { errors.aboutMe?.message}</p>}</div>

                <div><input type="checkbox" {...register('lookingForAJob')}/> Looking for a job</div>
                <div><input type="text"
                            placeholder={'My professional Skills'}
                            {...register("lookingForAJobDescription",
                                {
                                    minLength: {
                                        value: 5,
                                        message: 'Минимальная длина 5 символов'

                                    }
                                })}/></div>
                <div style={{color: 'red'}}>{errors?.lookingForAJobDescription && <p>{errors.lookingForAJobDescription.message}</p>}</div>

                <div><b>Contacts </b>{Object.keys(profile.contacts).map(e => <div key={e}>{e}: <input key={e} type="text"
                                                                                                      placeholder={e}
                                                                                                      {...register(e as keyof typeof profile.contacts)}
                /></div>)}
                </div>
                <div>
                    <input type="submit" disabled={!isValid} value={'Save'}/>
                </div>
            </form>
        </div>
    );
};

