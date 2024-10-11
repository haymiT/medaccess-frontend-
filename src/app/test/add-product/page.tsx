'use client'
// pages/add_product.js
import React, { useState } from 'react';

const AddProduct = () => {
    const [productName, setProductName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState(0);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Handle product addition logic
        console.log({ productName, category, price });
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Add Product</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    className="border p-2"
                    type="text"
                    placeholder="Product Name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />
                <input
                    className="border p-2"
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <input
                    className="border p-2"
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                />
                <button className="bg-blue-500 text-white py-2" type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;
