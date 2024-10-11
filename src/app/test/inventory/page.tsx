// pages/inventory.js
import React from 'react';

const InventoryManagement = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Inventory Management</h1>
            <table className="min-w-full bg-white">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="text-left py-2 px-4">Product ID</th>
                        <th className="text-left py-2 px-4">Product Name</th>
                        <th className="text-left py-2 px-4">Category</th>
                        <th className="text-left py-2 px-4">Quantity</th>
                        <th className="text-left py-2 px-4">Price</th>
                        <th className="text-left py-2 px-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Replace with dynamic product list */}
                    <tr>
                        <td className="py-2 px-4">1</td>
                        <td className="py-2 px-4">Product A</td>
                        <td className="py-2 px-4">Category 1</td>
                        <td className="py-2 px-4">100</td>
                        <td className="py-2 px-4">$10.00</td>
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

export default InventoryManagement;
