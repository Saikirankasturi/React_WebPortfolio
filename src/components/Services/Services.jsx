import React, { useContext } from 'react'
import './Services.css'
import Card from '../Card/Card'
import glasses from '../../img/glasses.png'
import Resume from './Resume.pdf'
import { motion } from "framer-motion";
import { themeContext } from "../../Context"

const Services = () => {

    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    // transition
    const transition = {
        duration: 1,
        type: "spring",
    };

    return (
        <div className="services" id='services'>
            {/* left side */}
            <div className="awesome">
                <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
                <span>services</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    Aliquid vel, facilis odio, doloribus explicabo, quidem in atque numquam
                    <br />
                </span>
                <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/* right side */}
            <div className="cards">
                <motion.div
                    //    initial={{ top: "5.5rem", left: "4rem" }}
                    //    whileInView={{ left: "2rem", top:"1rem" }}
                    //    transition={transition}
                    initial={{ left: "14rem" }}
                    whileInView={{ left: "2rem" }}
                    transition={transition}
                >
                    <Card
                        emoji={glasses}
                        heading={'Design'}
                        detail={"Figma, Sketch, Photoshop"}
                    />
                </motion.div>
                {/* second card */}
                {/* <div style={{ top: '12rem', left: '-4rem' }}>
                    <Card
                        emoji={glasses}
                        heading={'Developer'}
                        detail={"Figma, Sketch, Photoshop"}
                    />
                </div> */}
                <div className=" blur s-blur2" style={{ background: 'var(--purple)' }}></div>
            </div>

        </div>
    )
}

export default Services