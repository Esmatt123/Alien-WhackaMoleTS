import React, { useState } from 'react';

const PauseWindow: React.FC = () => {
    // State to control the visibility of the pause panel
    const [showPausePanel, setShowPausePanel] = useState<boolean>(false);

    // Function to handle click event on the resume button
    const handleResumeClick = () => {
        setShowPausePanel(false);
    };

    // Function to handle the click event on the quit button
    const handleQuitClick = () => {
        // Add logic here to return to the start screen
    };

    return (
        <div id='pause-panel' className={showPausePanel ? '' : 'hidden'}>
            <h2>Pause</h2>
            <button onClick={handleResumeClick} id='resume-btn'>
                Resume
            </button>
            {/* <button onClick={handleSettingsClick} id='settings-btn'>Settings</button> */}
            <button onClick={handleQuitClick} id='quit-btn'>
                Quit game
            </button>
        </div>
    );
};

export default PauseWindow;
