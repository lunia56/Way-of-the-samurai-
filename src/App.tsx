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
 import {StateType} from './redux/state';
 import Friends from './components/Friends/Friends';

type AppType={
    state:StateType
}
function App(props:AppType) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route /*exact*/ path="/dialogs" render={()=>
                        <Dialogs state ={props.state.dialogPage }/>} />
                    <Route path="/profile" render={()=>
                        <Profile state={props.state.profilePage}/>} />
                    <Route path="/news" render={News} />
                    <Route path="/music" render={Music} />
                    <Route path="/settings/settings" render={Settings} />
                    <Route path={"/friends"} render ={()=><Friends/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
