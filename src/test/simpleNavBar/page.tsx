// SimpleNavbar.js
import React from 'react';
import '../../../components/static/styles/nav.css';

const SimpleNavbar = () => {
    return (
        <nav className="simple-navbar">
            <div>
                <a className="active" href="/main">Home</a>
                <a href="/drugg_reg">Register Drug</a>
                <a href="/display_drug">Show Drug</a>
                <a href="/sel_drug">Sell Drug</a>
                <a href="/show_sold_drug">Show Sold Drug</a>
                <a href="/reg_employe">Register Employee</a>
                <a href="/display_all_employe">Show Employee</a>
                <a href="/inventory_reg_form">Inventory</a>
                <a href="/display_inventory_data">Show Inventory</a>
            </div>
            <div>
                <a className="active" href="/logout">Logout</a>
            </div>
        </nav>
    );
};

export default SimpleNavbar;
