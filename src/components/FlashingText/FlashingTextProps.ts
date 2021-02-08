

interface FlashingTextProps {
    wordsToRender: string[];
    renderSpeedInMilliseconds: number;
    repeatCycle: boolean;
    startFlashing: boolean;
    finishedCallback: () => unknown;
};


export default FlashingTextProps;