import React from 'react';
import { useSpring, animated } from 'react-spring';
import './ProgressBar.css'; // Import CSS file for styling

const ProgressBar = ({duration, bgColor, barColor}) => {
  const progressBarProps = useSpring({
    from: { width: '0%' },
    to: { width: `${duration}%` }, // Set the desired width (percentage) for the progress bar
    config: { duration: 200 }, // Animation duration in milliseconds
  });

  return (
    <div className="progress-container" style={{backgroundColor: barColor}}>
      <animated.div className="progress-bar" style={{...progressBarProps, backgroundColor: bgColor}} />
    </div>
  );
};

export default ProgressBar;
