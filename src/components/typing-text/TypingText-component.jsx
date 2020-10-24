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
        //this.areWeMounted = false;
        this.mounted = false;
            
        this.state = {
            renderedText: '',
            suppressTyping: props.suppressTyping
        };
    };


    typeText = () => {
        if (!this.mounted) return; 

        // This suppresses the typing of the text if the parent component
        // doesn't want it. Simply set the rendered text state to the 
        // entire string to be rendered.
        if (this.state.suppressTyping) {
            this.setState({ renderedText: this.props.textToRender})
            //this.finishedCallback();
            
            return;
        } 

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
            // rendering has completed.
            if (textArray.length === 0 && this.finishedCallback) {
                this.finishedCallback();
            }
            
        }, this.renderSpeed);    
    };

        
    componentDidMount() {
        this.mounted = true;
        this.typeText();
    };


    componentWillUnmount() {
        //this.isMounted = false;
        console.log(this.typingTextTimer)
        clearInterval(this.typingTextTimer);
        this.typingTextTimer = null;
        console.log(this.typingTextTimer)
        this.finishedCallback = null;
        //this.textToRender = null;
        console.log('typing unmounting') 
    };


    render() {
        if (this.state.suppressTyping) {
            this.finishedCallback = null;
            console.log('suppress typing')
            return <Fragment>{this.textToRender}</Fragment>;
        }
        else {
            return <Fragment>{ this.state.renderedText.toString() }</Fragment>
        }
    };
};


export default TypingText;