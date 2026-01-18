import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Hearder/NavBar';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;