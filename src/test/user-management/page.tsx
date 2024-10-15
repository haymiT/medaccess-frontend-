// pages/user_management.js
import React from 'react';

const UserManagement = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">User Management</h1>
            <table className="min-w-full bg-white">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="text-left py-2 px-4">User ID</th>
                        <th className="text-left py-2 px-4">User Name</th>
                        <th className="text-left py-2 px-4">Role</th>
                        <th className="text-left py-2 px-4">Email</th>
                        <th className="text-left py-2 px-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Example user row */}
                    <tr>
                        <td className="py-2 px-4">1</td>
                        <td className="py-2 px-4">John Doe</td>
                        <td className="py-2 px-4">Admin</td>
                        <td className="py-2 px-4">john@example.com</td>
                        <td className="py-2 px-4">
                            <button className="text-blue-500">Edit</button> |
                            <button className="text-red-500">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserManagement;
