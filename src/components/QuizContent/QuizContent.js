import React from 'react'
import styles from './QuizContent.module.css'

const QuizContent = () => {
  return (
    <div className={styles.quizContent}>
       <h1>Quiz-1: Data Types</h1>
       <p style={{margin: "0px", color: "gray", fontSize: "14px"}}>16 December 2021, Thursday</p>
       <h3>Quiz Details</h3>
       <div className={styles.quizCard}>
            <div className={styles.score}>
                <div className={styles.scoreContent}>
                    <p>10</p>
                    <p>Questions</p>
                </div>
                <div className={styles.scoreContent}>
                    <p>-</p>
                    <p>Duration</p>
                </div>
                <div className={styles.scoreContent}>
                    <p>125</p>
                    <p>Total Score</p>
                </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.time}>
                <div className={styles.start}>
                    <p>Start:</p>
                    <p><img src="./Icons/calendar.svg" alt=""/>&nbsp; 16 Dec 2021</p>
                    <p><img src="./Icons/clock-blue.svg" alt=""/>&nbsp;&nbsp;07:30 PM</p>
                </div>
                <div className={styles.start}>
                    <p>Due:</p>
                    <p><img src="./Icons/calendar.svg" alt=""/>&nbsp; 19 Dec 2021</p>
                    <p><img src="./Icons/clock-blue.svg" alt=""/>&nbsp;&nbsp;11:59 PM</p>
                </div>
            </div>
       </div>
    </div>
  )
}

export default QuizContent
