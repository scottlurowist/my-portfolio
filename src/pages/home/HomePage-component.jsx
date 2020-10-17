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

        };

        this.textToRender = 
            "Hello. My name is Scott Lurowist and I recently reimagined my " +
            "career as a fullstack software developer."
    }

    typeText = () => {
        const textArray = this.textToRender.split('');

        setInterval(() => {
            this.setState({renderedText: this.state.renderedText + textArray.splice(0, 1)});
        }, 100);    
    };


    render() {
        
        return (
            <div className="homepage-container">
                <div>
                    <h3>
                        <TypingText textToRender={this.textToRender}
                                    renderSpeed={40} />
                    </h3>   
                </div>
             
            </div>
        );
    }
}



export default HomePage;