import React, {ChangeEvent, useState} from 'react';

export type AddItemFormPropsType = {
    AddItem: (title: string) => void
    title:string
    placeholder?:string
}

export function AddItemForm(props: AddItemFormPropsType) {
    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<boolean>(false)


    const onClickAddItem = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle) {
            props.AddItem(trimmedTitle)
        } else {
            setError(true)
        }
        setTitle('')
    }

    const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) => {
        error && setError(false)
        setTitle(e.currentTarget.value)
    }
    const onKeyDownAddItem = (e: { key: string }) => e.key === 'Enter' && onClickAddItem()
    const errorMessage = <div style={{color: 'hotpink'}}>Title is required!</div>
    return (
        <div >
            <input
                value={title}
                onChange={onChangeSetTitle}
                onKeyDown={onKeyDownAddItem}
                placeholder={props.placeholder}
            />
            <button onClick={onClickAddItem}
                   >{props.title}</button>
            {error && errorMessage}
        </div>)
}