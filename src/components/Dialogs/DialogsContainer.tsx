import React from 'react';
import {StoreType} from '../../redux/store';
import {AddItemForm} from '../HelpComponent/AddItemForm';
import {AddMessageActionCreator, ChangeMessageTextActionCreator} from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';
import StoreContext, {Provider} from '../../StoreContext';

type DialogsContainerPropsType = {}

export const DialogsContainer = (props: DialogsContainerPropsType) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store ? store.getState().dialogPage : store

                const addMessage = (newText: string) => {
                    if (store) {
                        store.dispatch(ChangeMessageTextActionCreator(newText))
                        store.dispatch(AddMessageActionCreator())
                    }
                }

                return (state
                        ? <Dialogs addMessage={addMessage} dialogsPage={state}/>
                        : state
                )
            }}
        </StoreContext.Consumer>
    )
}

