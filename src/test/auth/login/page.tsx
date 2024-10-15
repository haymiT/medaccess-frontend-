'use client'
import React from 'react';
import '../../../../components/static/styles/login.css'

const LoginForm = () => {
    const validateForm = () => {
        return true;
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form action="/login" method="POST" onSubmit={validateForm}>
                <input type="text" id="username" name="username" placeholder="Username" />
                <input type="password" id="password" name="password" placeholder="Password" />
                <input type="submit" value="Log In" />
            </form>
        </div>
    );
};

export default LoginForm;
