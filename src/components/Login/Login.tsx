import React from 'react';
import {FieldValues, useForm} from 'react-hook-form';
type Inputs = {
    login:string
    password:string
    rememberMe:boolean
}
function Login() {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm<Inputs>({mode: 'onBlur'})

    const onSubmit = (data:FieldValues) => {
        console.log(data)
        reset()
    }
    return (
        <div>
            <div><h1>Login</h1></div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div><input type="text"
                            placeholder={'Login'}
                            {...register("login", {
                                required: "Поле обязательно к заполнению",
                                minLength: {
                                    value: 3,
                                    message: `Минимальная длина 3 символа`
                                }
                            })}/></div>

                <div style={{color: 'red'}}>{errors?.login && <p>{errors.login.message}</p>}</div>

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

export default Login;