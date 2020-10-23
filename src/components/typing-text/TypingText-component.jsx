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

        this.textToRender = props.textToRender;
        this.renderSpeed = props.renderSpeed;
        this.finishedCallback = props.finishedCallback;
            
        this.state = {
            renderedText: '',
            suppressTyping: props.suppressTyping
        };
    };


    typeText = () => {
        // This suppresses the typing of the text if the parent doesn't want it.
        if (this.state.suppressTyping) {
            this.setState({ renderedText: this.props.textToRender})
            this.finishedCallback();
            
            return;
        } 

        const textArray = this.textToRender.split('');

        setInterval(() => {
            // This is not the right way to do it. I should be using:
            // this.setState((prevState) => {...}) but it does not work.
            // It scrambles the text that it renders. Perhaps because the 
            // render speed is so quick? Regardless, this works.
            this.setState({renderedText: this.state.renderedText + textArray.splice(0, 1)});

            // Invoke the callbaclk to let the parent component know that the text
            // rendering has completed.
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
          <Fragment>{ this.state.renderedText.toString() }</Fragment>  
        );
    };
};


export default TypingText;