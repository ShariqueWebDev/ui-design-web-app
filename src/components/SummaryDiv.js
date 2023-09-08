import React, { useState } from 'react'

export default function SummaryDiv() {

    const [summary, setSummary] = useState(false);
    // const [text, setText] = useState("Read more")

    return (
        <div className="summaryDiv">
            <div className="summary">
                <h3>What is Data Analytics?</h3>
                <p>
                    A study states that over 2.5 quintillion bytes of data are being generated every single day which is
                    unstructured or semi-structured. <br/><br/>
                        To process the massive amounts of data we need more effective algorithms. This is made possible by the
                        Application of Data Analytics. Data Analytics is the application of structured statistical and
                        mathematical techniques on collected data in order to detect underlying patterns as well as make
                        predictions.
                    </p>
                        <div className={summary? "noneActive": "none"} >
                            <h3>Benefits of Data Analytics</h3>
                            <p>The domain of Data Analytics has been embraced by many industries for the outstanding benefits it
                                offers. Data Analytics is a boon to modern-day businesses. Data Analytics helps businesses in making
                                smarter decisions. Data Analytics improves efficiency and controls risks. Data Analytics also
                                results in cost cuttings.</p>
                            <h3>Payscale of Data Analytics</h3>
                            <p>The domain of Data Analytics is observed to offer one of the highest-paid job roles in the country.
                                Recent industry studies have revealed that median CTC for Data Analytics professionals in India
                                stands at Rs. 12 lakh/annum.</p>
                            <h3>Job Positions of Data Analytics</h3>
                            <p>There is a wide range of job roles offered in this domain. Professionals are seeking data analytics
                                training to fit into the below set of job roles.</p>
                            <ul>
                                <h3>The following are the major responsibilities of a data analyst.</h3>
                                <li>Data Architect</li>
                                <li>Applications Architect</li>
                                <li>Infrastructure Architect</li>
                                <li>Enterprise Architect</li>
                                <li>Data Scientist</li>
                                <li>Data Analyst</li>
                                <li>Data Engineer</li>
                                <li>Statistician</li>
                            </ul>
                        </div>
                        <button id="visible" onClick={ ()=>{setSummary(!summary)}}>{summary? "Read Less":"Read more"}</button>
                    </div>
            </div>
            )
}
