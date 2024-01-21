import React from "react";
import "./Navbar.css"
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-leftside">
                <div className="n-name">Saikiran</div>
                <Toggle />
            </div>
            <div className="n-rightside">
                <div className="n-list">
                    <ul style={{ listStyleType: 'none' }}>
                        <li>
                            <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="services" spy={true} smooth={true}>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="experience" spy={true} smooth={true}>
                                Experience
                            </Link>

                        </li>
                        <li>
                            <Link to="projects" spy={true} smooth={true}>
                                Projects
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link to="contact" spy={true} smooth={true}>
                    <button className="button n-button">Contact</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
