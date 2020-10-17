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
        }, 3000);
    };


    render() {
        
        return (
            <div className="homepage-container">
                <div>
                    <h2>
                        <TypingText textToRender={this.textToRender}
                                    renderSpeed={40}
                                    finishedCallback={this.finishedCallback} />
                    </h2>   
                    <hr hidden={!this.state.introRendered} />
                    <h4 hidden={!this.state.introRendered}>
                        I started my career as an electrical engineer. I soon realized that 
                        hardware is the flesh and bones of a machine, but software is the personality
                        and soul. So I earned a Master Degree in Computer Science. At that time
                        I wanted to be a systems developer, merging my EE and CS personalities.
                    </h4>
                    <h4 hidden={!this.state.introRendered}>
                        I started my career at IBM doing a lot of C, C++, Fortran, MPI, and even AIX assembler.
                    </h4>
                    <h4 hidden={!this.state.introRendered}>
                        I reimagined my career a second time when I attended a 3-month Microsoft .NET
                        bootcamp. And I spent many years in that world. But the tech world was changing
                        around me and so were my thoughts about life itself.
                    </h4>  
                    <h4 hidden={!this.state.introRendered}>
                        I reimagined my career a third time when I took advantage of the Covid-19 situation
                        and attended General Assembly's 3-month fullstack bootcamp, where we focused on the
                        MERN stack. 
                    </h4>  
                    <h4 hidden={!this.state.introRendered}>
                        My career aspirations now are to focus on fullstack development and hopefully
                        develop software that solves people problems and does something good for humanity.
                        But I shall always have a foot in that systems world to assuage the electrical engineer
                        in me.  
                    </h4>                                                         
                </div>
            </div>
        );
    }
}



export default HomePage;