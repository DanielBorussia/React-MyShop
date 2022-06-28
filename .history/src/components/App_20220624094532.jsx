import React from 'react';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import '../styles/Global.scss';

const App = () => {
    return (
       <Layout>
            <Login />
       </Layout>
    );
}

export default App;