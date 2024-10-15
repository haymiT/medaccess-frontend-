'use client'
// SalesReceipt.js
import React from 'react';
import '../../../components/static/styles/table.css';

const SalesReceipt = ({ sale_id, inventory_id, quantity, price, sales_date, total_price }: any) => {
    const printTable = () => {
        window.print();
    };

    return (
        <div>
            <h2>Sales Receipt</h2>
            <table>
                <thead>
                    <tr>
                        <th>Sale ID</th>
                        <th>Inventory ID</th>
                        <th>Quantity Sold</th>
                        <th>Price</th>
                        <th>Sale Date</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{sale_id}</td>
                        <td>{inventory_id}</td>
                        <td>{quantity}</td>
                        <td>{price}</td>
                        <td>{sales_date}</td>
                        <td>{total_price}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={printTable}>Print</button>
        </div>
    );
};

export default SalesReceipt;
