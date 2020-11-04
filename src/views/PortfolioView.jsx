////////////////////////////////////////////////////////////////////////////////
//
// PortfolioView.jsx
//
// This component renders the entire view for the portfolio.
//
////////////////////////////////////////////////////////////////////////////////


import React from 'react';

import FlashingText from '../components/FlashingText/FlashingText';
import TypingText from './../components/typing-text/TypingText';

import TypingAudio from './Keyboard-Typing-03-c-FesliyanStudios.com.mp3';




class PortfolioView extends React.Component {

    constructor() {
        super();

        this.typingIsFinishedCallback = null;
        this.firstTextParagraphToType = 'Hello.';
        this.secondTextParagraphToType = 'My name is Scott Lurowist.';
        this.thirdTextParagraphToType = "I am a ";
        this.fourthTextParagraphToType = 'Welcome to my site';
        this.rolesToFlash = ['Garbage Plate connosieur', 'petomane', 'full stack developer'];
        this.textToFlash= ['', '_']; 
        this.firstTimer = null;
        this.secondTimer = null;
        this.thirdTimer = null;
        this.fourthTimer = null;
        this.fifthTimer = null;

        this.state = {
            // False until the typing text intro is rendered, and then set
            // to true.
            firstTextIsTyping: true,
            secondTextIsTyping: false,
            thirdTextIsTyping: false,
            fourthTextIsTyping: false,
            rolesToFlashIsFlashing: false,
            finalCharactersAreTyping: false,
            suppressTyping: false
        };
    }


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

        this.fourthTimer = setTimeout(() => {
            this.setState({ fourthTextIsTyping: true });
        }, 6000);

        this.fifthTimer = setTimeout(() => {
            this.setState({ finalCharactersAreTyping: true });
        }, 6500);
    };





    // typingTextFourthParagraphFinishedCallback = () => {
    //     this.fourth = setTimeout(() => {
    //         this.setState({ rolesToFlashIsFlashing: true });
    //     }, 50);

    //     this.fourthTimer = setTimeout(() => {
    //         this.setState({ fourthTextParagraphToType: true });
    //     }, 2000);
    // };


    componentWillUnmount() {
        this.setState({ suppressTyping: true });
        clearTimeout(this.firstTimer);
        clearTimeout(this.secondTimer);
        clearTimeout(this.thirdTimer);
        clearTimeout(this.fourthTimer);
    };


    render() {
        return (
            <div className="">
                <div>
                    <h2 className='typing-text'>
                        {/* <audio src={TypingAudio} ></audio> */}
                        <TypingText id='typing-text-1st-paragraph'
                                    textToRender={this.firstTextParagraphToType}
                                    renderSpeed={100}
                                    startTyping={this.state.firstTextIsTyping}
                                    suppressTyping={false}
                                    finishedCallback={this.typingTextFirstParagraphFinishedCallback} />
                    </h2 >
                    <h2 className='typing-text'>
                        {/* <audio src={TypingAudio} ></audio> */}
                        <TypingText id='typing-text-2nd-paragraph'
                                    textToRender={this.secondTextParagraphToType}
                                    renderSpeed={100}
                                    startTyping={this.state.secondTextIsTyping}
                                    suppressTyping={false}
                                    finishedCallback={this.typingTextSecondParagraphFinishedCallback} />
                    </h2 >    
                    <h2 className='typing-text'>
                        {/* <audio src={TypingAudio} ></audio> */}
                        <TypingText id='typing-text-3rd-paragraph'
                                    textToRender={this.thirdTextParagraphToType}
                                    renderSpeed={100}
                                    startTyping={this.state.thirdTextIsTyping}
                                    suppressTyping={false}
                                    finishedCallback= {this.typingTextThirdParagraphFinishedCallback} />
                        {/* <audio src={TypingAudio} ></audio> */}
                        <FlashingText wordsToRender={this.rolesToFlash}
                                      renderSpeed={1500}
                                      startFlashing={ this.state.rolesToFlashIsFlashing }
                                      suppressTyping={ false }
                                      finishedCallback= { null } />                                    
                    </h2 >                
                    <h2 className='typing-text'>
                        {/* <audio src={TypingAudio} ></audio> */}
                        <TypingText id='typing-text-4th-paragraph'
                                    textToRender={this.fourthTextParagraphToType}
                                    renderSpeed={100}
                                    startTyping={this.state.fourthTextIsTyping}
                                    suppressTyping={false}
                                    finishedCallback= {null} />
                        {/* <audio src={TypingAudio} ></audio> */}
                        <FlashingText wordsToRender={this.textToFlash}
                                      renderSpeed={1000}
                                      startFlashing={ this.state.finalCharactersAreTyping }
                                      suppressTyping={ false }
                                      finishedCallback= { null } />                                    
                    </h2 >    
                    <h2 className='typing-text'>
                        {/* <audio src={TypingAudio} ></audio> */}

                    </h2 >                    
                    <hr />
                </div>
            </div>
        );
    }
}



export default PortfolioView;