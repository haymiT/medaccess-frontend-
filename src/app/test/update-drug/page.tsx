"use client";
import React, { useState } from 'react';

const UpdateDrug = () => {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        manufacturer: '',
        expirydate: '',
    });

    const handleChange = (e:any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        // Handle form submission logic
    };

    return (
        <div className="container">
            <h2 className="mt-2 mb-4">Update Drug Here!</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 mt-4">
                    <label htmlFor="id">Drug ID</label>
                    <input type="text" id="id" name="id" required value={formData.id} onChange={handleChange} />
                </div>
                <div className="mb-3 mt-4">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
                </div>
                <div className="mb-3 mt-4">
                    <label htmlFor="manufacturer">Manufacturer</label>
                    <input type="text" id="manufacturer" name="manufacturer" required value={formData.manufacturer} onChange={handleChange} />
                </div>
                <div className="mb-3 mt-4">
                    <label htmlFor="expirydate">Expiry Date</label>
                    <input type="date" id="expirydate" name="expirydate" required value={formData.expirydate} onChange={handleChange} />
                </div>
                <div className="mb-3 mt-4">
                    <input type="submit" value="Update" />
                </div>
            </form>
        </div>
    );
};

export default UpdateDrug;
