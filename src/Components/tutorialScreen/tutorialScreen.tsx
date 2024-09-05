import React from 'react'
import './tutorialScreen.css'
import MainButton  from "../mainButton/mainButton"
import UseLink from "../linksDelay/linksDelay";


const TutorialScreen = (): React.JSX.Element => {
    const nameBtn: string = 'Play';
    return (
       <div className="container-tutorial">

        <div className="tutorial-header">
        <h2>Aliens attacked the moon!</h2>
        <img src="../src/assets/icons/Exit-cross-rules.svg" alt="Exit cross" />
        </div>
        <div className="tutorial-text-first">
            <p>Whack the aliens with the hammer and earn points.
        It's getting harder with time. Do NOT whack the bombs.</p>
        </div>
        <div className="tutorial-icons">
            <img src="../src/assets/icons/Bomb-rules.svg" alt="Bomb" />
            <img src="../src/assets/icons/equal-icon-rules.svg" alt="Icon" />
            <img src="../src/assets/icons/No-heart-rules.svg" alt="Xheart" />
        </div>
        <div className="tutorial-text-second">
            <p>Do NOT whack the bombs
            You only have three lives.
            Reach a 500 score to WIN!</p>
        </div>
        <div className="tutorial-alien">
            <img src="../src/assets/images/Sad-alien-rules.svg" alt="Alien" />
        </div>
        
        <div className='tutorial-btn'>
        <UseLink to="/levelone">
		<MainButton name={nameBtn} /> 
		</UseLink>
        </div>			
        
       </div>     
    )};

export default TutorialScreen 