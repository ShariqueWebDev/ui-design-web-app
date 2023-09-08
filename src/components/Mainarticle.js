import React from 'react'
import {FaPython, FaTable, FaDatabase, FaSitemap, FaCrop, FaHive } from 'react-icons/fa'

export default function Mainarticle() {
  return (
    <div className="main_articles">
        <div className="logo_section">
            <div className="logos">
                <h2>A program offered by</h2>
                <div className="logo">
                    <img src="./logo/iit_madras.png" alt=""/>
                    <img src="./logo/greatlearning-brand.png" alt=""/>
                </div>
                <div className="info">
                    <div className="infoImg">
                        <p>What you'll learn</p>
                    </div>
                    <div className="uls">
                        <div className="ulTags">
                            <ul>
                                <li><FaPython size="28px" /> Python</li>
                                <li><FaTable size="28px"/> TableAu</li>
                                <li><FaDatabase size="28px"/> Dataminig</li>
                            </ul>
                        </div>
                        <div className="ulTags">
                            <ul>
                                <li><FaSitemap size="28px"/> Sitemaping</li>
                                <li><FaCrop size="28px"/> Designing</li>
                                <li><FaHive size="28px"/> BlockChain</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
