import React from 'react'

export default function HeadSection() {
    return (
        <div className="headDiv">
            <div className="test">
                <div className="top">
                    <ul>
                        <img src="./img/wsLogo_dark.svg" alt="" width="250px"/>
                            <div className="socialTag">
                                <li>How it works</li>
                                <li>Career outcomes</li>
                            </div>

                    </ul>
                </div>
                <div className="bottomDiv">
                    <h2>Advanced certification in Software Engineering for Cloud, Blockchain & IoT</h2>
                    <p className="firstpara">Power ahead in your career by learning cutting edge technologies form IIT Madras
                        and Great Learning</p>
                    <div className="spans">
                        <span>10 Months</span><span className="spanA">Online</span><span className="spanB">Weekend Mentorship</span>
                    </div>
                    <div className="btnDiv">
                        <div className="btn">Download Brochure</div>
                    </div>
                    <div className="lastDivs">
                        <p className="lastPara">Application Closes-17th Mar 2022 </p>
                        <p className="lastPara">Best suited for people with 3+ years of work-experience</p>
                    </div>
                </div>
            </div>
            <div className="image">
                <div className="imgContainer">
                    <img src="./img/laptop.jpg" alt="" width="100px"/>
                </div>
            </div>
        </div>
    )
}
