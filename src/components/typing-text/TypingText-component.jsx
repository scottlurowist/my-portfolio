////////////////////////////////////////////////////////////////////////////////
//
// TypingText.jsx
//
// This component renders text as if it were being typed in real time. It takes
// an input string and renders it at a chose speed as if it were being typed.
//
////////////////////////////////////////////////////////////////////////////////


import React, { Fragment } from 'react';




// This component renders text as if it were being typed in real time. It takes
// an input string and renders it at a chose speed as if it were being typed.
//
class TypingText extends React.Component {

    constructor(props) {
        super(props);

        this.textToRender = this.props.textToRender;
        this.renderSpeed = this.props.renderSpeed;
        this.finishedCallback = this.props.finishedCallback;
            
        this.state = {
            renderedText: ''
        };
    };


    typeText = () => {
        const textArray = this.textToRender.split('');

        setInterval(() => {
            this.setState({renderedText: this.state.renderedText + textArray.splice(0, 1)});

            if (textArray.length === 0) {
                this.finishedCallback();
            }
            
        }, this.renderSpeed);    
    };
    
    
    componentDidMount() {
        this.typeText();
    }


    render() {
        return (
          <Fragment>{this.state.renderedText.toString()}</Fragment>  
        );
    };
};


export default TypingText;