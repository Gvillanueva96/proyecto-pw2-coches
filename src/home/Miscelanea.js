import React from 'react'
import './Miscelanea.css'

export default function Envios() {
    return (
        <footer class="padded" id='miscelanea'>
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <h4>Newsletter</h4>
                        <p>By subscribing to our company newsletter
                            you will always be up-to-date on our latest
                            promotions, deals and vehicle inventory!</p>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <h4>Latest tweets</h4>
                        <div class="latest-tweet">
                            <div><i class="bi bi-twitter"></i>
                                <p>Put your tweet message here.  Make it
                                    compelling to attract other <a href="#">@people</a> to
                                    read and click on your <a href="#">http://links</a> to
                                    your site. <a href="#">#hashtag</a></p>
                            </div>
                            <div><i class="bi bi-twitter"></i>
                                <p>Put your tweet message here.  Make it
                                    compelling to attract other <a href="#">@people</a> to
                                    read and click on your <a href="#">http://links</a> to
                                    your site. <a href="#">#hashtag</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <h4>Contact us</h4>
                        <div class="footer-contact">
                            <ul>
                                <li><i class="bi bi-geo-alt-fill"></i><strong>Address:</strong> 1234 Street Name, City Name, AB 12345</li>
                                <li><i class="bi bi-telephone-fill"></i><strong>Phone:</strong>1-800-123-4567</li>
                                <li><i class="bi bi-envelope"></i> <strong>Email:</strong><a href="#">sales@company.com</a></li>
                            </ul>
                            <i class="fa fa-location-arrow back_icon"></i>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

