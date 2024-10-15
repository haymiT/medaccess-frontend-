'use client'
import React, { useState } from 'react';

const AddUser = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log({ userName, email, role });
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Add User</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    className="border p-2"
                    type="text"
                    placeholder="User Name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input
                    className="border p-2"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="border p-2"
                    type="text"
                    placeholder="Role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                />
                <button className="bg-blue-500 text-white py-2" type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUser;
