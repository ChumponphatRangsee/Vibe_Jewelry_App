import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav';

const AppLayout = () => {
    return (
        <div className="container">
            <main style={{ paddingBottom: '100px' }}> {/* Add padding for bottom nav */}
                <Outlet />
            </main>
            <BottomNav />
        </div>
    );
};

export default AppLayout;
