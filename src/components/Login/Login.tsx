import React from 'react';
import {FieldValues, useForm} from 'react-hook-form';
import {getAuthUserData, logIn, logOut} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import {AppStateType, DispatchType} from '../../redux/redux-store';
import {loginDataType} from '../../API/API';
import {Redirect} from 'react-router-dom';

type Inputs = {
    email: string
    password: string
    rememberMe: boolean
}

function Login(props: LoginPropsType) {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm<Inputs>({mode: 'onBlur'})

    const onSubmit = (data: any) => {
        props.logIn(data)
        reset()
    }
    
    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <div><h1>Login</h1></div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div><input type="text"
                            placeholder={'Login'}
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
                            {...register("password",
                                {
                                    required: "Поле обязательно к заполнению",
                                    minLength: {
                                        value: 5,
                                        message: 'Минимальная длина 5 символов'
                                    }
                                })}/></div>
                <div style={{color: 'red'}}>{errors?.password && <p>{errors.password.message}</p>}</div>

                <div><input type="checkbox" {...register('rememberMe')}/> Remember me</div>

                <div>
                    <input type="submit" disabled={!isValid} value={'Log in'}/>
                </div>
            </form>
        </div>
    );
}

type mapStateToPropsType = {
    isAuth: boolean
}
type mapDispathToProps = {
    logIn: (loginData: loginDataType) => void
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth
})
const mapDispathToProps = (dispatch: DispatchType): mapDispathToProps => ({
    logIn: (loginData: loginDataType) => dispatch(logIn(loginData))
})
type LoginPropsType = mapStateToPropsType & mapDispathToProps
export default connect(mapStateToProps, mapDispathToProps)(Login);