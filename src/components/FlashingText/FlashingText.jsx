////////////////////////////////////////////////////////////////////////////////
//
// FlashingText.jsx
//
// This component renders an array of strings as a words that appear and 
// disappear into the next word at a set interval.
//
////////////////////////////////////////////////////////////////////////////////


import React, { Fragment } from 'react';




// This component renders text as if it were being typed in real time. It takes
// an input string and renders it at a chose speed as if it were being typed.
//
class FlashingText extends React.Component {

    constructor(props) {
        super(props);

        this.wordsToRender = [].concat(this.props.wordsToRender);
        this.renderSpeed = props.renderSpeed;
        this.finishedCallback = props.finishedCallback;
        this.flashingTextTimer = null;
        this.mounted = false;
        this.isFlashing = false;
            
        this.state = {
            renderedText: ''
        };
    };


    flashText = () => {
        // This prevents recursive triggers that start recursive flashing.
        if (this.isFlashing) return;

        this.isFlashing = true;

        this.flashingTextTimer = setInterval(() => {

            let currentWordToShift = this.wordsToRender.shift();

            this.setState({ renderedText: currentWordToShift });

            this.wordsToRender.push(currentWordToShift);

            // Invoke the callback to let the parent component know that the text
            // rendering has completed. Also "cancel" the timer.
            if (this.wordsToRender.length === 0 && this.finishedCallback) {
                this.isFlashing = true;
                clearInterval(this.flashingTextTimer);
                this.finishedCallback();
            }
            
        }, this.renderSpeed);    
    };

        
    componentDidMount() {
        this.mounted = true;
    };


    componentWillUnmount() {
        clearInterval(this.flashingTextTimer);
        this.flashingTextTimer = null;
        this.finishedCallback = null;
    };


    render() {
        // This.props.startTyping will trigger then render method.
        // this.typText() is what types the typing text. So this is
        // what triggers the typing text. And the typing text will 
        // cause the Fragment below to render.
        if (this.props.startFlashing && !this.isFlashing) {
            this.flashText();
        }

        return <Fragment>{ this.state.renderedText }</Fragment>
    };
};


export default FlashingText;