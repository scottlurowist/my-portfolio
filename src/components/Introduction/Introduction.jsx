////////////////////////////////////////////////////////////////////////////////
//
// Introduction.jsx
//
// This component renders the introduction content for the portfolio app.
//
////////////////////////////////////////////////////////////////////////////////

import React, { Fragment } from 'react';

import TypingText from '../typing-text/TypingText';
import FlashingText from '../FlashingText/FlashingText';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.introductionIsFinished = this.props.introductionIsFinishedCallback;
        this.firstTextParagraphToType = 'Hello.';
        this.secondTextParagraphToType = 'My name is Scott Lurowist.';
        this.thirdTextParagraphToType = "I am a ";
        this.fourthTextParagraphToType = 'Welcome to my portfolio. ';
        this.rolesToFlash = ['software engineer.'];

        this.firstTimer = null;
        this.secondTimer = null;
        this.thirdTimer = null;
        this.fourthTimer = null;
        this.fifthTimer = null;
        this.sixthTimer = null;       
        
        this.typingTextRenderSpeedInMillisconds = 15;
        this.flashingTextRenderSpeedInMilliseconds = 250;

        this.state = {
            firstTextIsTyping: true,
            secondTextIsTyping: false,
            thirdTextIsTyping: false,
            fourthTextIsTyping: false,
            rolesToFlashIsFlashing: false,
            finalCharactersAreTyping: false,
            suppressTyping: false
        };
    };

    typingTextFirstParagraphFinishedCallback = () => {
        this.firstTimer = setTimeout(() => {
            this.setState({ secondTextIsTyping: true });
        }, 1000);
    };

    typingTextSecondParagraphFinishedCallback = () => {
        this.secondTimer = setTimeout(() => {
            this.setState({ thirdTextIsTyping: true });
        }, 1000);
    };

    typingTextThirdParagraphFinishedCallback = () => {
        this.thirdTimer = setTimeout(() => {
            this.setState({ rolesToFlashIsFlashing: true });
        }, 50);
    };    

    rolesFlashingFinishedCallback = () => {
        this.fourthTimer = setTimeout(() => {
            this.setState({ fourthTextIsTyping: true });
        }, 1000);

        this.fifthTimer = setTimeout(() => {
            this.setState({ finalCharactersAreTyping: true });
        }, 1500);
    };

    typingTextFourthParagraphFinishedCallback = () => {
        this.setState({ finalCharactersAreTyping: true });
        this.introductionIsFinished();
    };

    componentWillUnmount() {
        this.setState({ suppressTyping: true });
        clearTimeout(this.firstTimer);
        clearTimeout(this.secondTimer);
        clearTimeout(this.thirdTimer);
        clearTimeout(this.fourthTimer);
        clearTimeout(this.fifthTimer);
        clearTimeout(this.sixthTimer);
    };

    render() {
        return <Fragment>
                <section className="container__typing-text">
                    <p className='typing-text'>
                        <TypingText id='typing-text-1st-paragraph'
                                    textToRender={this.firstTextParagraphToType}
                                    renderSpeed={this.typingTextRenderSpeedInMillisconds}
                                    startTyping={this.state.firstTextIsTyping}
                                    suppressTyping={false}
                                    finishedCallback=
                                        {this.typingTextFirstParagraphFinishedCallback} />
                    </p >
                    <p className='typing-text'>
                        <TypingText id='typing-text-2nd-paragraph'
                                    textToRender={this.secondTextParagraphToType}
                                    renderSpeed={this.typingTextRenderSpeedInMillisconds}
                                    startTyping={this.state.secondTextIsTyping}
                                    suppressTyping={false}
                                    finishedCallback=
                                        {this.typingTextSecondParagraphFinishedCallback} />
                    </p >    
                    <p className='typing-text'>
                        <TypingText id='typing-text-3rd-paragraph'
                                    textToRender={this.thirdTextParagraphToType}
                                    renderSpeed={this.typingTextRenderSpeedInMillisconds}
                                    startTyping={this.state.thirdTextIsTyping}
                                    suppressTyping={false}
                                    finishedCallback=
                                        {this.typingTextThirdParagraphFinishedCallback} />
                        <FlashingText wordsToRender={this.rolesToFlash}
                                      renderSpeedInMilliseconds={this.flashingTextRenderSpeedInMilliseconds}
                                      repeatCycle={ false }
                                      startFlashing={ this.state.rolesToFlashIsFlashing }
                                      suppressTyping={ false }
                                      finishedCallback=
                                        { this.rolesFlashingFinishedCallback } />                                    
                    </p >                
                    <p className='typing-text'>
                        <TypingText id='typing-text-4th-paragraph'
                                    textToRender={this.fourthTextParagraphToType}
                                    renderSpeed={this.typingTextRenderSpeedInMillisconds}
                                    startTyping={this.state.fourthTextIsTyping}
                                    suppressTyping={false}
                                    finishedCallback=
                                        {this.typingTextFourthParagraphFinishedCallback} />
                    </p >    
                </section>
        </Fragment>
    }
}

export default Home;
