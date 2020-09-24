import React from 'react'
import './FooterStyle.css'
import FooterBg from "./images/milk-footer.png"
const Footer = () => {
    return (
        <div className="footer-style">
            <div>
                <img src={FooterBg} id="footer" alt="footer pic" />
            </div>
        </div>
    )
}

export default Footer
