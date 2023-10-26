import React from 'react'
import Header from '../components/Header/Header'
import SideBar from '../components/SideBar/SideBar'
import SkillTest from '../components/MainContent/SkillTest'

function Home() {
  return (
    <div>
        <Header />
        <div style={{display: 'flex', height: '90vh', width: '100vw'}}>
           <SideBar />
           <SkillTest /> 
        </div>
    </div>
  )
}

export default Home