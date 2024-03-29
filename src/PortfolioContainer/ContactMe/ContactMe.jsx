import React, {useState, useRef} from 'react';
import './ContactMe.css';
import mail from '../../assets/ContactMe/mail.jpeg';
import emailjs from '@emailjs/browser';


const Result= () => {
  return (
    <p>Your Message has been Sent Successfully.</p>
  )
}

function ContactMe() {
  const form = useRef();
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7ry0p95', 'template_1fn6cjq', form.current, 'mVIMJ2NC5zlWP8NF3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);
  };

  setTimeout(() => {
    showResult(false)
  },5000)



  return (
    <div className="main-container fade-in"  id="ContactMe" style={{opacity:"5", transform: "translateY(1px)"}}>
      <div className="heading-container">
        <div className="screen-heading">
          <span>Contact Me</span>
        </div>
        <div className="screen-sub-heading">
          <span>Lets Keep In Touch</span>
        </div>
        <div className="heading-seperator">
          <div className="seperator-line"></div>
          <div className="seperator-blob">
            <div></div>
          </div>
        </div>
      </div>
      <div className="central-form" id="ContactMe1">
        <div className="col">
          <h2 className="title">
            <p className="styles_typicalWrapper__1_Uvh">Get In Touch 📧</p> 
          </h2>{" "}
          
          <div className="col-icon">
          <a href="https://github.com/Prasanth138" target="_blank"><i className="fa fa-github fa-2x"></i></a>
          <a href="https://www.linkedin.com/in/prasanth-a-41baaba2/" target="_blank"><i className="fa fa-linkedin fa-2x"></i></a>
          <a id="colz-resume" href="https://drive.google.com/file/d/1TdNAWz6A6418TdrAQDul0ysUAQwlkqYw/view?usp=share_link" target="_blank">Resume</a>
          </div>
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={mail} alt="image not found" />
          </div>
        </div>
        <div className="back-form">
          {/* <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={mail} alt="image not found" />
          </div> */}
          <form ref={form} onSubmit={sendEmail} >
            <p></p>
            <label >Name</label>
            <input type="text" name="from_name" required />
            <label >Email</label>
            <input type="email" name="email" required />
            <label>Message</label>
            <textarea name="message" required />
            <div className="send-btn px-3">
              <button  type="submit" >
                Send <i className="fa fa-paper-plane"></i>
              </button>
              <div className="row">{result ? <Result/> : null}</div>
            </div>
          </form>
        </div>
      </div>
      <div className="scroll-container">
        <button className="btn-scroll" href="#ContactMe">
          {" "}
          <a href="#Home"><i className="fa fa-arrow-up"></i></a>
        </button>
      </div>
    </div>
  );
}

export default ContactMe