import React from 'react';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/Global.scss';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
            <Layout>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/recovery-password" component={RecoveryPassword} />
                <Route component={NotFound} />
            </Layout>
            </Switch>
        </BrowserRouter>
     
    );
}

export default App;