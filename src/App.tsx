 import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import './index.css';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
 import {ActionType, StateType, store} from './redux/state';
 import Friends from './components/Friends/Friends';

type AppType={
    state:StateType
    dispatch: (action: ActionType) => void
}
function App(props:AppType) {

    return (

            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route /*exact*/ path="/dialogs" render={()=>
                        <Dialogs state ={props.state.dialogPage} dispatch={store.dispatch.bind(store)}/>} />
                    <Route path="/profile" render={()=>
                        // <Profile profilePage={props.state.profilePage} addPost={props.addPost.bind(props.state)} updateNewPostText={props.updateNewPostText.bind(props.state)}/>} />
                        <Profile profilePage={props.state.profilePage} dispatch={store.dispatch.bind(store)}/>} />
                    <Route path="/news" render={News} />
                    <Route path="/music" render={Music} />
                    <Route path="/settings/settings" render={Settings} />
                    <Route path={"/friends"} render ={()=><Friends/>}/>

                </div>
            </div>

    );
}

export default App;
