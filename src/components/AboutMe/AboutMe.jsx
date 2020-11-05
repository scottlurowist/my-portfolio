////////////////////////////////////////////////////////////////////////////////
//
// AboutMe.jsx
//
// This component renders the About Me content for the portfolio app.
//
////////////////////////////////////////////////////////////////////////////////


import React, { Fragment } from 'react';




const AboutMe = () => {
    return (
        <Fragment>
            <h4>ABOUT ME</h4>
            <hr  />
            <p>
                I started my career as an electrical engineer and an avionics systems specialist
                in the Air National Guard. I soon realized that hardware is the flesh and
                bones of a machine, but software is the personality and soul. So I
                decided to earn a Master's Degree in Computer Science. While in grad school,
                I wanted to be a systems developer, writing low-level code, compilers, and
                operating systems, combining my EE and computer science training.
            </p>
            <p>
                My software career began at IBM writing internal financial apps. A grad school
                instructor recruited me to the IBM Power Parallel lab. I wrote a lot of C, C++,
                Fortran, MPI, and even AIX assembler code for software used by our National
                Laboratories to simulate detonations of our national nuclear arsenal.
            </p>
            <p>
                I reimagined my career a second time when I attended a 3-month Microsoft .NET
                bootcamp. I spent years in that world building WinForms, WPF, and
                ASP.NET apps. But the tech world was changing around me and my company McKesson
                was using a legacy tech stack. My thoughts about life and what I wanted to do
                were also changing.
            </p>  
            <p>
                So, I reimagined my career a third time when I took advantage of the Covid-19 situation
                and attended General Assembly's 3-month virtual fullstack bootcamp, in which we focused
                on the MERN stack and studied a bit of Python.
            </p>  
            <p>
                My most rewarding moment in my career was when I volunteered and worked with Panthera
                to develop a server that listens for "poacher cam" requests and used AWS to send
                poacher images and emails to park rangers in real-time. We caught a lot of poachers and
                saved many big cats around the world!
            </p>
            <p>
                My career aspirations now are to focus on fullstack development and hopefully
                develop software that solves people problems and does something good for humanity.
                But I shall always have a foot in that systems world to assuage the electrical engineer
                in me.  
            </p>      
        </Fragment>
    );
};


export default AboutMe;
