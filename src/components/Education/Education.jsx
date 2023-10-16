import React from 'react'

import styles from "./styles.module.css";
import { getImageUrl } from "../../utils";
import { Stepper, Step, StepLabel, Button, Typography } from '@mui/material';
import education from "../../data/education.json";
import { Circle } from '@mui/icons-material';

const Education = () => {
  return (
    <section className={styles.container} id="education">
        <h2 className={styles.title}>Education</h2>
        <div className={styles.education_container} >
           <Stepper orientation="vertical" >
            {
              education.map((item,index)=>(
                <Step>
                  <StepLabel icon={<Circle  className={styles.circle_style} />}>
                    <div className={styles.each_content}>
                    <div>{item.college}</div>
                    <div>{item.course}</div>
                    <div>{item.grade}</div>
                    </div>
                  </StepLabel>
                </Step>
              ))
            }
           </Stepper>
        </div>

    </section>
  )
}

export default Education