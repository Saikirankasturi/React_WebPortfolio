import React, { useContext } from 'react'
import './Projects.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Examportal from '../../img/examportal.png'
import CurrencyConverter from '../../img/currency_converter.png'
import { themeContext } from "../../Context";
const Projects = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="projects">
        {/* heading  */}
        <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
        <span>Portfolio</span>

        {/* slider  */}
        <Swiper 
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="projects-slider"
        >
            <SwiperSlide>
                <img src={Examportal} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={CurrencyConverter} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={CurrencyConverter} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={CurrencyConverter} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Projects