import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/Global.scss';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
            <Routes>
                <Route exact path="/" element={Home} />
                <Route exact path="/login" element={Login} />
                <Route exact path="/recovery-password" element={RecoveryPassword} />
                <Route element={NotFound} />
                </Routes>
            </Layout>
           
        </BrowserRouter>
     
    );
}

export default App;