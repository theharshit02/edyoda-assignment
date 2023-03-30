import React from 'react'
import styles from './TopicContent.module.css'

const TopicContent = () => {
  return (
    <div className={styles.topicContent}>
                    <h1>Python Loops</h1>
                    <p style={{margin: "0px", color: "gray", fontSize: "14px"}}>15 December 2021, Wednesday, 07:30 PM</p>

                    <div className={styles.section}>
                        <div style={{background: "white"}} className={styles.heading}><img src="./Icons/information-circle 1.svg" alt=""/>&nbsp;SESSION PLAN</div>
                        <div className={styles.heading}><img src="./Icons/play-circle.svg" alt=""/>&nbsp;PRE-WATCH VIDEOS</div>
                        <div className={styles.heading}><img src="./Icons/videocam.svg" alt=""/>&nbsp;SESSION RECORDING</div>
                        <div className={styles.heading}><img style={{height: "15px"}} src="./Icons/document.svg" alt=""/>&nbsp;REFERENCES</div>
                    </div>
                    <div className={styles.sectionContent}>
                        <div className={styles.sessionDetail}>
                            <h3 style={{marginTop: "0px"}}>Session Plan</h3>
                            <p style={{color: "#b0b0b0e4"}}>LIVE session is about to start. Please stay tuned.</p>
                            <button className={styles.btn}>JOIN LIVE SESSION</button>
                            <p style={{marginTop: "50px"}}>Sub-Topics</p>
                            <ol>
                                <li>Sorting and Indexing Dataframe</li>
                                <li>Filtering Dataframe</li>
                                <li>Usage of loc and iloc functions</li>
                            </ol>
                        </div>
                    </div>
                </div>
  )
}

export default TopicContent
