import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './index.css';
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from './components/Friends/Friends';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';


function App() {

    return (

        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route /*exact*/ path="/dialogs" render={() =>
                    <DialogsContainer/>}/>
                {/* Ниже описано как передавать опциональный параметр в путь для того что бы затем его использовать для WithROUT*/}
                <Route path="/profile/:userId?" render={() =>
                    <ProfileContainer/>}/>
                <Route path="/users" render={() =>
                    <UsersContainer/>}/>
                <Route path="/news" render={News}/>
                <Route path="/music" render={Music}/>
                <Route path="/settings/settings" render={Settings}/>
                <Route path={"/friends"} render={() => <Friends/>}/>
            </div>
        </div>

    );
}

export default App;
