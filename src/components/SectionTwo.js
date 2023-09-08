import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAccusoft } from "@fortawesome/free-brands-svg-icons";
import { FaAddressCard } from "react-icons/fa";
import { FaAsymmetrik } from "react-icons/fa";
import { FaAws } from "react-icons/fa";

export default function SectionTwo() {
    return (
        <div className="section_two">
            <div className="socialMedia">
                <div className="socialDetail">
                    <a href="https://www.accusoft.com/"><FontAwesomeIcon icon={faAccusoft} size="2x" color='#5FFB17'></FontAwesomeIcon>
                        <p>Pegasus Imaging was rapidly shifting from a provider of end-user utilities to marketing
                            business-to-business solutions. </p>
                    </a>
                </div>
                <div className="socialDetail">
                    <a href="https://www.bankbazaar.com/aadhar-card/updating-aadhar-details.html"><FaAddressCard size="30px" color='#71F5E8' />
                        <p>The Unique Identification Authority of India is a statutory authority established under the
                            provisions of Aadhaar act 2016 by the Govt.</p>
                    </a>
                </div>
                <div className="socialDetail">
                    <a href="https://www.merriam-webster.com/dictionary/asymmetrical"><FaAsymmetrik size="30px" color='red' />
                        <p> having two sides or halves that are not the same : not symmetrical an asymmetrical design
                            asymmetrical shapes</p>
                    </a>
                </div>
                <div className="socialDetail">
                    <a href="https://aws.amazon.com/"><FaAws size="30px" color=' #FF9900' />
                        <p>Whether you're looking for compute power, database storage, content delivery, or other
                            functionality, AWS has the services to help you build sophisticated...</p>
                    </a>
                </div>
            </div>
        </div>
    )
}
