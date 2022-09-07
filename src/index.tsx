import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store'
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
// import  {Provider} from './StoreContext';

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