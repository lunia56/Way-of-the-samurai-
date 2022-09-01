import React from 'react';
import {ActionType, StateType, StoreType} from './redux/store';


const StoreContext = React.createContext({} as StoreType)
export default StoreContext
export type ProviderType = {
    store: StoreType;
    children: React.ReactNode;
}
export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}