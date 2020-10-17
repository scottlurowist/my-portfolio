////////////////////////////////////////////////////////////////////////////////
//
// HomePage.jsx
//
// This component redners the home page for the portfolio app.
//
////////////////////////////////////////////////////////////////////////////////


import React from 'react';




class HomePage extends React.Component {

    constructor() {
        super();

        this.textToRender = 
            "Hello. My name is Scott Lurowist and I recently reimagined my career as a fullstack software developer."
        this.state = {
            renderedText: ''
        };
    }

    typeText = () => {
        const textArray = this.textToRender.split('');

        setInterval(() => {
            this.setState({renderedText: this.state.renderedText + textArray.splice(0, 1)});
        }, 100);    
    };

    componentDidMount() {
        this.typeText();
    }

    render() {
        
        return (
            <span>{this.state.renderedText.toString()}</span>
        );
    }
}



export default HomePage;