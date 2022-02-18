import React from "react";
import "./Footer.css";
import footerLogo from '../../assets/imgs/footer-logo.png';

function Footer() {
    return (
        <div className="footer">
            <div className="footerLogo" alt="logo">
                    <img src={footerLogo} />
            </div>
        </div>
    );
}

export default Footer;