import React from 'react';

export const Navbar =() => {
    return(
    <nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#3185FC'}} >
    <div class="container-fluid">
        <a class="navbar-brand navText" href="#">Lane Consulting Group</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">About</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">FAQ</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Blog</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
    )
}