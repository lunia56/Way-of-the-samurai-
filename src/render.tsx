import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, StateType, updateNewPostText} from './redux/state'
import { BrowserRouter } from 'react-router-dom';


export let rerenderEntireTree = (props:StateType)=>{
        ReactDOM.render(
            <BrowserRouter>
                <App state={props} addPost={addPost} updateNewPostText={updateNewPostText}/>
            </BrowserRouter>,
            document.getElementById('root')
        )
}
;