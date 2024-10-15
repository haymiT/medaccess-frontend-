"use client";
import React, { useState } from 'react';

const UpdateEmployee = () => {
    const [formData, setFormData] = useState({
        employee_id: '',
        name: '',
        contact: '',
        sex: 'male',
        address: '',
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
            <h2 className="mt-2 mb-4">Update Employee</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="employee_id">Employee ID:</label>
                <input type="text" id="employee_id" name="employee_id" required value={formData.employee_id} onChange={handleChange} /><br />
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} /><br />
                <label htmlFor="contact">Contact: </label>
                <input type="text" id="contact" name="contact" required value={formData.contact} onChange={handleChange} /><br />
                <label htmlFor="sex">Sex:</label>
                <select id="sex" name="sex" required value={formData.sex} onChange={handleChange}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select><br />
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" required value={formData.address} onChange={handleChange} /><br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateEmployee;
