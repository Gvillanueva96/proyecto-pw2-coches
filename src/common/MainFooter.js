import React from 'react'
import './MainFooter.css'
function MainFooter() {
    return (
        <footer id='main-footer'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="logo-footer">
                            <a href="#">
                                <h1>Automotive</h1>
                                <span>PORSCHE</span>
                            </a>
                        </div>
                        <p>Copyright © 2020 Theme Suite. All rights reserved.</p>
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-6 col-xs-12">
                        <ul className="social">
                            <li className='row'><a href='#' className="bi bi-facebook"></a></li>
                            <li className='row'><a href='#' className="bi bi-twitter"></a></li>
                            <li className='row'><a href='#' className="bi bi-youtube"></a></li>
                            <li className='row'><a href='#' className="bi bi-vimeo"></a></li>
                            <li className='row'><a href='#' className="bi bi-linkedin"></a></li>
                            <li className='row'><a href='#' className="bi bi-instagram"></a></li>
                            <li className='row'><a href='#' className="bi bi-telegram"></a></li>
                            <li className='row'><a href='#' className="bi bi-skype"></a></li>
                            <li className='row'><a href='#' className="bi bi-google"></a></li>
                            <li className='row'><a href='#' className="bi bi-pinterest"></a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>

    )
}

export default MainFooter