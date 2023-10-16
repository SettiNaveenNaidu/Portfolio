import styles from "./styles.module.css";
import { getImageUrl } from "../../utils";
import { SocialIcon } from 'react-social-icons'


const Footer =()=>{
    return(
        <div className={styles.footer_container}>
            <ul className={styles.links}>
                <li className={styles.link}>
                <SocialIcon url="www.email.com"  />
                <a href="mailto:naveennaidusetti@gmail.com" >naveennaidusetti@gmail.com</a>
                </li>
                <li className={styles.link}>
                <SocialIcon url="www.linkedin.com" />
                <a href="https://www.linkedin.com/in/setti-naveen-naidu-31962a215">LinkedIn</a>
                </li>
                <li className={styles.link}>
                <SocialIcon url="www.github.com" />
                <a href="https://github.com/SettiNaveenNaidu">Github</a>
                </li>
            </ul>

        </div>
    )
}
export default Footer