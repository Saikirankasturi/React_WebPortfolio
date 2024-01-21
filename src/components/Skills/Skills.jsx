import React, { useContext } from 'react'
import './Skills.css'
import Html from '../../img/html5.png'
import SprintBoot from '../../img/springboot.png'
import Javascript from '../../img/javascript.png'
import Angular from '../../img/angular.png'
import Java from '../../img/java.png'
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './Resume.pdf'
// import {Link} from 'react-scroll'
const Skills = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="skills">
            <div className="awesome">
                <span style={{ color: darkMode ? "white" : "" }}>My </span>
                <span>Skills Set</span>
                <span>
                    I bring a versatile skill set to the table, specializing in HTML, CSS, 
                    <br /> 
                    and JavaScript for creating dynamic and visually appealing websites.
                    <br />
                    On the server-side, I'm proficient in Java and Spring Boot,
                    <br />
                    enabling me to develop robust and scalable web applications.
                     
                </span>
                <a href={Resume} download>
                    <button className="button s-button">Hire Me</button>
                </a>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>

            {/* right side  */}
            <div className="s-right">
                <motion.div
                    initial={{ rotate: 90 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: "-40px" }}
                    transition={{ duration: 3.5, type: "spring" }}
                    className="s-mainCircle"

                >
                    <div className="s-secCircle">
                        <img src={Html} alt="" />
                    </div>
                    <div className="s-secCircle">
                        <img src={Javascript} alt="" />
                    </div>
                    <div className="s-secCircle">
                        <img src={SprintBoot} alt="" />
                    </div>
                    <div className="s-secCircle">
                        <img src={Angular} alt="" />
                    </div>
                    <div className="s-secCircle">
                        <img src={Java} alt="" />
                    </div>
                    {/* Background Circles  */}

                    <div className="s-backCircle blueCircle"></div>
                    <div className="s-backCircle yellowCircle"></div>
                </motion.div>
            </div>
        </div>
    )
}

export default Skills