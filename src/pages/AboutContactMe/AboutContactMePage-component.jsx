////////////////////////////////////////////////////////////////////////////////
//
// AboutContactMePage-component.jsx
//
// This component renders the About / Contact me page for the portfolio app.
//
////////////////////////////////////////////////////////////////////////////////


import React from 'react';

import './AboutContactMePage-component.scss';




class AboutContactMePage extends React.Component {

    constructor() {
        super();
    }

    render() {
        
        return (
            <div className="about-contact-me-container">
                <div>
                    <div className='scott-story'>
                        <h2>About Me</h2>
                        <hr  />
                        <h4>
                            I started my career as an electrical engineer and an avionics systems specialist
                            in the Air National Guard. I soon realized that hardware is the flesh and
                            bones of a machine, but software is the personality and soul; that appealed
                            to me. So I earned a Master's Degree in Computer Science. At that time I wanted 
                            to be a systems developer, writing low-level code, compilers, and operating
                            systems, combining my EE and comp sci personalities.
                        </h4>
                        <h4>
                            I started my software career at IBM doing business apps, then a grad school
                            instructor recruited me to the Power Parallel lab. I wrote a lot of C, C++,
                            Fortran, MPI, and even AIX assembler code for software used by our National
                            Laboratories to simulate detonations of our national nuclear arsenal.
                        </h4>
                        <h4>
                            I reimagined my career a second time when I attended a 3-month Microsoft .NET
                            bootcamp. And I spent years in that world building WinForms, WPF, and
                            ASP.NET apps. But the tech world was changing around me and my company McKesson
                            was using a legacy tech stack. And so were my thoughts about life changing and what
                            I wanted to do.
                        </h4>  
                        <h4>
                            So, I reimagined my career a third time when I took advantage of the Covid-19 situation
                            and attended General Assembly's 3-month virtual fullstack bootcamp, in which we focused on
                            the MERN stack as well as Python.
                        </h4>  
                        <h4>
                            My happiest moment in my career was when I volunteered and worked with Panthera
                            to develop a server that listens for "poacher cam" requests and used AWS to send
                            poacher images and emails to park rangers in real-time. We caught a lot of poachers!
                        </h4>
                        <h4>
                            My career aspirations now are to focus on fullstack development and hopefully
                            develop software that solves people problems and does something good for humanity.
                            But I shall always have a foot in that systems world to assuage the electrical engineer
                            in me.  
                        </h4>                              
                    </div>   
                </div>
            </div>
        );
    }
}


export default AboutContactMePage;
