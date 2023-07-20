import React from "react";
import "./About.css";
import keyboard from "./keyboard_landing.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="About">
      <div className="text">
        <div className="maintext">
        Welcome to Typing Thunder <br/> Test Your Typing Skills!
        </div>
        <div className="smalltext">
        Typing Thunder is here to challenge your speed, accuracy, and dexterity on the keyboard! Whether you're a seasoned typist or just starting, our engaging typing game will keep you entertained and help you improve your typing prowess.
        </div>
        <div className="button">
        <Link to="/solo">
            <button type="submit" id="About-button"> 
           Start Solo Game
            </button>
            </Link>
        </div>
      </div>

      <div className="img">
        <img src={keyboard} alt="" />
      </div>
    </div>
  );
};

export default About;
