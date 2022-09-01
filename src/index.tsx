import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateType, store} from './redux/store'
import {BrowserRouter} from 'react-router-dom';
import  {Provider} from './StoreContext';

// ReactDOM.render(
//     <BrowserRouter>
//     <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
//     </BrowserRouter>,
//   document.getElementById('root')
// );

export let rerenderEntireTree = () => {
        ReactDOM.render(
            <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>,
            document.getElementById('root')
        )
    }
;
rerenderEntireTree();
store.subscribe(() => rerenderEntireTree());