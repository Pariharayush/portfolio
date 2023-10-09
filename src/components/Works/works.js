import React from 'react';
import './works.css';
import img1 from '../../assets/project.PNG'
import img2 from '../../assets/electricicty.PNG'


const Works = () => {
  return (
    <section id='works'>
        <h1 className="worksTitle">Projects</h1>
        <div className='projects'>
          <div className='project pro1'>
            <a href='https://github.com/Pariharayush/QR-CODE-GENERATOR' target='_blank'><img src={img1} /></a>
            <p>QR Code Generator</p>
          </div>
          <div className='project pro2'>
            <img src={img2} />
            <p>Electricity Management System</p>
          </div>
        </div>
        
    </section>
  );
}

export default Works;
