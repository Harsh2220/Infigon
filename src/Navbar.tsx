import React from 'react';
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    return (
        <div className="Navbar">
            <nav className="navbar navbar-light bg-transparent navbar-expand-sm">
                <a className="navbar-brand">
                    <img src="https://www.edumilestones.com/crm/images/infigon-logo-new.png" height="50" alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-2"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar-list-2">
                    <ul className="navbar-nav ms-auto me-5 my-auto">
                        <li className="nav-item me-5">
                            <a className="nav-link">Home</a>
                        </li>
                        <li className="nav-item me-5 active">
                            <a className="nav-link">How we help</a>
                        </li>
                        <li className="nav-item me-5">
                            <a className="nav-link">Programs</a>
                        </li>
                        <li className="nav-item me-5">
                            <a className="nav-link">FAQS</a>
                        </li>
                        <li className="nav-item me-5">
                            <button className="nav-link btn btn-primary rounded-pill ps-4 pe-4">Get in Touch</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar