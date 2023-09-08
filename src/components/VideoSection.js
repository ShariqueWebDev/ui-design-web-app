import React from 'react'

export default function VideoSection() {
    return (
        <div className="videoSection">
            <div className="vidDetail">
                <h2>Hire job-ready professionals, faster. </h2>
                <p>Pick from our pool of qualified and pre-trained candidates. increase your interview-to-offer ration</p>
                <div className="shortDet">
                    <a href="/">Lateral Hiring .</a>
                    <a href="/">Off-Compus Hiring .</a>
                    <a href="/">Compus Hiring . </a>
                </div>
                <div className="shortDBtn">
                    <div className="ReqBtn">
                        Request a callback
                    </div>
                    <div className="ReqBtn2">
                        Post a Job for free
                    </div>
                </div>
            </div>
            <div className="videoSec">
                <div className="iframeSec">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/HGSR3FDVkkQ"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
                <div className="PersonCount">
                    <p><span>5,00,000+</span><br /> Verified Talent</p>
                    <p><span>Zero</span><br /> Hiring cost</p>
                    <p><span>13000+</span><br /> Hiring parterns</p>
                </div>
            </div>
        </div>
    )
}
