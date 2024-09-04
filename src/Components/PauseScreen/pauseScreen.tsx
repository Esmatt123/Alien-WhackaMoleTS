import './pauseStyle.css';
import MainButton from '../mainButton/mainButton';
import UseLink from '../linksDelay/linksDelay';
import React from 'react';

interface PausedProps {
    continueGame: () => void;
}

// Main component
const Paused: React.FC<PausedProps> = ({ continueGame }) => {
    return (
        <div className="Paused">
            <div id="pause-panel" className="pause-panel">
                <h2 className="pause-title">Pause</h2>
                <p className="pause-text">Do you want to continue the game?</p>
                <div onClick={continueGame}>
                    <MainButton name="Yes" />
                </div>
                <UseLink to={'/'}>
                    <button className="quit-game-btn">Exit game</button>
                </UseLink>
            </div>
        </div>
    );
};

export default Paused;
