// pages/tracking.js
import React from 'react';

const ProductTracking = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Product Tracking</h1>
            <p>Track your products across the system.</p>
            <table className="min-w-full bg-white">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="text-left py-2 px-4">Tracking ID</th>
                        <th className="text-left py-2 px-4">Product</th>
                        <th className="text-left py-2 px-4">Location</th>
                        <th className="text-left py-2 px-4">Status</th>
                        <th className="text-left py-2 px-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Dynamic tracking data */}
                    <tr>
                        <td className="py-2 px-4">1</td>
                        <td className="py-2 px-4">Product A</td>
                        <td className="py-2 px-4">Warehouse</td>
                        <td className="py-2 px-4">In Stock</td>
                        <td className="py-2 px-4">
                            <button className="text-blue-500">Details</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ProductTracking;
