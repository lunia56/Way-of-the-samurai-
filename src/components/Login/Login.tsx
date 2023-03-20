import React from 'react';
import {useForm} from 'react-hook-form';
import {logIn} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import {AppStateType, DispatchType} from '../../redux/redux-store';
import {loginDataType} from '../../API/API';
import {Redirect} from 'react-router-dom';
import styles from '../Login/Login.module.css'

type Inputs = {
    email: string
    password: string
    rememberMe: boolean
    captcha:string
}

function Login(props: LoginPropsType) {
    const {register, handleSubmit, setError,clearErrors, formState: {errors}} = useForm<Inputs>({mode: 'onBlur'})

    const onSubmit = (data: any) => {
        props.logIn(data,setError)
        clearErrors('password')

    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <div><h1>Login</h1></div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div><input type="text"
                            placeholder={'Login'}
                            onFocus={() => {
                                clearErrors('password')}}
                            {...register("email", {
                                required: "Поле обязательно к заполнению",
                                minLength: {
                                    value: 3,
                                    message: `Минимальная длина 3 символа`
                                }
                            })}/></div>

                <div style={{color: 'red'}}>{errors?.email && <p>{errors.email.message}</p>}</div>

                <div><input type="text"
                            placeholder={'Password'}
                            onFocus={() => {
                                clearErrors('password')}}
                            {...register("password",
                                {
                                    required: "Поле обязательно к заполнению",
                                    minLength: {
                                        value: 5,
                                        message: 'Минимальная длина 5 символов'

                                    }
                                })}/></div>

                <div style={{color: 'red'}}>{Object.keys(errors).length? <p className={styles.errorMessage}>
                    {errors.password?.message || errors.email?.message || errors.captcha?.message}</p>:null}</div>

                <div><input type="checkbox" {...register('rememberMe')}/> Remember me</div>

                <div style={{display:'flex',flexDirection:'column'}}>{props.captchaUrl && <img src={props.captchaUrl} width={158}/>}
                    {props.captchaUrl && <input type="text"
                                                style={{width:'150px',marginTop:'10px', marginBottom:'10px'}}
                                                placeholder={'Captcha'}
                                                onFocus={() => {
                                                    clearErrors('password')
                                                }}
                                                {...register("captcha",
                                                    {
                                                        required: "Поле Captcha обязательно к заполнению",

                                                    })}/>}</div>


                <div>
                    <input type="submit" disabled={!!Object.keys(errors).length} value={'Log in'}/>
                </div>
            </form>
        </div>
    );
}

type mapStateToPropsType = {
    isAuth: boolean
    captchaUrl:null|string
}
type mapDispathToProps = {
    logIn: (loginData: loginDataType,setError:any) => void
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl:state.auth.captchaUrl

})
const mapDispathToProps = (dispatch: DispatchType): mapDispathToProps => ({
    logIn: (loginData: loginDataType,setError) => dispatch(logIn(loginData,setError))
})
type LoginPropsType = mapStateToPropsType & mapDispathToProps
export default connect(mapStateToProps, mapDispathToProps)(Login);