// LandingPage.js
import React from 'react';
import '../../components/static/styles/landing.css';

const LandingPage = () => {
    return (
        <div>
            <div className="navv">
                <nav>
                    <ul>
                        <li><a href="#section1">Employee Management</a></li>
                        <li><a href="#section2">Inventory Management</a></li>
                        <li><a href="#section3">Medication Management</a></li>
                        <li><a href="#section4">Reporting</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </nav>
            </div>
            <header>
                <h1>Pharmacy Information Management System</h1>
                <p>Welcome to our pharmacy system. Manage your pharmacy's inventory, medications, and more.</p>
            </header>

            <section className="features">
                <div className="feature">
                    <img src="/static/images/inv.png" alt="Inventory Icon" />
                    <h2>Inventory Management</h2>
                    <p>Track and manage your pharmacy's inventory of medications and supplies.</p>
                </div>
                <div className="feature">
                    <img src="/static/images/med.jpeg" alt="Medication Icon" />
                    <h2>Medication Database</h2>
                    <p>Store and access information about medications, including dosage, interactions, and more.</p>
                </div>
                <div className="feature">
                    <img src="/static/images/report.jpeg" alt="Report Icon" />
                    <h2>Reporting</h2>
                    <p>Generate reports on sales, stock levels, and other key metrics for your pharmacy.</p>
                </div>
            </section>
            <section id="about">
                <h2>About</h2>
                <p>This project was inspired by me and my friends' personal experience working in the pharmacy. I realized the need for an efficient system to manage employees, inventory, sales, and other pharmacy-related operations.</p>
                <p>This is a Portfolio Project for Holberton School, developed as part of my coursework.</p>
                <a href="https://github.com/bekiyeromm/portfolio_project/" target="_blank" rel="noreferrer">GitHub Repository</a>
                <h3>Team Members</h3>
                <ul>
                    <li><a href="https://www.linkedin.com/in/bereket-tena-43a171125/" target="_blank" rel="noreferrer">Bereket Tena LinkedIn</a></li>
                    <li><a href="https://github.com/bekiyeromm" target="_blank" rel="noreferrer">Bereket Tena GitHub</a></li>
                    <li><a href="https://twitter.com/BereketTena1" target="_blank" rel="noreferrer">Bereket Tena Twitter</a></li>
                </ul>
            </section>
            <section className="cta">
                <h2>Get Started</h2>
                <a href="/login" className="btn">Sign In</a>
            </section>
        </div>
    );
};

export default LandingPage;
