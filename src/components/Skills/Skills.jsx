import React,{useContext} from 'react'
import './Skills.css'
import Html from '../../img/html5.png'
import SprintBoot from '../../img/springboot.png'
import Javascript from '../../img/javascript.png'
import Angular from '../../img/angular.png'
import Java from '../../img/java.png'
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    Aliquid vel, facilis odio, doloribus explicabo, quidem in 
                    <br />
                    Aliquid vel, facilis odio, doloribus explicabo, quidem in 
                    <br />
                </span>
                <button className="button s-button">Hire Me</button>
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