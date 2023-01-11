import React from "react";
import "./footer.css"

export default function Footer(){
    return(
        <footer className="footer-container">
            <div className="footer__content-holder">
                <div className="footer__image-holder">
                    <img src="https://beakerhealth.com/images/logo/beaker-health-full-logo.svg"/>
                    <p>
                    An education platform to easily create and disseminate knowledge
                    </p>
                </div>

                <div className="footer__list-holder">
                    <ul>
                        <li class="title">Product</li>
                        <li><a href="/faq">FAQ</a></li>
                    </ul>

                    <ul>
                        <li class="title">Company</li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>

                    <ul>
                        <li class="title">Legal</li>
                        <li><a href="/privacy">Privacy</a></li>
                        <li><a href="/faq">Terms of Service</a></li>
                    </ul>

                    <ul>
                        <li class="title">Connect</li>
                        <li>
                            <i class="fa-brands fa-square-twitter"></i>
                            <i class="fa-brands fa-linkedin"></i>
                            <i class="fa-brands fa-square-facebook"></i>
                            <i class="fa-brands fa-instagram"></i>
                        </li>
                    </ul>
                </div>
            </div>
            <span className="footer__cp-text">© 2023 Beaker Health All Rights Reserved</span>
        </footer>
    )
}