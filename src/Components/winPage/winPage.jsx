import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./winPage.module.css";
import goBackMenu from "../../../public/assets/icons/Go-back-menu.svg";
import astronautWon from "../../../public/assets/images/Austonaut-won.svg";
import crowdCheer from "../../../public/music/crowd-cheer.mp3";

export default function WinningPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const score = location.state?.score || 0;

  useEffect(() => {
    const audio = new Audio(crowdCheer);
    audio.play();
  }, []);

  const handleGoBack = () => {
    navigate("/levelone");
  };

  return (
    <div className={styles.winPageContainer}>
      <div className={styles.goBack}>
        <img  src={goBackMenu} onClick={handleGoBack} alt="Go back icon" />
      </div>

      <div className={styles.winMiddleContainer}>
        <div className={styles.winInfo}>
          <h1>Congratulations! You Won!!!</h1>
          <h2>Bye Bye Aliens!</h2>
          <h2 className={styles.winScore}>Your Score: {score}</h2>
        </div>
      </div>

      <div className={styles.astronautWon}>
        <img
          src={astronautWon}
          alt="Picture of astronaut with his hand up on moon"
        />
      </div>
    </div>
  );
}
