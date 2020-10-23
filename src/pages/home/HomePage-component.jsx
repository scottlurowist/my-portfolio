////////////////////////////////////////////////////////////////////////////////
//
// HomePage.jsx
//
// This component redners the home page for the portfolio app.
//
////////////////////////////////////////////////////////////////////////////////


import React from 'react';

import TypingText from './../../components/typing-text/TypingText-component';
import ScottImage from './Scott_02.jpg';

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
            "Hello. My name is Scott Lurowist and I am a fullstack developer" +
            " on the MERN stack.";
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
                    <hr />
                </div>
                <div hidden={!this.state.introRendered} className='scott-image-container'>
                    <img src={ScottImage} alt='Scott Lurowist'
                         className='scott-image' />
                </div>                   
            </div>
        );
    }
}



export default HomePage;