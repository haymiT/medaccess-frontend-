'use client'
import React from 'react';

const LogoutPage = () => {
    return (
        <div>
            <h2>Welcome User</h2>
            <button id="logout-btn" onClick={() => console.log('Logged out')}>Logout</button>
        </div>
    );
};

export default LogoutPage;
