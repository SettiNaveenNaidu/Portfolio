import styles from "./styles.module.css";
import { getImageUrl } from "../../utils";
import { Document, Page } from 'react-pdf';

const Hero=()=>{
    return(
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi,This is <span className={styles.naveen_text}>Naveen</span></h1>
        <p className={styles.description}>
          I am a Software Development Engineer
        </p>
        <div className={styles.hero_buttons}>
        <a href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>
        <a href="https://drive.google.com/file/d/1436gOC5F-vKcUXOdV82PWJLx4WbC6h8-/view?usp=sharing" className={styles.resumeBtn} target="_blank">
          Resume
        </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/profile_1.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
    )
}

export default Hero