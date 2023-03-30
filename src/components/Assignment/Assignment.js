import React from 'react'
import styles from './Assignment.module.css'

const Assignment = () => {
  return (
    <div className={styles.assignmentContent}>
        <div className={styles.header}>
            <h1>Assignment-1: Operators | Loops</h1>
            <div className={styles.score}>
                <div className={styles.scoreContent}>
                    <p>3</p>
                    <p>Problems</p>
                </div>
                <div className={styles.scoreContent}>
                    <p>100</p>
                    <p>Total Score</p>
                </div>
            </div>
        </div>
       
       <p style={{margin: "0px", color: "gray", fontSize: "14px"}}>20 December 2021, Thursday</p>
       <h3>Assignment Details</h3>
       <div className={styles.assignmentCard}>
            <div className={styles.score}>
                <div className={styles.scoreContent}>
                    <p>3</p>
                    <p>Problems</p>
                </div>
                <div className={styles.scoreContent}>
                    <p>100</p>
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

export default Assignment
