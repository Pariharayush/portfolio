import React from 'react';
import './contact.css';
// import Niet from '../../assets/NIET.png';
// import Ddusdv from '../../assets/Ddusdv.png';
import Linkedin from '../../assets/linkedin.png';
import Github from '../../assets/github.png';
import Twitter from '../../assets/twitter.png';
import Leetcode from '../../assets/LeetCode.png';
// import emailjs from '@email.js/browser';
import {useForm, SubmitHandler} from "react-hook-form";



const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (formData) => { window.location.href = `mailto:pariharayush22@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})` };
    
    // const form = useRef();
    // const sendEmail = (e) => {
    //     e.preventDefault();
    
    //     emailjs.sendForm('service_oz23y4h', 'template_qpwg1vi', form.current, 'XDEc5rnVCn0ERPS6SvsFd')
    //       .then((result) => {
    //           console.log(result.text);
    //           e.target.reset();
    //           alert('Email Sent !');
    //       }, (error) => {
    //           console.log(error.text);
    //       });
    //   };


  return (
     <div id="Contact Page">
    {/* // //    <div id="clients">
    // //         <h1 className="contactPageTitle">My Alma Mater</h1>
    // //         <p className="clientDesc">
    // //             I have completed my high school with 95% and intermediate with 83.8%.
    // //             Currently I am pursuing B.tech in Computer Science &Enginering.
    // //         </p>
    // //         <div className="clientImgs">
    // //             <img src={Niet} alt="Client" className="clientImg"/>
    // //             <img src={Ddusdv} alt="Client" className="clientImg"/>

    // //         </div>



    //     // </div> */}
        <div id="contact">
            <div className='head'>
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the  form below to discuss any work opportunities.</span>
            </div>
            <form className="contactForm" onSubmit={handleSubmit(onSubmit)}>
                <input {...register('name')} type="text" className="name" placeholder='Your Name' />
                <input {...register('email')} type="email" className="email" placeholder ='Your Email' />
                <input {...register('subject')} placeholder='Subject' className='subject' type='text' />
                <textarea {...register('message')} className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className="submitBtn">Submit</button>
                <div className="links">
                    <a href='https://www.linkedin.com/in/ayush-parihar-4b9969254/' target='_blank'><img src={Linkedin} alt="Linkedin" className="link" /></a>
                    <a href='https://github.com/Pariharayush' target='_blank'><img src={Github} alt="Github" className="link" /></a>
                    <a href='https://twitter.com/AyushParih92842' target='_blank'><img src={Twitter} alt="Twitter" className="link" /></a>
                    <a href='https://leetcode.com/Parihar_22/' target='_blank'><img src={Leetcode} alt="Leetcode" className="link" /></a>
                </div>

            </form>

        </div>
    </div>
    
  )
}

export default Contact
