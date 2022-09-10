////////////////////////////////////////////////////////////////////////////////
//
// FlashingText.tsx
//
// This component renders an array of strings as words that appear and 
// disappear into the next word at a set interval.
//
////////////////////////////////////////////////////////////////////////////////

import { useState, useEffect, Fragment } from 'react';

import FlashingTextProps from './FlashingTextProps';

// This component renders an array of strings as words that appear and 
// disappear into the next word at a set interval.
//
const FlashingText = ({ wordsToRender, renderSpeedInMilliseconds,
                        repeatCycle, startFlashing,
                        finishedCallback }: FlashingTextProps) => {
    
    let flashingTextTimer: number = -1;
    let isFlashing = false;                        
    
    const [renderedText, setRenderedText] = useState('');

    useEffect(() => {

        return () => {
            clearInterval(flashingTextTimer);
        };
    }, []);

    const flashText = () => {
        // This prevents recursive triggers that start recursive flashing.
        if (isFlashing) return (<Fragment></Fragment>);

        isFlashing = true;

        flashingTextTimer = window.setInterval(() => {
            // If there are no more words to display and we are not on a 
            // repeat cycle, then there is nothing to do. Just return.
            if (!repeatCycle && wordsToRender.length === 0) {
                return (<Fragment></Fragment>);
            } 
            
            let currentWordToShift = wordsToRender.shift()!;

            setRenderedText(currentWordToShift);

            // If we want a repeat, then add the words back to the array so
            // that they may be reused.
            if (repeatCycle) wordsToRender.push(currentWordToShift);

            // Invoke the callback to let the parent component know that the text
            // rendering has completed.
            if (wordsToRender.length === 0 && finishedCallback) {
                isFlashing = false;
                finishedCallback();
            }
            
        }, renderSpeedInMilliseconds);    
    };

    if (startFlashing && !isFlashing) {
        flashText();
    }

    return (<span>{ renderedText }</span>);
};

export default FlashingText;
