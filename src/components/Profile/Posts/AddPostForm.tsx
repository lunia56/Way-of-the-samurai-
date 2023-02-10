import React from 'react';
import {FieldValues, useForm} from 'react-hook-form';

type AddPostPropsType = {
    addPost: (postMessage: string) => void
}

type Inputs = {
    post: string,
};
export const AddPostForm = ({addPost}: AddPostPropsType) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm<Inputs>({mode: 'onSubmit'})
    const onSubmit = (data: FieldValues) => {
        addPost(data.post)
        reset()
    }
    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder={'Введите сообщение...'} {...register('post', {
                required: true,
                minLength: {
                    value: 10,
                    message: 'Минимальная длина поста: 10 символов'
                }
            })}/>
            <div>{errors.post && <p>{errors.post.message}</p>}</div>
            <input type={'submit'} disabled={!isValid}/>
        </form>
    </>
}