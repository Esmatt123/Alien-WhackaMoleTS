import { useState, useEffect } from "react";
import styles from "./LevelOne.module.css";
import pauseButton from "../../assets/icons/Pause-icon.svg";
import heart from "../../assets/icons/Heart-game-red.svg";
import grayHeart from "../../assets/icons/Heart-game-gray.svg";
import AlienMole from "../Alien/alienMole";
import Hammer from "../hammer/hammer";
import explosionSound from "../../../public/music/bomb-explosion.mp3";
import ExplosionSVG from "../../assets/images/explosion-boom.svg";
import Timer from "../Timer/timerComponent";
import LosingPage from "../LosingPage/LosingPage";
import Paused from "../PauseScreen/pauseScreen";
import { useNavigate } from "react-router-dom";
import React from 'react';


const LevelOne = (): React.JSX.Element => {
  const [score, setScore] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [hearts, setHearts] = useState(3);
  const [gameOver, setGameOver] = useState(false);
  const [showExplosion, setShowExplosion] = useState(false);
  const [paused, setPaused] = useState(false);
  const navigate = useNavigate();
 
  


  const scoreIncrease = (): void => {
    setScore(score + 10); // Update score when points are earned
  };

  const bombClick = (): void => {
    audioExplosion.play();
    if (hearts > 0) {
      setHearts(hearts - 1);
      setShowExplosion(true);
      setTimeout(() => {
        setShowExplosion(false);
      }, 1000);
    }
  };

  const audioExplosion: HTMLAudioElement = new Audio(explosionSound);

  const setPause = (): void => {
    setPaused(true);
    setIsRunning(false);
  };

  const continueGame = (): void => {
    setPaused(false);
    setIsRunning(true);
  };

  const stopGame = (): void => {
    setIsRunning(false);
    setGameOver(true);

  };

  useEffect(() => {
    if (hearts === 0) {
      setGameOver(true);
    }
  }, [hearts]);

  useEffect(() => {

    if (!isRunning && gameOver) {
      if (score > 500) {
        navigate("/winPage", { state: { score } });
      } else {
        navigate("/losingPage", { state: { score } });
      }
    }
  }, [isRunning, gameOver, score, navigate]);






  return (
    <>
      {gameOver ? (
        <LosingPage score={score} />
      ) : (
        <div className={`${styles.levelContainer}`}>
          <div className={styles.topContainer}>
            <div className={styles.miniContainer1}>
              <button className={styles.svg} onClick={setPause}>
                <img src={pauseButton} alt="Pause" />
              </button>
              <p className={styles.gameText}>Player 1</p>
            </div>
            <div className={styles.miniContainer2}>
              <div className="hearts">
                {Array.from({ length: 3 }, (_, index) => (
                  <img
                    key={index}
                    src={index < hearts ? heart : grayHeart}
                    alt="Heart"
                  />
                ))}
              </div>
              <p className={styles.gameText}>Score: {score}</p>
            </div>
          </div>
          {!paused && (
            <>
              <AlienMole
                alienId={styles.a1}
                onAlienClick={scoreIncrease}
                onBombClick={bombClick}
              />
              {showExplosion && (
                <img
                  src={ExplosionSVG}
                  className={`${styles.explosion} ${showExplosion && styles.boom
                    }`}
                />
              )}
              <AlienMole
                alienId={styles.a2}
                onAlienClick={scoreIncrease}
                onBombClick={bombClick}
              />
              <AlienMole
                alienId={styles.a3}
                onAlienClick={scoreIncrease}
                onBombClick={bombClick}
              />
              <AlienMole
                alienId={styles.a4}
                onAlienClick={scoreIncrease}
                onBombClick={bombClick}
              />
              <AlienMole
                alienId={styles.a5}
                onAlienClick={scoreIncrease}
                onBombClick={bombClick}
              />
              <AlienMole
                alienId={styles.a6}
                onAlienClick={scoreIncrease}
                onBombClick={bombClick}
              />
              <AlienMole
                alienId={styles.a7}
                onAlienClick={scoreIncrease}
                onBombClick={bombClick}
              />
            </>
          )}
          <div
            className={`${styles.center} ${paused ? styles.visible : styles.hidden
              }`}
          >
            <Paused continueGame={continueGame} />
          </div>
          <Timer initialTime={120} onStop={stopGame} paused={paused} />
        </div>
      )}
      <Hammer />
    </>
  );
};

export default LevelOne;
