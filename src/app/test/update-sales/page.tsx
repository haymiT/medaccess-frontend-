"use client";
import React, { useState } from 'react';

const UpdateSales = () => {
    const [formData, setFormData] = useState({
        sale_id: '',
        medication_id: '',
        quantity_sold: '',
        price: '',
        sale_date: '',
    });

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Handle form submission logic
    };

    return (
        <div className="container">
            <h2 className="mt-2 mb-4">Update Sales Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="sale_id">Sale ID:</label>
                <input type="text" id="sale_id" name="sale_id" required value={formData.sale_id} onChange={handleChange} /><br />
                <label htmlFor="medication_id">Medication ID:</label>
                <input type="text" id="medication_id" name="medication_id" required value={formData.medication_id} onChange={handleChange} /><br />
                <label htmlFor="quantity_sold">Quantity Sold:</label>
                <input type="number" id="quantity_sold" name="quantity_sold" required value={formData.quantity_sold} onChange={handleChange} /><br />
                <label htmlFor="price">Price:</label>
                <input type="text" id="price" name="price" required value={formData.price} onChange={handleChange} /><br />
                <label htmlFor="sale_date">Sale Date:</label>
                <input type="date" id="sale_date" name="sale_date" required value={formData.sale_date} onChange={handleChange} /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UpdateSales;
