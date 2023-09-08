import React, { useState } from 'react'
import { FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function Footer() {
    const [footerTog, setFooterTog] = useState(false)
    const [footerTog1, setFooterTog1] = useState(false)
    const [footerTog2, setFooterTog2] = useState(false)

    return (
        <footer>
            <div className="footerDiv">
                <div className="searchFooter">
                    <div className="searchDiv_F">
                        <label forhtml="">
                            <input type="search" name="" id="footerSearch" placeholder="Your e-mail" />
                            <button>subscribe now!</button>
                        </label>
                    </div>
                    <div className="footerList">
                        <ul>
                            <div className="fHead" onClick={() => setFooterTog(!footerTog)}>
                                <h3 className='FHeading' >Partnership <p className='Fpara'>{footerTog ? "-" : "+"}</p></h3>
                            </div>
                            <div className="hfeild">
                                <div className={footerTog ? "fcontentActive" : "fcontent"} >
                                    <li><a href="/">Websites</a></li>
                                    <li><a href="/">Social Media</a></li>
                                    <li><a href="/">Branding</a></li>
                                </div>
                            </div>


                        </ul>
                        <ul>
                            <div className="fHead" onClick={() => setFooterTog1(!footerTog1)}>
                                <h3 className='FHeading'>About <p className='Fpara'>{footerTog1 ? "-" : "+"}</p></h3>
                            </div>
                            <div className="hfeild">
                                <div className={footerTog1 ? "fcontentActive" : "fcontent"}>
                                    <li><a href="/">Our Projects</a></li>
                                    <li><a href="/">Careers</a></li>
                                    <li><a href="/">Products</a></li>
                                </div>
                            </div>
                        </ul>
                        <ul>
                            <div className="fHead" onClick={() => setFooterTog2(!footerTog2)}>
                                <h3 className='FHeading'>Support <p className='Fpara'>{footerTog2 ? "-" : "+"}</p></h3>
                            </div>
                            <div className="hfeild">
                                <div className={footerTog2 ? "fcontentActive" : "fcontent"}> 
                                    <li><a href="/">Support Request</a></li>
                                    <li><a href="/">Contact</a></li>
                                    <li><a href="/">Subscriptions</a></li>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <div className="copyRight">
                        <p>This website created by Shaikh Sharique All right resevered 2021 </p>
                        <div className="footerSocialmedia">
                            <ul>
                                <li><a href="/"><FaFacebook size="25px" id='footerF' /></a></li>
                                <li><a href="/"><FaTwitter size="25px" id='footerT' /></a></li>
                                <li><a href="/"><FaYoutube size="25px" id='footerY' /></a></li>
                                <li><a href="/"><FaLinkedinIn size="25px" id='footerL' /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
