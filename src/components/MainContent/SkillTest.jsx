import React, { useState } from 'react';
import './SkillTest.css';
import htmlImage from '../../assets/htmlImage.png'
import Graph from '../Graph/Graph';
import SyllabusAnalysis from '../SyllabusAnalysis/SyllabusAnalysis';
import graphImage from '../../assets/graph.png';
import QuestionAnalysis from '../QuestionAnalysis/QuestionAnalysis';
import PopupModel from '../Popup/Popup';

function SkillTest() {
    const [data, setData] = useState({
        rank: null,
        percentile: null,
        currentScore: null
      })

    const fetchData = (data) =>{
        setData(data);
        console.log(data);
    }

    return (
        <div className='skillTestContainer'>
            <section className='left'>
                <h3>Skill Test</h3>
                <div className='updateBox'>
                    <div className="textWithImage">
                        <img src={htmlImage} alt="HTML" />
                        <div className="text">
                            <h1>Hypertext Markup Language</h1>
                            <h3>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</h3>
                        </div>
                    </div>
                    {/* <button>Update</button> */}
                    <PopupModel setInfo={fetchData} />
                </div>
                <div className='quickStatistics'>
                    <h1>Quick Statistics</h1>
                    <div className="stats">
                        <div className="stat">
                            <h1>🏆</h1>
                            <div className="right">
                                <div className="count">{data.rank || '12,890'}</div>
                                <div className="text">YOUR SCORE</div>
                            </div>
                        </div>
                        <div className="separator"></div>
                        <div className="stat">
                            <h1>📋</h1>
                            <div className="right">
                                <div className="count">{data.percentile || '37%'}</div>
                                <div className="text">PERCENTILE</div>
                            </div>
                        </div>
                        <div className="separator"></div>
                        <div className="stat">
                            <h1>✅</h1>
                            <div className="right">
                                <div className="count">{data.currentScore || '07'} / 15</div>
                                <div className="text">CORRECT ANSWERS</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='compGraph'>
                    <div className="info">
                        <div className="text">
                            <h1>Comparison Graph</h1>
                            <h2><span>You scored {data.percentile || `37`}% percentile</span> which is lower than the average percentile 72% of all the engineers who took this assessment</h2>
                        </div>
                        <img src={graphImage} alt="GraphImage" />
                    </div>
                    <Graph count={data.percentile || 37} />
                </div>
            </section>
            <section className='right'>
                <SyllabusAnalysis />
                <QuestionAnalysis score={data.currentScore || 7}/>
            </section>
        </div>
    )
}

export default SkillTest