import React from 'react';
import '../../components/static/styles/nav.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href="/main">
                    <img
                        style={{ borderRadius: '20px', height: '60px', width: '60px', backgroundColor: 'blueviolet' }}
                        src="/static/images/med.jpeg"
                        alt="medicine"
                    />
                </a>
                <div className="navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link" href="/main">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="/drugg_reg">Register Drug</a></li>
                        <li className="nav-item"><a className="nav-link" href="/display_drug">Show Drug</a></li>
                        <li className="nav-item"><a className="nav-link" href="/sel_drug">Sell Drug</a></li>
                        <li className="nav-item"><a className="nav-link" href="/show_sold_drug">Show Sold Drug</a></li>
                        <li className="nav-item"><a className="nav-link" href="/reg_employe">Register Employee</a></li>
                        <li className="nav-item"><a className="nav-link" href="/display_all_employe">Show Employee</a></li>
                        <li className="nav-item"><a className="nav-link" href="/inventory_reg_form">Inventory</a></li>
                        <li className="nav-item"><a className="nav-link" href="/display_inventory_data">Show Inventory</a></li>
                        <li className="nav-item"><a className="nav-link active" href="/logout">Logout</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
