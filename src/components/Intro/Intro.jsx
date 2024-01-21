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
          <span>A passionate Web Developer and Fullstack Developer.</span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a href="https://github.com/Saikirankasturi" target="_blank">
            <img src={Github} alt="GitHub Logo" />
          </a>
          <a href="https://www.linkedin.com/in/saikirankasturi/" target="_blank">
            <img src={LinkedIn} alt="LinkedIn Logo" />
          </a>
          <a href="https://www.instagram.com/saikiran_kasturi/" target="_blank">
            <img src={Instagram} alt="Instagram Logo" />
          </a>

        </div>
      </div>

      <div className="i-right">

        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={sai} alt="" />
        <motion.img
          className="image"
          initial={{ left: "-46%" }}
          whileInView={{ left: "-20%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        <motion.div
          className="floating-div"
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}>

          <FloatingDiv image={crown} text1='Web' text2='Developer' />
        </motion.div>

        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
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