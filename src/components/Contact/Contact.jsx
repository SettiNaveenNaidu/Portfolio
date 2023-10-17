import styles from "./styles.module.css";
import React, { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getImageUrl } from "../../utils";
import { SocialIcon } from 'react-social-icons'
import emailjs from '@emailjs/browser';

const Contact=()=>{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault(); 
        emailjs.sendForm('service_sye043f', 'template_pbrffw9', form.current, 'T45c7soA5OF6pkJ5T')
          .then((result) => {
              console.log(result.text);
              toast.success('Successfully sent message !', {
                position: toast.POSITION.TOP_RIGHT})
          }, (error) => {
              console.log(error.text);
          });
      };
    
    return(
        <section className={styles.container} id="contact">
            <h2 className={styles.title}>Contact Me</h2>
        <div className={styles.content}> 
        <div className={styles.card_boxes} >
            <div className={styles.mail_card}>
            <SocialIcon url="www.email.com"  />
                <p>Email :</p>
                <p> naveennaidusetti@gmail.com</p>
            </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className={styles.contact_form}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" className={styles.submit_button}/>
        </form>
        </div>  
        </section>
    )

}
export default Contact