import React from 'react'

export default function DelOutComes() {
  return (
    <div className="delOutcomes">
        <h2>A program that delivers career outcomes</h2>
        <h3>48% average salary hike within 6 months of graduation from the program</h3>
        <div className="outcomes">
            <div className="outcome">
                <img src="./img/groups.jpg" alt=""/>
                <div className="outcomePara">
                    <div className="para">Exclusive recruitment drives</div>
                    <div className="background">
                        <img src="./img/award.svg" alt=""/>
                    </div>
                </div>
            </div>
            <div className="outcome">
                <img src="./img/group_a.jpg" alt=""/>
                <div className="outcomePara">
                    <div className="para">Career mentorship</div>
                    <div className="background bg-color_a">
                        <img src="./img/ai.svg" alt=""/>
                    </div>
                </div>
            </div>
            <div className="outcome">
                <img src="./img/saminar.jpg" alt=""/>
                <div className="outcomePara">
                    <div className="para">Access to curated jobs</div>
                    <div className="background bg-color_b">
                        <img src="./img/bag_a.svg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
