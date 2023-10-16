import styles from "./styles.module.css";
import { getImageUrl } from "../../utils";

const About =()=>{
    return(
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About Me</h2>
            <div className={styles.content}>
            <div>
              <img
               src={getImageUrl("about/naveen_photo.png")}
               alt="Hero image of me"
               className={styles.profile_image}
            />
            </div>
            <div className={styles.about_content}>
                I'm a passionate techie with a Bachelor's in Mechanical 
                Engineering and Minors in Information Technology from the National 
                Institute of Technology Karnataka. Experience at Cogoport fine-tuned my tech skills.
                I'm adept in ReactJs, NextJs, FastApi, and PeeWee ORM. I thrive on problem-solving and innovation, always seeking opportunities
                to push boundaries. I'm excited to continue my journey, taking on new challenges and contributing my skills to meaningful projects. 
                Let's connect and explore how we can make a difference together.
            </div>
            </div>
      </section>
    )

}
export default About