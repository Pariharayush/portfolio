import React from 'react';
import './intro.css';
import bg from '../../assets/Ayush.png.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello</span>
            <span className="introText">I'm <span className="introName">Ayush Parihar</span><br/>B.TECH 4th YEAR STUDENT</span>
            <p className="introPara">I am very good at learning new technologies to work on.<br/> I have good experience in data structures and algorithms. .</p>
            <Link><button className="btn"><img src={btnImg} alt="Hire" className='btnImg' />Hire Me</button></Link>

        </div>
        <img src={bg} alt="Profile" className="bg"/>
    </section>
  )
}

export default Intro;
