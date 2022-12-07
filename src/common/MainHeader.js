import React from "react";
import './MainHeader.css'

function MainHeader() {
    return (
        <header className="toolbar">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 left_bar menu-icon">
                        <ul className="left-none d-flex">
                            <li><a href="#"><i class="bi bi-person-circle"></i>Login</a></li>
                            <li><a href="#"><i className="bi bi-flag-fill"></i>Languages</a></li>
                            <li><i className="bi bi-search"></i>
                                <input type="search" placeholder="Search" className="search_box"/>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 menu-icon">
                        <ul className="right-none pull-right company_info d-flex">
                            <li><a href="#"><i class="bi bi-telephone-fill"></i>1-800-567-0123</a></li>
                            <li className="address"><a href="#"><i class="bi bi-geo-alt-fill"></i>107 Sunset Blvd., Beverly Hills, CA  90210</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="toolbar_shadow"></div>
        </header>
    );
}

export default MainHeader;
