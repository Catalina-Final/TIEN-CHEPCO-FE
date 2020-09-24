import React from 'react'
import './FooterStyle.css'
import FooterBg from "./images/milk-footer.png"
const Footer = () => {
    return (
        <div >
            <div>
                <img src={FooterBg} alt="footer pic" className="img-fluid" />
            </div>
        </div>
    )
}

export default Footer
