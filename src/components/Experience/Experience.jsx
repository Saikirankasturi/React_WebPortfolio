import React, { useContext } from 'react'
import './Experience.css'
import { themeContext } from "../../Context";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience">
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? 'var(--primarylight)' : '' }} >1+</div>
        <span style={{ color: darkMode ? 'white' : '' }}>completed </span>
        <span>Frontend Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? 'var(--primarylight)' : '' }} >2+</div>
        <span style={{ color: darkMode ? 'white' : '' }}>completed </span>
        <span>Backend Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? 'var(--primarylight)' : '' }}>0+</div>
        <span style={{ color: darkMode ? 'white' : '' }}>years </span>
        <span>Experience</span>
      </div>


    </div>
  )
}

export default Experience