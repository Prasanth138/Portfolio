import React, {useState} from "react";
import "./Resume.css";
import education1 from '../../assets/Resume/education.svg';
import interest1 from '../../assets/Resume/interests.svg';
import pskills1 from '../../assets/Resume/programming-skills.svg';
import projects1 from '../../assets/Resume/projects.svg';
import workhistory1 from '../../assets/Resume/work-history.svg';



export default function Resume() {

    const [isActive, setActive] = useState({
      activeObject: null,
      objects: [
        
        {
          id: 2,
          Name: "Technical Skills",
          src: pskills1,
          href: "#PSkills",
        },
        {
          id: 1,
          Name: "Projects",
          src: projects1,
          href: "#Projects",
        },
        {
          id: 3,
          Name: "Interests",
          src: workhistory1,
          href: "#Interests",
        },
        {
          id: 4,
          Name: "Education",
          src: education1,
          href: "#Education",
        },
        {
          id: 5,
          Name: "Work History",
          src: interest1,
          href: "#WorkHistory",
        },
      ],
    });
    function toggleActive(index){
      setActive({...isActive, activeObject: isActive.objects[index]});

    }
    function toggleActiveStyles(index){
      if(isActive.objects[index] === isActive.activeObject)
      {
        return "bullet selected-bullet";
      }
      else{
        return "bullet";
      }
    }
      

  return (
    <div className="resume-container screen-container fade-in" id="Resume">
      <div className="resume-content">
        <div className="heading-container">
          <div className="screen-heading">
            <span>Resume</span>
          </div>
          <div className="screen-sub-heading">
            <span>My formal Bio Details</span>
          </div>
          <div className="heading-seperator">
            <div className="seperator-line"></div>
            <div className="seperator-blob">
              <div></div>
            </div>
          </div>
        </div>
        <div className="resume-card"> 
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">
                {isActive.objects.map((elements, index)=>(
                  <div key={index} className={toggleActiveStyles(index)} onClick={()=> {toggleActive(index)}}>
                  <img className="bullet-logo" src={elements.src} alt="B" />   
                  <span className="bullet-label"><a href={elements.href}>{" "}{elements.Name}{" "}</a></span>
                </div>
                ))} 
              </div>
            </div>
          </div>
        
        <div className="resume-bullet-details">
          <div className="resume-details-carousal">
          <div className="resume-screen-container programming-skills-container" id="PSkills">
              <div className="skill-parent">
                <div className="heading-bullet"></div>
                <span>JavaScript</span>
                <div className="skill-percentage">
                  <div
                    style={{ width: "85%" }}
                    className="active-percentage-bar"
                  ></div>
                </div>
              </div>
              <div className="skill-parent">
                <div className="heading-bullet"></div>
                <span>React JS</span>
                <div className="skill-percentage">
                  <div
                    style={{ width: "85%" }}
                    className="active-percentage-bar"
                  ></div>
                </div>
              </div>
              <div className="skill-parent">
                <div className="heading-bullet"></div>
                <span>Bootstrap</span>
                <div className="skill-percentage">
                  <div
                    style={{ width: "85%" }}
                    className="active-percentage-bar"
                  ></div>
                </div>
              </div>
              <div className="skill-parent">
                <div className="heading-bullet"></div>
                <span>GitHub</span>
                <div className="skill-percentage">
                  <div
                    style={{ width: "85%" }}
                    className="active-percentage-bar"
                  ></div>
                </div>
              </div>
              <div className="skill-parent">
                <div className="heading-bullet"></div>
                <span>Node JS</span>
                <div className="skill-percentage">
                  <div
                    style={{ width: "89%" }}
                    className="active-percentage-bar"
                  ></div>
                </div>
              </div>
              <div className="skill-parent">
                <div className="heading-bullet"></div>
                <span>Mongo DB</span>
                <div className="skill-percentage">
                  <div
                    style={{ width: "83%" }}
                    className="active-percentage-bar"
                  ></div>
                </div>
              </div>
              <div className="skill-parent">
                <div className="heading-bullet"></div>
                <span>HTML</span>
                <div className="skill-percentage">
                  <div
                    style={{ width: "80%" }}
                    className="active-percentage-bar"
                  ></div>
                </div>
              </div>
              <div className="skill-parent">
                <div className="heading-bullet"></div>
                <span>CSS</span>
                <div className="skill-percentage">
                  <div
                    style={{ width: "80%" }}
                    className="active-percentage-bar"
                  ></div>
                </div>
              </div>
            </div>
            <div className="resume-screen-container" id="Projects">
              <div className="resume-heading">
                <div className="resume-main-heading">
                  <div className="heading-bullet"></div>
                  <span>Hotel Booking App</span>
                  <div className="heading-date">Jan - Feb 2022</div>
                </div>
                <div className="resume-sub-heading">
                  <span>Technologies Used: Mongo DB, Express Js, React JS, Node JS,
                    Bootstrap.</span>
                </div>
                <div className="resume-heading-description">
                  <span>
                  Hotel Booking System is online booking engine that allows guests to make secure online reservations through hotel website and helps hotels to accept bookings and collect payments online.
                  </span>
                </div>
              </div>
              <div className="resume-heading">
                <div className="resume-main-heading">
                  <div className="heading-bullet"></div>
                  <span>Book Shop </span>
                  <div className="heading-date">Mar - Apr 2022</div>
                </div>
                <div className="resume-sub-heading">
                  <span>
                    Technologies Used: Mongo DB, Express Js, React JS, Node JS,
                    Redux, Paypal Payment.
                  </span>
                </div>
                <div className="resume-heading-description">
                  <span>
                  Book shopping App allows users to check for various Books Instruments and can purchase them using Paypal, Debit or Credit Card. The user may browse through these products as per categories
                  </span>
                </div>
              </div>
              <div className="resume-heading">
                <div className="resume-main-heading">
                  <div className="heading-bullet"></div>
                  <span>Chatify App</span>
                  <div className="heading-date">Jun - Jul 2022</div>
                </div>
                <div className="resume-sub-heading">
                  <span>Technologies Used: Mongo DB, Epress Js, React Js, Node JS,
                    Socket.io</span>
                </div>
                <div className="resume-heading-description">
                  <span>
                  Chatify app allows you to communicate with your buddies through chat. It enables you to send and receive messages. Chatting apps make it easier, simpler and faster to connect with everyone and it is also easy to use.
                  </span>
                </div>
              </div>
              <div className="resume-heading">
                <div className="resume-main-heading">
                  <div className="heading-bullet"></div>
                  <span>Quiz App </span>
                  <div className="heading-date">Nov - Dec 2021</div>
                </div>
                <div className="resume-sub-heading">
                  <span>
                    Technologies Used: Mongo DB, Epress Js, React Js, Node JS.
                  </span>
                </div>
                <div className="resume-heading-description">
                  <span>
                  It provides a common platform to connect student and teacher online to take quiz. The User can create Quiz and take quiz and can asses himself/herself
                  </span>
                </div>
              </div>
            </div>
            <div className="resume-screen-container" id="Interests">
              <div className="resume-heading">
                <div className="resume-main-heading">
                  <div className="heading-bullet"></div>
                  <span>Meditation</span>
                  <div></div>
                </div>
                <div className="resume-sub-heading">
                  <span></span>
                </div>
                <div className="resume-heading-description">
                  <span>
                    Apart from being a tech enthusiast and a code writer, i also
                    love to relax and peace out my mind to be refreshed. Meditation is the key to explore myself.
                  </span>
                </div>
              </div>
              <div className="resume-heading">
                <div className="resume-main-heading">
                  <div className="heading-bullet"></div>
                  <span>Music</span>
                  <div></div>
                </div>
                <div className="resume-sub-heading">
                  <span></span>
                </div>
                <div className="resume-heading-description">
                  <span>
                    Listening to soothing music is something i can never
                    compromise with, skimming through Spotify's pop songs charts
                    is at times the best stress reliever that i can get my hands
                    on.
                  </span>
                </div>
              </div>
              <div className="resume-heading">
                <div className="resume-main-heading">
                  <div className="heading-bullet"></div>
                  <span>Competitive Gaming</span>
                  <div></div>
                </div>
                <div className="resume-sub-heading">
                  <span></span>
                </div>
                <div className="resume-heading-description">
                  <span>
                    I like to challenge my reflexes a lot while competing in
                    Badminton games, pushing the rank and having interactive
                    gaming sessions excites me the most.
                  </span>
                </div>
              </div>
            </div>
            <div className="resume-screen-container" id="Education">
              <div className="resume-heading">
                <div className="resume-main-heading">
                  <div className="heading-bullet"></div>
                  <span>Kongu Engineering College, Perundurai</span>
                  <div className="heading-date">2014-2018</div>
                </div>
                <div className="resume-sub-heading">
                  <span>BACHELOR OF ENGINEERING IN CIVIL with a CGPA of 7.36</span>
                </div>
                <div className="resume-heading-description">
                  <span></span>
                </div>
              </div>
              <div className="resume-heading">
                <div className="resume-main-heading">
                  <div className="heading-bullet"></div>
                  <span>Higher Secondary Certificate</span>
                  <div className="heading-date">2012-2014</div>
                </div>  
                <div className="resume-sub-heading">
                  <span>
                  KGMHSS, Vettaiyampalayam with an aggregate of 93.92%
                  </span>
                </div>
                <div className="resume-heading-description">
                  <span></span>
                </div>
              </div>
              <div className="resume-heading">
                <div className="resume-main-heading">
                  <div className="heading-bullet"></div>
                  <span>Secondary School Leaving Certificate </span>
                  <div className="heading-date">2011-2012</div>
                </div>
                <div className="resume-sub-heading">
                  <span>Govt High School, P. Karattupalayam with an aggregate of 86.40%</span>
                </div>
                <div className="resume-heading-description">
                  <span></span>
                </div>
              </div>
            </div> 
            <div className="resume-screen-container" id="WorkHistory">
              <div className="experience-container">
                <div className="resume-heading">
                  <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>Tamilnadu Urban Habitat Development Board</span>
                    <div className="heading-date">2018-Present</div>
                  </div>
                  <div className="resume-sub-heading">
                    <span>TECHNICAL STAFF</span>
                  </div>
                  <div className="resume-heading-description">
                    <span></span>
                  </div>
                </div>
                <div className="experience-description">
                <span className="resume-description-text">
                    Currently working as Technical Staff in Tamilnadu Urban Habitat Development Board.
                  </span>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


