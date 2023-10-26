import React from 'react'
import ProgressBar from '../ProgressBar/ProgressBar';
import './SyllabusAnalysis.css'

function SyllabusAnalysis() {
    return (
        <div className='analysisContainer'>
            <h1>Syllabus wise Analysis</h1>
            <div className="analysis">
                <h2>HTML Tools, Forms, History</h2>
                <div className="proBar">
                    <ProgressBar duration={80} bgColor='#438AF6' barColor='#eaeef5' />
                    <h3 style={{color: '#438AF6'}}>80%</h3>
                </div>
            </div>
            <div className="analysis">
            <h2>Tags & References in HTML</h2>
                <div className="proBar">
                    <ProgressBar duration={60} bgColor='#FF9142' barColor='#f4efec' />
                    <h3 style={{color: '#FF9142'}}>60%</h3>
                </div>
            </div>
            <div className="analysis">
            <h2>Tables & CSS Basics</h2>
                <div className="proBar">
                    <ProgressBar duration={24} bgColor='#FB5E5E' barColor='#f4efec' />
                    <h3 style={{color: '#FB5E5E'}}>24%</h3>
                </div>
            </div>
            <div className="analysis">
            <h2>Tables & CSS Basics</h2>
                <div className="proBar">
                    <ProgressBar duration={96} bgColor='#2EC971' barColor='#edf2ef' />
                    <h3 style={{color: '#2EC971'}}>96%</h3>
                </div>
            </div>
        </div>
    )
}

export default SyllabusAnalysis