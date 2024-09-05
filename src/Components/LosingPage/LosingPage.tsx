import { useEffect, useState } from "react";
import styles from "./LosingPage.module.css";
import goBackMenu from "../../assets/icons/Go-back-menu.svg";
import astronautFlying from "../../assets/images/austronaut-levitating.svg";
import strongAlien from "../../assets/images/Strong-alien-moon.svg";
import LevelOne from "../LevelOne/LevelOne"; // Import LevelOne component
import React from "react";

interface Props {
  score: number
}



// eslint-disable-next-line react/prop-types
export default function LosingPage({score}: Props): React.JSX.Element {
  const [confirmation, setConfirmation]  = useState(false);
  const [showLevelOne, setShowLevelOne] = useState(false); // State to toggle between LoosingPage and LevelOne
  
  

  
  useEffect(() => {
     setConfirmation(true);
    
    if (confirmation) {
      window.confirm("GAME OVER!");
    }
    
   
  }, [confirmation]);

  
  const handleGoBack = (): void => {
    window.location.href = "/levelOne";
    setShowLevelOne(true);
  };

  return (
    <>
      {showLevelOne ? (
        <LevelOne />
      ) : (
        <div className={styles.loosingPageContainer}>
          <div className={styles.topDiv}>
            <div className={styles.goBack} onClick={handleGoBack}>
              {/* Add onClick event handler */}
              <img src={goBackMenu} alt="Go back icon" />
            </div>

            <div className={styles.loosingInfo}>
              <h1>GAME OVER!!!</h1>
              <h2>You lost all your lives!!!</h2>
            </div>
          </div>

          <div className={styles.middleDiv}>
            <p className={styles.loosingPageScore}>Your Score: {score}</p>

            <div className={styles.flyingAstronaut}>
              <img src={astronautFlying} alt="flying astronaut" />
            </div>
          </div>

          <div className={styles.strongAlien}>
            <img src={strongAlien} alt="Picture of Strong alien on moon" />
          </div>
        </div>
      )}
    </>
  );
}
