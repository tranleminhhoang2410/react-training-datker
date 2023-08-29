import React from 'react';
import LeftSidebar from '../components/LeftSidebar/LeftSidebar';

import './DefaultLayout.css';

const DefaultLayout = ({ children }) => {
    return (
        <div className='wrapper'>
            <LeftSidebar />
            <main className='content'>{children}</main>
        </div>
    );
};

export default DefaultLayout;
