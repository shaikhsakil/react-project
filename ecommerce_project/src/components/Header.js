import React from 'react';

function Heading() {
    return (

        <>
            <header className="header_wrap fixed-top header_with_topbar">
                <div className="bottom_header dark_skin main_menu_uppercase">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg">
                            <a className="navbar-brand" href="index.html">
                                <img className="logo_light" src="assets/images/logo_light.png" alt="logo" />
                                <img className="logo_dark" src="assets/images/logo_dark.png" alt="logo" />
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-expanded="false">
                                <span className="ion-android-menu"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li>
                                        <a className="nav-link active" href="index.html">Home</a>
                                    </li>
                                    <li>
                                        <a className="nav-link" href="about.html">About us</a>
                                    </li>
                                    <li>
                                        <a className="nav-link" href="shop-load-more.html">Shop</a>
                                    </li>
                                    <li className="dropdown">
                                        <a className="dropdown-toggle nav-link" href="#" data-bs-toggle="dropdown">Pages</a>
                                        <div className="dropdown-menu">
                                            <ul>
                                                <li><a className="dropdown-item nav-link nav_item" href="shop-cart.html">Cart</a></li>
                                                <li><a className="dropdown-item nav-link nav_item" href="checkout.html">Checkout</a></li>
                                                <li><a className="dropdown-item nav-link nav_item" href="wishlist.html">Wishlist</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><a className="nav-link nav_item" href="contact.html">Contact Us</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )

};



export default Heading;