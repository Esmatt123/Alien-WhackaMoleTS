import { useEffect, useState } from "react";
import styles from "./LosingPage.module.css";
import goBackMenu from "../../assets/icons/Go-back-menu.svg";
import astronautFlying from "../../assets/images/austronaut-levitating.svg";
import strongAlien from "../../assets/images/Strong-alien-moon.svg";
import LevelOne from "../LevelOne/LevelOne"; // Import LevelOne component
import { useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function LosingPage() {
  const [confirmation, setConfirmation] = useState(false);
  const [showLevelOne, setShowLevelOne] = useState(false); // State to toggle between LoosingPage and LevelOne
  const location = useLocation();
  const score = location.state?.score || 0;
  

  console.log("score within losingpage: " + score)
  useEffect(() => {
     setConfirmation(true);
     console.log("Confirmation occurs")
    if (confirmation) {
      window.confirm("GAME OVER!");
    }
    
   
  }, [confirmation]);

  // Function to handle going back to LevelOne page
  const handleGoBack = () => {
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
