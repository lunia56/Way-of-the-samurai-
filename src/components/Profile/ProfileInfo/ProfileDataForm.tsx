import React, {FC} from 'react';
import {contactsType, profileType} from '../../../redux/profile-reducer';
import {useForm,} from 'react-hook-form';
import styles from '../../Login/Login.module.css';


type ProfileDataFormType = {
    profile: profileType
    onSubmit: (data: any, setError: any, errors: any) => void
}
type Inputs = {
    fullName: string
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    contacts: contactsType

}
export const ProfileDataForm: FC<ProfileDataFormType> = ({profile, onSubmit}) => {
    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        formState: {errors, isValid}
    } = useForm<Inputs>({
        defaultValues: {
            fullName: profile.fullName ? profile.fullName : '',
            aboutMe: profile.aboutMe ? profile.aboutMe : '',
            lookingForAJob: profile.lookingForAJob ? profile.lookingForAJob : false,
            lookingForAJobDescription: profile.lookingForAJobDescription ? profile.lookingForAJobDescription : '',
            contacts: {
                facebook: profile.contacts.facebook ? profile.contacts.facebook : '',
                github: profile.contacts.github ? profile.contacts.github : '',
                vk: profile.contacts.vk ? profile.contacts.vk : '',
                instagram: profile.contacts.instagram ? profile.contacts.instagram : '',
                website: profile.contacts.website ? profile.contacts.website : '',
                twitter: profile.contacts.twitter ? profile.contacts.twitter : '',
                youtube: profile.contacts.youtube ? profile.contacts.youtube : '',
                mainLink: profile.contacts.mainLink ? profile.contacts.mainLink : ''
            }


        }, mode: 'onBlur'
    })
    const onSubmitHandler = (data: any) => {
        onSubmit(data, setError, errors)
    }

    return (
        <div>

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
                    {errors.aboutMe?.message}</p>}</div>

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
                <div style={{color: 'red'}}>{errors?.lookingForAJobDescription &&
                    <p>{errors.lookingForAJobDescription.message}</p>}</div>

                <div><b>Contacts </b>{Object.keys(profile.contacts)
                    .map(e => <div key={e}>{e}:
                        <input key={e} type="text"
                               placeholder={e}
                               onFocus={() => clearErrors('contacts')}
                            //@ts-ignore
                               {...register('contacts.' + e)}
                        /></div>)}
                </div>
                <div style={{color: 'red'}}>{errors?.contacts && <p className={styles.errorMessage}>
                    {errors.contacts?.message}</p>}</div>
                <div>
                    <input type="submit" disabled={!isValid} value={'Save'}/>
                </div>
            </form>
        </div>
    );
};

