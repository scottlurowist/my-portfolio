////////////////////////////////////////////////////////////////////////////////
//
// FlashingTextProps.tsx
//
// Defines an interface for passing props to the FlashingText component.
//
////////////////////////////////////////////////////////////////////////////////
interface FlashingTextProps {
    wordsToRender: string[];
    renderSpeedInMilliseconds: number;
    repeatCycle: boolean;
    startFlashing: boolean;
    finishedCallback: () => unknown;
};

export default FlashingTextProps;
