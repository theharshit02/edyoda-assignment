import React, { useState } from 'react'
import styles from './Module.module.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useNavigate } from 'react-router-dom';
import TopicContent from '../TopicContent/TopicContent';
import QuizContent from '../QuizContent/QuizContent';
import Assignment from '../Assignment/Assignment';

const Module = () => {
    const [status, setstatus] = useState(false)
    const [active, setactive] = useState("topic")
    const navigate = useNavigate()
    return (
      <div className={styles.module}>
          <header className={styles.header}>
              <a href="/"><img className={styles.logo} src="./Icons/edyoda_transparent_logo.png" alt=""/></a>
              <p>Hi Test Learner! <img src="" alt=""/></p>
          </header>
          <div className={styles.programSelect}>
              <p onClick={()=>setstatus(!status)} className={styles.programCode}>DS031221 {status?<ArrowDropUpIcon/>:<ArrowDropDownIcon/>}</p>
              <p>Data Scientist Program</p>
          </div>
          <div style={{visibility: status?"visible":"hidden"}} className={styles.programList}>
              <p>Select Program</p>
              <div className={styles.codes}>
                  <p>ECRD</p>
                  <p>FSR222222</p>
                  <p>DS261121</p>
                  <p style={{color: "black", backgroundColor: "white"}}>DS031221</p>
              </div>
          </div>

          <div className={styles.content}>
            <div className={styles.sidebar}>
                <div onClick={()=>{navigate('/')}}>
                    <img src="./Icons/home.png" alt=""/>  
                </div>
                <div onClick={()=>{navigate('/module')}} style={{background: "white"}}>
                    <img src="./Icons/book.png" alt=""/>  
                </div>
                <div onClick={()=>{navigate('/instructor')}}>
                    <img src="./Icons/person.png" alt=""/>  
                </div>
            </div>
            <div className={styles.midBar}>
                <div style={{background: active==="topic"?"lightgray":""}} onClick={()=>setactive("topic")} className={styles.divisions}>
                    <img src={active==="topic"?"./Icons/activeTopic.svg":"./Icons/Topic.svg"} alt=""/>
                    <p>Python Loops</p>
                </div>
                <div style={{background: active==="quiz"?"lightgray":""}} onClick={()=>setactive("quiz")} className={styles.divisions}>
                    <img src={active==="quiz"?"./Icons/activeModuleQuiz.svg":"./Icons/moduleQuiz.svg"} alt=""/>
                    <p>Quiz-1: Data Types</p>
                </div>
                <div style={{background: active==="assignment"?"lightgray":""}} onClick={()=>setactive("assignment")} className={styles.divisions}>
                    <img src={active==="assignment"?"./Icons/activeAssignment.svg":"./Icons/assignment.svg"} alt=""/>
                    <p>Assignment-1: Operators | Loops</p>
                </div>
            </div>
            <div className={styles.mainbar}>
                {active==="topic"?<TopicContent/>:active==="quiz"?<QuizContent/>:<Assignment/>}
            </div>
          </div>
         
      </div>
  )
}

export default Module
