import React from 'react';
import './skills.css';
import UIDesign from '../../assets/javapost.png';
import WebDesign from  '../../assets/python.png';
import AppDesign from  '../../assets/sql.png';
import Git from '../../assets/git.png';
import Weact from '../../assets/react.png';
import Html from '../../assets/css.png';

const Skills = () => {
  return (
   <section id='skills'>
     <span className="SkillTitle">What I do</span>
     <span className="skillDesc">I am a skilled and passionate web designer with knowledge of multiple technologies in this changing world</span>
     <div className="skillBars">
        <div className="skillBar">
            <img src={UIDesign} alt="UIDesign"  className="skillBarImg"/>
            <div className="skillBarText">
                <h2>JAVA</h2>
                <p>JAVA DSA & CONCEPTS OF OOPS</p>
                
            </div>
        </div>
        <div className="skillBar">
            <img src={WebDesign} alt="WebDesign"  className="skillBarImg"/>
            <div className="skillBarText">
                <h2>PYTHON</h2>
                <p>PROBELM SOLVING APPROACH WITH KNOWLEDGE OF DJANGO</p>
                
            </div>
        </div>
        <div className="skillBar">
            <img src={AppDesign} alt="AppDesign"  className="skillBarImg"/>
            <div className="skillBarText">
                <h2>SQL</h2>
                <p>INTERMEDIATE KNOWLEDGE OF INTERACTING WITH RDBMS</p>

                
            </div>

        </div>
        
        
        <div className="skillBar">
            <img src={Weact} alt="WebDesign"  className="skillBarImg"/>
            <div className="skillBarText">
                <h2>React</h2>
                <p>In designing frontend of web applications</p>
                
            </div>
        </div>

        <div className="skillBar">
            <img src={Git} alt="WebDesign"  className="skillBarImg"/>
            <div className="skillBarText">
                <h2>GIT</h2>
                <p>Working on specific parts of project</p>
                
            </div>
        </div>

        <div className="skillBar">
            <img src={Html} alt="WebDesign"  className="skillBarImg"/>
            <div className="skillBarText">
                <h2>HTML&CSS</h2>
                <p>Basic designing of Website</p>
                
            </div>
        </div>



     </div>
   </section>
  );
}

export default Skills;
