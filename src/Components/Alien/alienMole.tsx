/* eslint-disable react/prop-types */
import styles from '../LevelOne/LevelOne.module.css';
import alien from '../../assets/images/alien-play-game.svg';
import bomb from '../../assets/images/Bomb-gameplay.svg';
import React, { useState, useEffect, useCallback } from 'react';

interface Props {
    alienId: string,
    onAlienClick: () => void,
    onBombClick: () => void

}

const AlienMole = ({ alienId, onAlienClick, onBombClick }: Props) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isAlien, setIsAlien] = useState(true); 

    const handleAlienClick = useCallback(() => {
        setIsVisible(false);
        if (!isAlien) {
           
				onBombClick()
        } else {
            onAlienClick();
        }
    }, [onAlienClick, isAlien, onBombClick]);

    useEffect(() => {
        const timer = setTimeout(() => {
            const randomValue = Math.random();
            if (randomValue < 0.7) {
                setIsVisible(isVisible => !isVisible); 
                setIsAlien(true); 
            } else {
                setIsVisible(true); 
                setIsAlien(false); 
                
                setTimeout(() => {
                    setIsVisible(false);
                    setIsAlien(true); 
                }, 5000); 
                
                setTimeout(() => {
                    setIsVisible(false);
                }, getRandomDelay(1000, 3000)); 
            }
        }, getRandomDelay(3000, 8000)); 

        return () => clearTimeout(timer);
    }, [isVisible, isAlien]); 

    const getRandomDelay = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    return (
        <img
            className={`${styles.alien} ${alienId} ${
                isVisible ? styles.appear : styles.disappear
            }`}
            src={isAlien ? alien : bomb} 
            alt={isAlien ? "alien" : "bomb"} 
            onClick={handleAlienClick}
        />
    );
};

const MemoizedAlienMole = React.memo(AlienMole);
export default MemoizedAlienMole;
