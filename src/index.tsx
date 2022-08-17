import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateType, store} from './redux/state'
import {BrowserRouter} from 'react-router-dom';

// ReactDOM.render(
//     <BrowserRouter>
//     <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
//     </BrowserRouter>,
//   document.getElementById('root')
// );

export let rerenderEntireTree = ()=>{
        ReactDOM.render(
            <BrowserRouter>
                <App state={store.getState()}  addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>
            </BrowserRouter>,
            document.getElementById('root')
        )
    }
;
rerenderEntireTree();
store.subscribe(() => rerenderEntireTree());