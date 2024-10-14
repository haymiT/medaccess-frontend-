"use client";
import React, { useState } from 'react';

const UpdateInventory = () => {
    const [formData, setFormData] = useState({
        inventoryId: '',
        medicationId: '',
        quantity: '',
        location: '',
        expiryDate: '',
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
            <h2 className="mt-2 mb-4">Update Inventory Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="inventoryId">Inventory ID:</label>
                <input type="text" id="inventoryId" name="inventoryId" required value={formData.inventoryId} onChange={handleChange} /><br />
                <label htmlFor="medicationId">Medication ID:</label>
                <input type="text" id="medicationId" name="medicationId" required value={formData.medicationId} onChange={handleChange} /><br />
                <label htmlFor="quantity">Quantity:</label>
                <input type="number" id="quantity" name="quantity" required value={formData.quantity} onChange={handleChange} /><br />
                <label htmlFor="location">Location:</label>
                <input type="text" id="location" name="location" required value={formData.location} onChange={handleChange} /><br />
                <label htmlFor="expiryDate">Expiry Date:</label>
                <input type="date" id="expiryDate" name="expiryDate" required value={formData.expiryDate} onChange={handleChange} /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UpdateInventory;
