import React, { useContext } from "react";
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import sai from '../../img/saipic.png';
import crown from '../../img/crown.png';
import thumbup from '../../img/thumbup.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from "../../Context";
import { motion } from 'framer-motion'
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hey, I am</span>
          <span>Saikiran Kasturi</span>
          <span>I just graduated, and I'm excited to start my journey in the tech world. I really enjoy making websites and have learned a lot during my studies.
            I'm a fast learner, and I am ready to work on projects.
            My goal is to use what I've learned to be a great team member and keep growing in the tech field.
          </span>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        <div className="i-icons">
          <a href="https://github.com/Saikirankasturi">
            <img src={Github} alt="GitHub Logo" />
          </a>
          <a href="https://www.linkedin.com/in/saikirankasturi/">
            <img src={LinkedIn} alt="LinkedIn Logo" />
          </a>
          {/* <a href="https://www.instagram.com/saikiran_kasturi/">
            <img src={Instagram} alt="Instagram Logo" />
          </a> */}

        </div>
      </div>

      <div className="i-right">

        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={sai} alt="" />
        <motion.img
          className="image"
          initial={{ left: "-6.96rem"}}
          whileInView={{ left: "-1.5rem" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        <motion.div
          className="floating-div"
          initial={{ top: "0.04rem", left: "0rem" }}
          whileInView={{ left: "17.68rem" }}
          transition={transition}>

          <FloatingDiv image={crown} text1='Web' text2='Developer' />
        </motion.div>

        <motion.div
          initial={{ left: "8rem", top: "18rem" }}
          whileInView={{ left: "-2rem" }}
          transition={transition}>
          <FloatingDiv image={thumbup} text1='Java' text2='Developer' />
        </motion.div>


        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div className="blur" style={{ background: "#C1F5FF", top: "17rem", width: "21rem", height: "11rem", left: "-9rem" }}></div>
      </div>
    </div>
  )
}

export default Intro