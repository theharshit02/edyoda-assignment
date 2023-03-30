import React, { useState } from 'react'
import styles from './Instructor.module.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useNavigate } from 'react-router-dom';

const Instructor = () => {
  const [status, setstatus] = useState(false)
  const navigate = useNavigate()
  return (
    <div className={styles.instructor}>
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
        <div className={styles.sidebar}>
            <div onClick={()=>{navigate('/')}}>
              <img src="./Icons/home.png" alt=""/>  
            </div>
            <div onClick={()=>{navigate('/module')}}>
              <img src="./Icons/book.png" alt=""/>  
            </div>
            <div onClick={()=>{navigate('/instructor')}} style={{background: "white"}}>
              <img src="./Icons/person.png" alt=""/>  
            </div>
        </div>
    </div>
  )
}

export default Instructor
