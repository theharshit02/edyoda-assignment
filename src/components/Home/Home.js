import React, { useState } from 'react'
import styles from './Home.module.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [status, setstatus] = useState(false)
    const navigate = useNavigate()
  return (
    <div className={styles.home}>
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
                <div onClick={()=>{navigate('/')}} style={{background: "white"}}>
                    <img src="./Icons/home.png" alt=""/>  
                </div>
                <div onClick={()=>{navigate('/module')}}>
                    <img src="./Icons/book.png" alt=""/>  
                </div>
                <div onClick={()=>{navigate('/instructor')}}>
                    <img src="./Icons/person.png" alt=""/>  
                </div>
            </div> 
            <div className={styles.mainbar}>
                <div className={styles.homeContent}>
                    <div className={styles.topContent}>
                        <h2>Upcoming Certifications</h2>
                        <div className={styles.certCard}>
                            <img src="./Icons/Data-Analysis.png" alt=""/>
                            <div className={styles.details}>
                                <p className={styles.attempt}>CERTIFICATION | ATTEMPT 1</p>
                                <p className={styles.title}>DATA ANALYSIS CERTIFICATION</p>
                                <p className={styles.date}>COMPLETED | 21 MAR 2022</p>
                            </div>
                            <div className={styles.structure}>
                                <p>Exam structure</p>
                                <p className={styles.types}>Round 1 &nbsp; <p style={{background: "#e1dfdf", borderRadius: "10px"}}>MCQS</p> &nbsp; <p style={{background: "#e1dfdf", borderRadius: "10px"}}>CODING</p></p>
                                <p className={styles.types}>Round 2 &nbsp; <p style={{background: "#e1dfdf", borderRadius: "10px"}}>PROJECT</p></p>
                            </div>
                            <button className={styles.btn}>VIEW EXAMS DETAILS</button>
                        </div>
                    </div>

                    <div className={styles.bottomContent}>
                        <h2>Continue Learning</h2>
                        <div className={styles.yourProgress}>
                            <div className={styles.continueLearn}>
                                <div className={styles.divisionOne}>
                                    <div className={styles.name}>
                                        <img src="./Icons/Data Wrangling.png" alt=""/>
                                        <div style={{marginLeft: "30px"}}>
                                            <p>DATA WRANGLING AND VISUALIZATION</p>
                                            <p>Test Instructor</p>  
                                        </div>
                                    </div>
                                    <div className={styles.progress}>
                                        <p>Live Sessions</p>
                                        <p>Assignments</p>
                                        <p>MCQ Quiz</p>
                                    </div>
                                </div>
                                <div className={styles.line}></div>
                                <div className={styles.divisionTwo}>
                                    <p>Today's Plan</p>
                                    <p style={{color: "gray", fontSize: "12px"}}>21 March 2022</p>
                                    <p style={{color: "#64cffd", marginTop: "20px", fontSize: "20px"}}>Data Transformation using Pandas - 3</p>
                                    <div className={styles.feedback}>
                                        <p style={{color: "lightgray", fontSize: "14px"}}>Daily Feedback</p>
                                        <p  style={{color: "#64cffd", fontSize: "14px"}}>opens at 7:30PM</p>
                                    </div>
                                    <button className={styles.btnJoin}>JOIN LIVE SESSION</button>
                                    <p style={{color: "gray", fontSize: "12px"}}>BEGINS AT 7:30 PM</p>
                                </div>
                            </div>

                            <div className={styles.overview}>
                                <p style={{fontSize: "20px", margin: "0px"}}>Progress Overview</p>
                                <div className={styles.percentBar}>
                                    <p>0%</p>
                                    <p>Overall Grade</p>
                                </div>
                                <div className={styles.percentBar}>
                                    <p>0%</p>
                                    <p>Attendance</p>
                                </div>
                                <p style={{color: "#64cffd", fontWeight: "bold", cursor: "pointer"}}>VIEW DETAILED PROGRESS</p>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Home
