import React, {Component, Suspense} from 'react';
import Navbar from './components/Navbar/Navbar';
import './index.css';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from './components/Friends/Friends';

import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {inicializeApp} from './redux/app-reducer';
import {AppStateType, DispatchType} from './redux/redux-store';
import Preloader from './components/common/Preloader/Preloader';
import {Redirect, Route, withRouter} from 'react-router-dom';
import {lazy} from 'react';
import {SuspenseWrapper} from './components/common/SuspenseWrapper';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
// import UsersContainer from './components/Users/UsersContainer';
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'))
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'))

export const PATH = {
    Dialogs: '/dialogs',
    Profile: '/profile',
    Users: '/users',
    News: '/news',
    Music: '/music',
    Settings: '/settings/settings',
    Friends: '/friends',
    Login: '/login',
    NotFound:'/404'

}

class App extends Component<AppPropsType> {
    catchAllAnhandledError=(promiseRejectionEvent:PromiseRejectionEvent)=>{
alert('Some Error occured')
}
    componentDidMount() {
        this.props.inicializeApp()
        // так можно ловить все ошибки которые падают в асинхронном коде
        window.addEventListener('unhandledrejection',this.catchAllAnhandledError)
    }
    componentWillUnmount() {
        window.removeEventListener('unhandledrejection',this.catchAllAnhandledError)

    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (

            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route exact path='/' render={() =>
                        <Redirect to={PATH.Profile}/>}/>
                    <Route /*exact*/ path={PATH.Dialogs}
                                     render={() => <SuspenseWrapper children={<DialogsContainer/>}/>}/>
                    {/* Ниже описано как передавать опциональный параметр в путь для того что бы затем его использовать для WithROUT*/}
                    <Route path={`${PATH.Profile}/:userId?`}
                           render={() => <SuspenseWrapper children={<ProfileContainer/>}/>}/>
                    <Route path={PATH.Users} render={() => <SuspenseWrapper children={<UsersContainer/>}/>}/>
                    <Route path={PATH.News} render={News}/>
                    <Route path={PATH.Music} render={Music}/>
                    <Route path={PATH.Settings} render={Settings}/>
                    <Route path={PATH.Friends} render={() => <Friends/>}/>
                    <Route path={PATH.Login} render={() =>
                        <Login/>}/>
                    <Route path={PATH.NotFound} render={() =>
                       <div>Error 404 Not Found</div>}/>
                    <Route path={'*'} render={() =>
                        <Redirect to={PATH.NotFound}/>}/>
                </div>
            </div>

        );
    }
}

type mapStateToPropsType = {
    initialized: boolean
}
type mapDispatchToPropsType = {
    inicializeApp: () => void
}
const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

const mapDispatchToProps = (dispatch: DispatchType) => ({
    inicializeApp: () => dispatch(inicializeApp())
})
type AppPropsType = mapStateToPropsType & mapDispatchToPropsType
export default compose<React.ComponentType>(withRouter, connect(mapStateToProps, mapDispatchToProps))(App);
