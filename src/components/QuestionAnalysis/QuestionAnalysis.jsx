import React from 'react'
import DoughnutBar from './DoughnutBar/DoughnutBar';
import './QuestionAnalysis.css'

function QuestionAnalysis({score}) {
  return (
    <div className='QContainer'>
        <div className="heading">
            <h1>Question Analysis</h1>
            <h1>{score} / 15</h1>
        </div>
        <div className="para">
        <span>You scored {score} question correct out of 15.</span> However it still needs some improvements
        </div>
        <DoughnutBar score={score} />
        <h1>🎯</h1>
    </div>
  )
}

export default QuestionAnalysis