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
        this.typingTextTimer = null;
        this.mounted = false;
        this.isTyping = false;
            
        this.state = {
            renderedText: ''
        };
    };


    typeText = () => {
        // This prevents recursive triggers that start recursive typing.
        if (this.isTyping) return;

        this.isTyping = true;

        // The typing begins.
        const textArray = this.textToRender.split('');

        this.typingTextTimer = setInterval(() => {
            const startIndex = 0;
            const stopIndex = 1;

            // This is not the right way to do it. I should be using:
            // this.setState((prevState) => {...}) but it does not work.
            // It scrambles the text that it renders. Perhaps because the 
            // render speed is so quick? Regardless, this works.
            this.setState({renderedText: this.state.renderedText +
                textArray.splice(startIndex, stopIndex)});

            // Invoke the callback to let the parent component know that the text
            // rendering has completed. Also "cancel" the timer.
            if (textArray.length === 0 && this.finishedCallback) {
                this.isTyping = true;
                clearInterval(this.typingTextTimer);
                this.finishedCallback();
            }
            
        }, this.renderSpeed);    
    };

        
    componentDidMount() {
        this.mounted = true;
    };


    componentWillUnmount() {
        clearInterval(this.typingTextTimer);
        this.typingTextTimer = null;
        this.finishedCallback = null;
    };


    render() {
        // This.props.startTyping will trigger then render method.
        // this.typText() is what types the typing text. So this is
        // what triggers the typing text. And the typing text will 
        // cause the Fragment below to render.
        if (this.props.startTyping && !this.isTyping) {
            this.typeText();
        }

        return <Fragment>{ this.state.renderedText.toString() }</Fragment>
    };
};


export default TypingText;