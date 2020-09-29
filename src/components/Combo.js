import React from 'react'
import "./comboStyle.css"
import { useHistory, Link } from "react-router-dom";
import ComboBg from './images/combo-bg.svg'
import Cover1 from "./images/chep-gaolut-cover-pack.jpg"
import Cover2 from "./images/chep-hatdieu-cover-pack.jpg"
import Cover3 from "./images/chep-occho-cover-pack.jpg"
import Parallax from 'react-rellax'
import StoryPage from "../containers/StoryPage"
import BreakBg from "../images/break-bg.png"
const Combo = () => {
    return (
        <>
            <Parallax speed={6}>
                <div className="tien-combo-style">
                    <div className="combo-bg">
                        <img id="combo" src={ComboBg} alt="combo background" className="img-fluid" />
                    </div>
                    <div className="tien-combo-body">

                        <div className="combo-content">

                            <div className="combo-content-title">
                                <h4> Combo</h4>
                            </div>
                            <Parallax speed={3}>
                                <div className="combo-content-bot">

                                    <div className="tien-box">
                                        <Link to="/products/5f68dbb352631514abbb2868">

                                            <img src={Cover1} alt="img cover 2" />
                                            <span>Gói Tháng</span>

                                        </Link >
                                    </div>

                                    <div className="tien-box">
                                        <Link to="/products/5f68dc0a52631514abbb2869">
                                            <img src={Cover2} alt="img cover 2" />
                                            <span>Gói Acne</span>
                                        </Link >
                                    </div>
                                    <div className="tien-box">
                                        <Link to="/products/5f68dcb152631514abbb286a">
                                            <img src={Cover3} alt="img cover 3" />
                                            <span>Dinh dưỡng</span>
                                        </Link >
                                    </div>
                                </div>
                            </Parallax>
                            <Parallax speed={5}>
                                <StoryPage />
                            </Parallax>


                        </div>

                    </div>

                </div>
            </Parallax>

            <div className="home-break-line">
                <img src={BreakBg} width="700px" alt="break background" className="img-fluid" />
            </div>


        </>
    )
}

export default Combo
