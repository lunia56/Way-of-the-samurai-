import React from 'react';
import {FieldValues, useForm} from 'react-hook-form';
type AddMessagePropsType = {
    addMessage:(message:string)=>void
}
type Inputs = {
    message: string,
};
export const AddMessageForm = ({addMessage}:AddMessagePropsType) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm<Inputs>({mode: 'onSubmit'})
    const onSubmit = (data: FieldValues) => {
        addMessage(data.message)
        reset()
    }
    console.log('AddMessageForm')
    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text"  placeholder={'Введите сообщение...'} {...register('message', {
                required:true,
                minLength: {
                    value: 1,
                    message: 'Сообщение не может быть пустым'
                }
            })}/>
            <div>{errors.message && <p>{errors.message.message}</p>}</div>
            <input type={'submit'} disabled={!isValid}/>
        </form>
    </>
}