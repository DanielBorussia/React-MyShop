import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../pages/Login';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/Global.scss';
import PasswordRecovery from '../pages/PasswordRecovery';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/recovery-password" element={<PasswordRecovery />} />
                <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
     
    );
}

export default App;