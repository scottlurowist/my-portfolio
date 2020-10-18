////////////////////////////////////////////////////////////////////////////////
//
// HomePage.jsx
//
// This component redners the home page for the portfolio app.
//
////////////////////////////////////////////////////////////////////////////////


import React from 'react';

import TypingText from './../../components/typing-text/TypingText-component';

import './Homepage-component.scss';




class HomePage extends React.Component {

    constructor() {
        super();

        this.state = {
            // False until the typing text intro is rendered, and then set
            // to true.
            introRendered: false
        };

        this.textToRender = 
            "Hello. My name is Scott Lurowist and I recently reimagined my " +
            "career as a fullstack software developer."
    }

    finishedCallback = () => {

        setInterval(() => {
            this.setState({introRendered: true});
        }, 2000);
    };


    render() {
        
        return (
            <div className="homepage-container">
                <div>
                    <h2 className='typing-text'>
                        <TypingText textToRender={this.textToRender}
                                    renderSpeed={50}
                                    finishedCallback={this.finishedCallback} />
                    </h2 >
                    <div hidden={!this.state.introRendered}>
                        <hr  />
                        <h4>
                            I started my career as an electrical engineer and an avionics specialist
                            in the Air National Guard. I soon realized that hardware is the flesh and
                            bones of a machine, but software is the personality and soul; that appealed
                            to me. So I earned a Master Degree in Computer Science. At that time I wanted 
                            to be a systems developer, writing low-level code, compilers, and operating
                            systems, EE and CS personalities.
                        </h4>
                        <h4>
                            I started my software career at IBM doing a lot of C, C++, Fortran, MPI, and even 
                            AIX assembler, working in their Power Parallel lab testing software used to test
                            our national nuclear arsenal.
                        </h4>
                        <h4>
                            I reimagined my career a second time when I attended a 3-month Microsoft .NET
                            bootcamp. And I spent many years in that world building WinForms, WPF, and
                            ASP.NET apps. But the tech world was changing around me and my company McKesson
                            was using a legacy tech stack. So were my thoughts about life changing and what
                            I wanted to do.
                        </h4>  
                        <h4>
                            So, I reimagined my career a third time when I took advantage of the Covid-19 situation
                            and attended General Assembly's 3-month fullstack bootcamp, in which we focused on
                            the MERN stack. 
                        </h4>  
                        <h4>
                            My happiest moment in my career was when I volunteered and worked with Panthera
                            to develop a server that listens for "poacher cam" request and used AWS to send
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



export default HomePage;