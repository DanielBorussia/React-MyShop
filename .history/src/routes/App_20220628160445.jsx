import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import Login from '@pages/Login';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import PasswordRecovery from '@pages/PasswordRecovery';
import SendEmail from '@pages/SendEmail';
import NewPassword from '@pages/NewPassword';
import MyAccount from '@pages/MyAccount';
import CreateAccount from '@pages/CreateAccount';
import Checkout from '@pages/Checkout';
import Orders from '@pages/Orders';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import '@styles/Global.scss';


const App = () => {
    const initialState = useInitialState();
    return (
        //encapsular la aplicacion para compartir la informacion
        <AppContext.Provider value={initialState}>
        <BrowserRouter>
            <Layout>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/recovery-password" element={<PasswordRecovery />} />
                <Route exact path="/send-email" element={<SendEmail />} />
				<Route exact path="/new-password" element={<NewPassword/>} />
				<Route exact path="/account" element={<MyAccount/>} />
				<Route exact path="/signup" element={<CreateAccount/>} />
				<Route exact path="/checkout" element={<Checkout/>} />
				<Route exact path="/orders" element={<Orders/>} />
                <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
        </AppContext.Provider>
     
    );
}

export default App;