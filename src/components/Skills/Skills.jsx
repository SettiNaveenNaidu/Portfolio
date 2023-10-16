import styles from "./styles.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";


const Skills=()=>{
    return(
      <section className={styles.container} id="skill">
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.content}>
          <div className={styles.skills}>
            {skills.map((skill, id) => {
              return (
                <div key={id} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <p className={styles.skills_heading}>{skill.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    )

}

export default Skills